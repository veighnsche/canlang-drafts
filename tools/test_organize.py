#!/usr/bin/env python3
"""Finite checks: `style` only names a reusable prompt; components carry styles."""
import importlib.util
from pathlib import Path
import tempfile
import unittest

SPEC = importlib.util.spec_from_file_location("organize", Path(__file__).with_name("organize.py"))
organize = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(organize)


class StyleFormTest(unittest.TestCase):
    def source(self, text):
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        path = Path(directory.name) / "CanSample.can"
        path.write_text(text)
        return path

    def test_named_definition_and_component_suffixes(self):
        path = self.source(
            'app Sample\nThen\n style Surface $"Reusable surface."\n'
            ' page / $"One-off page."\n  card "Panel" $Surface\n')
        units = list(organize.styles(path))
        self.assertEqual([unit["label"] for unit in units], ["Surface", None])
        uses = list(organize.style_uses(path))
        self.assertEqual([use["name"] for use in uses], ["Surface"])

    def test_view_header_carries_its_root_style_prompt(self):
        path = self.source(
            'app Sample\nThen\n view Tile(row:Item) $"Render the row." $"Compact root."\n  edit\n')
        units = list(organize.styles(path))
        self.assertEqual(len(units), 1)
        self.assertEqual(units[0]["prompt"], "Compact root.")
        self.assertEqual(units[0]["view"], "Tile")

    def test_view_header_can_reuse_a_named_style(self):
        path = self.source(
            'app Sample\nThen\n style Surface $"Reusable surface."\n'
            ' view Tile(row:Item) $"Render the row." $Surface\n  edit\n')
        self.assertEqual([use["name"] for use in organize.style_uses(path)], ["Surface"])
        self.assertEqual(len(list(organize.styles(path))), 1)

    def test_inline_style_tag_is_refused(self):
        for leaf in ('style $"One-off leaf."', "style Surface"):
            path = self.source(
                'app Sample\nThen\n style Surface $"Reusable surface."\n'
                f' view Tile(row:Item) $"Render the row."\n  {leaf}\n  edit\n')
            with self.assertRaises(ValueError, msg=leaf):
                list(organize.styles(path))

    def test_style_wrapper_and_anonymous_definition_are_refused(self):
        for text in (
            'app Sample\nThen\n style Surface $"Reusable."\n page /\n  style Surface\n   card "Panel"\n',
            'app Sample\nThen\n style $"Anonymous."\n page /\n',
        ):
            with self.assertRaises(ValueError, msg=text):
                list(organize.styles(self.source(text)))


if __name__ == "__main__":
    unittest.main()
