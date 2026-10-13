# CanLearn exact image_gen requests

## Withdrawn mobile request (historical only)

The task-created `90-mobile-form.png` was removed after the user required desktop-only references. This exact submitted generation request is retained as historical provenance, not an active target or a request to restore a mobile image.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanLearn. Portrait mobile 430x1100, responsive labeled rows, stacked form, navigation overlay CLOSED, menu trigger top right; preserve dismissible RIGHT overlay behavior. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, accessible dark sans typography, spacious readable forms. One selected page, populated representative authorized records with source state values; show essential primary form and contextual details. Match the selected source hierarchy and permitted actions; never invent admin, extra navigation, metrics or integration success. A declared form's unspecified arguments still require generated labeled inputs from its schema; don't omit them. All navigation uses actual admitted static page titles ONLY. English human labels. Modals CLOSED unless source makes the essential form modal, then show one selected canonical modal. Long content may continue below fold; do not squash unreadable text. The image is a visual target, not evidence of functioning runtime. Show unknown/pending independently from success where provided.
Actual declared page navigation (filter by actor admission; exclude contextual/token routes):
  page /learning/mine title="My learning"@{nl="Mijn opleidingen"} $LearnWorkspace
  page /learning/courses title=page_learning_courses_title $LearnWorkspace
Selected owning page:
  page /learning/mine title="My learning"@{nl="Mijn opleidingen"} $LearnWorkspace
   require authenticated
   breadcrumbs
   tabs preferences.view
   list Enrollment as enrollment where enrollment.account==actor and (preferences.view==all or (preferences.view==required and enrollment.parent.required) or (preferences.view==optional and not enrollment.parent.required) or (preferences.view==overdue and enrollment.due!=null and enrollment.due<local_date(now,team.timezone) and enrollment.active and enrollment.progress<100)) and (preferences.location==null or preferences.location in enrollment.parent.locations) and (preferences.audience==null or enrollment.parent.audience==preferences.audience) order={by=preferences.order,default=[due,parent.title],cases={title=[parent.title,due]}} display=split empty="No enrolled courses"@{nl="Geen ingeschreven cursussen"}
    badge row.parent.audience
    text row.parent.title,row.due
    text row.active,row.parent.required
    progress row.progress max=100
    text row.total
    alert
     require not row.active or not actor.email_verified or not eligible(actor,row.parent)
     text "Lesson access unavailable; your acknowledgments remain in history."@{nl="Lesinhoud niet beschikbaar; je bevestigingen blijven in de historiek."}
    card "Acknowledgment history"@{nl="Bevestigingshistoriek"}
     require not row.active or not actor.email_verified or not eligible(actor,row.parent)
     table row.Completion columns=author,completed order=completed empty="No acknowledgments yet"@{nl="Nog geen bevestigingen"}
      pagination
    steps row.parent.Lesson
     slot item
      title row.title
      content row.content
      text any(enrollment.Completion as acknowledgment,acknowledgment.lesson==row)
      form complete arguments={enrollment=enrollment,lesson=row}
    pagination

Owning labels, data and canonical forms/style:
  message page_learning_courses_title = "Course authoring"@{nl="Cursussen beheren"}
  message label_Course_locations = "Locations"@{nl="Locaties"}
  message label_Course_required = "Required"@{nl="Verplicht"}
  message label_DraftLesson_content = "Lesson content"@{nl="Lesinhoud"}
  message label_DraftLesson_position = "Position"@{nl="Volgorde"}
  message label_Enrollment_account = "Account"@{nl="Account"}
  role instructor label="Instructor"@{nl="Docent"}
  Course { title:text, audience:enum(staff,member) label={text="Audience"@{nl="Doelgroep"},values={staff="Staff"@{nl="Personeel"},member="Member"@{nl="Lid"}}}, locations:Location[]! min=1 label=label_Course_locations, required:bool=false label=label_Course_required, revision:int=0 } label="Course"@{nl="Cursus"}
  DraftLesson in Course { title:text, content:text label=label_DraftLesson_content, position:int min=1 label=label_DraftLesson_position } label="Draft lesson"@{nl="Conceptles"}
  export Version in Course { number:int label="Course version number"@{nl="Cursusversienummer"}, audience:Course.audience, required:bool label=label_Course_required, title:text, locations:Location[]! min=1 label=label_Course_locations } label="Course version"@{nl="Cursusversie"}
  Lesson in Version { title:text, content:text label=label_DraftLesson_content, position:int label=label_DraftLesson_position } label="Lesson"@{nl="Les"}
  export Enrollment in Version { total:int min=0, account:user label=label_Enrollment_account, due:date?, active:bool=true } label="Enrollment"@{nl="Inschrijving"}
  Completion in Enrollment { lesson:Lesson, author:user server=actor label="Author"@{nl="Auteur"}, completed:datetime server=now label="Completed at"@{nl="Afgerond op"} } label="Lesson acknowledgment"@{nl="Lesbevestiging"}
  scenario publish(course:Course) by=instructor
  scenario enroll(version:Version,account:user label=label_Enrollment_account,due:date?) by=instructor label="Enroll learner"@{nl="Deelnemer inschrijven"}
  scenario complete(enrollment:Enrollment,lesson:Lesson) by=authenticated
  export scenario progress(enrollment:Enrollment) read=true -> Progress by=authenticated
  scenario withdraw(enrollment:Enrollment) by=instructor label="Withdraw"@{nl="Intrekken"}
  style LearnWorkspace $"Use generous typography for text courses and clear version context beside acknowledgment controls. Keep personal learning records and dated acknowledgment history easy to scan; avoid decorative progress indicators that imply unrecorded completion. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { view:enum(all,required,optional,overdue)=all label={text="Course view"@{nl="Cursusweergave"},values={all="All courses"@{nl="Alle cursussen"},required="Required courses"@{nl="Verplichte cursussen"},optional="Optional courses"@{nl="Optionele cursussen"},overdue="Overdue courses"@{nl="Achterstallige cursussen"}}}, location:Location?, audience:Course.audience?, order:enum(due,title)=due label={text="Course order"@{nl="Cursusvolgorde"},values={due="Due date"@{nl="Vervaldatum"},title="Course title"@{nl="Cursustitel"}}} }
Requirements describing interaction:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order navigation as My learning, then Course authoring for instructors. Enrolled course and lesson details are contextual links. Staff and member learners share presentation but retain distinct course audiences; team membership or a customer membership never reveals internal procedures.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My learning — authenticated own index | `breadcrumbs`, view Tabs + enrollment split List (preference-ordered, `empty` + `pagination`): audience `badge`, title/due text, active/required text, `progress` bar, require-gated `alert` + acknowledgment-history Card, ordered-lesson `steps` with per-lesson title/content, acknowledgment text and completion form. | Open enrolled versions; record own completion; withdrawn/ineligible readers keep history without lesson content. |
| Course authoring — instructor index | Course Card with inline course creation (`input` title, `radio` audience, `checkbox` required, generated locations) + split course List with audience `badge`, `edit` and Tabs (`empty` + `pagination`). | Create/edit courses under instructor authority. |
| Ordered draft lessons (tab) | Draft creation form (`input`/`textarea`/`input`), ordered draft List with `edit`/`delete`/`pagination`, bare publish action. | Arrange positions; publish freezes a version without touching existing denominators. |
| Published versions and enrollments (tab) | Version List with enroll `modal` (generated account, `calendar` due; version binds row), enrollment Table with `progress`, withdraw action and nested completion Table (`empty` + `pagination`). | Enroll eligible users; withdraw revokes access while retaining evidence. |

Keep lesson reading and the completion control accessible in one column on phones; long text must not hide the next permitted action. Show loading, no assigned courses, overdue-empty and no filter matches distinctly. Preserve unsaved draft text during invalid submission or language/theme changes. Refresh stale enrollment or version state and explain why a completion is unavailable without increasing progress. Duplicate acknowledgments show their saved outcome, not added progress. A zero-lesson enrollment clearly displays zero; a new published version never changes an existing enrollment's denominator. Instructor progress exports are scoped to the selected version and disclose no unrelated HR documents. Learning/authoring needs no added administration console.

Constraints: Sidebar MUST be right only, account bottom-right. Public actors have public navigation plus sign-in; never expose staff-only links. Preserve field/record permission boundaries. No fictional locations; use "Current location" and named fixture data or neutral sample names. Keep currency/timezone/unit labels near timed and monetary data. No imagined completion, physical access, availability, admin settings or operations.
```


Built-in tool mode; `transparent_background=false`. Current reference set: LEFT-sidebar desktop only. Each final request below was generation or a local PNG edit (`referenced_image_paths` points to the matching owning file). PNGs were copied to this folder after generation. No CLI fallback was used.

## 02-my-learning-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanLearn/playwright/references/02-my-learning-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit supplied desktop full-page reference ONLY shell orientation. LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Create ONE polished full-page desktop UI design reference for CanLearn, edge-to-edge 1440x1050 landscape viewport, no frame/browser chrome/collage/watermark. Light daisyUI neutral white and soft gray, restrained teal accent, crisp legible sans typography. This is an intended design, not a runtime screenshot. EXACT canonical shell: narrow collapsible navigation sidebar on RIGHT only, wordmark at top, page links below, account anchored BOTTOM RIGHT. Show only the current learner's admitted page "My learning", no staff links. Main content wide on left. State: active own staff course enrollment, first lesson acknowledged, next lesson ready to acknowledge. Comfortable real text lesson reading, exact version context, due date, modest recorded progress. Use no fictional functionality, analytics, quiz, certificate or video. Forms/actions must match source.
Authoritative selected page:
  page /learning/mine title="My learning"@{nl="Mijn opleidingen"} $LearnWorkspace
   require authenticated
   breadcrumbs
   tabs preferences.view
   list Enrollment as enrollment where enrollment.account==actor and (preferences.view==all or (preferences.view==required and enrollment.parent.required) or (preferences.view==optional and not enrollment.parent.required) or (preferences.view==overdue and enrollment.due!=null and enrollment.due<local_date(now,team.timezone) and enrollment.active and enrollment.progress<100)) and (preferences.location==null or preferences.location in enrollment.parent.locations) and (preferences.audience==null or enrollment.parent.audience==preferences.audience) order={by=preferences.order,default=[due,parent.title],cases={title=[parent.title,due]}} display=split empty="No enrolled courses"@{nl="Geen ingeschreven cursussen"}
    badge row.parent.audience
    text row.parent.title,row.due
    text row.active,row.parent.required
    progress row.progress max=100
    text row.total
    alert
     require not row.active or not actor.email_verified or not eligible(actor,row.parent)
     text "Lesson access unavailable; your acknowledgments remain in history."@{nl="Lesinhoud niet beschikbaar; je bevestigingen blijven in de historiek."}
    card "Acknowledgment history"@{nl="Bevestigingshistoriek"}
     require not row.active or not actor.email_verified or not eligible(actor,row.parent)
     table row.Completion columns=author,completed order=completed empty="No acknowledgments yet"@{nl="Nog geen bevestigingen"}
      pagination
    steps row.parent.Lesson
     slot item
      title row.title
      content row.content
      text any(enrollment.Completion as acknowledgment,acknowledgment.lesson==row)
      form complete arguments={enrollment=enrollment,lesson=row}
    pagination

Authoritative source context:
# Help workspace operators deliver text-based staff induction, safety procedures, and member orientation. @{nl="Help werkplekbeheerders tekstgebaseerde personeelsintroductie, veiligheidsprocedures en ledenoriëntatie aan te bieden."}
app CanLearn uses=[learn]

# Publish immutable text-course versions and record each learner's own acknowledgments. @{nl="Publiceer onveranderlijke tekstcursusversies en registreer de eigen bevestigingen van iedere deelnemer."}
package learn label="Learning"@{nl="Opleidingen"}
 use rent_catalog {Location,test_site}
 use employee {Employee,can_work,staff as is_staff,test_worker}
 use member_terms {Term,eligible_term,paid_term,allocated}
 use customer {test_contact,test_admin}
 Given
  message page_learning_courses_title = "Course authoring"@{nl="Cursussen beheren"}
  message label_Course_locations = "Locations"@{nl="Locaties"}
  message label_Course_required = "Required"@{nl="Verplicht"}
  message label_DraftLesson_content = "Lesson content"@{nl="Lesinhoud"}
  message label_DraftLesson_position = "Position"@{nl="Volgorde"}
  message label_Enrollment_account = "Account"@{nl="Account"}
  role instructor label="Instructor"@{nl="Docent"}
  Course { title:text, audience:enum(staff,member) label={text="Audience"@{nl="Doelgroep"},values={staff="Staff"@{nl="Personeel"},member="Member"@{nl="Lid"}}}, locations:Location[]! min=1 label=label_Course_locations, required:bool=false label=label_Course_required, revision:int=0 } label="Course"@{nl="Cursus"}
  DraftLesson in Course { title:text, content:text label=label_DraftLesson_content, position:int min=1 label=label_DraftLesson_position } label="Draft lesson"@{nl="Conceptles"}
  export Version in Course { number:int label="Course version number"@{nl="Cursusversienummer"}, audience:Course.audience, required:bool label=label_Course_required, title:text, locations:Location[]! min=1 label=label_Course_locations } label="Course version"@{nl="Cursusversie"}
  Lesson in Version { title:text, content:text label=label_DraftLesson_content, position:int label=label_DraftLesson_position } label="Lesson"@{nl="Les"}
  export Enrollment in Version { total:int min=0, account:user label=label_Enrollment_account, due:date?, active:bool=true } label="Enrollment"@{nl="Inschrijving"}
  Completion in Enrollment { lesson:Lesson, author:user server=actor label="Author"@{nl="Auteur"}, completed:datetime server=now label="Completed at"@{nl="Afgerond op"} } label="Lesson acknowledgment"@{nl="Lesbevestiging"}
  derive Enrollment.progress:decimal = count(row.Completion)*100/max([1,row.total]) label="Progress"@{nl="Voortgang"}
  derive eligible(account:user,version:Version):bool = (version.audience==staff and is_staff(account) and any(version.locations as location,can_work(account,location))) or (version.audience==member and any(Term as term,eligible_term(account,term,now) and any(version.locations as location,location in term.locations and location.active)))
  export contract Progress { enrollment:Enrollment, version:Version, completed:int, total:int, percentage:decimal, active:bool }
  policy Course read=instructor where=all(row.locations as location,can_work(actor,location))
  policy DraftLesson read=instructor where=all(row.parent.locations as location,can_work(actor,location))
  policy Version read=instructor where=all(row.locations as location,can_work(actor,location))
  policy Version read=authenticated where=any(row.Enrollment as enrollment,enrollment.account==actor)
  policy Lesson read=instructor where=all(row.parent.locations as location,can_work(actor,location))
  policy Lesson read=authenticated where=actor.email_verified and eligible(actor,row.parent) and any(row.parent.Enrollment as enrollment,enrollment.account==actor and enrollment.active)
  policy Enrollment read=instructor where=all(row.parent.locations as location,can_work(actor,location))
  policy Enrollment read=authenticated where=row.account==actor
  policy Completion read=instructor where=all(row.parent.parent.locations as location,can_work(actor,location))
  policy Completion read=authenticated where=row.parent.account==actor
  unique DraftLesson fields=position
  unique Lesson fields=position
  lock Enrollment fields=account,total
  unique Version fields=number
  unique Enrollment fields=account
  unique Completion fields=lesson
  invariant Completion: row.lesson.parent==row.parent.parent
  lock Version fields=number,audience,required,title,locations
  lock Lesson fields=title,content,position
  lock Completion fields=lesson,author,completed
  fixture course_instructor=user {roles=[instructor]}
  fixture course_learner=user {}
  fixture instructor_employee=Employee {user=course_instructor,home=test_site,locations=[test_site],start=date("2020-01-01"),role="Instructor"}
  fixture learner_employee=Employee {user=course_learner,home=test_site,locations=[test_site],start=date("2020-01-01"),role="Learner"}
  fixture course=Course {title="Opening",audience=staff,locations=[test_site]}
  fixture published=Version {parent=course,number=1,audience=staff,required=true,title="Opening",locations=[test_site]}
  fixture lesson=Lesson {parent=published,title="Unlock",content="Follow procedure",position=1}
  fixture enrolled=Enrollment {parent=published,account=self,total=1}
  fixture acknowledged=Completion {parent=enrolled,lesson}

Requirements:
# CanLearn requirements

Inherits [canlang requirements](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md) and [workspace operator context](../../WORKSPACE_OPERATOR.md), with [portfolio composition](../../PORTFOLIO.md). Companion draft: [CanLearn.can](CanLearn.can).

## Purpose and Adoption Goal

Help workspace operators deliver text-based staff induction, safety procedures, and member orientation. Adoption depends on each person finding the correct published training and managers seeing attributable completion.

## Users and Permissions

Instructors manage course content and enrollments. Authenticated learners read lesson content only in their active, currently eligible published enrollment and record only their own completions. Withdrawn learners retain their own version metadata and completion evidence. Team membership is not a substitute for learner access.

## Data and Ownership

Courses have a title; lessons have title, text content, and ordered position. Course publication creates a version with an ordered lesson set. Enrollment links a user to that version and active/withdrawn status. Completion is unique by enrollment and lesson and records its actor/time; zero-lesson progress is zero.

Record course audience, applicable locations, required/optional status, enrollment due date, and completion version. Member learners and staff learners are distinct authorized audiences; customer membership alone cannot expose internal operating procedures.

## Workflows and Business Rules

Learners mark a lesson complete only within their enrolled version. Publication freezes the lesson set for existing enrollments, so later edits/new lessons do not silently change their progress. Withdrawal revokes lesson access while preserving authorized completion history.

Assign required training manually or through an explicitly configured enrollment capability. A new mandatory procedure version creates a new enrollment requirement without erasing completion of the old version. Text-lesson completion records an acknowledgment, not proof of examination or certification.

## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order navigation as My learning, then Course authoring for instructors. Enrolled course and lesson details are contextual links. Staff and member learners share presentation but retain distinct course audiences; team membership or a customer membership never reveals internal procedures.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My learning — authenticated own index | `breadcrumbs`, view Tabs + enrollment split List (preference-ordered, `empty` + `pagination`): audience `badge`, title/due text, active/required text, `progress` bar, require-gated `alert` + acknowledgment-history Card, ordered-lesson `steps` with per-lesson title/content, acknowledgment text and completion form. | Open enrolled versions; record own completion; withdrawn/ineligible readers keep history without lesson content. |
| Course authoring — instructor index | Course Card with inline course creation (`input` title, `radio` audience, `checkbox` required, generated locations) + split course List with audience `badge`, `edit` and Tabs (`empty` + `pagination`). | Create/edit courses under instructor authority. |
| Ordered draft lessons (tab) | Draft creation form (`input`/`textarea`/`input`), ordered draft List with `edit`/`delete`/`pagination`, bare publish action. | Arrange positions; publish freezes a version without touching existing denominators. |
| Published versions and enrollments (tab) | Version List with enroll `modal` (generated account, `calendar` due; version binds row), enrollment Table with `progress`, withdraw action and nested completion Table (`empty` + `pagination`). | Enroll eligible users; withdraw revokes access while retaining evidence. |

Keep lesson reading and the completion control accessible in one column on phones; long text must not hide the next permitted action. Show loading, no assigned courses, overdue-empty and no filter matches distinctly. Preserve unsaved draft text during invalid submission or language/theme changes. Refresh stale enrollment or version state and explain why a completion is unavailable without increasing progress. Duplicate acknowledgments show their saved outcome, not added progress. A zero-lesson enrollment clearly displays zero; a new published version never changes an existing enrollment's denominator. Instructor progress exports are scoped to the selected version and disclose no unrelated HR documents. Learning/authoring needs no added administration console.

## Personal Configuration

Inherit shared account/language/appearance persistence, validation and reset. Learners may remember required/optional or overdue filters and their preferred course-list order; instructors may remember permitted audience/location filters. Provide clear/reset and revalidate saved filter access. Preferences do not enroll a person, select a different authoritative course version, mark lessons complete or expose drafts. Reading preferences cannot rewrite enrolled content or certify learners.

## Interfaces and Integrations

Use D1 for course, enrollment, and completion records.

## Background Actions

None in the first version.

## Error Handling

Explain duplicate completions and lesson/course mismatches. Reject invalid completion records without increasing progress.

## Scope and Completion

Complete when a learner can actually access and complete an enrolled course, another learner cannot alter that progress, and content revision does not rewrite an old enrollment's denominator. Initial lessons are text content.

A new receptionist can acknowledge the published opening procedures, and a member can complete their own site orientation without reading staff-only lessons.

Frontend journey: a member learner opens their enrolled orientation, reads ordered text and acknowledges a lesson; duplicate submission shows the prior result, while staff-only courses stay absent from navigation and direct access.

Frontend journey: an instructor publishes a revised procedure and exports progress for the earlier version. Existing learners retain that version's lesson denominator; withdrawing an enrollment removes its lesson actions and explains the unavailable state without erasing history.

## Composition and Ownership

Recommended placement: People development. Own published courses, versioned enrollments and completion evidence. Staff and member audiences remain distinct even within shared navigation. CanOnboard references completion through a scoped capability instead of copying a writable progress flag. See [portfolio composition and ownership](../../PORTFOLIO.md). Focused example requirements remain valid; composing packages does not require a new source file or an independent deployment per package.

### Authored audience and progress contract

Enrollment now checks the actual version audience. Staff admission requires current staff eligibility at an applicable location; member admission uses a current paid, eligible CanMember term at an applicable location. Lesson reads and acknowledgments repeat current audience checks, so expired membership or removed staff access cannot be bypassed with an old enrollment link. Instructors are limited to their authorized version locations.

Enrollment freezes its lesson total. Withdrawn learners can still read their own version metadata and acknowledgment evidence without retaining lesson-content access; progress remains based on the frozen total. Repeating acknowledgment of the same lesson returns the existing saved state instead of creating another completion. Draft and published lesson positions are unique within their owner.

The exported canonical `progress(enrollment)` read returns only the exact authorized enrollment/version and its counts. Consumers bind that typed operation under the learner's or instructor's existing authority; it grants no unrestricted HR access or writable completion flag. The instructor's selected-version enrollment/completion tables use the standard permission-scoped CSV export. No enrollment email was added: the requirements explicitly specify no background actions for this version. The old backlog item requesting enrollment notices was not an app requirement.

Inline examples distinguish staff and member enrollment, unpaid member rejection, withdrawal and duplicate acknowledgment. These remain authored expectations rather than executed tests.

### October 4 draft correspondence correction

Personal configuration now declares permitted location/audience choices and due/title list ordering, using the shared preference-order contract rather than duplicate list variants. The own-enrollment query applies those choices; instructor authoring uses the same saved audience/location. Overdue means an active, incomplete enrollment past its due date, not a completed or withdrawn history row. The inaccessible-content card explains withdrawal/current eligibility loss while retaining attributed acknowledgments; sorted split lesson selection and Boolean acknowledgment display reuse canonical components. No frontend business state or extra page shell is added.

A named instructor and learner with real current Employee grants author one course/lesson, publish, enroll, reject instructor acknowledgment, acknowledge twice without duplication, edit the draft, publish/enroll a new version, reject a cross-version lesson, withdraw and read the exact retained original progress. This one attached 14-call journey establishes authored causal expectations for unchanged old content/denominator and preserved completion; it remains unexecuted. Existing staff/member, unpaid-term and isolated withdrawal examples remain. Live publication/enrollment requires lessons; the zero-denominator rule is defensive for retained/imported historical snapshots, not permission to publish an empty live course.

The syntax prototype does not implement attached sequences or preference ordering. A temporary projection excludes the sequence and reduces only the preference order object to its default selector list to check surrounding declarations/legacy tables. No matching MJS target exists for this app; none is added solely for symmetry. These checks do not execute learning, verify rendered accessibility or certify every runtime acceptance case.

Enrollment tables explicitly seed their published lesson. Referencing a Version loads its own dependency closure, not every declared child fixture; without that lesson the existing nonempty-version guard correctly rejects enrollment.

Complete source controls may flow naturally below initial fold. Preserve canonical form labels; English rendering. Do not display source code.
```

## 03-learning-courses-desktop.png

### Active final edit request

Edit input: `/Users/vince/Projects/canlang/draft/apps/CanLearn/playwright/references/03-learning-courses-desktop.png`.

```text
Use case: ui-mockup precise-object-edit. Edit the supplied full page reference. Remove the fictional 'Riverside Office' everywhere, keeping only 'Current location'. Preserve all existing layout and controls. No new operations, metrics, fields outside this correction. Preserve light daisyUI theme, LEFT sidebar and bottom-right account on desktop; closed mobile overlay on portrait. Return ONE full-page actual UI image, no frame/collage.
LATEST USER OVERRIDE takes precedence over original shell notes: DESKTOP ONLY, collapsible sidebar on LEFT; app wordmark at TOP LEFT, canonical account menu anchored BOTTOM LEFT. Main page content to the RIGHT. Move the entire existing sidebar across without mirroring text/icons. Preserve every existing source field, state, action, control and data/permission distinction (except explicit correction above). Keep edge-to-edge actual full-page UI, no frame/collage.
```

### Superseded request

Historical exact text; not the active shell or target.

```text
Use case: ui-mockup. Generate ONE polished full-page intended app design for CanLearn. Desktop 1440x1100 landscape, wide main content LEFT; narrow collapsible page navigation sidebar RIGHT, wordmark TOP RIGHT, user menu anchored BOTTOM RIGHT. Edge-to-edge actual page only. No device/frame/browser chrome/collage/watermark/annotation. Light neutral daisyUI theme, white cards, subtle gray borders, restrained teal primary, accessible dark sans typography, spacious readable forms. One selected page, populated representative authorized records with source state values; show essential primary form and contextual details. Match the selected source hierarchy and permitted actions; never invent admin, extra navigation, metrics or integration success. A declared form's unspecified arguments still require generated labeled inputs from its schema; don't omit them. All navigation uses actual admitted static page titles ONLY. English human labels. Modals CLOSED unless source makes the essential form modal, then show one selected canonical modal. Long content may continue below fold; do not squash unreadable text. The image is a visual target, not evidence of functioning runtime. Show unknown/pending independently from success where provided.
Actual declared page navigation (filter by actor admission; exclude contextual/token routes):
  page /learning/mine title="My learning"@{nl="Mijn opleidingen"} $LearnWorkspace
  page /learning/courses title=page_learning_courses_title $LearnWorkspace
Selected owning page:
  page /learning/courses title=page_learning_courses_title $LearnWorkspace
   require instructor
   breadcrumbs
   card page_learning_courses_title
    form Course.create
     input title
     radio audience
     checkbox required
     ## locations keeps its generated control (array input has no catalog control).
    list Course as course where preferences.location==null or preferences.location in course.locations filter=audience,required defaults={audience=preferences.audience} search=title display=split empty="No courses yet"@{nl="Nog geen cursussen"}
     badge row.audience
     edit
     tabs
      tab "Ordered draft lessons"@{nl="Geordende conceptlessen"}
       form DraftLesson.create
        input title
        textarea content
        input position
       list row.DraftLesson order=position empty="No draft lessons yet"@{nl="Nog geen conceptlessen"}
        edit
        delete
        pagination
       action publish
      tab "Published versions and enrollments"@{nl="Gepubliceerde versies en inschrijvingen"}
       list row.Version empty="No published versions yet"@{nl="Nog geen gepubliceerde versies"}
        badge row.audience
        button opens=enroll
        modal "Enroll learner"@{nl="Deelnemer inschrijven"} id=enroll
         slot content
          form enroll arguments={version=row} display=inline
           ## account:user stays generated: no user-picker vocabulary.
           calendar due
        table row.Enrollment columns=account,due,active,total,progress empty="No enrollments yet"@{nl="Nog geen inschrijvingen"}
         progress row.progress max=100
         action withdraw
         table row.Completion columns=lesson,author,completed order=completed empty="No acknowledgments yet"@{nl="Nog geen bevestigingen"}
          pagination
         pagination
        pagination
     pagination
Owning labels, data and canonical forms/style:
  message page_learning_courses_title = "Course authoring"@{nl="Cursussen beheren"}
  message label_Course_locations = "Locations"@{nl="Locaties"}
  message label_Course_required = "Required"@{nl="Verplicht"}
  message label_DraftLesson_content = "Lesson content"@{nl="Lesinhoud"}
  message label_DraftLesson_position = "Position"@{nl="Volgorde"}
  message label_Enrollment_account = "Account"@{nl="Account"}
  role instructor label="Instructor"@{nl="Docent"}
  Course { title:text, audience:enum(staff,member) label={text="Audience"@{nl="Doelgroep"},values={staff="Staff"@{nl="Personeel"},member="Member"@{nl="Lid"}}}, locations:Location[]! min=1 label=label_Course_locations, required:bool=false label=label_Course_required, revision:int=0 } label="Course"@{nl="Cursus"}
  DraftLesson in Course { title:text, content:text label=label_DraftLesson_content, position:int min=1 label=label_DraftLesson_position } label="Draft lesson"@{nl="Conceptles"}
  export Version in Course { number:int label="Course version number"@{nl="Cursusversienummer"}, audience:Course.audience, required:bool label=label_Course_required, title:text, locations:Location[]! min=1 label=label_Course_locations } label="Course version"@{nl="Cursusversie"}
  Lesson in Version { title:text, content:text label=label_DraftLesson_content, position:int label=label_DraftLesson_position } label="Lesson"@{nl="Les"}
  export Enrollment in Version { total:int min=0, account:user label=label_Enrollment_account, due:date?, active:bool=true } label="Enrollment"@{nl="Inschrijving"}
  Completion in Enrollment { lesson:Lesson, author:user server=actor label="Author"@{nl="Auteur"}, completed:datetime server=now label="Completed at"@{nl="Afgerond op"} } label="Lesson acknowledgment"@{nl="Lesbevestiging"}
  scenario publish(course:Course) by=instructor
  scenario enroll(version:Version,account:user label=label_Enrollment_account,due:date?) by=instructor label="Enroll learner"@{nl="Deelnemer inschrijven"}
  scenario complete(enrollment:Enrollment,lesson:Lesson) by=authenticated
  export scenario progress(enrollment:Enrollment) read=true -> Progress by=authenticated
  scenario withdraw(enrollment:Enrollment) by=instructor label="Withdraw"@{nl="Intrekken"}
  style LearnWorkspace $"Use generous typography for text courses and clear version context beside acknowledgment controls. Keep personal learning records and dated acknowledgment history easy to scan; avoid decorative progress indicators that imply unrecorded completion. Keep daisyUI theme and shared shell defaults, canonical permissions/actions, localized labels, complete forms/errors, visible keyboard focus, and responsive stacking. Apply consistently to each styled page content scope; keep page admission and the shared shell unchanged."
  preferences { view:enum(all,required,optional,overdue)=all label={text="Course view"@{nl="Cursusweergave"},values={all="All courses"@{nl="Alle cursussen"},required="Required courses"@{nl="Verplichte cursussen"},optional="Optional courses"@{nl="Optionele cursussen"},overdue="Overdue courses"@{nl="Achterstallige cursussen"}}}, location:Location?, audience:Course.audience?, order:enum(due,title)=due label={text="Course order"@{nl="Cursusvolgorde"},values={due="Due date"@{nl="Vervaldatum"},title="Course title"@{nl="Cursustitel"}}} }
Requirements describing interaction:
## Pages and Interactions

Use the [shared shell and personal configuration](https://github.com/veighnsche/canlang/blob/main/docs/specification/REQUIREMENTS.md#standard-shell-and-personal-configuration). Order navigation as My learning, then Course authoring for instructors. Enrolled course and lesson details are contextual links. Staff and member learners share presentation but retain distinct course audiences; team membership or a customer membership never reveals internal procedures.

| Page or destination | daisyUI layout and content | Canonical actions and conditions |
| --- | --- | --- |
| My learning — authenticated own index | `breadcrumbs`, view Tabs + enrollment split List (preference-ordered, `empty` + `pagination`): audience `badge`, title/due text, active/required text, `progress` bar, require-gated `alert` + acknowledgment-history Card, ordered-lesson `steps` with per-lesson title/content, acknowledgment text and completion form. | Open enrolled versions; record own completion; withdrawn/ineligible readers keep history without lesson content. |
| Course authoring — instructor index | Course Card with inline course creation (`input` title, `radio` audience, `checkbox` required, generated locations) + split course List with audience `badge`, `edit` and Tabs (`empty` + `pagination`). | Create/edit courses under instructor authority. |
| Ordered draft lessons (tab) | Draft creation form (`input`/`textarea`/`input`), ordered draft List with `edit`/`delete`/`pagination`, bare publish action. | Arrange positions; publish freezes a version without touching existing denominators. |
| Published versions and enrollments (tab) | Version List with enroll `modal` (generated account, `calendar` due; version binds row), enrollment Table with `progress`, withdraw action and nested completion Table (`empty` + `pagination`). | Enroll eligible users; withdraw revokes access while retaining evidence. |

Keep lesson reading and the completion control accessible in one column on phones; long text must not hide the next permitted action. Show loading, no assigned courses, overdue-empty and no filter matches distinctly. Preserve unsaved draft text during invalid submission or language/theme changes. Refresh stale enrollment or version state and explain why a completion is unavailable without increasing progress. Duplicate acknowledgments show their saved outcome, not added progress. A zero-lesson enrollment clearly displays zero; a new published version never changes an existing enrollment's denominator. Instructor progress exports are scoped to the selected version and disclose no unrelated HR documents. Learning/authoring needs no added administration console.

Constraints: Sidebar MUST be right only, account bottom-right. Public actors have public navigation plus sign-in; never expose staff-only links. Preserve field/record permission boundaries. No fictional locations; use "Current location" and named fixture data or neutral sample names. Keep currency/timezone/unit labels near timed and monetary data. No imagined completion, physical access, availability, admin settings or operations.
```


