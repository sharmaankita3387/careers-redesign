# High-Velocity Frontend Refactor & UI/UX Audit Demo

This repository serves as a live engineering case study demonstrating **vibe-coding workflows**, rapid prototyping agility, and meticulous attention to frontend design systems. 

It was built as an unsolicited technical audit and modernization proposal for a production SaaS careers portal.

---

### 🔍 The Audit: Identified Regression Issues in Production
1. **Container Grid Layout Drift:** Viewport width boundaries caused severe grid shifts and clipping on standard displays.
2. **Generic ATS Asset Inheritance:** The production build relied on a default third-party ATS pink favicon placeholder rather than native corporate branding.
3. **Typography & Visual Noise:** Excessive usage of unaligned em-dashes and distracting emoji icons degraded overall brand credibility and professional tone.

---

### 🛠️ The Solution & Architecture
* **Modular Codebase:** Separated concerns cleanly into `index.html`, `styles.css`, and `script.js`.
* **Tailwind CSS Utility Framework:** Enforced strict responsive design constraints, flexbox grid alignment, and fluid spacing scales.
* **Custom SVG Favicon Integration:** Injected a localized data-URI branded SVG favicon to restore corporate identity parity.
* **Semantic Hierarchy:** Optimized typographic scales (`Inter`) for crisp readability across mobile and desktop breakpoints.

---

### 🤖 The Vibe-Coding Prompt Used to Generate This Repo

To build, structure, and refine this layout at high velocity, the following comprehensive prompt specification was executed with an AI assistant:

```text
UI/UX Redesign Brief: Premium Software Engineering Careers Page

Act as a senior product designer and frontend engineer at a top-tier SaaS company. Redesign my existing Software Development Co-op careers page into a premium, production-quality recruiting experience that would impress a demanding client during a live interview demo.

I will provide screenshots of the existing website. Treat them as a reference for the current content, structure, and functionality—not as a visual design to copy.



1. Primary objective

Transform the existing AI-generated-looking page into a cohesive, modern, sophisticated careers experience that feels deliberately designed by an experienced product team.

The result should communicate:



Technical excellence and engineering credibility.

A modern, ambitious SaaS company.

Attention to detail and strong product design judgment.

A clear, frictionless path from viewing the job to submitting an application.

The design should be visually impressive without being flashy, cluttered, overanimated, or difficult to use.



2. Art direction

Use a premium technical SaaS aesthetic inspired by excellent developer tools, modern B2B software companies, and carefully art-directed editorial websites.

Preserve the existing navy and cyan brand direction, but refine its application.

Suggested design tokens:



Primary navy: #071F42 or a similarly rich, deep blue.

Deep hero background: #061A35.

Cyan accent: #22D3EE.

Primary text: #101D33.

Body text: #53657F.

Page background: #F5F8FC.

Card background: #FFFFFF.

Borders: subtle blue-gray, such as #DFE7F0.

Use these as starting points and adjust for contrast and visual harmony.

Use a restrained color palette. Cyan should emphasize important actions, links, small indicators, and selected highlights—not every heading or decorative element.

Typography:



Use a high-quality modern sans-serif, such as Inter, Geist, or an existing equivalent already installed.

Establish a deliberate type scale for hero headlines, section headings, body text, metadata, labels, and helper text.

Use confident headline typography, readable body copy, appropriate line lengths, and consistent font weights.

Avoid making every element bold or using oversized text everywhere.

Spacing:



Establish a consistent spacing system based on multiples of 4 or 8 pixels.

Use generous whitespace where it improves hierarchy, but eliminate large areas of empty space that serve no purpose.

Align content to a consistent grid.

Use restrained corner radii, subtle borders, and minimal shadows.

3. Redesign the page section by section

A. Navigation

Create a refined, compact navigation bar.



Keep the company logo placeholder and company name on the left.

Keep a prominent “Apply Now” CTA on the right.

Align the navigation with the main page content.

Use a subtle bottom border or restrained background treatment.

Make the header sticky only if it improves navigation and does not consume excessive viewport space.

On mobile, preserve the logo and a usable application CTA without crowding the layout.

Do not invent a real company logo or brand name.



B. Hero section

This is the most important visual improvement.

Replace the generic centered hero composition with a more intentional, premium layout.

Requirements:



Make the position title the unmistakable focal point.

Retain the role: “Software Development Co-op.”

Keep the research and development department and remote location information.

Preserve the salary range of $3,800–$4,800 CAD per month.

Preserve the January–April 2027 / Summer 2027 term information.

Retain the approximate one-week response-time claim, but only as existing placeholder content that can be verified before launch.

Write a concise, compelling supporting description without making unsupported company claims.

Make the primary application action immediately obvious.

Consider a left-aligned editorial hero with a narrow metadata row and a subtle technical visual on the right, or another composition that makes the page feel bespoke.

If adding a visual, use a restrained engineering-inspired motif: abstract system diagrams, connected nodes, subtle grid geometry, or a custom CSS/SVG illustration. It should communicate software infrastructure without looking like generic stock art.

Avoid:



Excessively large centered headings.

A wall of pill-shaped badges.

Heavy glow effects.

Obvious AI-generated gradient backgrounds.

Decorative elements that compete with the job title.

The hero must remain visually balanced at both desktop and mobile widths.



C. Main job description

Create a clear two-column desktop layout:



Main column: approximately 65–70% of the available content width.

Sidebar: approximately 30–35%.

Use a consistent gap and aligned top edges.

Stack the columns appropriately on smaller screens.

Improve the content presentation for these sections:



About the company

What you'll do

What you bring

Avoid rendering every section as an identical rounded white card.

Instead:



Use clear section headings and carefully spaced content.

Introduce subtle section numbering or small cyan markers where useful.

Use fine dividers and selective background surfaces.

Improve bullet indentation, line height, and spacing between items.

Preserve the original information and meaning.

Ensure paragraphs do not become excessively wide.

The result should feel editorial, structured, and easy to scan.



D. Position summary sidebar

Turn the current sidebar into a polished job overview component.

Include:



Department: R&D

Location: Remote (Toronto/GTA)

Compensation: $3.8k–$4.8k CAD/month

Work type: Full-time Co-op

A prominent “Apply for this Position” button

Requirements:



Make compensation easy to notice without overpowering the other information.

Align labels and values consistently.

Separate rows with subtle dividers.

Keep the component visually integrated with the main content.

Consider a sticky sidebar on desktop if appropriate.

Ensure it becomes a normal full-width section on mobile.

Both application CTAs must lead to the same application section.

Do not use excessive shadows or a floating-card effect that makes the sidebar look disconnected from the page.



E. Application form

The application form must feel like a natural continuation of the careers page, not a separate template.

Retain these fields:



First name

Last name

Email address

Phone number

LinkedIn profile URL

Resume upload in PDF format

Optional cover letter / note to the engineering team

Design requirements:



Use a consistent form container with a sensible maximum width.

Make labels readable and clearly associated with their inputs.

Use consistent input heights, padding, borders, and focus states.

Arrange first and last name side by side on desktop.

Arrange email and phone side by side on desktop.

Use full-width fields for LinkedIn, resume upload, and the optional message.

On mobile, stack fields into a single column.

Design a professional drag-and-drop resume upload area with a clear upload icon, file restrictions, and a selected-file state.

Provide clear required-field indicators and inline validation messages.

Add visible keyboard focus states.

Use a high-contrast submit button with clear hover, loading, disabled, success, and error states.

Prevent the form from appearing excessively small in the viewport or surrounded by unnecessary empty space.

Use realistic but clearly replaceable placeholder values. Never prefill personal information that could be mistaken for actual applicant data.

Most importantly, preserve the existing form functionality. If a real submission endpoint already exists, keep it working. If there is no backend, implement only the frontend validation and honest demo submission behavior; do not pretend an application has actually been delivered to a company.



F. Footer

Create a minimal, refined footer that visually closes the experience.

Include:



Company name placeholder.

A short copyright line.

Optional links only if they already exist or can be configured.

Keep the footer consistent with the rest of the brand. Avoid tiny, barely readable text.



4. Motion and interaction

Use subtle, purposeful interactions:



Smooth scrolling when an application CTA is clicked.

Restrained button hover and focus transitions.

A subtle entrance treatment for key sections, only if it does not delay access to content.

Clear input focus and validation states.

A polished resume upload interaction.

Respect reduced-motion preferences. Avoid parallax, excessive animation, bouncing elements, custom cursors, and distracting transitions.

All buttons and links must have meaningful behavior. Do not add decorative controls that do nothing.



5. Responsive behavior

Test the design at approximately:



1440px desktop.

1024px laptop or tablet landscape.

768px tablet.

390px mobile.

320px narrow mobile.

Ensure:



No horizontal overflow.

No clipped headlines or buttons.

No overlapping header elements.

Consistent spacing at each breakpoint.

Readable body text.

Properly stacked content and form fields.

An accessible application flow on touch devices.

Do not simply scale down the desktop layout. Make deliberate responsive layout decisions.



6. Technical and accessibility requirements

Before changing anything, inspect the existing project structure, framework, styles, dependencies, routes, and form behavior.

Then:



Reuse the existing framework and architecture.

Preserve working functionality and navigation.

Reuse existing dependencies when possible.

Avoid unnecessary libraries and bloated abstractions.

Create reusable components and centralized design tokens where appropriate.

Use semantic HTML and accessible form labels.

Maintain sufficient color contrast.

Support keyboard navigation and visible focus indicators.

Use appropriate heading hierarchy.

Ensure buttons and links have accessible names.

Avoid layout shifts and unnecessarily large assets.

Do not introduce console errors or broken routes.

Do not rewrite the entire project or replace functional code without a reason.



7. Content integrity

Treat the existing screenshots and source code as the source of truth for the current job information.

Preserve the position title, salary, term, department, location, company description, responsibilities, qualifications, application fields, and existing working interactions.

Do not invent:



Company achievements or customer numbers.

Employee testimonials.

Partnerships or certifications.

Benefits that have not been supplied.

Fake application statistics or urgency indicators.

Improve the presentation and wording where useful without changing factual meaning.

Keep company-specific placeholders easy to replace before the demo.



8. Final quality bar

The finished website should feel like a real product designed by a strong product designer and implemented by an experienced frontend engineer.

Prioritize:



Visual hierarchy.

Typography and spacing.

A cohesive design system.

A distinctive but restrained hero.

A clear, useful job summary.

An excellent application experience.

Responsive behavior and accessibility.

Functional correctness.

Avoid the common AI-generated design patterns of excessive pills, identical cards, arbitrary gradients, huge rounded corners, repetitive shadows, excessive icons, and meaningless decorative sections.



9. Execution instructions

Do not stop after producing a design proposal or a list of suggestions.

Inspect the existing codebase, implement the redesign directly in the existing project, and run the available checks.

Verify the page at desktop and mobile sizes, inspect the application flow, and fix obvious layout or functional regressions.

At the end, provide a concise summary of:



What changed.

Which files were modified.

What functionality was preserved or improved.

Any remaining backend integrations or deployment steps.

The final result should be cohesive, polished, production-minded, and impressive in a live client demonstration without sacrificing usability or maintainability.
