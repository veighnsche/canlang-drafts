# CanPromptLab exact image_gen requests

Built-in tool mode; `transparent_background=false`. Current reference set: LEFT-sidebar desktop only. Each final request below was generation or a local PNG edit (`referenced_image_paths` points to the matching owning file). PNGs were copied to this folder after generation. No CLI fallback was used.

## 02-catalogs-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanPromptLab/playwright/references/02-catalogs-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanPromptLab. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /catalogs title="Catalogs" $Workspace
  page /tags title="Catalog tags" $"Use a compact tag workspace with readable descriptions and a clear intake area; preserve the shared shell, canonical admission and feedback."
  page /catalogs/archived title="Archived entries" $Workspace
SELECTED PAGE:
  page /catalogs title="Catalogs" $Workspace
   require members
   breadcrumbs
   card "New catalog" $Workspace
    form Catalog.create $Workspace
     input name $FieldSurface
   list Catalog columns=name order=name empty="No catalogs yet."
    pagination
    card "Catalog entries" $"Keep the selected catalog heading, entry intake and collection easy to scan; stack on narrow screens and preserve canonical controls and feedback."
     title row.name
     edit
     form Entry.create $"Group every canonical entry field without changing parent binding, submit behavior, labels or validation."
      input code $FieldSurface
      input title $FieldSurface
      input barcode $"Make the canonical EAN-13 input readable with a monospaced value and visible validation feedback; do not normalize or repair entered digits."
      textarea summary $"Use readable line length and visible focus for the canonical summary textarea; preserve exact text and validation behavior."
      input rank
     list row.Entry columns=code,title,archived order=rank empty="No entries in this catalog."
      pagination
      show EntryTile {row=row} $Workspace
      form Note.create
       textarea body
      list row.Note columns=body,author,pinned order=-created empty="No notes yet."
       pagination
       edit
       delete
      history
OWNING LABELS/DATA/FORMS/STYLES:
  role curator label="Catalog curator"
  Catalog { name:text trim min=1 max=120 } label="Catalog"
  Entry in Catalog { code:text trim min=1 max=100 key_text_budget label="Catalog code", title:text trim min=1 max=200, barcode:text min=13 max=13 trait $"Validate a required EAN-13 barcode as exactly thirteen ASCII digits whose final digit equals the standard alternating one/three weighted check digit of the preceding twelve. Preserve the stored text, native length constraints, field label, permissions and canonical validation feedback. Supply only a pure field-validation contribution; do not repair or coerce an invalid barcode." label="EAN-13 barcode", summary:text trim min=1 max=4000, rank:int=0 min=0 max=999 label="Display rank" } archive_evidence label="Catalog entry"
  Tag { name:text trim min=1 max=100 key_text_budget, description:text trim min=1 max=1000, rank:int=0 min=0 max=999 label="Display rank" } archive_evidence label="Catalog tag"
  Note in Entry { body:text trim min=1 max=4000, author:user server=actor } trait $"Contribute pinned:bool=false with the label Pinned to this Note only. Preserve the author, parent, body constraints and current read/write authority; pinning happens only through the declared canonical Note update. Add no automatic transition or permission." label="Entry note"
  scenario archive_entry(entry:Entry) by=curator label="Archive entry"
  scenario restore_entry(entry:Entry) by=curator label="Restore entry"
  scenario archive_tag(tag:Tag) by=curator label="Archive tag"
  scenario restore_tag(tag:Tag) by=curator label="Restore tag"
  scenario swap_codes(first:Entry,second:Entry) by=curator label="Swap catalog codes"
  scenario add_entry(catalog:Catalog,code:text,title:text,barcode:text,summary:text) by=curator -> Entry label="Add checked entry"
  scenario add_tag(name:text,description:text) by=curator -> Tag label="Add tag"
  scenario change_code_if(entry:Entry,code:text,accept:bool) by=curator label="Change code with final approval"
  style Workspace $"Give the attached page, card, form, generated-view root or custom view host a readable catalog surface with modest spacing and responsive stacking. Respect each target's actual root/part contract and nearest ownership. Inherit the theme and canonical shell, retain all fields, controls, validation feedback, localized captions and keyboard focus; caller host styling cannot style a child renderer's interior."
  style FieldSurface $"Give the attached canonical text input or textarea a clear boundary, comfortable spacing and visible keyboard focus. Preserve labels, required/disabled states, native and generated validation feedback, exact field identity and submission behavior. Inherit the theme."
  style ControlSurface $"Make the attached canonical button or control easy to identify with visible focus and compact spacing. Retain its permission admission, caption, loading/error states, version and CSRF data, confirmation and operation binding. Inherit the theme."
INTERACTION REQUIREMENTS:


HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```

## 03-tags-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanPromptLab/playwright/references/03-tags-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanPromptLab. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /catalogs title="Catalogs" $Workspace
  page /tags title="Catalog tags" $"Use a compact tag workspace with readable descriptions and a clear intake area; preserve the shared shell, canonical admission and feedback."
  page /catalogs/archived title="Archived entries" $Workspace
SELECTED PAGE:
  page /tags title="Catalog tags" $"Use a compact tag workspace with readable descriptions and a clear intake area; preserve the shared shell, canonical admission and feedback."
   require members
   breadcrumbs
   card "New tag" $"Separate tag intake from existing tags with modest theme-based spacing and responsive wrapping."
    form Tag.create
     input name $FieldSurface
     textarea description $FieldSurface
     input rank
   list Tag columns=name,archived order=rank empty="No tags yet."
    pagination
    show TagTile {row=row} $Workspace
    history
OWNING LABELS/DATA/FORMS/STYLES:
  role curator label="Catalog curator"
  Catalog { name:text trim min=1 max=120 } label="Catalog"
  Entry in Catalog { code:text trim min=1 max=100 key_text_budget label="Catalog code", title:text trim min=1 max=200, barcode:text min=13 max=13 trait $"Validate a required EAN-13 barcode as exactly thirteen ASCII digits whose final digit equals the standard alternating one/three weighted check digit of the preceding twelve. Preserve the stored text, native length constraints, field label, permissions and canonical validation feedback. Supply only a pure field-validation contribution; do not repair or coerce an invalid barcode." label="EAN-13 barcode", summary:text trim min=1 max=4000, rank:int=0 min=0 max=999 label="Display rank" } archive_evidence label="Catalog entry"
  Tag { name:text trim min=1 max=100 key_text_budget, description:text trim min=1 max=1000, rank:int=0 min=0 max=999 label="Display rank" } archive_evidence label="Catalog tag"
  Note in Entry { body:text trim min=1 max=4000, author:user server=actor } trait $"Contribute pinned:bool=false with the label Pinned to this Note only. Preserve the author, parent, body constraints and current read/write authority; pinning happens only through the declared canonical Note update. Add no automatic transition or permission." label="Entry note"
  scenario archive_entry(entry:Entry) by=curator label="Archive entry"
  scenario restore_entry(entry:Entry) by=curator label="Restore entry"
  scenario archive_tag(tag:Tag) by=curator label="Archive tag"
  scenario restore_tag(tag:Tag) by=curator label="Restore tag"
  scenario swap_codes(first:Entry,second:Entry) by=curator label="Swap catalog codes"
  scenario add_entry(catalog:Catalog,code:text,title:text,barcode:text,summary:text) by=curator -> Entry label="Add checked entry"
  scenario add_tag(name:text,description:text) by=curator -> Tag label="Add tag"
  scenario change_code_if(entry:Entry,code:text,accept:bool) by=curator label="Change code with final approval"
  style Workspace $"Give the attached page, card, form, generated-view root or custom view host a readable catalog surface with modest spacing and responsive stacking. Respect each target's actual root/part contract and nearest ownership. Inherit the theme and canonical shell, retain all fields, controls, validation feedback, localized captions and keyboard focus; caller host styling cannot style a child renderer's interior."
  style FieldSurface $"Give the attached canonical text input or textarea a clear boundary, comfortable spacing and visible keyboard focus. Preserve labels, required/disabled states, native and generated validation feedback, exact field identity and submission behavior. Inherit the theme."
  style ControlSurface $"Make the attached canonical button or control easy to identify with visible focus and compact spacing. Retain its permission admission, caption, loading/error states, version and CSRF data, confirmation and operation binding. Inherit the theme."
INTERACTION REQUIREMENTS:


HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
ESSENTIAL FORM ARGUMENTS: Every unbound parameter in these declarations needs a labeled generated input. Do not omit referenced owner/identity inputs (e.g. asset, account, customer, reviewer, resource, location):

```

## 04-catalogs-archived-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanPromptLab/playwright/references/04-catalogs-archived-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanPromptLab. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /catalogs title="Catalogs" $Workspace
  page /tags title="Catalog tags" $"Use a compact tag workspace with readable descriptions and a clear intake area; preserve the shared shell, canonical admission and feedback."
  page /catalogs/archived title="Archived entries" $Workspace
SELECTED PAGE:
  page /catalogs/archived title="Archived entries" $Workspace
   require members
   breadcrumbs
   list Entry as row where row.archived columns=code,title,archived order=rank empty="No archived entries."
    pagination
    show EntryTile {row=row} $"Give this custom view host enough space for archive evidence and restoration; retain child-owned renderer roots and all canonical control behavior."
OWNING LABELS/DATA/FORMS/STYLES:
  role curator label="Catalog curator"
  Catalog { name:text trim min=1 max=120 } label="Catalog"
  Entry in Catalog { code:text trim min=1 max=100 key_text_budget label="Catalog code", title:text trim min=1 max=200, barcode:text min=13 max=13 trait $"Validate a required EAN-13 barcode as exactly thirteen ASCII digits whose final digit equals the standard alternating one/three weighted check digit of the preceding twelve. Preserve the stored text, native length constraints, field label, permissions and canonical validation feedback. Supply only a pure field-validation contribution; do not repair or coerce an invalid barcode." label="EAN-13 barcode", summary:text trim min=1 max=4000, rank:int=0 min=0 max=999 label="Display rank" } archive_evidence label="Catalog entry"
  Tag { name:text trim min=1 max=100 key_text_budget, description:text trim min=1 max=1000, rank:int=0 min=0 max=999 label="Display rank" } archive_evidence label="Catalog tag"
  Note in Entry { body:text trim min=1 max=4000, author:user server=actor } trait $"Contribute pinned:bool=false with the label Pinned to this Note only. Preserve the author, parent, body constraints and current read/write authority; pinning happens only through the declared canonical Note update. Add no automatic transition or permission." label="Entry note"
  scenario archive_entry(entry:Entry) by=curator label="Archive entry"
  scenario restore_entry(entry:Entry) by=curator label="Restore entry"
  scenario archive_tag(tag:Tag) by=curator label="Archive tag"
  scenario restore_tag(tag:Tag) by=curator label="Restore tag"
  scenario swap_codes(first:Entry,second:Entry) by=curator label="Swap catalog codes"
  scenario add_entry(catalog:Catalog,code:text,title:text,barcode:text,summary:text) by=curator -> Entry label="Add checked entry"
  scenario add_tag(name:text,description:text) by=curator -> Tag label="Add tag"
  scenario change_code_if(entry:Entry,code:text,accept:bool) by=curator label="Change code with final approval"
  style Workspace $"Give the attached page, card, form, generated-view root or custom view host a readable catalog surface with modest spacing and responsive stacking. Respect each target's actual root/part contract and nearest ownership. Inherit the theme and canonical shell, retain all fields, controls, validation feedback, localized captions and keyboard focus; caller host styling cannot style a child renderer's interior."
  style FieldSurface $"Give the attached canonical text input or textarea a clear boundary, comfortable spacing and visible keyboard focus. Preserve labels, required/disabled states, native and generated validation feedback, exact field identity and submission behavior. Inherit the theme."
  style ControlSurface $"Make the attached canonical button or control easy to identify with visible focus and compact spacing. Retain its permission admission, caption, loading/error states, version and CSRF data, confirmation and operation binding. Inherit the theme."
INTERACTION REQUIREMENTS:


HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
ESSENTIAL FORM ARGUMENTS: Every unbound parameter in these declarations needs a labeled generated input. Do not omit referenced owner/identity inputs (e.g. asset, account, customer, reviewer, resource, location):

```


