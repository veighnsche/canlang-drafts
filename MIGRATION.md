# Draft migration and remaining work

The app `.can` sources and companion requirements own product behavior. Handwritten `.mjs` companions and `can.generated/` outputs illustrate intended translations; supported behavior must be checked through the compiler and runtime that consume them. App-specific implementation and browser limitations belong beside those apps.

## Functional questions

The earlier migration work identified these cross-app questions. Resolve them against current source and runtime behavior when working on the affected feature; this list does not establish that an old defect is still present.

- **Background progress:** process changing populations without abandoning records beyond a global scan bound. Preserve replay, cancellation, current authority and record-addressed recovery in Shift, Volunteer and other fanout consumers. Book and Propose already use addressed progress events.
- **Mail availability and recovery:** distinguish static imported roles/value schemas from live service dependencies. Define behavior for unavailable or removed providers, existing work and UI. Preserve current recipient authority, historical custody and uncertain delivery outcomes; an uncertain send cannot become a fresh retry through another account.
- **Historical reporting:** Rent's historical representation must preserve capture timing, incomplete coverage, retained commercial facts and current disclosure. Reducing duplicate snapshots must preserve report meaning.
- **Public Feedback history:** specify which decision events/text become public and preserve privacy through edits, moderation and archival. Keep the in-page Product selector aligned with the existing preference/filter contract.
- **Owner integrations:** implement the actual ingress/result mappings, authentication, replay handling and correlation for independently deployed services. Customer/Membership/Reception reconciliation and CanDo work projections must report unresolved downstream outcomes truthfully.
- **Translation consistency:** keep source schemas, money/scalar behavior, queries, permission predicates, CRUD/hook order, UI bindings and inline examples aligned with their owning JavaScript implementations. Existing handwritten companions may be partial.

## Runtime and deployment limits

Imports expose owning declarations; they do not grant privileges or provision remote services. Focused and composed apps are alternative assemblies. Separately deployed products need configured bindings and identity mappings; imported local models cannot stand in for remotely consistent data.

Author meaningful examples with real authorized operations for causal journeys. Isolated example fixtures do not seed a serving preview. Browser tests need actual actor roles, prerequisite records and file/provider resources; unsupported composition or missing resources remain functional setup gaps.

Schema upgrades need the installed predecessor and real old data. Member calendar backfills require historical anchors, zone and interval; Leave's stored-year removal requires its predecessor definition. Catch's record split needs an explicit supported transformation. Preserve references, locks, file ownership, pending work and replay identities during upgrades.

Provider/configuration changes and recovery must preserve request/account namespaces and uncertain external outcomes. Use the owning maintenance operations and compatibility rules in [ADMIN_SURFACES.md](ADMIN_SURFACES.md).

Use the current compiler, runtime tests and app-specific Playwright journeys to establish implemented behavior. The Python parser is a syntax prototype and may lag current language forms. Reference illustrations guide appearance; they do not exercise business behavior.

## Where to continue

- [README.md](README.md) explains source layout, composition and language conventions.
- [GENERATION_DRAFTS.md](GENERATION_DRAFTS.md) maps prompt forms to draft outputs.
- [WORKSPACE_OPERATOR.md](WORKSPACE_OPERATOR.md), [PORTFOLIO.md](PORTFOLIO.md) and [ADMIN_SURFACES.md](ADMIN_SURFACES.md) describe shared product requirements.
- Each app's requirements and `playwright/README.md` describe its intended journeys and concrete browser setup.
