# CanEnrich browser acceptance

[Source](../CanEnrich.can) and [requirements](../CanEnrich.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanEnrich/playwright/app.spec.ts
bun run test:draft:coverage -- CanEnrich
```

Declared routes: `/enrichment`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with `researcher`, `reviewer` grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `analyst`, `editor`, `linked_company`, `complete_receipt`, `primary`, `secondary_receipt`, `secondary`, `review_run`, `unknown_receipt`, `unknown_lookup`, `consented_run`, `accepted`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer,test_company}`; `enrich {SourcesV1 as Sources} from=deployment.company_sources`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- A researcher links a company number, reuses or explicitly refreshes dated registry evidence and consents to a bounded secondary lookup; a reviewer compares both reports and accepts one exact field with provenance and disagreement reason.
- Missing/partial data, stopped or unknown primary work and request-cap exhaustion remain visible. Stale prior acceptance or mismatched company/provider fails; registry values never silently rewrite customer billing/display identity.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Exact authored empty captions: “No linked companies”; “No enrichment reviews”; “No accepted facts”; “No provider evidence”.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
