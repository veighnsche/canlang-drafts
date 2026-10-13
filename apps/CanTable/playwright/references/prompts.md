# Exact generation prompts

## Final desktop left-sidebar revision — 02-host-queue-desktop.png

Input: previous inspected generated version of this reference. This supersedes earlier right-sidebar instructions; withdrawn mobile prompts are provenance only.

```text
Use case: ui-mockup. Revise this intended-design reference to the user's final DESKTOP-ONLY LEFT SIDEBAR design. Move the entire shared sidebar to the extreme LEFT of the webpage, wordmark at TOP LEFT of sidebar, page links below, account/sign-in menu anchored BOTTOM LEFT of sidebar. Move existing page content to its right, preserve the same content layout/hierarchy/form fields/actions/states and readable typography. NO sidebar on the right, no duplicate branding/account, no mobile overlay/button/device frame, no collage. Retain a realistic full-page desktop composition approximately1440–1536CSS pixels wide, increasing height as needed rather than cropping controls. Preserve source-defined nav links only. Do not mirror text, do not change business data, do not invent controls or metrics. Keep source-authoritative labels and neutral accessible daisyUI style. Table Zone is text input, not closed enum dropdown. Keep actual seating vs reserved interval and integer priority. Root source sole navigation Café host.
```

## 03-clear-occupied-mobile.png

```text
Use case: ui-mockup. Create one polished implementable intended-design website full-page UI, no browser chrome/device frame/collage/watermark. Light neutral daisyUI shared theme, dark readable sans-serif, white cards subtle borders, restrained semantic colors with text labels, practical spacing, keyboard focus. Only source-owned fields/actions/states. No invented dashboards, metrics, settings, marketing taglines or Home links. Desktop uses wordmark at TOP of RIGHT sidebar and user menu BOTTOM RIGHT; mobile uses menu button at top-right with dismissible overlay closed, no persistent desktop sidebar. Illustrative data in the Workspace location, currency EUR, Europe/Brussels, October2026. Full page height preserves all essential controls. CanTable mobile /cafe Café host. Render true390CSS px one-column layout16px gutters, body16px; tall portrait. CLOSED nav overlay top-right menu, CanTable header, account bottom content. All/Waiting/Reservations/Physical occupancy tabs. Physical occupancy selected. Jules party2 table1 Actual seated13Oct13:00 Estimated end14:00 Now14:15, still Seated, overdue warning 'Seating estimate exceeded; the table stays occupied until staff clear it.' Upcoming Noor Reserved table1 14:30–15:30 conflictYes; separate reserved-state badge and warning. Clear dining table modal OPEN as mobile sheet full width within gutters, Reason textarea entered 'Table cleared after guests departed', Submit clear and Cancel/X, keyboard focus. No success state yet. Definitions/intake collapsed accordion retain access. Never turn planned interval into actual seating, no clock-autoclear. No left/right persistent sidebar no device frame.
```

## Focused correction — 02-host-queue-desktop.png

Input: corresponding first-pass generated image.

```text
Use case: ui-mockup. Correct this generated webpage ONLY to match shared shell and missing source form fields. Move existing sidebar from LEFT to RIGHT, wordmark CanTable top-right, user menu bottom-right only; delete top account duplication. Preserve Cafe host sole navigation, no new links. Add compact explicit New café form Name Location and Create café; add explicit New dining table form Name Zone Seats Active checkbox Create table within Café and table definitions. Keep queue/alerts/walk-in numeric Priority. Jules is a walk-in seated party: planned reserved interval must be emdash, Actual seating13:00 Estimated end14:00, still Seated and Overdue. Noor Reserved interval14:30–15:30 and ConflictYes stays separate. Rename sample café Workspace Café and location Workspace; do not add other locations. One full page no frame.
```

## 02-host-queue-desktop.png

```text
# CanTable desktop reference prompt

Generated with the built-in image-generation tool on 2026-10-13. This is an intended design, not runtime evidence or a code-generation receipt.

+Use case: ui-mockup.
Asset type: visual acceptance reference for the CanTable web app, not a screenshot of an implemented product.
Create one polished high fidelity desktop application screen, landscape approximately 1440 by 1000 composition. Show the populated /cafe "Café host" page used by workspace reception/café staff. A restrained light daisyUI-like shared application shell, slim left navigation with the active Café host item, compact top bar with current team and user. Main content hierarchy: page heading "Café host"; compact Café selection and "All", "Waiting", "Reservations", "Physical occupancy" tabs; dining table definitions with name, zone, seats, active status; convenient walk-in intake fields Name, Contact, Party size, Notes, Priority and an Add booking action; a large clearly aligned booking table showing Name, Party, Priority, Table, Reserved interval, Estimated end, State. Use realistic short sample entries, such as "Maya · party of 2", "Studio team · party of 4", "Alex · party of 3", with distinct Waiting, Reserved and Seated status badges. One physically seated party is overdue; the table remains occupied until staff explicitly clear it. Place a readable amber notice "Seating estimate exceeded; table remains occupied" beside that row, and show a conflict notice on a reservation for that occupied table. Include clear Reserve, Seat and Clear actions where meaningful. Make actual occupancy visually distinct from reservations. Keep create/edit entry points and a subtle history control. Avoid adding revenue metrics, floor-plan drag/drop or functionality absent from the requirements.
Style: professional calm operational software, fast-scanning rows, prominent party size/table/timing, generous usable spacing balanced with data density, excellent alignment and contrast, restrained semantic color, plain readable sans-serif typography, thin borders, modest corner radius, subtle elevation. Preserve canonical semantic forms and actions, text status alongside color, a visible keyboard-focus treatment on one control. Comfortable ~44px controls; the page should be realistically implementable with responsive web components. Frame as the website content edge to edge without device mockup, marketing headings, browser chrome, annotations or decorative photography. Crisp legible English labels. One coherent interface, not a collage.

Chosen screen /cafe Café host new corrected primary reference. Source has SOLE nav Café host, wordmark top-right user bottom-right. Café creation name location. Café definitions table and create fields Name Zone Seats Active checkbox. Walk-in intake Name Contact Party size Notes numeric Priority. Tabs All Waiting Reservations Physical occupancy. Three populated rows: Mara party2 priority0 Waiting no table/planned/seated; Jules party2 priority0 Seated table1 actual13:00 estimated14:00 now14:15 OverdueYes; Noor party2 Reserved table1 planned14:30–15:30 ConflictYes. Conflict is an alert not Booking state. Split selection seated Jules clear reason modal closed, actions source-authorized. Exact alert 'Seating estimate exceeded; the table stays occupied until staff clear it.' Upcoming reservation evidence remains visible, physical occupancy not freed by estimate. No Open toggle, no table map, no new metrics. Light neutral practical cafe queue with readable real/planned times. Fullpage no frame.
Only authored controls; no invented Home page; no marketing tagline. Single full page with enough height to show footer user menu.
```
