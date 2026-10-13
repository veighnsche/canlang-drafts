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
    """Read only a declaration's prompt position, never search ordinary strings."""
    match = PROMPT.fullmatch(text)
    if not match:
        raise ValueError(f"expected $\"prompt\" and optional agent=profile at {source}:{number}")
    return json.loads(match[1]), match[2]


def view_tail(text, source, number):
    """Skip a view's name/signature to locate its optional prompt."""
    match = re.match(rf"view\s+({NAME})", text)
    if not match:
        raise ValueError(f"unsupported view declaration at {source}:{number}")
    tail = text[match.end():].lstrip()
    if tail.startswith("("):
        depth = 0
        quoted = escaped = False
        for position, char in enumerate(tail):
            if quoted:
                if escaped:
                    escaped = False
                elif char == "\\":
                    escaped = True
                elif char == '"':
                    quoted = False
            elif char == '"':
                quoted = True
            elif char == "(":
                depth += 1
            elif char == ")":
                depth -= 1
                if depth == 0:
                    tail = tail[position + 1:].strip()
                    break
        else:
            raise ValueError(f"unclosed view signature at {source}:{number}")
    return match[1], tail


def parse_styles(source):
    """Inspect draft indentation and style declarations; this is not a Can parser."""
    owner = source.stem
    section_indent = 0
    nodes, stack = [], []
    for number, line in enumerate(source.read_text().splitlines(), 1):
        stripped = line.lstrip()
        if not stripped or stripped.startswith("#"):
            continue
        indent = len(line) - len(stripped)
        while stack and indent <= stack[-1]["indent"]:
            stack.pop()
        match = re.match(rf"(?:package|app)\s+({NAME})\b", stripped)
        if indent == 0 and match:
            owner = match[1]
            section_indent = 1
        elif indent == 0 and stripped in ("Given", "When", "Then"):
            section_indent = 0
        parent = stack[-1] if stack else None
        node = dict(text=stripped, indent=indent, line=number, owner=owner,
                    parent=parent, children=[], prompted=False,
                    section_indent=section_indent)
        if parent:
            parent["children"].append(node)
        nodes.append(node)
        stack.append(node)
        if stripped.startswith("do "):
            tail = stripped[3:].strip()
            if tail.startswith(('"', "$", "agent=")):
                raise ValueError(f"When bodies must use ordinary Can code, not a generation prompt at {source}:{number}")
        if stripped.startswith("view "):
            name, tail = view_tail(stripped, source, number)
            node["context"] = ("view", name)
            if tail:
                prompt_value(tail, source, number)
                node["prompted"] = True
        elif stripped.startswith("page "):
            node["context"] = ("page", stripped.split()[1])

    units, uses = [], []
    for node in nodes:
        text, number, owner = node["text"], node["line"], node["owner"]
        if not re.match(r"style(?:\s|$)", text):
            continue
        parent = node["parent"]
        if not parent or node["indent"] != parent["indent"] + 1:
            raise ValueError(f"unsupported style owner at {source}:{number}")
        definition = (parent["text"] == "Then" and
                      parent["indent"] == node["section_indent"])
        context_owner = parent
        while context_owner and "context" not in context_owner:
            context_owner = context_owner["parent"]
        context = context_owner.get("context") if context_owner else None
        prompted_root = parent is context_owner and parent["prompted"]
        if not definition and not context:
            raise ValueError(f"unsupported style owner at {source}:{number}")
        tail = text[5:].strip()
        label = None
        if definition:
            match = re.match(rf"({NAME})\s+(.+)", tail)
            if not match:
                raise ValueError(f"expected named style definition at {source}:{number}")
            label, tail = match.groups()
            if node["children"]:
                raise ValueError(f"style definition cannot have a body at {source}:{number}")
        elif re.fullmatch(NAME, tail):
            if not node["children"] and not prompted_root:
                raise ValueError(f"style use requires presentation body at {source}:{number}")
            uses.append(dict(owner=owner, name=tail, source=str(source), source_line=number,
                             page=context[1] if context[0] == "page" else None,
                             view=context[1] if context[0] == "view" else None))
            continue
        prompt, profile = prompt_value(tail, source, number)
        if not definition and not node["children"] and not prompted_root:
            raise ValueError(f"inline style requires presentation body at {source}:{number}")
        key = [owner, "style", label, None] if definition else [owner, *context, None]
        units.append(dict(owner=owner,
                          page=context[1] if context and context[0] == "page" else None,
                          view=context[1] if context and context[0] == "view" else None,
                          label=label, style_scope="definition" if definition else "inline",
                          prompt=prompt, profile=profile or "frontend", source_line=number,
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
