---
title: "How to write a software project brief that gets you accurate quotes"
description: "What to put in a two-page software project brief so developers and agencies return comparable, accurate quotes, with a copy-paste template."
datePublished: 2026-09-03
dateModified: 2026-09-03
author: aresyn
readingMinutes: 7
keyTakeaways:
  - "A good brief describes the business problem, the users, the day-one essentials, the systems to connect to, and your budget range and deadline. Two or three pages are enough."
  - "Quotes vary because vendors fill gaps with their own assumptions. Every gap you close brings the quotes closer together."
  - "Describe what users need to do, not what the screens should look like. Let the people quoting propose the design."
  - "Share a budget range. It does not raise the price; it stops vendors quoting the wrong project."
faqs:
  - q: "How long should a software project brief be?"
    a: "Two to three pages is enough for most projects. A brief is not a specification. Its job is to give a developer or agency enough context to propose an approach and quote a range with stated assumptions. Detailed requirements come later, usually as part of a scoping phase that the vendor runs with you."
  - q: "Should I tell developers my budget?"
    a: "Yes, as a range. Without it, one vendor quotes a minimal version and another quotes an enterprise platform, and you cannot compare them. A range lets each vendor propose the best version of the project for that money and say clearly what would not fit. Good vendors do not simply quote the top of the range."
  - q: "Do I need wireframes or designs before asking for quotes?"
    a: "No. Written user journeys are more useful at this stage because they explain intent, and rough sketches are welcome if you have them. Detailed designs made before choosing a vendor often lock in decisions that a good team would question. Design belongs inside the project, after scope is agreed."
  - q: "What is the difference between a brief and a specification?"
    a: "A brief explains the problem, the users, the constraints and the outcome you want, so that vendors can propose an approach and a price range. A specification describes exactly what will be built, screen by screen and rule by rule, and is normally produced with the vendor once you have chosen them. Writing a full specification before choosing a vendor is usually wasted effort."
related:
  - /guides/custom-web-app-development-cost
  - /guides/part-time-developer-vs-freelancer-vs-agency
  - /contact
order: 4
---

A good software project brief explains the business problem, who the users are, what must exist on day one, which systems it has to connect to, and your budget range and deadline. Two or three pages are enough. Vendors quote accurately when they can see the constraints and vaguely when they cannot.

This guide explains what goes in each section and why, gives you a template to copy, and shows how to compare the quotes that come back.

## Why do quotes for the same project vary so much?

Send the same one-paragraph description to five developers and you will get five prices that differ by a factor of three or more. That is not because four of them are dishonest. It is because a short description leaves dozens of decisions open, and each vendor closes them differently.

One assumes email and password login; another assumes single sign-on for your corporate customers. One assumes a template design; another assumes fully custom screens with animation. One assumes your data is clean and ready to import; another assumes weeks of migration. Each of those choices changes the estimate by thousands of dollars, and none of them was in your description.

A brief exists to close those gaps. Every assumption you replace with a fact brings the quotes closer together and makes them comparable.

## What should a software project brief include?

The table lists each section, what to write, and what happens when it is missing.

| Section | What to write | If you leave it out |
|---|---|---|
| Background | Two paragraphs on the business, what you do and why this project now | Vendors design for a generic company rather than yours |
| The problem | What is slow, error-prone or impossible today, with an example and a rough cost in hours or money | Vendors solve the wrong problem or gold-plate the right one |
| Users | Each type of user, how many, where they work, which devices and connectivity they have | Mobile, offline and multi-role work is missed or over-built |
| Day-one essentials | The five to ten things the system must do at launch, written as user journeys | Every vendor quotes a different product |
| Later and never | What can wait for a second phase, and what you explicitly do not want | Version one grows until it is unaffordable |
| Existing systems | Every tool the new system must read from or write to, with a note on whether it has an API | Integration effort, often a third of the project, is guessed |
| Data | What data exists today, where it lives, how clean it is, and whether it must be migrated | Migration turns up late as an unbudgeted surprise |
| Constraints | Compliance, security, hosting location, brand guidelines, accessibility, languages | Rework after the fact, at your cost |
| Budget range | A realistic range, and whether it includes design, ongoing support and third-party fees | Vendors quote the wrong size of project |
| Timeline | The real deadline, why it exists, and what happens if it slips | Unrealistic plans or unnecessary rush charges |
| Success measures | How you will know it worked, in numbers where possible | Nobody can tell you whether the project succeeded |
| Decision process | Who decides, by when, and what you need from vendors to decide | Slow, repeated rounds of questions |

## The brief template

Copy this into a document and fill in each section. Short, honest answers are better than long, vague ones. Delete anything that does not apply.

```text
PROJECT BRIEF: [working name]
Prepared by: [name, role, email]        Date: [date]

1. BACKGROUND
What the business does, size, locations, how you make money.
Why this project, and why now.

2. THE PROBLEM
What is slow, error-prone or impossible today. One concrete example.
Rough cost of the problem (hours per week, money per month, lost customers).

3. USERS
For each type of user: who they are, how many, where they work,
which devices they use, connectivity conditions, technical comfort.

4. DAY-ONE ESSENTIALS
Written as journeys: "A [user] needs to [do something] so that [outcome]".
List five to ten. These define version one.

5. LATER, AND NOT AT ALL
Things that can wait for phase two.
Things you do not want, even if suggested.

6. EXISTING SYSTEMS
Every tool the new system must connect to: name, what it holds,
whether it has an API or export, who administers it.

7. DATA
What data exists, where, how much, how clean, whether it must be migrated.

8. CONSTRAINTS
Compliance and security requirements, hosting or data location,
brand guidelines, accessibility, languages, anything contractual.

9. BUDGET RANGE
Low and high figures. State whether this includes design, ongoing support,
hosting and third-party fees. If there is a phase two budget, say so.

10. TIMELINE
Real deadline and the reason for it. Any dates that cannot move.

11. SUCCESS MEASURES
Three numbers you will look at six months after launch.

12. DECISION PROCESS
Who decides, when, and what you want from vendors:
a proposal, a call, references, a demo of similar work.

ATTACHMENTS
Screenshots of current tools, sample documents, existing designs or sketches,
any earlier requirements documents.
```

## How to describe features without designing the product

The most useful part of a brief is section four, and the most common mistake is writing it as a list of screens or copying features from a competitor's website.

Write journeys instead. A journey names the user, what they need to do, and why. "A customer needs to see the status of every open shipment and download the delivery note so that they stop phoning our office" tells a developer more than "shipment tracking page, document download page". It explains the intent, implies the data involved, and leaves the design open for the people who will build it to propose something better than you would have specified.

Be concrete about volume and frequency. "About 40 customers, each with 5 to 50 shipments a month" changes the design far more than any adjective. Say which journeys are daily, which are monthly, and which are rare but critical.

Mark each journey as essential or later. If everything is essential, nothing is, and the quotes will be for a project you cannot afford.

## Should you share your budget?

Yes, as a range, and this is the section most people leave blank.

The worry is that vendors will quote the top of the range regardless of the work. In practice the opposite problem is far more common: without a range, one vendor proposes a minimal version and another proposes an enterprise platform, the prices differ by a factor of five, and you have learned nothing. A range lets each vendor propose the best version of the project for that money and say plainly what would not fit.

If you genuinely do not know, say what you have compared it to. "We are currently paying about ₹40,000 a month across three tools and losing a day a week to manual work" is enough for a good vendor to suggest a sensible size. The guide on [custom web app costs](/guides/custom-web-app-development-cost) and the cost calculator will give you a starting range in an afternoon.

## What to attach

Attachments answer questions before they are asked and save a round of email. The most useful are:

- **Screenshots of the tools and spreadsheets you use today**, including the ugly ones. They show the real process.
- **Sample documents** the system will produce or consume: an invoice, a quote, a delivery note, a report, with sensitive data removed.
- **Sketches, if you have them.** Photos of a whiteboard are fine. Do not commission polished designs before you have chosen a vendor.
- **Existing documentation** for systems you need to integrate with, or at least a link to the vendor's API page.
- **Brand guidelines** if the system is customer-facing.

## How to evaluate the quotes you get back

A brief is also a test. The proposals that come back tell you a lot about how each vendor works.

Look for stated assumptions. A good proposal says which tier of each feature it includes, what it assumed about integrations and data, and what is excluded. A single number with no assumptions is a guess.

Look for questions. Vendors who read the brief carefully will have asked something before quoting. Silence usually means the brief was skimmed.

Compare scope before price. Line the proposals up by what is included and adjust for the differences. The cheapest quote often omits testing, migration or a second platform.

Check the delivery model. Weekly demos of working software, a named team you can talk to, and ownership of code and accounts in your name should all be in the proposal. Ask if they are not.

Ask what happens when scope changes, because it will. The answer should be a clear, priced process rather than either "anything goes" or a refusal.

Finally, ask to see something similar running, and ask what went wrong on that project. Every real project has a story; vendors who claim otherwise have not done many.

## Common mistakes

A few patterns cause most of the trouble we see in briefs.

Writing a specification instead of a brief, with every screen and rule defined before a vendor has been chosen. This takes weeks, locks in decisions that a good team would challenge, and is usually thrown away.

Listing features from competitors rather than journeys from your own operation. You end up quoting a copy of someone else's product, not a solution to your problem.

Leaving out the systems the software must talk to. Integrations are often a third of the effort and the most common source of overruns.

Skipping the budget, for the reasons above.

Setting a deadline with no reason behind it. Real deadlines, such as a contract start or a trade show, shape the plan usefully. Arbitrary ones just add cost.

If you would like a second pair of eyes on a brief before you send it out, [send it to us](/contact). We start every project with a written proposal against a brief like this one, and we are happy to point out gaps even if you end up working with someone else.
