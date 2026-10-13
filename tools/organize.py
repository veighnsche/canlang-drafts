#!/usr/bin/env python3
"""Organize companion groups and optionally scaffold handwritten draft styles.

Dry run by default. This is not the Can generation engine or association matcher.
"""
import argparse
import json
from pathlib import Path
import re
import sys
import uuid

CSS = """/* Handwritten draft scaffold; refine for the owning style prompt. */
:scope { display: block; padding: 1rem; }
:scope :is(form, .card) { display: grid; gap: .75rem; }
:scope :is(input, select, textarea, button) { max-width: 100%; }
:scope table { width: 100%; border-collapse: collapse; }
:scope :is(th, td) { padding: .5rem; text-align: start; }
:scope :focus-visible { outline: 2px solid currentColor; outline-offset: 3px; }
@media (max-width: 40rem) {
  :scope { padding: .5rem; }
  :scope form { grid-template-columns: minmax(0, 1fr); }
  :scope table { display: block; overflow-x: auto; }
}
"""


def safe(path, root):
    """Reject symlinks in the operation's complete path, including parents."""
    current = path
    while current != root.parent:
        if current.is_symlink():
            raise ValueError(f"symlink refused: {current}")
        if current == root:
            return
        current = current.parent
    raise ValueError(f"outside repository: {path}")


def moves(root):
    result = []
    for source in sorted(root.glob("Can*.*")):
        if source.suffix not in (".can", ".md", ".mjs"):
            continue
        target = root / "apps" / source.stem / source.name
        safe(source, root)
        safe(target, root)
        if not source.is_file() or target.exists():
            raise ValueError(f"source is not a file or target exists: {source} -> {target}")
        if target.parent.exists() and not target.parent.is_dir():
            raise ValueError(f"target parent is not a directory: {target.parent}")
        result.append((source, target))
    return result


NAME = r"[A-Za-z_]\w*"
PROMPT = re.compile(r'\$("(?:[^"\\]|\\.)*")(?:\s+agent=([A-Za-z_][\w.-]*))?\s*')


def prompt_value(text, source, number):
    """Static JSON only; the legacy trailing profile remains accepted."""
    match = PROMPT.fullmatch(text)
    if not match:
        raise ValueError(f'expected $"prompt" and optional agent=profile at {source}:{number}')
    return json.loads(match[1]), match[2]


def surface(text):
    """Expose only top-level tokens, preserving offsets and ordinary string bytes.

    This deliberately small scanner is for authoring inventory, not Can parsing.
    Dollars inside strings, signatures and object/localization bodies are inert.
    """
    mask, groups = [], []
    quoted = escaped = False
    for position, char in enumerate(text):
        if quoted:
            mask.append(" ")
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                quoted = False
        elif text.startswith("##", position):
            return text[:position].rstrip(), "".join(mask)
        elif char == '"':
            quoted = True
            mask.append(" ")
        elif char in "({[":
            groups.append(char)
            mask.append(" ")
        elif char in ")}]":
            if groups:
                groups.pop()
            mask.append(" ")
        else:
            mask.append(char if not groups else " ")
    return text.rstrip(), "".join(mask)


def view_attachment(text, source, number):
    """Split a view header: renderer prompt, then its own optional style suffix."""
    clean, mask = surface(text)
    markers = [position for position, char in enumerate(mask) if char == "$"]
    if not markers:
        return clean, None, None, None, None, None
    if len(markers) > 2:
        raise ValueError(f"expected renderer prompt and one style suffix at {source}:{number}")
    first = markers[0]
    if first and not clean[first - 1].isspace():
        raise ValueError(f"prompt must follow its view at {source}:{number}")
    prefix = clean[:first].rstrip()
    profiles = list(re.finditer(r"(?<!\S)agent=([A-Za-z_][\w.-]*)(?!\S)", mask[:first]))
    if len(profiles) > 1:
        raise ValueError(f"duplicate agent profile at {source}:{number}")
    profile = None
    if profiles:
        profile = profiles[0][1]
        prefix = (prefix[:profiles[0].start()] + prefix[profiles[0].end():]).strip()
    end = markers[1] if len(markers) == 2 else len(clean)
    prompt, trailing = prompt_value(clean[first:end].strip(), source, number)
    if profile and trailing:
        raise ValueError(f"duplicate agent profile at {source}:{number}")
    style_prompt = style_name = style_profile = None
    if len(markers) == 2:
        tail = clean[markers[1]:].strip()
        if re.fullmatch(rf"\${NAME}", tail):
            style_name = tail[1:]
        else:
            style_prompt, style_profile = prompt_value(tail, source, number)
    return prefix, prompt, profile or trailing, style_prompt, style_name, style_profile


def attachment(text, source, number):
    """Split a single attached carrier and definition-owned profile."""
    clean, mask = surface(text)
    markers = [position for position, char in enumerate(mask) if char == "$" ]
    if not markers:
        return clean, None, None, None
    if len(markers) != 1:
        raise ValueError(f"expected one style suffix at {source}:{number}")
    position = markers[0]
    if position and not clean[position - 1].isspace():
        raise ValueError(f"style suffix must follow its component at {source}:{number}")
    prefix, tail = clean[:position].rstrip(), clean[position:]
    profiles = list(re.finditer(r"(?<!\S)agent=([A-Za-z_][\w.-]*)(?!\S)", mask[:position]))
    if len(profiles) > 1:
        raise ValueError(f"duplicate agent profile at {source}:{number}")
    profile = None
    if profiles:
        match = profiles[0]
        profile = match[1]
        prefix = (prefix[:match.start()] + prefix[match.end():]).strip()
    if re.fullmatch(rf"\${NAME}", tail):
        if profile:
            raise ValueError(f"named style use cannot select agent at {source}:{number}")
        return prefix, None, tail[1:], None
    prompt, trailing = prompt_value(tail, source, number)
    if profile and trailing:
        raise ValueError(f"duplicate agent profile at {source}:{number}")
    return prefix, prompt, None, profile or trailing


# These statements carry data, control or declarations rather than a rendered
# component. Other Then component names, including custom instances, are open.
NONVISUAL = frozenset("""require guard allow deny let do if else for each when on
    data schema model field trait keyword route use import export package app
    theme locale messages policy invariant unique check assert set return
    create update effect derive bind watch""".split())


def parse_styles(source):
    """Inspect Then named style definitions and component-attached style suffixes."""
    owner = source.stem
    nodes, stack = [], []
    for number, line in enumerate(source.read_text().splitlines(), 1):
        stripped = line.lstrip()
        clean, _ = surface(stripped)
        if not clean or clean.startswith("#"):
            continue
        indent = len(line) - len(stripped)
        while stack and indent <= stack[-1]["indent"]:
            stack.pop()
        match = re.match(rf"(?:package|app)\s+({NAME})\b", clean)
        if indent == 0 and match:
            owner = match[1]
        parent = stack[-1] if stack else None
        node = dict(text=clean, indent=indent, line=number, owner=owner,
                    parent=parent, children=[], prompted=False)
        if parent:
            parent["children"].append(node)
        nodes.append(node)
        stack.append(node)
        if clean.startswith("do ") and clean[3:].lstrip().startswith(('"', "$", "agent=")):
            raise ValueError(f"When bodies must use ordinary Can code, not a generation prompt at {source}:{number}")

    units, uses = [], []
    for node in nodes:
        text, number, owner = node["text"], node["line"], node["owner"]
        parent = node["parent"]
        ancestors = []
        current = parent
        while current:
            ancestors.append(current)
            current = current["parent"]
        section = next((item for item in ancestors if item["text"] in ("Given", "When", "Then")), None)
        in_then = section is not None and section["text"] == "Then"
        head = text.split()[0]
        if head == "view":
            if not in_then:
                continue
            base, prompt, _profile, style_prompt, style_name, style_profile = \
                view_attachment(text, source, number)
            match = re.match(rf"view\s+({NAME})(?:\s*\(.*\))?$", base)
            if not match:
                raise ValueError(f"unsupported view declaration at {source}:{number}")
            node["base"] = base
            node["context"] = ("view", match[1])
            node["prompted"] = prompt is not None
            if style_name is not None:
                uses.append(dict(owner=owner, source_line=number, page=None,
                                 view=match[1], name=style_name, source=str(source)))
            elif style_prompt is not None:
                # The view component's own style suffix owns its root CSS;
                # the renderer prompt in front of it never owns CSS.
                key = [owner, "view", match[1], None]
                units.append(dict(owner=owner, source_line=number, page=None,
                                  view=match[1], label=None, style_scope="inline",
                                  prompt=style_prompt, profile=style_profile or "frontend",
                                  draft_source_key=json.dumps(key, separators=(",", ":"))))
            continue
        if not in_then:
            continue
        base, prompt, name_use, profile = attachment(text, source, number)
        node["base"] = base
        if head == "page":
            parts = base.split()
            if len(parts) < 2:
                raise ValueError(f"missing page route at {source}:{number}")
            node["context"] = ("page", parts[1])
        context_owner = next((item for item in [node, *ancestors] if "context" in item), None)
        context = context_owner.get("context") if context_owner else None
        label = None
        definition = head == "style" and parent is section
        if head == "style":
            if definition:
                match = re.fullmatch(rf"style\s+({NAME})", base)
                if not match or prompt is None or node["children"]:
                    raise ValueError(f"expected named style definition at {source}:{number}")
                label = match[1]
            else:
                # `style` only names a reusable prompt in a top-level definition.
                # A component carries its own one-off or named style as a suffix.
                raise ValueError(f"style only names a reusable prompt; attach $\"...\" or $Name to the component itself at {source}:{number}")
        elif prompt is None and name_use is None:
            continue
        elif (head in NONVISUAL or not re.fullmatch(NAME, head)
              or re.match(r"preferences\s*\{", base)
              or len(base.split()) < 2 and head in {"page", "form", "input", "show"}):
            raise ValueError(f"unsupported style attachment target at {source}:{number}")
        if prompt is None and name_use is None:
            raise ValueError(f"missing style carrier at {source}:{number}")
        location = dict(owner=owner, source_line=number,
                        page=context[1] if context and context[0] == "page" else None,
                        view=context[1] if context and context[0] == "view" else None)
        # Structural machine identity uses authored component paths, never prompt
        # text, comments, line numbers or sibling ordinals. Equal paths diagnose.
        path = []
        for item in reversed([node, *ancestors]):
            if item is section or item is context_owner or item["text"] in ("Given", "When", "Then"):
                continue
            if item["indent"] > section["indent"]:
                path.append(item.get("base", item["text"]))
        if head == "style":
            path = []
        if path:
            location["component_path"] = path
        if name_use:
            uses.append(dict(**location, name=name_use, source=str(source)))
            continue
        if definition:
            key = [owner, "style", label, None]
        elif context and (node is context_owner or head == "style"):
            key = [owner, *context, None]  # Retain existing page/view CSS associations.
        elif context:
            key = [owner, *context, path]
        else:
            key = [owner, "component", path, None]
        units.append(dict(**location, label=label,
                          style_scope="definition" if definition else "inline",
                          prompt=prompt, profile=profile or "frontend",
                          draft_source_key=json.dumps(key, separators=(",", ":"))))
    return units, uses


def style_inventory(sources):
    """Precollect definitions so forward and same-owner cross-file uses resolve."""
    inventory = {source: parse_styles(source) for source in sources}
    definitions, keys = {}, set()
    for source, (units, _) in inventory.items():
        for unit in units:
            key = unit["draft_source_key"]
            if key in keys:
                raise ValueError(f"ambiguous duplicate style key at {source}:{unit['source_line']}: {key}")
            keys.add(key)
            if unit["style_scope"] == "definition":
                definitions[unit["owner"], unit["label"]] = (source, unit["source_line"])
    for source, (_, uses) in inventory.items():
        for use in uses:
            definition = definitions.get((use["owner"], use["name"]))
            if definition is None:
                raise ValueError(f"unknown style {use['name']} in owner {use['owner']} at {source}:{use['source_line']}")
            use.update(definition_source=str(definition[0]), definition_line=definition[1])
    return inventory


def styles(source, sources=None):
    """Yield output-owning styles; named uses never create separate units.

    Pass all participating sources to resolve a namespace spanning files.
    """
    yield from style_inventory(sources if sources is not None else [source])[source][0]


def style_uses(source, sources=None):
    """Yield resolved use locations, separately from output-owning styles."""
    yield from style_inventory(sources if sources is not None else [source])[source][1]


def scaffolds(root, planned_moves):
    destinations = {target: source for source, target in planned_moves if source.suffix == ".can"}
    for source in sorted([*root.glob("apps/*/*.can"), *root.glob("shared/*.can")]):
        safe(source, root)
        if source in destinations:
            raise ValueError(f"duplicate source destination: {source}")
        destinations[source] = source
    inventory = style_inventory(destinations.values())
    result = []
    for destination, source in sorted(destinations.items()):
        generated = destination.parent / "can.generated"
        safe(generated, root)
        existing = {}
        if generated.exists():
            if not generated.is_dir():
                raise ValueError(f"not a generated directory: {generated}")
            for unit in sorted(generated.iterdir()):
                safe(unit, root)
                if not unit.is_dir():
                    continue
                record = unit / "unit.json"
                safe(record, root)
                if record.exists():
                    metadata = json.loads(record.read_text())
                    key = metadata.get("draft_source_key")
                    if key is not None:
                        if key in existing:
                            raise ValueError(f"duplicate existing style key: {key}")
                        existing[key] = unit
        for style in inventory[source][0]:
            key = style["draft_source_key"]
            unit = existing.get(style["draft_source_key"])
            if unit is None:
                identifier = str(uuid.uuid4())
                unit = generated / identifier
                metadata = dict(unit_id=identifier, abi_version=1, kind="style", draft=True,
                                origin="handwritten-script", provider=None, model=None,
                                target="browser-css", source=destination.relative_to(root).as_posix(), **style)
                result.append((unit / "unit.json", json.dumps(metadata, indent=2) + "\n"))
            css = unit / "style.css"
            safe(css, root)
            if not css.exists():
                result.append((css, CSS))
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path(__file__).absolute().parents[1])
    parser.add_argument("--apply", action="store_true")
    parser.add_argument("--scaffold-styles", action="store_true")
    args = parser.parse_args()
    root = args.root.absolute()
    safe(root, root)
    planned_moves = moves(root)
    writes = scaffolds(root, planned_moves) if args.scaffold_styles else []
    for source, target in planned_moves:
        print(f"move {source.relative_to(root)} -> {target.relative_to(root)}")
    for path, _ in writes:
        print(f"create {path.relative_to(root)}")
    if args.apply:
        for source, target in planned_moves:
            target.parent.mkdir(parents=True, exist_ok=True)
            # Hard-link then unlink: destination creation is exclusive, never overwrite.
            target.hardlink_to(source)
            source.unlink()
        for path, content in writes:
            path.parent.mkdir(parents=True, exist_ok=True)
            with path.open("x") as output:
                output.write(content)
    print(f"{'applied' if args.apply else 'dry run'}: {len(planned_moves)} moves, {len(writes)} new files")


if __name__ == "__main__":
    try:
        main()
    except (ValueError, OSError, json.JSONDecodeError) as error:
        sys.exit(f"organize: {error}")
