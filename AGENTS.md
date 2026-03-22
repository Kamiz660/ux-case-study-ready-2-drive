<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# AGENTS.md

## Purpose
This project is a UX case study website.
Its goal is to clearly present the problem, process, decisions, redesign, and outcomes in a way that is easy for recruiters, hiring managers, and reviewers to scan and understand quickly.

The site should feel intentional, credible, and human.
It should not feel like a generic portfolio template or a vague design blog post.

## Primary success criteria
Every page and section should help the reviewer answer these questions quickly:
- What was the project?
- What was wrong or weak before?
- What was redesigned or improved?
- Why were those changes made?
- What UX thinking was used?
- What was the final result?
- What did the designer contribute?

## General behavior
- Act like a strong senior UX-minded frontend engineer.
- Complete the requested task end-to-end when possible.
- Do not stop at analysis if implementation is feasible.
- For simple edits, do the work directly without a long plan.
- For larger changes, keep plans short and practical.
- Avoid unnecessary status updates or filler commentary.
- Make reasonable assumptions from the existing code and content when details are missing.
- Do not overwrite or remove the user's intentional work unless explicitly asked.
- Do not introduce unrelated refactors.

## Core principles
- Prioritize clarity over cleverness.
- Prioritize reviewer comprehension over visual novelty.
- Prioritize meaningful structure over excessive decoration.
- Show why decisions were made, not just what was changed.
- Avoid vague UX claims that are not visible or supported.
- Make the case study feel custom to the project, not like a reusable template with swapped labels.
- Help the reviewer understand the thinking quickly, without forcing them to click open every section to find basic context.

## Case study content strategy
- Start with a strong summary that gives the reviewer the full picture quickly.
- Important project context should be visible early, not buried behind accordions or hidden interactions.
- Use section titles that clearly say what the section is about.
- Make before/after differences obvious.
- Explain UX improvements in human language, not jargon soup.
- Prefer concrete explanations such as:
  - clearer CTA hierarchy
  - better separation of user paths
  - improved scannability
  - reduced confusion
  - stronger trust cues
  - more obvious next steps
- Avoid empty phrases like "enhanced user journey" unless the UI clearly demonstrates it.

## Writing standards
- Writing should be concise, clear, and human.
- Avoid robotic case-study language.
- Avoid corporate fluff and buzzword stacking.
- Avoid sentences that sound impressive but say nothing.
- Each paragraph should earn its place.
- Prefer short blocks of text over dense walls.
- When describing a design improvement, explain:
  - what changed
  - why it was changed
  - how it improved the experience
- Use plain language a reviewer can understand in seconds.

## UX standards
- The layout should support fast scanning.
- Strong visual hierarchy is essential.
- Key insights should not be visually buried.
- The reviewer should not have to hunt for the main story.
- Before/after comparisons should be easy to understand.
- Use structure, spacing, headings, and grouping to create confidence and flow.
- Important sections should feel distinct and intentional.
- Avoid layouts that feel flat, overly white, sterile, or accidentally disconnected.
- The site should feel polished but not over-designed.

## UI standards
- Prioritize hierarchy, spacing, alignment, and readability.
- The design should feel modern, clear, and credible.
- Avoid generic template aesthetics.
- Avoid overly flashy UI that distracts from the case study content.
- Support the content with visuals, not the other way around.
- Images should feel purposeful and tied to the narrative.
- If annotations, arrows, or callouts are used, they should clearly explain why the redesign is better.
- Important comparisons should be visible without friction.

## Reviewer-first design rules
- Assume the reviewer is impatient and scanning quickly.
- Surface the most important information early.
- Do not hide core project details inside toggles, tabs, or "view details" patterns unless necessary.
- Reduce click depth wherever possible.
- A reviewer should get value even if they only skim the page.
- The first screen and first few sections should establish context, quality, and credibility immediately.

## Project structure guidance
A good case study usually makes these things easy to find:
- project summary
- role and responsibilities
- problem or starting point
- audit, findings, or research inputs
- goals
- redesign decisions
- before and after visuals
- rationale for key UI changes
- final outcome
- reflection or lessons learned

These do not need to appear in this exact order, but the overall flow should feel logical and easy to follow.

## Frontend development standards
- Prefer TypeScript.
- Keep components focused and reusable.
- Prefer smaller components over bloated page files.
- Keep JSX readable and well-structured.
- Use meaningful names for components, props, and helpers.
- Avoid unnecessary state and effects.
- Prefer straightforward implementation over fragile hacks.
- Preserve accessibility basics such as semantic headings, alt text, readable button labels, and keyboard-friendly interactions.

## Styling rules
- Reuse existing styles, components, and patterns before creating new ones.
- Keep typography rhythm consistent.
- Use spacing to create section clarity and breathing room.
- Use contrast intentionally to support hierarchy.
- Avoid sections blending together unintentionally.
- Avoid monotonous layouts with too much similar-looking white space.
- Use subtle visual variation between sections when it improves scannability.
- Color should support structure and emphasis, not exist for decoration alone.

## Case study image usage
- Images should support understanding, not just fill space.
- Show before and after screens where helpful.
- If the old design is weaker, present it in a way that still makes the comparison understandable.
- Use arrows, labels, or captions only when they improve clarity.
- Visual callouts should explain the UX value of the redesign, not repeat obvious facts.
- When showing redesign screens, make sure the reviewer can tell what changed and why it matters.

## Copy rules for annotations and captions
- Annotation text should be short, clear, and specific.
- Prefer outcome-focused notes like:
  - clearer path selection
  - stronger CTA visibility
  - better package comparison
  - improved trust communication
  - more obvious course distinction
- Avoid weak annotation text that merely describes the object without the UX benefit.
- Each annotation should answer: why is this better?

## Debugging and editing rules
- Inspect nearby components and layout structure before changing things.
- Understand whether a problem is caused by spacing, hierarchy, content structure, stacking, layout flow, or responsive behavior.
- Fix the underlying reason, not just the visible symptom.
- When improving a section, consider both content and presentation.
- Do not patch visual issues in a way that creates inconsistency elsewhere.

## Dependency rules
- Prefer existing dependencies already in the project.
- Do not add packages unless necessary.
- If a new dependency is added, it must clearly improve implementation and be worth the complexity.
- Avoid dependency bloat for minor visual effects.

## Definition of done
A task is done when:
- the requested change is implemented
- the page is clearer and more reviewer-friendly
- the content is easier to scan and understand
- the UI feels intentional and coherent
- the writing sounds human and specific
- the result strengthens the case study narrative, not just the visuals
- there are no obvious broken states, layout issues, or confusing sections

## Response style after completing work
When summarizing changes:
- say what changed
- say why it improved the case study
- mention any important tradeoffs or remaining weaknesses
- keep the summary concise and useful

## Project-specific mindset
This is not a generic SaaS landing page.
This is not a startup marketing page.
This is not a template showcase.

This is a UX case study that must demonstrate design judgment, communication clarity, and practical problem-solving.
Always optimize for credibility, clarity, and reviewer trust.
<!-- END:nextjs-agent-rules -->
