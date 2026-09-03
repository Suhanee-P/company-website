---
title: "How much does custom web app development cost in 2026?"
description: "Realistic 2026 cost ranges for custom web applications, what is included in the price, what pushes it up, and how to estimate your own project."
datePublished: 2026-09-03
dateModified: 2026-09-03
author: aresyn
readingMinutes: 8
keyTakeaways:
  - "A focused internal tool usually needs 250 to 450 hours; a customer-facing platform needs 1,000 hours or more."
  - "At a blended $30 per hour for a senior India-based team, that is roughly $7,500 to $60,000. US and UK agencies commonly quote two to four times that."
  - "Every new product carries 60 to 120 hours of foundation work before the first feature: environments, design system, deployment and testing setup."
  - "Integrations, custom design and the number of user roles move the price more than the number of screens."
  - "Budget 15 to 20 per cent of the build cost per year for hosting, third-party fees and maintenance."
faqs:
  - q: "How much does a simple web app cost?"
    a: "A simple web application with login, one or two core workflows and a basic admin view usually takes 250 to 450 hours including design and testing. At a blended $30 per hour that is about $7,500 to $13,500, or roughly ₹6 to 11 lakh. The same scope from a US or UK agency is typically two to four times more."
  - q: "Why do quotes for the same web app vary so much?"
    a: "Vendors fill gaps in a brief with their own assumptions. One assumes a hosted authentication service and a template design; another assumes custom design and enterprise single sign-on. Rates also differ by region and seniority. A clear brief with a budget range brings quotes much closer together, which is why we always start with a written scope."
  - q: "Is it cheaper to build a web app or a mobile app?"
    a: "A web app is usually cheaper for the same features because there is one platform to build and test, no app store review, and updates ship instantly. A mobile app that needs to run on iOS and Android adds roughly 15 to 40 per cent even with a cross-platform framework, plus store fees and device testing."
  - q: "What is the cheapest way to get a custom web app built?"
    a: "Reduce scope to the one workflow that matters, use hosted services for authentication, payments and email instead of building them, accept a clean template-based design for version one, and fix the scope in writing before work starts. Cheap hourly rates without those decisions rarely produce a cheap project."
related:
  - /tools/app-development-cost-calculator
  - /cost/user-authentication
  - /guides/how-to-write-a-software-project-brief
  - /services/custom-web-applications
order: 1
---

A custom web application in 2026 typically costs between $7,500 and $60,000 when built by a senior India-based team at a blended $30 per hour, and two to four times that from a US or UK agency. The spread comes from scope: a focused internal tool needs 250 to 450 hours, while a customer-facing platform needs 1,000 hours or more.

Those are wide ranges, so the rest of this guide breaks them down: what a typical project of each size looks like, what is actually inside the price, what pushes it up, and how to estimate your own project before you ask anyone for a quote.

## What does a custom web app cost by project type?

The table below uses the same assumptions as the rest of this site: a blended rate of $30 per hour (about ₹2,500 per hour) for a senior team covering design, development and testing, and a delivery pace of roughly 35 productive hours per week per developer.

| Project type | Typical scope | Effort | Cost (USD) | Cost (INR) | Timeline with one developer |
|---|---|---|---|---|---|
| Internal tool | Login, one core workflow, basic admin, simple reports | 250 to 450 hours | $7,500 to $13,500 | ₹6 to 11 lakh | 7 to 13 weeks |
| Customer portal | Accounts, dashboards, documents, notifications, one or two integrations | 450 to 900 hours | $13,500 to $27,000 | ₹11 to 22 lakh | 13 to 26 weeks |
| SaaS product (first release) | Multi-tenant accounts, billing, several workflows, admin, analytics | 900 to 1,500 hours | $27,000 to $45,000 | ₹22 to 37 lakh | 26 to 43 weeks |
| Platform or marketplace | Multiple user types, payments to third parties, search, messaging, mobile web | 1,500 to 2,000+ hours | $45,000 to $60,000+ | ₹37 to 50 lakh+ | 43+ weeks |

Two developers working in parallel roughly halve the calendar time on anything above the first row, which is how a 900 hour portal ships in three to four months rather than six.

If you want a number for your own feature list rather than a category, the [app development cost calculator](/tools/app-development-cost-calculator) uses the same hour ranges as this table and lets you switch features on and off.

## What is actually included in the price?

A quote that only counts screens will be wrong. A realistic estimate has four parts.

**Project foundation, 60 to 120 hours.** Before the first feature is usable, someone has to set up the code repository, automated deployments, staging and production environments, a design system with the basic components, error monitoring and a testing setup. At $30 per hour that is $1,800 to $3,600. It is the same for a small app and a large one, which is why very small projects feel expensive per feature.

**Design, 15 to 25 per cent of the total.** User flows, wireframes and final screens for each workflow, plus responsive layouts for phone and tablet. Projects that reuse an existing design system or a component library sit at the low end.

**Features, the largest share.** Each capability has its own range. To take one example, [user authentication](/cost/user-authentication) runs from 16 to 30 hours for email and password login, to 60 to 120 hours once you add two-factor authentication, single sign-on for business customers and organisation accounts. Each of the thirty most common features has a similar page on this site with tiers and cost drivers.

**Testing, launch and handover, 15 to 20 per cent.** Manual and automated testing, fixing what testing finds, performance checks, launch checklist, documentation and a handover session so your team can operate the system.

## What drives the cost up or down?

In our experience the number of screens is a weak predictor of cost. These are the things that actually move it.

- **Integrations.** Every external system you connect to, whether an accounting package, a payment gateway, a CRM or a legacy database, adds 20 to 80 hours depending on the quality of its API and how much data flows both ways.
- **User roles and permissions.** A tool with one type of user is simple. A portal where customers, staff, managers and partners each see different things multiplies the screens to design and the cases to test.
- **Custom versus template design.** Fully custom visual design with animation and brand work can double the design budget. For internal tools and first releases, a clean template with your colours and logo is usually the right call.
- **Data migration.** Moving records out of spreadsheets or an old system, cleaning them and mapping them into the new structure is often underestimated. Plan for it as its own line item.
- **Compliance and security.** Audit logs, data residency, consent records, penetration testing and accessibility requirements all add work and should be named in the brief.
- **Reporting.** A handful of fixed reports is quick. A report builder that lets users pick columns, filters and exports is a project in itself.
- **Real-time features.** Live chat, live dashboards and collaborative editing need a different architecture from a standard request and response application.

## How do costs differ by region and by who builds it?

Hourly rates are the most visible difference between quotes. Freelance and agency rates commonly quoted in 2026 fall roughly into these bands: $100 to $200 per hour for established agencies in the United States and Western Europe, $40 to $80 for Eastern Europe and Latin America, and $20 to $50 for senior teams in India and South East Asia. The same 450 hour portal is therefore $9,000 to $22,500 from India and $45,000 to $90,000 from a US agency.

In-house hiring is the other comparison people make. According to [Indeed](https://www.indeed.com/career/software-engineer/salaries), the average base salary for a software engineer in the United States was $135,623 per year as of August 2026, before benefits, equipment and recruiting costs. That is a sensible option when you have permanent, full-time engineering work. For a defined project, or for steady part-time work, contracting is usually cheaper and faster to start. The separate guide on [part-time developers, freelancers and agencies](/guides/part-time-developer-vs-freelancer-vs-agency) covers that decision in detail.

Rate is only half the equation. A senior developer at $30 per hour who has built customer portals before will usually finish faster and with fewer defects than a junior at $15 who has not. Ask who will actually write the code, and ask to see something similar they have shipped.

## How to estimate your own project

You can get within 30 per cent of a professional estimate in an afternoon.

1. **Write the user journeys, not the screens.** For each type of user, list what they need to do from start to finish. "A dispatcher assigns a job to a driver and sees when it is delivered" is one journey; it implies four or five screens and a notification.
2. **Turn journeys into features.** Match each journey to standard building blocks: accounts, roles, dashboards, notifications, file uploads, payments, reporting, integrations. The [cost pages](/cost) on this site list the common ones with hour ranges.
3. **Pick a tier for each feature.** Basic, standard or advanced. Be honest about version one. Most first releases only need the basic or standard tier.
4. **Add the foundation.** 60 to 120 hours for any new product.
5. **Add design, testing and a contingency.** Design at 15 to 25 per cent, testing and launch at 15 to 20 per cent, and a 10 to 15 per cent contingency for the things nobody thought of.
6. **Multiply by a rate.** $30 per hour for a senior offshore team, or the rate of whoever you plan to hire.

The [calculator](/tools/app-development-cost-calculator) does steps two to six for you once you have the feature list.

### A worked example

A small logistics company wants a customer portal so clients can track shipments and download documents instead of phoning. An illustrative breakdown looks like this.

| Item | Hours |
|---|---|
| Project foundation | 80 |
| Authentication (standard tier, with Google sign-in and admin user tools) | 45 |
| Role-based access for customer users, staff and managers | 40 |
| Shipment list, detail page and milestone timeline | 90 |
| Document upload and download per shipment | 35 |
| Email and SMS notifications on status changes | 40 |
| Integration with the existing transport management system | 70 |
| Basic reports and CSV export | 40 |
| Design, testing, launch and contingency (about 30 per cent) | 130 |
| **Total** | **570 hours** |

At $30 per hour that is about $17,000, or roughly ₹14 lakh, and around four months with one developer or two to three months with two. Your numbers will differ, but the shape rarely does: integrations and the non-feature work together make up close to half the effort.

## Hidden and ongoing costs

The build price is not the total cost of owning software. Plan for these from the start.

- **Hosting and infrastructure.** A small application on a modern cloud platform typically costs $20 to $200 a month. Costs rise with traffic, storage and background processing.
- **Third-party services.** Authentication providers, email and SMS delivery, maps, payment gateway fees and AI model usage are all metered. Individually small, together they can reach a few hundred dollars a month.
- **Maintenance.** Dependency updates, security patches, small fixes and platform changes. A common planning figure is 15 to 20 per cent of the build cost per year, which is why many clients keep a developer on a part-time retainer after launch.
- **Change.** Your business will change, and the software will need to follow. Budget for a second phase rather than trying to build everything in the first.

## How to keep the budget under control

The projects that come in on budget share a few habits. They fix scope in writing before work starts and treat additions as separate, priced changes. They use hosted services for commodity features rather than rebuilding them. They ship a smaller version one to real users and let usage decide what comes next. And they review working software every week rather than waiting for a big reveal at the end.

At Aresyn every project starts with a written proposal that lists the scope, tiers, timeline and price, followed by weekly demos, on either a fixed-scope or part-time basis. Whoever you work with, ask for the same, and share a budget range when you do. The guide on [writing a software project brief](/guides/how-to-write-a-software-project-brief) shows what to include so the quotes you get back are comparable.
