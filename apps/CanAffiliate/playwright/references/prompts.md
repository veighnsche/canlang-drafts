# Exact image-generation requests

Built-in image_gen requests are preserved literally. Active desktop targets use the left shell. Earlier right-shell requests are superseded; mobile requests are withdrawn from deliverables. Discarded task-created intermediate PNGs are not retained.

## 01-main-desktop.prompt.md

Preserved legacy request; non-target.

```text
Use case: ui-mockup. Produce one polished, high fidelity intended desktop webpage appearance PNG, landscape approximately 1440 by 1000. Page fills image edge to edge. No browser/device chrome, no presentation frame, no marketing annotations. Use light neutral daisyUI-inspired surfaces, charcoal legible sans-serif, thin gray borders, restrained indigo primary buttons, generous spacing and clear field captions. Follow supplied .can declaration and style exactly: navigation lives in a slim RIGHT sidebar using ONLY listed actual page titles; top bar contains app name. No invented navigation, charts, metrics, actions or statuses. Show representative populated records and real form fields appropriate to selected authorized role. Do not display implementation/code. Tiny icons consistent monochrome. Accurate readable text, clear hierarchy. This is an intended visual design reference, not a runtime screenshot. Main content can extend below viewport naturally. App CanAffiliate. Route /partners, finance and partner manager admitted. Right nav: Partners, My commissions. Compact partner collection left within main workspace, selected partner terms detail right; partner intake card at top with form Name, Account, Email, Locations, Products, Rate slider 10%, Agreement multiline v1, Qualification milestone radio Paid / Completed / Cancellation window passed, Attribution window 30d and Create. List search Name, Active filter and columns Name, Agreement, Rate, Qualification milestone, Provider onboarding complete, Active. Selected Broker: Ready provider badge, Provider onboarding complete Yes, editable agreement/rate/milestone/active; Refresh provider status and Settle commission buttons. Available EUR 100.00. Tabs Sales and adjustments selected, Allocation and bank delivery. Sales table columns Source reference, Location, Amount, Rate, Commission, Reversed: sale, Brussels, EUR1000.00,10%,EUR100.00,No; frozen evidence collapsed. Adjustment table empty. History collapsed. Currency values align right. No extra metrics. Preserve exact semantic distinction between provider eligibility, allocation and bank delivery.
```

## 01-partners-desktop-left-correction.prompt.md

Active desktop generation/correction.

```text
Edit ONLY the named small source discrepancy in the referenced full-page desktop image. Merge only Allocation and Bank delivery tabs into ONE tab caption Allocation and bank delivery. Sales and adjustments remains separate selected tab. No other change. Preserve entire LEFT shell and desktop page. No frame/collage.
```

## 01-partners-desktop-left.prompt.md

Active desktop generation/correction.

```text
Use case: ui-mockup. Edit the referenced desktop full-page UI image to the latest user-authorized shell. Move the entire canonical navigation sidebar to the LEFT edge; app wordmark at TOP LEFT, admitted page links below, compact user account menu anchored BOTTOM LEFT. Main page content lies to its RIGHT. No right-side navigation sidebar, no top navigation substitute. Preserve all existing source-authorized main content, route /partners, state manager/finance, Sales and adjustments, forms, statuses, modal and source permissions. Desktop landscape full-page output only, no mobile, no browser/device frame or collage. Additional precise source fixes: Sidebar links Partners and My commissions; user Finance. Correct combined Allocation and bank delivery tab; adjustment columns Sale, Amount, Reason. Keep readable text and existing daisyUI surfaces, indigo accents, spacing and hierarchy.
```

## 02-own-commissions-desktop-left.prompt.md

Active desktop generation/correction.

```text
Use case: ui-mockup. Edit the referenced desktop full-page UI image to the latest user-authorized shell. Move the entire canonical navigation sidebar to the LEFT edge; app wordmark at TOP LEFT, admitted page links below, compact user account menu anchored BOTTOM LEFT. Main page content lies to its RIGHT. No right-side navigation sidebar, no top navigation substitute. Preserve all existing source-authorized main content, route /partners/mine, state verified own partner, forms, statuses, modal and source permissions. Desktop landscape full-page output only, no mobile, no browser/device frame or collage. Additional precise source fixes: Only My commissions nav. Own partner name Broker, not Partner type. Introduction URL /partners/share/broker. User Broker. Keep readable text and existing daisyUI surfaces, indigo accents, spacing and hierarchy.
```

## 02-own-commissions-desktop.prompt.md

Superseded intermediate request.

```text
Use case: ui-mockup. Create ONE edge-to-edge full-page desktop web UI image 1440x1000, no frames, no collage or device chrome. CanAffiliate intended source-owned page /partners/mine, verified partner ONLY. Light neutral daisyUI surfaces, restrained indigo, charcoal sans-serif, thin gray borders and aligned EUR amounts. Canonical slim RIGHT navigation has wordmark CanAffiliate at TOP, only My commissions link, user menu anchored BOTTOM RIGHT reading Broker. Main content heading My commissions. Own agreement card: Broker, Rate 10%, Agreement v1, Qualification milestone Completed, Provider eligibility Ready, Provider onboarding complete Yes. Buttons Complete provider onboarding and Refresh provider status; copy control for own introduction link. Available EUR 0.00 stat. Sale ledger with columns Source reference, Location, Amount, Rate, Agreement, Commission, Reversed; representative sale / Test site / EUR 1,000.00 / 10% / v1 / EUR 100.00 / No. Filters Reversed, Qualification date and Currency; pagination and Export CSV toolbar. Adjustments ledger columns Sale, Amount, Reason with explicit empty state. Settlement ledger columns Amount, Allocation state, Bank delivery, Transfer reference, Payout reference, Needs finance review: EUR100.00, Allocated, Failed, transfer-01, payout-01, No. Clearly visually separate allocated from failed bank delivery. Refresh settlement button. No finance settlement action or manager editing, no other partner/customer data, no fabricated KPIs or charts. Include roomy readable real full page layout and exact captions; everything is ordinary UI, not implementation text. Source remains authoritative.
```

## 03-introduction-desktop-left-correction.prompt.md

Active desktop generation/correction.

```text
Edit only these exact source discrepancies in referenced full-page LEFT desktop UI: Anonymous state: Customer selector and Submit introduction must be disabled. Replace helper 'Submitting a customer from your own account?' with exactly 'Sign in with a verified account to submit your own authorized customer.' Remove marketing claim 'we will take it from there' and replace introductory paragraph with 'Partner introduction'. Keep Broker name, no private terms, sign-in bottom left. All other layout unchanged. One image, no frame/collage.
```

## 03-introduction-desktop-left.prompt.md

Active desktop generation/correction.

```text
Use case: ui-mockup. ONE actual full-page desktop landscape1440x1000 UI image edge-to-edge; no frames/browser chrome/collage/mobile. Light neutral daisyUI, charcoal legible sans-serif, indigo controls. Canonical LEFT sidebar with app wordmark TOP LEFT, admitted links only, account BOTTOM LEFT. No invented metrics or navigation. CanAffiliate contextual Partner introduction route /partners/share/broker active public Partner. Left wordmark CanAffiliate, no static public page links, anonymous Sign in bottom-left. Main Partner introduction sparse hero Broker and generated capture form Customer reference selector; verified own-customer submission requires sign-in. No ledger,agreement,rate,banking,customer metadata or stats. No attribution recorded by GET. Calm simple compact form with generous whitespace; do not create hero artwork or marketing slogan.
```

## 03-introduction-mobile.prompt.md

Withdrawn mobile request.

```text
Use case: ui-mockup. ONE edge-to-edge actual complete UI page, no frame/collage/browser chrome. Light neutral daisyUI, charcoal sans-serif, restrained indigo. No invented controls/navigation/metrics. Portrait430x900 /partners/share/{Partner.id} public active partner introduction. Top CanAffiliate wordmark/Menu. Main heading Partner introduction, Broker name and sparse form customer reference, Sign in to submit own authorized customer attribution; no attribution recorded on GET. No broker rate, agreement, sales, commission, banking or ledger shown. Anonymous user sees bottom-right Sign in. Canonical mobile right dismissible overlay CLOSED, only menu button; no invented public static pages. Simple calm introduction with one short form and neutral whitespace.
```
