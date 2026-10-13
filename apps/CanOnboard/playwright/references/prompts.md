# CanOnboard exact image_gen requests

Built-in tool mode; `transparent_background=false`. Current reference set: LEFT-sidebar desktop only. Each final request below was generation or a local PNG edit (`referenced_image_paths` points to the matching owning file). PNGs were copied to this folder after generation. No CLI fallback was used.

## 02-people-my-readiness-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanOnboard/playwright/references/02-people-my-readiness-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Restore preserved source due-date field only: replace the line 'Completion unavailable for this assignment.' below second step title with 'Due20Oct2026'. Keep its disabled completion action and displayed blocked_reason alert. Do not replace any other text/fields. Keep existing LEFT desktop sidebar, top-left wordmark, bottom-left account and all other layout. One full-page UI, no frame.
```

### Superseded request 1

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanOnboard. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /people/my-readiness title="My readiness"@{nl="Mijn inwerkstappen"} $OnboardWorkspace
  page /people/onboarding title=page_people_onboarding_title $OnboardWorkspace
SELECTED PAGE:
  page /people/my-readiness title="My readiness"@{nl="Mijn inwerkstappen"} $OnboardWorkspace
   require authenticated
   breadcrumbs
   card "Assigned readiness steps"@{nl="Toegewezen inwerkstappen"}
    tabs preferences.view
    list Step as step where step.assignee==actor and (preferences.view==all or (preferences.view==unfinished and not step.done) or (preferences.view==overdue and not step.done and step.due<local_date(now,team.timezone))) order=step.due empty="No assigned steps"@{nl="Geen toegewezen stappen"}
     badge row.category
     text row.title,row.due,row.done
     alert
      require row.blocked_reason!=null
      text row.blocked_reason
     card "Attachment"@{nl="Bijlage"}
      require row.document!=null
      link target=row.document caption="Open attachment"@{nl="Bijlage openen"}
     text row.completed_by,row.completed_at
     action complete
     pagination

OWNING LABELS/DATA/FORMS/STYLES:
  message page_people_onboarding_title = "Onboarding"@{nl="Inwerken"}
  export Template { name:text, role:text label="Role"@{nl="Rol"}, location:Location, active:bool=true label="Available template"@{nl="Beschikbare template"}, revision:int=1 } label="Checklist template"@{nl="Checklisttemplate"}
  TemplateStep in Template { title:text trim min=1, offset_days:int=0 label="Offset in days"@{nl="Verschuiving in dagen"}, category:enum(equipment,induction,account,training)=induction label={text="Category"@{nl="Categorie"},values={equipment="Equipment"@{nl="Uitrusting"},induction="Induction"@{nl="Introductie"},account="Account"@{nl="Account"},training="Training"@{nl="Opleiding"}}} } label="Template step"@{nl="Templatestap"}
  Checklist in Employee { template:Template, template_version:int label="Template version"@{nl="Templateversie"}, started:date label="Started on"@{nl="Gestart op"}, generation:text unique label="Generation reference"@{nl="Generatiereferentie"} } label="Onboarding checklist"@{nl="Inwerkchecklist"}
  export Step in Checklist { title:text trim min=1, due:date, assignee:user=parent.parent.user label="Assignee"@{nl="Toegewezen persoon"}, category:TemplateStep.category, document:file? label="Document attachment"@{nl="Documentbijlage"}, blocked_reason:text? label="Blocking reason"@{nl="Blokkeerreden"}, done:bool=false, completed_by:user? label="Completed by"@{nl="Afgerond door"}, completed_at:datetime? label="Completed at"@{nl="Afgerond op"} } label="Onboarding step"@{nl="Inwerkstap"}
  scenario template_changed on=Template.update
  scenario template_step_created on=TemplateStep.create
  scenario template_step_changed on=TemplateStep.update
  scenario template_step_removed on=TemplateStep.delete
  export scenario start(employee:Employee,template:Template) by=hr label="Start"@{nl="Starten"}
  export scenario complete(step:Step) by=hr or authenticated
  scenario reopen(step:Step,reason:text) by=hr
  export scenario work(locations:text[]) read=true scope=authority -> WorkBatch by=hr or authenticated
  export scenario work_detail(record:Step) read=true scope=authority -> WorkItem by=hr or authenticated
  style OnboardWorkspace $"Use a discreet readiness checklist with readable assigned steps, version context, and attachments. Make each recorded completion and remaining requirement easy to scan; keep employee identity and private onboarding information within their existing authorized views. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { home:Location? label="Home location"@{nl="Standplaats"}, view:enum(all,unfinished,overdue)=all label={text="Step view"@{nl="Stappenweergave"},values={all="All steps"@{nl="Alle stappen"},unfinished="Unfinished steps"@{nl="Onafgeronde stappen"},overdue="Overdue steps"@{nl="Achterstallige stappen"}}} }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order navigation as My readiness, then Onboarding for HR coordinators. Employee/checklist/document details are contextual links, with HR document policies independent of shared work-profile visibility. Readiness and HR coordination remain normal workflows rather than an extra administration console.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My readiness — own/assigned index | Card with `breadcrumbs`, view Tabs + due-ordered step List (`empty` + `pagination`): category `badge`, title/due/done text, blocked `alert`, require-gated attachment Card with file `link`, completion attribution, bare complete action. | Complete only permitted assigned steps; upload never completes a step. |
| Onboarding — HR index | Employee Card (create form with `input` name/role, `select` home, `calendar` start; user/array inputs generated); coordination Card with Tabs + employee split List (`empty` + `pagination`, `edit`, `start` modal with template `select`, `deactivate` modal with `calendar` end date). | Canonical employee creation, one-shot checklist generation, owning deactivation. |
| Checklist coordination — contextual HR view | Checklist List (`empty` + `pagination`) with template/version/started text, `stat` counts, `progress`, step-create form with typed controls, completion `timeline`, filtered step List (category `badge`, blocked `alert`, attachment `link`, `edit`, bare complete, reopen `modal`, `delete`, `history`). | Add/edit/reassign/block/complete/reopen/archive under coordinator grants; denominator changes remain visible. |
| Reusable templates — HR view within index | Template create form (`input` name/role, `select` location) + split Template List (`empty` + `pagination`, `edit`, template-step form with `input`/`input`/`radio`, template-step List with category `badge`). | Maintain templates/steps; copies stay independent. |

On narrow screens, place due date, blocker explanation and the next authorized action above secondary history. Distinguish loading, no assigned steps, zero-progress empty checklists and filtered-empty. Keep unsaved notes/template edits on validation or stale submissions; show progress only from saved active steps. Document Buttons must report loading/denial without exposing another employee's filename or reusable private URL. Incomplete uploads remain unusable, and an optional attachment failure cannot erase an independently saved completion. Show configured training/task handoff outcomes and deactivation reconciliation as pending/conflict where applicable; checklist completion never grants application roles. Candidate feedback stays in hiring, and shared employee skill/status reads never reveal HR documents.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```

### Superseded request 2

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup precise-object-edit. In the supplied page the second step is blocked: render its Mark as complete button visibly disabled/unavailable. Replace its promise about training access/due date with "Completion unavailable for this assignment." Preserve every other component, LEFT sidebar and bottom-right account; one full page no frame.
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

## 03-people-onboarding-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanOnboard/playwright/references/03-people-onboarding-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Restore original required Home location picker in Employee.create intake alongside the newly added User account and Work locations. Do not substitute Work locations for Home location: employee identity has both. Keep every other field and all checklist/template contents unchanged. Preserve LEFT sidebar, top-left wordmark, bottom-left account and all other existing source controls/layout. ONE actual full-page desktop UI, no frame.
```

### Superseded request 1

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanOnboard. Desktop 1440x1050 landscape. Wide main content LEFT. Narrow collapsible page navigation sidebar RIGHT. Wordmark TOP RIGHT. User menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, readable dark sans typography. One selected page. Use ONLY ONE OR TWO populated authorized records so every field and state is coherent. Show the essential canonical form plus contextual details. Match selected source hierarchy/actions. No invented admin/navigation/metrics/operations or successful integration. Unspecified arguments require generated labeled controls from owning schema. English labels. Closed modal by default. Use page title resolved from message. One CURRENT LOCATION only; absolutely no invented named locations. Dates in October 2026 or future; use source fixture facts where present. Annotate currency/timezone/units in context. Long forms may continue below fold.
NAVIGATION (only actual admitted static pages; contextual/token routes excluded; if doubt selected destination only):
  page /people/my-readiness title="My readiness"@{nl="Mijn inwerkstappen"} $OnboardWorkspace
  page /people/onboarding title=page_people_onboarding_title $OnboardWorkspace
SELECTED PAGE:
  page /people/onboarding title=page_people_onboarding_title $OnboardWorkspace
   require hr
   breadcrumbs
   card "Employee onboarding"@{nl="Medewerkers inwerken"}
    form Employee.create
     ## user stays generated: no user-picker vocabulary.
     input name
     select home
     ## locations keep their generated control (array input has no catalog control).
     calendar start
     ## manager stays generated: no user-picker vocabulary.
     input role
     ## skills keep their generated control (array input has no catalog control).
   card "Dated checklist steps"@{nl="Gedateerde checkliststappen"}
    tabs preferences.view
    list Employee order=start filter=home,active,role search=role defaults={home=preferences.home} display=split empty="No employees found"@{nl="Geen medewerkers gevonden"}
     edit
     button opens=start_checklist
     modal "Start onboarding checklist"@{nl="Inwerkchecklist starten"} id=start_checklist
      slot content
       form start arguments={employee=row} display=inline
        select template
     button opens=end_employment
     modal "End active employment"@{nl="Actief dienstverband beëindigen"} id=end_employment
      slot content
       form deactivate arguments={employee=row} display=inline
        calendar ended
     list row.Checklist empty="No checklists yet"@{nl="Nog geen checklists"}
      text row.template,row.template_version,row.started
      stat row.completed_steps,row.total_steps
      progress row.progress max=100
      form Step.create
       input title
       calendar due
       ## assignee:user stays generated: no user-picker vocabulary.
       radio category
       file_input document
       textarea blocked_reason
      timeline row.Step as step where step.done
       slot item
        text row.title,row.completed_by,row.completed_at
      list row.Step as step where preferences.view==all or (preferences.view==unfinished and not step.done) or (preferences.view==overdue and not step.done and step.due<local_date(now,team.timezone)) order=due empty="No steps yet"@{nl="Nog geen stappen"}
       badge row.category
       text row.title,row.due,row.assignee,row.done
       alert
        require row.blocked_reason!=null
        text row.blocked_reason
       card "Attachment"@{nl="Bijlage"}
        require row.document!=null
        link target=row.document caption="Open attachment"@{nl="Bijlage openen"}
       text row.completed_by,row.completed_at
       edit
       action complete
       button opens=reopen_step
       modal "Reopen step"@{nl="Stap heropenen"} id=reopen_step
        slot content
         form reopen arguments={step=row} display=inline
          textarea reason
       delete
       history
       pagination
      pagination
     pagination
   card "Reusable templates"@{nl="Herbruikbare templates"}
    form Template.create
     input name
     input role
     select location
    list Template display=split empty="No templates yet"@{nl="Nog geen templates"}
     text row.name,row.role,row.location,row.revision,row.active
     edit
     form TemplateStep.create
      input title
      input offset_days
      radio category
     list row.TemplateStep empty="No template steps yet"@{nl="Nog geen templatestappen"}
      badge row.category
      text row.title,row.offset_days
      edit
      delete
      pagination
     pagination
OWNING LABELS/DATA/FORMS/STYLES:
  message page_people_onboarding_title = "Onboarding"@{nl="Inwerken"}
  export Template { name:text, role:text label="Role"@{nl="Rol"}, location:Location, active:bool=true label="Available template"@{nl="Beschikbare template"}, revision:int=1 } label="Checklist template"@{nl="Checklisttemplate"}
  TemplateStep in Template { title:text trim min=1, offset_days:int=0 label="Offset in days"@{nl="Verschuiving in dagen"}, category:enum(equipment,induction,account,training)=induction label={text="Category"@{nl="Categorie"},values={equipment="Equipment"@{nl="Uitrusting"},induction="Induction"@{nl="Introductie"},account="Account"@{nl="Account"},training="Training"@{nl="Opleiding"}}} } label="Template step"@{nl="Templatestap"}
  Checklist in Employee { template:Template, template_version:int label="Template version"@{nl="Templateversie"}, started:date label="Started on"@{nl="Gestart op"}, generation:text unique label="Generation reference"@{nl="Generatiereferentie"} } label="Onboarding checklist"@{nl="Inwerkchecklist"}
  export Step in Checklist { title:text trim min=1, due:date, assignee:user=parent.parent.user label="Assignee"@{nl="Toegewezen persoon"}, category:TemplateStep.category, document:file? label="Document attachment"@{nl="Documentbijlage"}, blocked_reason:text? label="Blocking reason"@{nl="Blokkeerreden"}, done:bool=false, completed_by:user? label="Completed by"@{nl="Afgerond door"}, completed_at:datetime? label="Completed at"@{nl="Afgerond op"} } label="Onboarding step"@{nl="Inwerkstap"}
  scenario template_changed on=Template.update
  scenario template_step_created on=TemplateStep.create
  scenario template_step_changed on=TemplateStep.update
  scenario template_step_removed on=TemplateStep.delete
  export scenario start(employee:Employee,template:Template) by=hr label="Start"@{nl="Starten"}
  export scenario complete(step:Step) by=hr or authenticated
  scenario reopen(step:Step,reason:text) by=hr
  export scenario work(locations:text[]) read=true scope=authority -> WorkBatch by=hr or authenticated
  export scenario work_detail(record:Step) read=true scope=authority -> WorkItem by=hr or authenticated
  style OnboardWorkspace $"Use a discreet readiness checklist with readable assigned steps, version context, and attachments. Make each recorded completion and remaining requirement easy to scan; keep employee identity and private onboarding information within their existing authorized views. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { home:Location? label="Home location"@{nl="Standplaats"}, view:enum(all,unfinished,overdue)=all label={text="Step view"@{nl="Stappenweergave"},values={all="All steps"@{nl="Alle stappen"},unfinished="Unfinished steps"@{nl="Onafgeronde stappen"},overdue="Overdue steps"@{nl="Achterstallige stappen"}}} }
INTERACTION REQUIREMENTS:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order navigation as My readiness, then Onboarding for HR coordinators. Employee/checklist/document details are contextual links, with HR document policies independent of shared work-profile visibility. Readiness and HR coordination remain normal workflows rather than an extra administration console.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My readiness — own/assigned index | Card with `breadcrumbs`, view Tabs + due-ordered step List (`empty` + `pagination`): category `badge`, title/due/done text, blocked `alert`, require-gated attachment Card with file `link`, completion attribution, bare complete action. | Complete only permitted assigned steps; upload never completes a step. |
| Onboarding — HR index | Employee Card (create form with `input` name/role, `select` home, `calendar` start; user/array inputs generated); coordination Card with Tabs + employee split List (`empty` + `pagination`, `edit`, `start` modal with template `select`, `deactivate` modal with `calendar` end date). | Canonical employee creation, one-shot checklist generation, owning deactivation. |
| Checklist coordination — contextual HR view | Checklist List (`empty` + `pagination`) with template/version/started text, `stat` counts, `progress`, step-create form with typed controls, completion `timeline`, filtered step List (category `badge`, blocked `alert`, attachment `link`, `edit`, bare complete, reopen `modal`, `delete`, `history`). | Add/edit/reassign/block/complete/reopen/archive under coordinator grants; denominator changes remain visible. |
| Reusable templates — HR view within index | Template create form (`input` name/role, `select` location) + split Template List (`empty` + `pagination`, `edit`, template-step form with `input`/`input`/`radio`, template-step List with category `badge`). | Maintain templates/steps; copies stay independent. |

On narrow screens, place due date, blocker explanation and the next authorized action above secondary history. Distinguish loading, no assigned steps, zero-progress empty checklists and filtered-empty. Keep unsaved notes/template edits on validation or stale submissions; show progress only from saved active steps. Document Buttons must report loading/denial without exposing another employee's filename or reusable private URL. Incomplete uploads remain unusable, and an optional attachment failure cannot erase an independently saved completion. Show configured training/task handoff outcomes and deactivation reconciliation as pending/conflict where applicable; checklist completion never grants application roles. Candidate feedback stays in hiring, and shared employee skill/status reads never reveal HR documents.

HARD CONSTRAINTS: Do not invent tests, quiz, assessment, sequential lesson gates, charts or completion percentages absent source. Every row's state/action availability must be coherent: pending leave is not schedule-confirmed or released; decide pending only, cancel approved only; a device request never grants confirmed access. A payment pending never means paid. Do not display staff links for customer/public actor. Preserve all required identity/role/context inputs and visible validation. Never give a cross-year or money total not supported by shown parts. This is a visual target; source remains authoritative.
```

### Superseded request 2

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
Also ensure Employee.create intake includes its required User account and Work locations controls from canonical employee owner. Existing Name may remain only as a read-only preview of selected User account, not a new Employee field. Preserve remaining steps/templates.
```


