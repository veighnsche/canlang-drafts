# CanTrade browser acceptance

[Source](../CanTrade.can) and [requirements](../CanTrade.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanTrade/playwright/app.spec.ts
```

Declared routes: `/marketplace`, `/marketplace/reports`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `moderator` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `listing`, `complaint`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `rent_catalog {Location}`; `member_terms {eligible_term,Term,paid_term as paid,allocated}`; `customer {test_admin,test_contact}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; report a missing binding when it prevents the journey.

Required app journeys:

- An eligible member publishes an offered service with chosen contact/audience, finds it through filters and closes it when fulfilled. Their login email stays private unless explicitly entered for publication; direct edits by another author fail.
- A reported abusive listing is removed by a moderator with reason/history and disappears from search and old links. Expired membership cannot recover member-only access through saved filters/URLs, and contact edits survive correctable validation errors.

Check the states relevant to each journey, including retained input after a failed submission, authorized and denied requests, and reloaded committed data. Exercise navigation, focus, labels and responsive behavior where the page uses them.

Exact authored empty captions: “No active listings match.”; “No own listings yet.”; “No audience record yet.”; “No reports match this filter.”; “No listings awaiting moderation.”.

Full workflow journeys above still require real role/data/resource setup. The concrete browser bodies below cover only their stated scopes; passing them or the source examples does not establish complete functionality or every UI state.

`references/` holds design concepts. Use the existing Playwright snapshots for visual regressions and inspect unexpected appearance changes alongside functional failures.

## Browser checks and remaining work

- `/marketplace`: actual source empty caption(s), permitted page admission and reload; no example fixtures are copied into the browser.
- `/marketplace`: each declared personal view is chosen through the actual radio control, saved through its canonical preference form, checked against the matching empty collection and restored on reload.

The authored checks cover the assertions in their bodies. Passing a denial or empty-state check does not exercise the populated business journey.

Empty and denied captures show those states; populated behavior still needs its own journey and real setup.
