> Provenance: earlier right-sidebar and mobile prompts are superseded/withdrawn. Only the current PNG files linked in README.md are accepted desktop references with a left sidebar. Historical prompts are retained verbatim.

# CanEnrich generation prompts

## 01-company-review-desktop.png

```text
Use case: ui-mockup. Generate ONE individual full-page desktop application image edge-to-edge, approximately 1440x1100, no frames/devices/collage. Light daisyUI-compatible theme, ivory canvas, charcoal typography, restrained indigo controls, accessible borders, generous readable labels. FIXED RIGHT sidebar with app wordmark at top, only named links below, user menu anchored BOTTOM RIGHT. No left navigation, no sidebar tips. Synthetic records, no invented metrics/admin/features. Source controls and permissions authoritative. App CanEnrich. Route /enrichment. Content: Company enrichment heading, breadcrumbs, Enabled preference toggle. Link company form with Customer select, Number input. Company table customer/number/enabled with one synthetic Example Limited 01234567. Selected company's Research and accepted facts drawer is visibly open WITHIN page content, preserve far-right shell. Research company controls Refresh and Allow fallback checkboxes. Daily request count ordinary inline text 2 today, not metric cards. Runs table shows primary succeeded, secondary succeeded, fallback consent, stopped false. Balanced side-by-side exact source comparison: primary legal name Example Limited versus secondary Example Ltd; registered office and registry status unavailable in both. Explain missing facts and disagreement. Accept sourced fact form has generated lookup/prior controls, field radio legal name/registered office/registry status, required Reason textarea. Accepted facts history field/ordinal/value/provider/reviewer/reason/date. Provider receipts collapsed and History collapsed. Sidebar only Company enrichment. No claim accepted fact overwrites customer.
```

## 01-company-review-desktop.png — accepted desktop left-shell edit

Input: `/Users/vince/.codex/generated_images/01a13612-45d5-74f1-b688-624b076673c7/exec-81500979-29c7-4008-ae08-24e171b596c1.png`. Earlier right-shell prompts are superseded; exact original prompts retained as historical provenance.

```text
Use case: ui-mockup. Latest direction: desktop-only full-page reference. Move shared shell navigation to LEFT edge; app wordmark CanEnrich TOP LEFT and same account BOTTOM LEFT. Main content moves right, old right sidebar disappears. EXACT sidebar links in order are "Company enrichment". THESE ARE THE ONLY LINKS; delete or omit Dashboard, Customers, Reports, Settings, Opportunities, Evidence library, Playbooks or any invented extra destination unless in this exact list. Do not infer generic SaaS navigation. Preserve existing main content, forms, evidence, field requiredness, record states, currency and values exactly. No mirroring, cropping, mobile layout, device frame, browser chrome, collage or duplicate sidebar. 
```

## Preserved semantic revision prompts (superseded shell)

These focused edits were applied before the latest left-sidebar direction. They preserve exact prompt provenance; their shell position is superseded by the accepted desktop edits above/below.

### Revision

```text
Correct only source fidelity: remove invented Research and accepted facts / Runs tabs and instead a plain heading Research and accepted facts and small runs table before comparison (created, requested by, primary status, fallback status, stopped). Refresh research must be a form: unchecked Refresh checkbox, Allow fallback checkbox and Research company submit button. Accept sourced fact lookup must be an editable select Primary registry / Secondary aggregator to choose exact source, prior remains canonical select. Reason has max2000, remove invented 0/500 counter. Add safe evidence URL and Observed time unavailable beneath each source. Preserve restrained layout and right sidebar.
```

### FinalRevision

```text
Minimal correction, preserve page composition. Runs: primary Succeeded and fallback Succeeded in selected run, requested by Alex Carter, no System requester. Source comparison legal name facts require source URLs: use https://example.test/registry/01234567 for primary and https://example.test/aggregator/01234567 for secondary; Observed time Not provided stays nullable. Remove disabled Generated lookup field entirely, rename Source select Lookup and options Registry lookup / Aggregator lookup; it is the canonical existing lookup input, not extra field. Prior choose Accepted legal name #1 instead of None when comparing existing accepted history. Reason should say Reviewed registry disagreement. Preserve exact existing legal names and missing office/status.
```
