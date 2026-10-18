# CanPromptLab browser tests

[Source](../CanPromptLab.can) and [requirements](../CanPromptLab.md) own this app's behavior.

```sh
bun run test:draft -- CanPromptLab/playwright/app.spec.ts
```

The suite grants Ava the source-declared `curator` role through the local Identity owner API. Ben retains ordinary membership. The journeys create their own business records through canonical forms; isolated inline-example fixtures do not seed the serving preview.

The desktop and mobile journeys check:

- Empty catalogs, tags and archive routes, sidebar navigation, keyboard dialog closure and focus return.
- Catalog and Entry creation, checksum/fullwidth/UTF-8 validation with retained input and corrected retry, canonical-key collisions and independent Catalog scopes.
- Entry and Tag archive/restore, child-free removal, key reuse and committed-data reload.
- Member-owned note creation, editing and deletion, absent curator controls and an actual forbidden HTTP create.
- Tag creation after offline transport failure, followed by an online retry with retained input.

Direct runtime tests and source examples cover atomic swaps, post-write rollback, canonical replay and collision-refusing schema activation where no page control exists. Browser journey declarations do not substitute for those checks.

`capture` saves durable page states for ordinary Playwright visual comparisons. Pending observations are asserted through the real submit observer's pending and busy attributes. Reference illustrations guide route composition and readability; app source still determines available controls and permissions.

Run local preview owners serially if concurrent previews exceed the shutdown budget. Use an isolated temporary directory when another active preview uses the same control-socket namespace.
