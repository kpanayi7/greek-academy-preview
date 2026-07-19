# Greek Academy — Content Notes (scraped from thegreekacademy.co.uk)

Source: live WordPress site thegreekacademy.co.uk, fetched 2026-07-19 (raw HTML in scratchpad
`ga-raw/`, not committed). All facts below are taken verbatim/near-verbatim from the live pages.
British English throughout. This file is the single source of facts for all later page-build tasks.

Global nav (present on every page, same order site-wide):
About Us · Committee · Policies (dropdown: Anti-Bullying Policy, Behaviour Policy, GDPR Policy,
Mobile Phone Policy, Risk Assessment Policy, Safeguarding Policy) · Term Dates · Events ·
Enrolment/Fees · Registration 25/26 · Gallery · Contact Us

Footer on every page: "Copyright © 2026 The Greek Academy"

---

## Home

- Page title: "The Greek Academy – The Greek Academy"
- Hero: "Welcome to The Greek Academy" — "Welcome to The Greek Academy, located in North London!
  We are proud to offer a comprehensive educational experience for students from nursery through
  to GCSE levels."
- Body copy (verbatim, four paragraphs):
  1. "At The Greek Academy, we are dedicated to providing a nurturing and stimulating environment
     where students can thrive academically, culturally, and socially. Our committed committee,
     made up of passionate educators and professionals, ensures the smooth operation of our school
     and maintains the highest standards of education."
  2. "Our nursery lays a solid foundation for our young learners, promoting their growth and
     development through engaging activities and play-based learning. We take great pride in our
     Greek and Cypriot cultural immersion programme, which is an integral part of our curriculum.
     Through interactive lessons, dancing classes, cultural events, and celebrations, we aim to
     instil a deep appreciation for Greek and Cypriot heritage, language, and traditions in our
     students. This immersion programme not only enhances their linguistic abilities but also
     fosters a strong sense of identity and connection to their Greek roots."
  3. "We understand the importance of preparing our students for the challenges of their academic
     journey. Our pre-GCSE programme offers a rigorous academic curriculum, personalised
     instruction, and comprehensive support to ensure our students excel in their studies and are
     well-prepared for the next stage of their education."
  4. "At The Greek Academy, we prioritise creating a warm, inclusive, and supportive learning
     community. Our highly qualified and dedicated teachers go above and beyond to inspire a love
     for learning, encourage critical thinking, and nurture the holistic development of each
     student."
  5. Closing CTA line: "We invite you to join us at The Greek Academy, where we combine academic
     excellence, Greek cultural immersion, and a passionate committee to provide a truly enriching
     educational experience for your child."
- Featured/promo tiles on homepage (slider/cards): "Registration Form 2025/2026", "Advert for 2026
  D&D Brochure", "TGA Dinner & Dance 2026 - Booking Form"
- **Homepage photo gallery** (WordPress `[gallery]` shortcode, real class photos, NOT a text-only
  chip list — confirmed via `<figure class="gallery-item">`/`<figcaption>` markup, images hosted at
  `wp-content/uploads/2024/07/DSC0673x.jpg` etc., 10 photos total): captions in order are Nursery,
  Year 1, Year 1+, Year 1+ (this caption genuinely repeats twice — confirmed not a scrape/markup
  artefact, both are distinct images), Year 2, Year 3, Year 4, Year 5, Year 6, Pre GCSE. Note this
  contradicts the dedicated Gallery page, which is a "COMING SOON!" placeholder with no photos —
  the only real photo content on the whole site is this homepage strip. Later page-build task
  should decide whether to reuse these year-group photo captions as placeholder gallery content.
- "Contact us" block on home page:
  - "The Greek Academy operates on Tuesday evenings during term time from 5pm till 8pm."
  - Address: "Grange Park Primary School, Worlds End Lane, London, N21 1PP"
  - Telephone: 07398 904 535
  - Email: info@thegreekacademy.co.uk
  - Headteacher: headteacher@thegreekacademy.co.uk

## About

- Page title: "About Us – The Greek Academy"
- H1: "About Us"
- Opens "Dear parents," — "We are eager to welcome all our returning students and greet the new
  children joining us this year." / "The Committee has been working diligently to ensure the
  school can open safely and securely. We would like to share an overview of our reopening plan
  with you."
- **The School Day**: "Children should arrive promptly at Greek school for a 5 pm start, where our
  head teacher will lead the assembly and prayers. This is a wonderful opportunity for the entire
  school to come together. After the assembly, teachers will escort students to their individual
  classes."
- **Drop-off and Pick-up**: "Due to limited parking at our location, we kindly ask parents to park
  on the main road or at the nearby Sainsbury's and walk their children to the designated Greek
  School entrance. A committee member will guide them to the hall for assembly. Please park
  considerately around the school, keeping in mind residents and others crossing the road. It is
  crucial that you walk your child into the school rather than dropping them off at the gate. For
  pick-up, you may use the school car park, though it is not very large. Please arrive in time to
  walk to the hall by 8 pm, where teachers will bring the children."
- **What Children Will Need Each Week**: "The school provides textbooks and exercise books for all
  children, except GCSE students, who should bring their own A4 notepads. Children must bring these
  books every week and take care of them at home. Additionally, they should bring a fully stocked
  pencil case with coloured pencils; older students will also need highlighters." / "Please provide
  your child with a snack and water bottle for break time. Snacks and water are also available for
  purchase at the tuck shop, so consider giving your child some money if they wish to use this
  service. A committee member or volunteer will assist younger children with buying snacks, which
  is often their favourite part of Greek School!"
- **Curriculum, Learning, and Homework**: "Like other Greek Schools in London, our children follow
  a curriculum suited to their age or ability level and will receive the necessary books and
  resources. Teachers will stay in regular contact with you via email or Remind, updating you on
  what the children have been learning." / "These platforms will also be used to share homework
  assignments, which are expected to be completed by the next lesson. Since teachers see the
  students only once a week, it is vital that they complete their homework to retain their
  learning. Please encourage your children to do their homework and, if possible, practise
  speaking Greek with them at home." / "There will be two designated Parents' Evenings throughout
  the year, where you can meet with your child's teacher to discuss their progress. If you need to
  speak with them at any other time, they are available for a quick chat immediately after school
  or via email."

## Committee

- NOTE: nav/site links to `/committee/` 404 on the live site (typo confirmed: actual working slug
  is `/committe/` — missing an "e"). Content fetched successfully from `/committe/`.
- Page title: "Committe – The Greek Academy" (typo present on live site itself, in the page title)
- H1: "Committee"
- Intro: "The Greek Academy is proud to have a dedicated Parent Committee that is essential to the
  school's efficient operation. You will see their friendly faces around the school each week
  during drop-off and pick-up times, and they stay at the school for the duration of lessons every
  Tuesday. Their duties include running the tuck shop, supporting teachers, supervising break time,
  and most importantly, helping the children. Each committee member holds an up-to-date DBS
  certificate. If you have any questions or concerns, they are always available to talk in the
  hall when school ends."
- "Additionally, the committee organises various events such as dinner and dances and numerous
  fundraisers to support the school. Last year, they hosted pizza and hot dog nights, as well as a
  Halloween event with fancy dress and games. Details of upcoming events will be shared with
  parents on the website and via email, so please make sure to check these regularly."
- **Committee members (name — role), verbatim list**:
  1. Alexi Poyiadzis — Chairman/Treasurer
  2. Andreas Christou — Vice Chairman
  3. Kia Pugliese — Events Lead
  4. Maria Ellinas — Events Lead
  5. Lia Elia — Communications Lead
  6. Kyri Panayi — IT Lead

## Contact

- Page title: "Contact Us – The Greek Academy"
- H1/H2: "Contact Us" (appears twice — page heading + form-block heading)
- Address: "The Greek Academy, Grange Park Primary School, Worlds End Lane, London, N21 1PP"
- Email: info@thegreekacademy.co.uk
- Phone: 07398 904 535
- Contact form (JS-driven form; note "Please enable JavaScript in your browser to complete this
  form."), fields in order:
  1. Name — required (label shows "Name *")
  2. Email — required
  3. Phone — required
  4. Subject — required
  5. Message — required
  - Note: text extraction shows a duplicate bare "Name" label after Message before the submit
    button — likely a honeypot/hidden anti-spam field artefact of the form plugin, not a genuine
    second visible field. Submit button label: "Send Message"
- Locality: Grange Park Primary School (Worlds End Lane, N21 1PP) is in Winchmore Hill, North London. [Source: established in the client-approved 13 July mockup — site title, meta description and header brand line all read "Winchmore Hill"; N21 is the Winchmore Hill postal district.]

## Enrolment / Fees

- Page title: "Enrolment/Fees – The Greek Academy"
- H1: "Enrolment / Fees"
- Intro: "To enrol your child, please complete the registration form, which can be found [here]."
  "Once registered, your child can begin a two-week free trial at The Greek Academy before you
  commit to joining. After accepting your child's place, the first instalment of their annual fees
  will be due."
- **Fee table — academic year 2025/2026** (verbatim):
  - One Child (Nursery to Year 6) — £380
  - One Child (GCSE*) — £525
  - Two Children (Nursery to Year 6) — £720
  - Two Children (1x Nursery to Year 6 & 1x GCSE*) — £860
  - Two Children (2x GCSE*) — £995
  - Three Children (Nursery to Year 6) — £1,025
  - Three Children (2x Nursery to Year 6 & 1x GCSE*) — £1,195
  - Three Children (1x Nursery to Year 6 & 2x GCSE*) — £1,350
- **Fee terms/notes (verbatim, numbered as on page)**:
  1. "Fees need to be paid promptly. The first instalment is due by the 9th September 2025 (50% of
     the total annual fee) and the second instalment is due by 13th January 2026 (remaining
     balance). If fees are paid late (after the dates set out above), a £20 late fee will apply to
     each instalment."
  2. "If fees are settled in full prior to the first day of Greek School (9th September 2025), a
     £20 discount can be applied to the full annual fee as this significantly reduces the
     administrative burden of chasing fees throughout the year."
  3. "Once children are enrolled, you are liable for the annual school fees in full, even if you
     decide to no longer attend. Please note, this decision has been made as class and teacher
     allocations are made based on the number of enrolled students and their ability levels at the
     start of the year. If a child decides to no longer attend, we cannot move teachers and classes
     around as this would be unfair to the other children."
  4. "For new children, we offer a complimentary two-week trial period, allowing them to settle in
     their new surroundings. Should you choose not to continue your child's enrolment within this
     trial period, no fee's [sic] will be incurred. However, if your child decides to stay beyond
     the two-week trial period, the full fee will apply in full, including the initial trial
     period and they will be considered an 'enrolled child' per point 3 above."
  5. "Fees can be paid by cash, bank transfer (BACS) or by card to The Greek Academy. If you are
     paying by bank transfer, please ensure you put your child's full name as a payment reference
     so that the payment can be allocated correctly."
- **Bank details**:
  - Bank Account Name: The Greek Academy
  - Bank Account Number: 65046811
  - Bank Account Sort Code: 51-50-00
  - Reference: Your child's full name
- Footnote (*): "Please note, if your child is a GCSE sitting student, exam entry fees are not
  included in the annual fee and will be required to be paid in full to The Greek Academy when
  required prior to their exam entry submissions. You will be notified of these fees closer to the
  time."

## Fees 2026-27

Source: "TGA - Student Fee Schedule 2026/27" — user-supplied photo of the official fee schedule,
received 2026-07-19. These are the 2026/27 academic year fees (supersede the 2025/26 table above
for that year; the 2025/26 table above remains the historical record for that year). 2x/3x columns
are the per-instalment amounts for paying the 2026/27 annual fee in 2 or 3 instalments.

| # | Category | 2025/26 | 2026/27 | 2x instalments | 3x instalments |
|---|---|---|---|---|---|
| 1 | One Child (Nursery to Year 6) | £380.00 | £400.00 | £200.00 | £133.33 |
| 2 | One Child (GCSE*) | £525.00 | £550.00 | £275.00 | £183.33 |
| 3 | Two Children (Nursery to Year 6) | £720.00 | £755.00 | £377.50 | £251.67 |
| 4 | Two Children (1x Nursery to Year 6, 1x GCSE*) | £860.00 | £900.00 | £450.00 | £300.00 |
| 5 | Two Children (2x GCSE*) | £995.00 | £1,045.00 | £522.50 | £348.33 |
| 6 | Three Children (Nursery to Year 6) | £1,025.00 | £1,075.00 | £537.50 | £358.33 |
| 7 | Three Children (2x Nursery to Year 6, 1x GCSE*) | £1,195.00 | £1,255.00 | £627.50 | £418.33 |
| 8 | Three Children (1x Nursery to Year 6, 2x GCSE*) | £1,350.00 | £1,415.00 | £707.50 | £471.67 |

No 2026/27 payment-deadline dates (instalment due dates, late-fee date, early-payment-discount
cutoff) have been supplied — only the 2025/26 dates exist (9 September 2025 / 13 January 2026,
per the Fee terms/notes above). Do not apply 2025/26 deadline dates to the 2026/27 fee figures.

NB: registration relabelled 2026/27 site-wide per user 2026-07-19; 2026/27 payment dates TBC —
chairman reviewing.

## Events

- Page title: "Events – The Greek Academy"
- H1: "Events"
- Content: page contains only a search box and an empty events table with column headers "Title"
  and "Date" — **no events are currently listed** on the live site (genuinely empty at time of
  scrape, confirmed by checking raw HTML for embedded/JS event data — none found). This is a real
  gap on the live site, not a scrape failure.
- Known event names referenced elsewhere on the site (for context only, not sourced from the
  Events page itself): "TGA Dinner & Dance 2026" (promoted on Home as a booking-form tile and
  "Advert for 2026 D&D Brochure"); Committee page mentions past events — "pizza and hot dog
  nights" and a "Halloween event with fancy dress and games"; Term Dates page lists in-school dates
  for a "Christmas Play" (16 Dec 2025), "25th March Play" (25 Mar 2026), and "Last Day, Summer Play
  & BBQ" (7 Jul 2026).

## Gallery

- Page title: "Gallery – The Greek Academy"
- H1: "Gallery"
- Content: **"COMING SOON!"** — no images currently published (confirmed: only one image on the
  page is the site logo/favicon, no gallery photos in the raw HTML).

## Term dates

- Page title: "Term Dates – The Greek Academy"
- H1: "Term Dates"
- Intro: "The term dates for the academic year 2025/2026 are as follows:"
- **2025** (table: Date School is open / Date School is closed):
  - September: open 9th, 16th, 23rd, 30th
  - October: open 7th, 14th, 21st; closed 28th (Half-Term)
  - November: open 4th, 11th, 18th, 25th
  - December: open 2nd, 9th, 16th (Christmas Play); closed 23rd, 30th (Christmas Holidays)
- **2026** (table: Date School is open / Date School is closed):
  - January: open 13th, 20th, 27th
  - February: open 3rd, 10th, 24th; closed 17th (Half-Term)
  - March: open 3rd, 10th, 17th, 24th (25th March Play); closed 31st (Easter Holidays)
  - April: open 14th, 21st, 28th; closed 7th (Easter Holidays)
  - May: open 5th, 12th, 19th; closed 26th (Half-Term)
  - June: open 2nd, 9th, 16th, 23rd, 30th
  - July: open 7th (Last Day, Summer Play & BBQ)

## Term dates 2026-27

NB: dates provisional — user reviewing/amending against the school's own calendar (2026-07-19).

Source: official calendar for Greek community schools in the UK, PDF "ΕΝΑΡΞΗ ΛΗΞΗ ΣΧΟΛΙΚΟΥ ΕΤΟΥΣ
2026-2027.pdf", issued jointly by the Greek Ministry of Education's London Education Office and the
Cyprus Educational Mission (K.E.A). Supplied directly by the user 2026-07-19; not scraped from
thegreekacademy.co.uk (the live site has no 2026/27 term dates page yet). Facts below are verbatim
from the PDF as extracted by the user.

- **A′ Term**: Saturday 12/09/2026 – Saturday 19/12/26 (14 working Saturdays)
- **Autumn half-term**: Monday 26/10/26 – Saturday 31/10/26
- **Christmas holidays**: Tuesday 22/12/26 – Wednesday 06/01/27
- **B′ Term**: Thursday 07/01/27 – Thursday 25/03/27 (10 working Saturdays)
- **Winter half-term**: Monday 15/02/27 – Saturday 20/02/27
- **Easter holidays**:
  - English school Easter: Friday 26/03/27 – Friday 09/04/27
  - Orthodox Easter: Holy Friday 30/04/27 – Easter Monday 03/05/27
- **Γ′ Term**: Saturday 10/04/27 – Saturday 10/07/27 (12 working Saturdays)
- **Summer half-term**: Monday 31/05/27 – Saturday 05/06/27 (Spring Bank Holiday Monday 31/05/27)
- **Last day of school year**: Saturday 10/07/27
- **Total working Saturdays**: 36
- **English Easter Sunday**: 28/03/27
- **Orthodox Easter Sunday**: 02/05/27

Note: the PDF counts working Saturdays because it covers Saturday community schools generally — The
Greek Academy itself runs Tuesday evenings, not Saturdays. Term-date and holiday-range facts above
transfer directly (they're calendar ranges, not day-specific), but there is no source data for how
many Tuesday sessions fall within each 2026/27 term, so that figure must not be invented. The
working-Saturday counts (14 / 10 / 12 / 36) are recorded here for completeness but should be omitted
from any Tuesday-school-facing page.

## Policies (index page)

- Page title: "Policies – The Greek Academy"
- H1: "Policies"
- Intro: "It is important that all parents view these documents and gain an understanding of how
  our school is regulated."
- Links listed (display text on the index page differs slightly from page H1s — noted): "Anti-
  Bullying Policy", "GDPR Policy", "Risk Assessment" (page H1 itself is "Risk Assessment Policy"),
  "Behaviour Policy", "Mobile Phone Policy", "Safeguarding Policy"

---

## Registration form

Page: `/registration-form-2025-2026/` — "Registration Form 2025/2026 – The Greek Academy"
H2 on form: "The Greek Academy Registration Form 2025/26"
Built with WPForms; note banner "Please enable JavaScript in your browser to complete this form."
Field types confirmed against raw HTML (input/select/textarea attributes).

Full field list, in page order, with type / required flag / options:

1. **New to The Greek Academy:** — radio — required — options: Yes / No
2. **Name of child:** — name field (first/last sub-fields) — required — First / Last
3. **Date of Birth:** — date field, DD/MM/YYYY dropdown selects — required
   - Day: 1–31; Month: 1–12; Year: 2027 down to 1920 (full descending list)
4. **Address:** — address field — required — sub-fields: Address Line 1, Address Line 2, City,
   State / Province / Region, Postal Code, Country (dropdown, full ISO country list; defaults to
   "United Kingdom of Great Britain and Northern Ireland" pre-selected, confirmed via raw HTML
   `selected` attribute)
5. **Parent/Guardian 1 Name:** — name field (first/last) — required
6. **Parent/Guardian 1 Email:** — email — required
7. **Parent/Guardian 1 Phone:** — tel — required
8. **Parent/Guardian 2 Name:** — name field (first/last) — NOT required
9. **Parent/Guardian 2 Email:** — email — NOT required
10. **Parent/Guardian 2 Phone:** — tel — NOT required
11. **Number of Siblings to enrol:** — select dropdown — required — options: "--- Select Choice
    ---" (placeholder), 0, 1, 2
12. **Second Child's Full Name:** — text — required
13. **Second Child's Date of Birth:** — date field, DD/MM/YYYY dropdowns (same day/month/year
    ranges as field 3) — required
14. **Third Child's Full Name:** — text — required
15. **Third Child's Date of Birth:** — date field, DD/MM/YYYY dropdowns (same ranges) — required
16. **Outline if any of the children have any Medical Conditions/Special Educational Needs (Please
    specify by Child's Name):** — text/textarea — required
17. **Outline if any of the children have any Allergies (Please specify by Child's Name):** —
    text/textarea — required
18. **Some events may include Greek Christian traditions (e.g. Easter, Christmas etc). Please
    indicate your preference:** — checkbox group, single-choice-limited (`data-choice-limit="1"` —
    behaves like radio but is WPForms "checkbox" field type) — required — options: "I consent to
    my child taking part in these events" / "I do not consent to my child taking part in these
    events"
19. **Other Authorised Person for regular collection:** — grouped sub-fields, NOT required —
    Full Name / Relationship to child / Phone
20. **Fees:** — checkbox group, single-choice-limited (`data-choice-limit="1"` — behaves like radio
    but is WPForms "checkbox" field type) — required — options (same as Enrolment page fee table,
    verbatim):
    - One Child (Nursery to Year 6) - £380
    - One Child (GCSE*) - £525
    - Two Children (Nursery to Year 6) - £720
    - Two Children (1x Nursery to Year 6, 1x GCSE*) - £860
    - Two Children (2x GCSE*) - £995
    - Three Children (Nursery to Year 6) - £1,025
    - Three Children (2x Nursery to Year 6, 1x GCSE*) - £1,195
    - Three Children (1x Nursery to Year 6, 2x GCSE*) - £1,350
21. **Name of Parent/Guardian:** — name field (first/last) — required
22. **Date:** — text/date — required

Displayed alongside the fee radio options — the same fee terms/notes block and bank details as on
the Enrolment page (identical text — see Enrolment section above for full verbatim text and bank
details; reproduced here as it's part of the form page itself, not just a link):
- Points 1–5 (payment deadlines, £20 late fee, £20 early-payment discount, liability once enrolled,
  two-week trial, payment methods) — identical wording to Enrolment page.
- Bank details identical: Account Name The Greek Academy, Account Number 65046811, Sort Code
  51-50-00, Reference = child's full name.
- GCSE exam-fee footnote identical to Enrolment page.

**Terms and Conditions** section on the form (this text is specific to the registration form, not
found on Enrolment page — full verbatim):
- Heading: "Terms and Conditions" — "In addition to all other standard rules and regulations as
  defined on our website that apply to all members of the school (students, parents, guardians and
  teachers), we would like to note the following terms & conditions:"
- **Photography/marketing consent**: "The school publishes photographs of the children in school
  brochures, on the school website, and in magazines for the purpose of marketing the school, its
  activities, and the academic standards achieved. As a family-oriented school, we allow parents to
  take photographs and videos of school concerts, plays, and similar events for their personal use.
  The school may also engage professional photographers to produce further marketing materials.
  Unless we are informed otherwise in writing, we will assume that you consent to the use of images
  of your child/(ren) for the purposes outlined above. If you do not wish to give this consent,
  please notify the school in writing."
- **Attendance expectations**: "All students are expected to attend school regularly each week to
  ensure they receive the full benefit of the educational programme and maintain continuity in
  their learning. In addition to weekly attendance, students are also expected to attend all key
  school events, including end-of-term yiortes (celebrations) and the annual Dinner and Dance.
  These events form an important part of the school's cultural, social, and community life, and
  participation is essential to foster a sense of belonging and shared experience among students.
  Non-attendance—particularly when notice is given at the last minute—is highly disruptive to the
  school community. It affects planning, rehearsals, and the overall experience for other students
  and staff who work hard to prepare for these occasions. Parents and guardians are therefore asked
  to make every effort to ensure their child(ren)'s full attendance and to inform the school in
  advance, in writing, should any unavoidable absence arise."
- **Mobile phone rule (form-specific restatement)**: "To maintain a focused and respectful learning
  environment, mobile phones must not be used during lesson time at Greek School. We have
  experienced several disruptions due to inappropriate phone use during class, which negatively
  affects both teaching and learning. If students need to bring a mobile phone to school, it must
  remain switched off and out of sight during all lessons. Phones may only be used: Before school
  begins / After school has finished / During designated break times. Any use of mobile phones
  outside of these permitted times will result in the phone being confiscated immediately.
  Confiscated phones will be held securely and returned at the end of school. Repeated misuse may
  lead to further disciplinary action and a requirement for a parent or guardian to collect the
  device." / "We appreciate your support in helping us maintain an environment that prioritises
  learning, safety, and respect for all students and staff."
- Footer contact block on form: "The Greek Academy, Grange Park Primary School, Worlds End Lane,
  London, N21 1PP" / Tel: 07398 904 535 / E-Mail: info@thegreekacademy.co.uk
- Submit button: "Submit"

## Dinner dance form

Page: `/tga-dinner-dance-2026-booking-form/` — "TGA Dinner & Dance 2026 – Booking Form – The Greek
Academy". Built with WPForms; same "enable JavaScript" banner.

Full field list, in page order, with type / required flag / options:

**Section: Booking Contact Details**
1. **Full Name** — text — required
2. **Email Address** — email — required
3. **Phone Number** — tel — required

**Section: Tickets** (note above section: "Non-Greek School Children over the age of 12 will be
charged Adult prices.")
4. **No. of Adult Tickets** — quantity dropdown — required — Price: £65.00 — options 0–10
5. **No. of Child Tickets** — quantity dropdown — required — Price: £40.00 — options 0–10
6. **Total Amount (£)** — calculated field, read-only, £0.00 default — "Calculated automatically
   based on ticket quantities."

**Section: Performing Students**
- Intro: "From the tickets you are purchasing, please list the full names of the students that
  will be performing. Please also let us know who you would like to sit with and we will aim to
  sit you together."
7. **Performing Students & Seating Preferences** — textarea (large) — required — placeholder/hint:
   "List full names of performing students and any seating requests."

**Section: Dietary & Meal Preferences** (intro: "Please enter the number of each meal type. Totals
should match your ticket quantities above.")
8. **Adults — Chicken** — number — NOT required — default 0
9. **Children — Chicken** — number — NOT required — default 0
10. **Adults — Lamb** — number — NOT required — default 0
11. **Children — Lamb** — number — NOT required — default 0
12. **Adults — Vegetarian** — number — NOT required — default 0
13. **Children — Vegetarian** — number — NOT required — default 0
14. **Children — Nuggets** — number — NOT required — default 0
15. **Dietary Requirements / Allergies** — textarea (large) — required — placeholder/hint: "e.g.
    nut allergy, gluten-free"

**Section: Payment**
16. **Payment Method** — radio — required — options: Bank Transfer / Cash
17. **Payment Reference / Name of Child & Class** — text — required — label note: "Tickets Contact
    & Payment Reference / Name of Child & Class" — hint: "Use this as the reference for your bank
    transfer."
- Bank Transfer Details block: Account Name: The Greek Academy / Sort Code: 51-50-00 / Account
  Number: 65046811

**Please Note** (bulleted, verbatim):
- "Tickets must be paid in full to guarantee a ticket"
- "Tickets are non-refundable"
- "Once payment has been made, please notify us on 07398904535 so we can confirm receipt and
  secure your tickets"
- "For enquiries please contact a member of the committee: 07398904535 | info@thegreekacademy.co.uk"

Submit button: "Submit Booking"

---

## Policies — Safeguarding Policy

URL: `/safeguarding-policy/`

- Title: "The Greek Academy Safeguarding Policy"
- Intro: "The Greek Academy recognises its duty of care to safeguard and promote the welfare of
  children and young people. We are committed to ensuring that our safeguarding practices align
  with statutory responsibilities, government guidance, and best practices."
- **Scope of the Policy**:
  - "This policy applies to all adults, including the Board of Trustees, volunteers, paid staff,
    agency staff, and anyone working on behalf of The Greek Academy."
  - "It recognises that the welfare and interests of children and young people are paramount in
    all circumstances."
  - "It aims to ensure that all children and young people have a positive and enjoyable experience
    while learning in a safe and child-centred environment and are protected from abuse."
  - "We acknowledge that some children and young people, especially those who have a disability or
    are from ethnic minority communities, can be particularly vulnerable to abuse. We accept our
    responsibility to take reasonable and appropriate steps to ensure their welfare."
- **Commitments: The Greek Academy will:**
  1. "Promote and prioritise the safety and wellbeing of children and young people."
  2. "Ensure that everyone understands their roles and responsibilities regarding safeguarding and
     is provided with mandatory learning opportunities to recognise, identify, and respond to
     signs of abuse, neglect, and other safeguarding concerns."
  3. "Provide all children and young people, along with their parents or carers, with information
     about TGA's safeguarding arrangements upon joining the organisation."
  4. "Widely promote TGA's safeguarding policies and procedures."
  5. "Ensure that trustees, staff, and volunteers take all concerns and allegations of abuse
     seriously and respond appropriately."
  6. "Securely maintain and store confidential, detailed, and accurate records of all safeguarding
     concerns."
  7. "Prevent the use of unsuitable individuals through the robust application of Disclosure and
     Barring arrangements and best practices in the safe recruitment of staff and volunteers
     working with children and young people."
  8. "Address any failure to comply with this policy without delay."
- **Monitoring**: "This policy will be reviewed annually, with revisions recommended to the Board
  of Trustees. It may also be reviewed in response to changes in legislation or government
  guidelines."

## Policies — Anti-Bullying Policy

URL: `/anti-bullying-policy/`

- Title: "The Greek Academy Anti-Bullying Policy"
- **Definition of Bullying**: "Bullying is defined as behaviour by an individual or group,
  repeated over time, that intentionally hurts another individual or group, either physically,
  emotionally, sexually, or through social media. Bullying can take many forms and may be
  motivated by prejudice against groups based on race, religion, gender, sexual orientation,
  special educational needs or disabilities, or because a child is adopted, in care, or has caring
  responsibilities. It can be driven by actual or perceived differences between children."
- **Main Types of Bullying** (verbatim list):
  - Emotional (verbal): "Being unfriendly, name-calling, insulting, threats, whispering about the
    victim, making racist or other deliberately hurtful remarks."
  - Physical: "Pushing, punching, hitting, biting, kicking, hiding belongings, or any use of
    violence."
  - Racial and Religious: "Making racial comments, graffiti, gestures."
  - Sexual: "Unwanted physical contact, sexually abusive comments, or any inappropriate touching."
  - Homophobic: "Bullying based on sexuality, including issues related to same-sex parents."
  - Direct or Indirect: "Name-calling, spreading unpleasant stories, gossiping, laughing at
    someone, excluding someone from social groups, intimidation, sarcasm."
  - Cyber-Bullying: "Misuse of the internet, email, text messaging, photographs, social media,
    prank calls, and apps."
- **Actions We Will Take**: "Pupils are encouraged to approach a member of staff if they are being
  bullied. They should understand that:"
  - "It will be taken seriously."
  - "It will be investigated, and appropriate action will be taken."
  - "It will be recorded. All cases of bullying will be reported to the Head of School and the TGA
    committee, who will work closely with the class teacher to establish the facts and liaise with
    the children and their parents."
- **Support for Pupils Who Have Been Bullied**:
  - "They will be offered an immediate opportunity to discuss the experience with a teacher or
    staff member."
  - "The level of support will depend on the individual circumstances and needs."
- **Support for Pupils Who Have Bullied**:
  - "Discussing what happened."
  - "Establishing the wrongdoing and the need to change."
  - "Discussing the effect on the other child."
  - "Trying to understand the motivation behind the bullying."
  - "Offering support."
  - "Informing parents or guardians to help change the pupil's attitude."
  - Closing: "Parents of all children involved will be kept informed regularly and their support
    will be expected. If bullying persists, the school will implement disciplinary sanctions. The
    consequences will reflect the seriousness of the incident, showing that bullying is
    unacceptable. Pupils who persistently bully others risk losing their place at the school."
- **All Staff Responsibilities**:
  - "Promote the emotional well-being of individual pupils."
  - "Create an ethos of good behaviour and teach children the right way to behave."
- **Class Teacher Responsibilities** (verbatim list, 15 items):
  - "Listen to children and provide opportunities for them to discuss issues (e.g., through
    thought boxes or worry catchers)."
  - "Create an inclusive environment where pupils can discuss bullying without fear of
    discrimination."
  - "Explain how actions affect others."
  - "Discuss differences that could motivate bullying, such as religion, ethnicity, disability,
    gender, sexuality, or appearance."
  - "Teach that prejudice-based language is unacceptable."
  - "Note changes in friendship groups."
  - "Observe the socialisation of new pupils."
  - "Identify potentially vulnerable pupils."
  - "Address low-level incidents promptly to prevent escalation."
  - "Monitor attendance, lateness, and sickness patterns."
  - "Be aware of withdrawn behaviour or sudden drops in achievement."
  - "Be mindful of unintended outcomes when forming groups or pairs."
  - "Act immediately on parent suspicions or advice from support staff."
  - "Raise awareness through Circle Time, E-safety, and computing lessons."
  - "Provide pupils opportunities to discuss concerns and current affairs."
  - "Teach strategies to deal with bullying incidents."
- **Role of All Pupils at The Greek Academy** (verbatim list):
  - "Care for each other and report any unkind behaviour or verbal abuse to any adult."
  - "Report bullying that occurs outside school, including cyber-bullying."
  - "Support peers who are targets of hurtful behaviour. Be a good friend and remember it could be
    you."
  - "Think before speaking unkind words and be aware of how your behaviour may be perceived."
  - "Never touch another pupil aggressively."
  - "Include others in social activities and involve everyone when possible."
  - "Do not suffer in silence. Reporting bullying is not 'telling tales'."

## Policies — Behaviour Policy

URL: `/behaviour-policy/`

- Title: "The Greek Academy Behaviour Policy"
- **Introduction**: "At The Greek Academy, we recognise that the values we promote significantly
  contribute to the spiritual, moral, and social development of our children. These values include
  care, respect, and concern for oneself and others, as well as respect for property and the
  environment. While these values are sometimes explicitly stated, they are often reflected in our
  behaviour and expectations. Therefore, it is crucial to provide clear guidelines for a consistent
  and coherent approach to behaviour and discipline within the school." / "Our behaviour strategy
  aims to improve educational outcomes for all pupils by enhancing their engagement in education.
  We focus on fostering a positive environment that boosts children's engagement, motivation, and
  well-being." / "We believe that self-esteem influences all thinking and behaviour, impacting
  learning and performance. Our goal is to provide positive everyday experiences, ensuring our
  children feel self-confident, secure, and have a strong sense of belonging, which will help them
  reach their full potential." / "This policy has been developed through a consultative process
  involving children, parents, staff, and governors."
- **Aims** (verbatim list):
  - "Ensure every member of the school community feels valued and respected, and that all
    individuals are treated fairly."
  - "Create an environment where everyone feels safe and can learn effectively."
  - "Teach children appropriate behaviour for different situations."
  - "Raise awareness among children about recognising and managing their emotions and reactions."
  - "Support children whose behaviour is challenging or who struggle with friendship and
    cooperation."
- **Objectives** (verbatim list):
  - "Provide clear expectations for various situations encountered during the school day and on
    school premises."
  - "Implement clear strategies for regulating conduct and promoting good behaviour, self-
    discipline, and respect."
  - "Reinforce good behaviour to boost children's self-esteem."
  - "Focus on de-escalation and preventative strategies rather than reactive measures."
  - "Ensure all staff know how to manage difficult or dangerous behaviour and understand the
    potential communication behind challenging behaviour."
  - "Prevent bullying."
  - "Ensure pupils complete assigned work."
- **Code of Conduct**: "We have an agreed code of conduct for the school community. The school's
  'Golden Rules' are:"
  1. "We are gentle."
  2. "We are kind and helpful."
  3. "We listen."
  4. "We are honest."
  5. "We work hard."
  6. "We look after property."
- **Use of Reasonable Force**: "Reasonable force may be used to:"
  - "Remove disruptive children from the classroom when they refuse to follow instructions."
  - "Prevent a pupil from behaving in a way that disrupts a school event."
  - "Prevent a pupil from leaving the classroom if it would risk their safety or disrupt others."
  - "Prevent a pupil from attacking a staff member or another pupil, or to stop a fight."
  - "Restrain a pupil at risk of harming themselves through physical outbursts."
  - Closing: "The school will communicate with parents about serious incidents involving the use
    of force and maintain detailed records of such incidents."

## Policies — GDPR Policy

URL: `/gdpr-policy/`

- Title: "The Greek Academy GDPR Policy"
- **Privacy Policy** (intro): "In compliance with the General Data Protection Regulation (GDPR), we
  have recently updated our Privacy Policy to provide parents of The Greek Academy with detailed
  information on how we use and store your data, as well as how you can access it. Rest assured,
  any personal data is kept safe and secure, and we will not share it with third parties without
  your permission. We use your data solely to provide the best possible service and to communicate
  with you during the Greek School's annual term." / "This privacy policy applies to The Greek
  Academy, based in Enfield and supported by the Cyprus Education Mission (K.E.A), which supplies
  teachers to all Greek Schools in the United Kingdom. Head Teachers are instructed by K.E.A to
  record all new first-time starters in a secure register on the premises." / "This policy outlines
  how The Greek Academy collects, stores, and uses personal and confidential information about
  pupils, parents, employees, and suppliers."
- **Information Collection and Use**:
  - "Data We Collect: We may collect your data when you express interest in a place for your child
    at our school, either verbally, in writing, or through our website by submitting an enquiry
    form. The information collected on your child's application will be stored and kept by The
    Greek Academy Executive Committee for the following purposes:"
    - "Allocating your child to a suitable learning level"
    - "Being aware of any medical or allergy-related matters a pupil might have"
    - "Contacting you in case of an emergency during school hours"
    - "Contacting you for financial updates either during school hours or weekday evenings"
    - "Informing you of social events and parents' meetings"
    - "Informing you of any external activities the school might organise or be involved in"
  - "This data includes contact details provided on the online registration form, such as name,
    address, phone number, email address, and other relevant information."
  - "Personal Data We Hold: We may collect, use, store, and share (where appropriate) personal
    data about pupils, including but not limited to:"
    - "Contact details and preferences, date of birth"
    - "Parents' contact details, date of birth, address, phone number, email address"
    - "Teaching staff's contact details, address, phone number, email address"
    - "Results of internal assessments and externally set tests"
    - "Pupil and curricular records"
    - "Characteristics such as ethnic background or special educational needs"
    - "Details of any medical conditions, including physical and mental health"
    - "Attendance information"
    - "Safeguarding information"
    - "Photographs and videos"
    - "CCTV images captured on Grange Park Primary School's premises"
  - "We may also hold data about pupils received from other organisations, including other
    schools."
- **Why We Use This Data**: "We use this data to:"
  - "Support pupil learning"
  - "Monitor and report on pupil progress"
  - "Provide appropriate care"
  - "Protect pupil welfare"
  - "Assess the quality and performance of our services"
  - "Administer admissions waiting lists"
  - "Carry out research"
  - "Comply with the law regarding data sharing"
  - "Less commonly, we may process personal data where: We have obtained consent to use it in a
    specific way / We need to protect the individual's vital interests (or someone else's
    interests)"
  - "Consent for using personal data can be withdrawn at any time. (See Accessing Your Data
    below.)"
- **Collecting This Information**:
  - "How We Store This Data: We keep personal information about pupils while they are attending
    our school and may keep it beyond their attendance if necessary. The information is stored on
    The Greek Academy's internal computer system, accessed only by Committee members. We record
    only information relevant to our Standard Operating Processes."
  - "Data Sharing: We do not share information about pupils with any third party without consent
    unless the law and our policies permit. We may share personal information about pupils with:"
    - "Our local authority, to meet legal obligations (e.g., safeguarding concerns, exclusions)"
    - "The pupil's family and representatives, to meet legal obligations (e.g., pupil progress,
      incident logs)"
    - "Educators and examining bodies, to meet legal obligations (e.g., pupil details, examination
      papers)"
    - "Suppliers and service providers, to enable contracted services"
    - "Our auditors, to enable contracted services"
    - "Survey and research organisations, to enable contracted services"
  - "How We Use Your Data: We may store and use parents' and teaching staff's personal data, with
    your express consent, to provide you with updated information, for communication purposes, and
    in case of emergency contact."
  - "Information About Others: If you provide us with information about other individuals, you
    must ensure you have their permission to do so. For example, providing contact details for
    someone authorised to collect your child from school."
  - "If you wish for your personal data to be removed from our database, please contact us at
    info@thegreekacademy.co.uk, stating your reason. Note that if your child is still in
    attendance, we may not be able to comply due to Health and Safety requirements."
- **For Website Visitors**: "Tracking information is automatically collected about website
  visitors, including IP addresses, for administration purposes and to improve user experience. We
  do not disclose visitor information to third parties without written consent, except where
  required by law. Data processing may involve international transmission."
- **Marketing Communications**: "Throughout the school year, The Greek Academy will run events
  requiring email and social media communications. You can opt out of receiving these
  communications. Weekly newsletters with school insights, timetables, and event invitations may
  be sent. If you have issues, contact us at info@thegreekacademy.co.uk."
- **Retention Period for Personal Data**: "We keep personal information only as long as necessary
  to provide requested services, comply with legal requirements, and support claims or defences in
  court."
- **Personal and Confidential Information**: "We have security measures to protect your
  information against unauthorised use, accidental loss, damage, or destruction."
- **Accessing Your Data**: "You may review or update personal information we hold about you. To
  obtain a copy, send a request to info@thegreekacademy.co.uk. Processing may take up to 30 days.
  To remove personal information, contact us at info@thegreekacademy.co.uk. Note that this may
  limit our service provision, and re-registration may be required." / "For identity verification,
  reasonable steps will be taken before granting access or taking action. If you have questions or
  complaints about our privacy policy, email us at info@thegreekacademy.co.uk. You can lodge
  complaints with the Information Commissioner's Office at https://ico.org.uk/concerns/."

## Policies — Mobile Phone Policy

URL: `/mobile-phone-policy/`

- Title: "The Greek Academy Mobile Phone Policy"
- **Guidelines**:
  - "Bringing Phones to School: Children are permitted to bring mobile phones to and from school to
    ensure their personal safety and to maintain contact with parents."
  - "Usage Restrictions: Children must not use any mobile device, smartwatch, or electronic device,
    including headphones, anywhere on school premises during the school day, except under the
    specific direction of a teacher. For the purposes of this policy, the school day begins the
    moment children enter the school site and ends once they leave the school site."
  - "During Class: If a child brings their phone to school, it should be switched off or set to
    silent and kept out of sight, such as in their bag, when they enter the classroom. It should
    not be seen or heard (including vibrations) throughout the lesson."
  - "Consequences for Misuse: Any child found using or known to have used their phone during the
    lesson will have the phone confiscated and returned at the end of the school day by their
    teacher or a member of the committee. Parents will be informed."
  - "Repeat Offenders: If a child repeatedly offends, the school will request a parent or carer to
    come in and collect the phone from the school."
  - "Banning Phones: Children who continue to offend will be banned from bringing their phones to
    school."

## Policies — Risk Assessment Policy

URL: `/risk-assessment-policy/`

- Title: "The Greek Academy Risk Assessment Policy"
- **Overview**: "This policy is designed to assist the school in fulfilling its legal duties in
  assessing risks. Risk management involves identifying potential hazards in the workplace and
  implementing sensible health and safety measures to control them. In accordance with the
  Management of Health and Safety at Work Regulations 2000, the school is required to undertake
  regular risk assessments and take necessary actions as outlined in the Health and Safety policy."
- **Purpose of a Risk Assessment**: "The purpose of a risk assessment is to identify hazards and
  evaluate associated risks, covering areas such as:" Safeguarding, Health and Safety, Security,
  Fire Safety, Site Security, School Trips, Critical Incidents.
  - "The Management team is responsible for ensuring that risk assessments are completed, logged,
    effectively monitored, and communicated to the principal. Reviews are conducted when there are
    changes to equipment or resources, alterations to the school's premises, or when particular
    needs of a child or visitor necessitate it."
  - "All staff members are responsible for carrying out risk assessments according to their roles
    and responsibilities. The Headmaster is responsible for conducting necessary reviews or changes
    to the school's policies or procedures in light of any potential risks identified by staff."
  - "A visual inspection of both equipment and the entire premises—indoor and outdoor—will be
    carried out daily by a designated staff member (caretaker) before any children arrive."
  - "During the school day, staff must remain vigilant and continuously aware of any potential
    risks to health and safety arising from:" The school environment (indoors and outdoors), All
    surfaces (indoors and outdoors), All equipment used by children or staff.
  - "Upon discovering a hazard, staff should take immediate steps to ensure the safety of
    themselves and others. They must then notify the management team and record the incident in
    the Incident Record Book. The Management team is responsible for ensuring necessary actions are
    taken."
- **The Process of Risk Assessment**: "A risk assessment can be undertaken on an object, substance,
  process, location, activity, or person. The process includes:"
  - "Identifying the hazards"
  - "Deciding who might be harmed and how"
  - "Evaluating the risks and deciding on precautions"
- **What is a Hazard?**: "A hazard is anything that can cause harm, such as electricity,
  chemicals, etc."
- **What is Risk?**: "Risk is the chance, high or low, that somebody could be harmed by these
  hazards, along with an indication of how serious the harm could be."
- **Evaluating the Risk**: "After identifying the hazards, you must decide what to do about them.
  The law requires you to do everything 'reasonably practicable' to protect people from harm.
  Compare what you are currently doing with good practice to see if there are additional measures
  you should implement. Consider the following principles when controlling risks:"
  - "Try a less risky option (e.g., switch to a less hazardous chemical)."
  - "Prevent access to the hazard (e.g., by guarding)."
  - "Organise work to reduce exposure to the hazard (e.g., barriers between pedestrians and
    traffic)."
  - "Issue personal protective equipment (e.g., clothing, footwear, goggles)."
  - "Provide welfare facilities (e.g., first aid and washing facilities)."
  - "Involve staff to ensure that proposed measures will work in practice."
- **What is a Risk Assessment?**: HSE definition quoted: "a careful examination of what in your
  work could cause harm to people so that you can weigh up whether or not you have taken enough
  precautions or should do more to prevent harm."
- **Definition of a Hazard and a Risk** (restated):
  - "Hazard: Anything that may cause harm, such as chemicals, electricity, working from ladders, an
    open drawer, etc."
  - "Risk: The chance, high or low, that somebody could be harmed by these hazards, together with
    an indication of how serious the harm could be."
- **Responsibilities**: "All staff are responsible for:"
  - "Undertaking risk assessments"
  - "Identifying and implementing control measures"
  - "Effectively communicating the outcomes to employees and others as appropriate"

---

## Policy links

Six live policy pages, discovered via `grep` on `policies.html` nav/body links, each fetched and
saved locally:

| Policy | Live URL | Local raw filename |
|---|---|---|
| Anti-Bullying Policy | https://thegreekacademy.co.uk/anti-bullying-policy/ | `policy-anti-bullying.html` |
| Behaviour Policy | https://thegreekacademy.co.uk/behaviour-policy/ | `policy-behaviour.html` |
| GDPR Policy | https://thegreekacademy.co.uk/gdpr-policy/ | `policy-gdpr.html` |
| Mobile Phone Policy | https://thegreekacademy.co.uk/mobile-phone-policy/ | `policy-mobile-phone.html` |
| Risk Assessment Policy | https://thegreekacademy.co.uk/risk-assessment-policy/ | `policy-risk-assessment.html` |
| Safeguarding Policy | https://thegreekacademy.co.uk/safeguarding-policy/ | `policy-safeguarding.html` |

Suggested local filenames for the mockup site build (later tasks): `policy-safeguarding.html`,
`policy-anti-bullying.html`, `policy-behaviour.html`, `policy-gdpr.html`,
`policy-mobile-phone.html`, `policy-risk-assessment.html`.

---

## Known live-site quirks / gaps (for later tasks to be aware of)

- `/committee/` 404s on the live site — the working slug is `/committe/` (missing the second "e").
  Our mockup should use the correct spelling `committee.html`/`/committee/` regardless.
- Events page has no events currently listed (empty table) — later task should decide whether to
  show an empty state or use context clues (Dinner & Dance 2026, term-date plays/BBQ) as sample
  event entries; flagging for that task rather than deciding here.
- Gallery page (`/gallery/`) is a "COMING SOON!" placeholder with no real images — but the Home
  page itself embeds a genuine 10-photo class-photo gallery (WordPress `[gallery]` shortcode,
  captioned by year group). See Home section above for the caption list. No other page on the site
  has embedded photos.
- Policies index page uses "Risk Assessment" as its link text while the policy's own H1 is "Risk
  Assessment Policy" — minor inconsistency on the live site, noted for fidelity purposes.
- Enrolment fee note text contains a minor grammar slip on the live site ("no fee's will be
  incurred") — recorded verbatim above; later tasks may correct or keep as-is, a judgement call for
  that task.

---

## Gallery images

Source: the live site's dedicated `/gallery/` page is a "COMING SOON!" placeholder with no photos.
The only real photo content on the whole site is the 10-photo class gallery embedded on the
**home page** (WordPress `[gallery]` shortcode). Task 1 confirmed `gallery.html`, `about.html`, and
`events.html` reference no photos beyond the two site logos (header/footer logo, same on every
page) — so the home-page gallery is the complete and only source for gallery photos.

All 10 photos were already present in `mockups/greek-academy/images/` from earlier work and needed
no new downloads. Ran the resize/compress pass (Task 2 Step 3) as a verification step — all 10 were
already compliant (1024px wide, well under the 1600px cap; 105–136KB, well under the 300KB cap), so
no file was modified.

Final roster (filename → home-page gallery caption, in page order):

| Filename | Caption |
|---|---|
| `DSC06734.jpg` | Nursery |
| `DSC06748.jpg` | Year 1 |
| `DSC06762.jpg` | Year 1+ |
| `DSC06773.jpg` | Year 1+ |
| `DSC06786.jpg` | Year 2 |
| `DSC06802.jpg` | Year 3 |
| `DSC06820.jpg` | Year 4 |
| `DSC06837.jpg` | Year 5 |
| `DSC06845.jpg` | Year 6 |
| `DSC06873.jpg` | Pre GCSE |

Plus two site logo files (not gallery photos, used site-wide in header/footer): `logo-final.jpg`,
`logo.png`.

Later tasks (Gallery page, About page) should reference exactly these 10 `DSC*.jpg` filenames.
