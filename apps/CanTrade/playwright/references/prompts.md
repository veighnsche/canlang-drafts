# Exact generation prompts

## Final desktop left-sidebar revision — 02-moderation-desktop.png

Input: previous inspected generated version of this reference. This supersedes earlier right-sidebar instructions; withdrawn mobile prompts are provenance only.

```text
Use case: ui-mockup. Revise this intended-design reference to the user's final DESKTOP-ONLY LEFT SIDEBAR design. Move the entire shared sidebar to the extreme LEFT of the webpage, wordmark at TOP LEFT of sidebar, page links below, account/sign-in menu anchored BOTTOM LEFT of sidebar. Move existing page content to its right, preserve the same content layout/hierarchy/form fields/actions/states and readable typography. NO sidebar on the right, no duplicate branding/account, no mobile overlay/button/device frame, no collage. Retain a realistic full-page desktop composition approximately1440–1536CSS pixels wide, increasing height as needed rather than cropping controls. Preserve source-defined nav links only. Do not mirror text, do not change business data, do not invent controls or metrics. Keep source-authoritative labels and neutral accessible daisyUI style. Remove invented listing photo thumbnails; source has no photos/uploads. Replace laptop product example with textual reported listing Repeated unsolicited promotions and escaped description/contact context. Preserve moderator-only queue, reason dialog and source statusActive. Remove unsupported500-character reason limit.
```

## Final desktop left-sidebar revision — 01-community-listings-desktop.png

Input: previous inspected generated version of this reference. This supersedes earlier right-sidebar instructions; withdrawn mobile prompts are provenance only.

```text
Use case: ui-mockup. Revise this intended-design reference to the user's final DESKTOP-ONLY LEFT SIDEBAR design. Move the entire shared sidebar to the extreme LEFT of the webpage, wordmark at TOP LEFT of sidebar, page links below, account/sign-in menu anchored BOTTOM LEFT of sidebar. Move existing page content to its right, preserve the same content layout/hierarchy/form fields/actions/states and readable typography. NO sidebar on the right, no duplicate branding/account, no mobile overlay/button/device frame, no collage. Retain a realistic full-page desktop composition approximately1440–1536CSS pixels wide, increasing height as needed rather than cropping controls. Preserve source-defined nav links only. Do not mirror text, do not change business data, do not invent controls or metrics. Keep source-authoritative labels and neutral accessible daisyUI style. Remove invented marketing footer/tagline. Illustrative locations Workspace instead of Toronto/Vancouver, currencyEUR. Tab exact Community listings then My listings. No source functionality changes.
```

## 02-moderation-desktop.png

```text
Use case: ui-mockup. Create one polished implementable intended-design website full-page UI, no browser chrome/device frame/collage/watermark. Light neutral daisyUI shared theme, dark readable sans-serif, white cards subtle borders, restrained semantic colors with text labels, practical spacing, keyboard focus. Only source-owned fields/actions/states. No invented dashboards, metrics, settings, marketing taglines or Home links. Desktop uses wordmark at TOP of RIGHT sidebar and user menu BOTTOM RIGHT; mobile uses menu button at top-right with dismissible overlay closed, no persistent desktop sidebar. Illustrative data in the Workspace location, currency EUR, Europe/Brussels, October2026. Full page height preserves all essential controls. CanTrade /marketplace/reports Listing reports, moderator who is not owner. RIGHT nav Community marketplace then Listing reports. NO owner Publication audience card. Alert 'Unresolved reports first; dismissed reports stay readable with their decision.' Report table Parent listing, Reason, Resolved, Decision filterResolvedNo pagination. Sample reported listing 'Repeated unsolicited promotions' reason 'Misleading contact details' resolvedNo decisionemdash. Moderation decisions split listing selection with stateActive, escaped description, history and Remove reported listing button. Remove reported listing modal OPEN with textarea Reason 'Repeated misleading advertising', Submit and Cancel. No author impersonation/private login email no delete-all/moderation metrics. Dismiss report separate action outside modal for report. Attribution/history retained.
```

## 01-community-listings-desktop.png

```text
Use case: ui-mockup. Generate one polished high fidelity intended desktop webpage for CanTrade. Edge-to-edge landscape approximately 1440x1000. No device frame, browser chrome, poster, watermark, annotation or marketing. Light neutral daisyUI-style theme, white content cards, subtle gray borders, dark legible sans-serif, restrained semantic accents, generous spacing, readable labeled inputs, fast scanning. Canonical shared right-sidebar navigation (narrow on RIGHT, never left). Use ONLY real page titles below in navigation, no Customers, Settings or Admin extras. Make the selected source page content prominent. Show realistic representative authorized data; precise state/category values come only from source. Do not invent operations or metrics. Fit the first screen naturally; deeper forms may continue below fold. Keep modals closed unless noted; authorization and source remain authoritative. Render English human labels, never raw code.
Actual navigation declarations:
  page /marketplace title="Community marketplace" 
  page /marketplace/reports title="Listing reports" 
Selected page and hierarchy/controls:
  page /marketplace title="Community marketplace" $TradeWorkspace
   breadcrumbs
   card "Publish a listing"
    require authenticated and actor.email_verified and eligible(actor,null)
    form Post.create
     fieldset "Listing details"
      radio kind
      input title
      textarea description
      radio visibility
      select location
      input category
      input amount
      input contact
   tabs preferences.view
   card "Community discovery"
    require preferences.view==community
    table Post as post where post.state==active columns=kind,category,location,title,amount,contact filter=kind,category,location defaults={kind=preferences.kind,category=preferences.category,location=preferences.location} search=title display=split empty="No active listings match."
     pagination
     badge row.state
     content row.description
     edit
     ## Closing and reopening keep the owning status operation with its typed open control.
     button opens=community_listing_status
     modal "Change listing status" id=community_listing_status
      slot content
       form status arguments={post=row} display=inline
        checkbox open
     collapse "Published contact and reporting"
      text row.visibility,row.state
      form Report.create
       textarea reason
   card "My listings"
    require authenticated and preferences.view==mine
    table Post as post where post.author==actor columns=kind,title,visibility,state,moderation_reason filter=state display=split empty="No own listings yet."
     pagination
     badge row.state
     edit
     delete
     button opens=own_listing_status
     modal "Change listing status" id=own_listing_status
      slot content
       form status arguments={post=row} display=inline
        checkbox open
     history

  # Resolve reported listings under a separate moderation grant. 
Source style intent:
  style TradeWorkspace $"Use approachable community listing rows with readable descriptions and clear wanted or offered labels. Keep deliberate contact visibility prominent in authoring; distinguish published listings, own drafts or closed entries, and moderation reasons within their existing views. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
Owning declarations and localized English labels (context only; show only selected page data):
  message label_Post_author = "Recorded by"
  message label_Post_category = "Category"
  Audience { key:text="community" unique, allow_public:bool=false label="Allow public listings" } label="Marketplace audience"
  Post { author:user server=actor label=label_Post_author, location:Location?, kind:enum(wanted,offered) label={text="Kind",values={wanted="Wanted",offered="Offered"}}, category:text label=label_Post_category, title:text trim min=1, description:text, amount:money?, contact:text label="Published contact", visibility:enum(member,public) member_audience label={text="Published audience",values={member="Members only",public="Public"}}, state:enum(active,closed,removed)=active label={text="State",values={active="Active",closed="Closed",removed="Removed"}}, moderation_reason:text? label="Moderation reason" } label="Community listing"
  Report in Post { author:user server=actor label=label_Post_author, reason:text trim min=1, dismissed:bool=false label="Dismissed", decision:text? label="Decision" } label="Listing report"
  derive Report.resolved:bool = row.dismissed or row.parent.state==removed label="Resolved"

Chosen screen Community marketplace, Community listings tab. Authorized verified member, illustrative wanted/offered records accounting service and surplus chair; contact is deliberately entered listing contact, never login email. Full Publish a listing form fields Kind wanted/offered, Title, Description, Visibility public/members, Location, Category, Amount currency, Contact, Submit. Community discovery split listing table columns Kind Category Location Title Amount Contact with search/filter/pagination; selected offered listing description and report reason textarea. No checkout, no sales totals, no photos unless authored. Navigation Community marketplace and Listing reports (admitted moderator context) only. Wordmark RIGHT top user RIGHT bottom. Source field labels authoritative, date samples Oct2026.
No invented Home sidebar entry, no device frame, single full-page UI. Keep complete page scroll height so bottom-right account is visible.
```
