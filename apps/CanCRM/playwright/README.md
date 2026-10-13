# CanCRM browser acceptance

[Source](../CanCRM.can) and [requirements](../CanCRM.md) own this app's behavior. The local entry uses the shared suite to derive current selection, routes and inline examples; it starts the real dev preview and refuses unsupported runtime coverage. No parallel app manifest is authoritative.

```sh
bun run test:draft -- CanCRM/playwright/app.spec.ts
bun run test:draft:coverage -- CanCRM
```

Declared routes: `/sales`. Selected-app compilation must establish which routes belong to each declared composition.

Browser setup requires verified team identities with the current source-defined member and account grants. The default Ava/Ben preview memberships have no custom role grants; team ownership is insufficient. Authored fixtures available to the example runner: `colleague`, `prospect`, `research_intake`, `sale_plan`, `sale_membership`, `paid_term`, `prior_sale`, `linked_tour`, `linked_quote`, `reviewed_link`. These isolated example fixtures do not seed the serving browser. Resolve genuine imported declarations: `customer {Customer,Contact,duplicate_customers,duplicate_contacts,Alias,CompanyRole,Invitation,alias as customer_alias,invite as invite_company,recover as recover_company,claim as claim_contact,accept as accept_invitation,remove as remove_company_role,test_company,test_contact}`; `appointments {Calendar,Window,Type,Appointment,book as book_tour,cancel as cancel_tour,attendance as tour_attendance,booked}`; `propose {Proposal,Revision,Item,revise as revise_quote,send_offer,document as quote_document,request_booking,current_offer}`; `employee {Employee,can_work,test_worker}`; `rent_catalog {Location,test_site}`; `rent_reservations {Booking}`; `member_terms {Membership,Term}`; `member_plans {Plan}`. Provision owning records and declared file/provider resources under their actual authority before populated journeys; record an unavailable binding with its owner and release condition.

Required app journeys:

- A salesperson qualifies a six-seat day-office inquiry, opens its linked contact, records tour/quote activity and a dated follow-up, then closes and reopens the deal with full stage history.
- A duplicate CSV row remains visible for review; archiving a referenced contact leaves existing deals attributable, and unlike-currency pipeline amounts remain separate.

Required browser states include the permitted empty and populated route, in-flight canonical submission, validation error with corrected retry, failure with retained input, denied route/control/direct request, and reload of committed data. Exercise only states meaningful for the declared operation; provider uncertainty must retain its app-defined state rather than becoming success. Check desktop and narrow-screen navigation, focus, labels, dialogs/drawers, filtering/paging and personal settings where authored.

Semantic browser journey bodies for the workflows above remain unimplemented until the real role/data/resource setup is available. Passing source examples and route checks do not establish all functionality or every UI state. Coverage must keep this gap visible and must not convert it into skipped, placeholder or passing semantic tests.

`references/` holds design concepts; these are not screenshots of a running app. Actual captures and comparison results belong in results, and accepted runtime baselines remain separate. Tolerant visual checks should compare composition, spacing, readability and responsive structure while allowing small rendering/font differences; reference similarity alone cannot establish functional correctness. Missing references, baselines, captures or semantic states remain explicit coverage gaps.
