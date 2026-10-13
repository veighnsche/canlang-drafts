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


def styles(source):
    owner = source.stem
    context = None
    seen = set()
    for number, line in enumerate(source.read_text().splitlines(), 1):
        stripped = line.lstrip()
        indent = len(line) - len(stripped)
        if not stripped or stripped.startswith("#"):
            continue
        match = re.match(r"(?:package|app)\s+(\w+)", stripped)
        if indent == 0 and match:
            owner = match[1]
        match = re.match(r"(page|view)\s+(\S+)", stripped)
        if match:
            context = (indent, match[1], match[2].split("(")[0])
        elif context and indent <= context[0]:
            context = None
        if not stripped.startswith("style "):
            continue
        if not context or indent != context[0] + 1:
            raise ValueError(f"unsupported style owner at {source}:{number}")
        match = re.fullmatch(r'style(?:\s+([A-Za-z_]\w*))?\s+("(?:[^"\\]|\\.)*")(?:\s+agent=([\w.-]+))?\s*', stripped)
        if not match:
            raise ValueError(f"unsupported style declaration at {source}:{number}")
        label, prompt, profile = match.groups()
        key = json.dumps([owner, context[1], context[2], label], separators=(",", ":"))
        if key in seen:
            raise ValueError(f"ambiguous duplicate style key at {source}:{number}: {key}")
        seen.add(key)
        yield dict(owner=owner, page=context[2] if context[1] == "page" else None,
                   view=context[2] if context[1] == "view" else None, label=label,
                   prompt=json.loads(prompt), profile=profile or "frontend",
                   source_line=number, draft_source_key=key)


def scaffolds(root, planned_moves):
    destinations = {target: source for source, target in planned_moves if source.suffix == ".can"}
    for source in sorted(root.glob("apps/*/*.can")):
        safe(source, root)
        if source in destinations:
            raise ValueError(f"duplicate source destination: {source}")
        destinations[source] = source
    result = []
    seen_keys = set()
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
        for style in styles(source):
            key = style["draft_source_key"]
            if key in seen_keys:
                raise ValueError(f"ambiguous style key across sources: {key}")
            seen_keys.add(key)
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
