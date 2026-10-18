# CanSync browser acceptance

[Source](../CanSync.can) and [requirements](../CanSync.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanSync/playwright/app.spec.ts
```

Declared routes: `/sync`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `operator`, `reviewer` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `author`, `approver`, `both`, `account`, `seen`, `proposal`, `writing`, `uncertain`, `matching`, `conflict_receipt`, `conflicting`, `fresh`, `overlap`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `sync {AccountsV1 as Remote} from=deployment.accounts`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- An operator links an account and reads dated remote values, prepares a frozen correction and obtains an independent review; conditional dispatch and explicit bounded rebase preserve unrelated remote fields.
- Conflicting overlapping changes, stale revision, missing account and revoked authority refuse writes. Unknown writes remain held rather than closed/successful; pause/resume epochs suppress obsolete work and fresh reads remain separate evidence.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No linked accounts in this view”; “No corrections proposed”; “No write attempts”; “No observations yet”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/sync`: real Ava membership lacks the source business role; direct navigation must return safe `forbidden` JSON and no business form. Denial screenshot is diagnostic.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
