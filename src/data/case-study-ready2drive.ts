import type { CaseStudy } from "@/types/case-study";

export const ready2DriveCaseStudy: CaseStudy = {
  slug: "ready2drive-pei",
  title: "Ready2Drive PEI",
  subtitle: "Redesigned to make lesson choices clearer and the next step easier",
  meta: {
    role: "Fullstack Developer",
    timeline: "1 week",
    platform: "Ready2Drive PEI",
    projectType: "UX Case Study",
  },
  quickSummary:
    "This redesign turns a cluttered homepage into a clearer decision page, helping visitors understand options faster and reduce hesitation before contact.",
  heroPreview: {
    src: "/case-studies/ready2drive/after-redesign-overview.png",
    alt: "Updated after screenshot for the redesigned Ready2Drive experience.",
    caption: "After snapshot: clearer structure, stronger action hierarchy, and better scan flow.",
    group: "hero-preview",
    layoutType: "long",
  },
  heroBeforePreview: {
    src: "/case-studies/ready2drive/before-annotated-current-site.png",
    alt: "Annotated screenshot from the previous Ready2Drive experience.",
    caption: "Before snapshot: weak hierarchy and unclear next-step emphasis.",
    group: "hero-preview",
    layoutType: "long",
  },
  outcomeCards: [
    {
      title: "Path Clarity",
      value: "Online and offline options are clearly separated.",
      note: "Users can tell where to go right away.",
    },
    {
      title: "Decision Confidence",
      value: "Trust details appear before commitment points.",
      note: "Users get reassurance earlier.",
    },
    {
      title: "Action Hierarchy",
      value: "Primary actions stand out more clearly.",
      note: "The next step is easier to notice.",
    },
  ],
  outcomeSnapshot: {
    challenge:
      "The original site had only minimal content, which made the offer feel limited and it was not organized in a way that made the offer easy to scan, compare, or act on. Weak hierarchy, vague navigation, and unclear action paths reduced clarity and confidence. The redesign also needed to accommodate a new online course, expanding the site beyond its original structure.",
    solutionDirection:
      "I restructured the site around clearer user intent, improved labeling and CTA clarity, separated lesson and course paths, and organized key details so visitors could compare options and take action more easily and place supporting details closer to the moments where users make decisions.",
    deliverables:
      "UX audit, competitor analysis, information architecture revisions, key decision patterns, and implemented final screens.",
    impact:
      "Expected impact: better inquiry quality, less drop-off, and faster action for both services.",
  },
  sections: [
    {
      id: "the-problem",
      label: "The Problem",
      style: "analysis",
      summary:
        "The original homepage relied on vague labels to communicate key information, which weakened clarity and confidence.",
      keyPoints: [
        "Navigation used labels like “More Info,” which gave users little sense of what they would actually find after clicking.",
        "The primary message was present, but weak hierarchy reduced its visibility and impact.",
        "The main CTA did not stand out, and its wording gave too no confidence or clarity about what users would get next.",
      ],
      deepDive: [
        "On first visit, users had to figure out whether the site was for offline lessons, online theory, or both.",
        "Menu labels were broad and did not guide people to the right path quickly.",
        "Too many elements had similar visual weight, so the eye had no clear priority.",
        "For a paid learning service, this hurts confidence exactly where confidence should increase.",
      ],
      figures: [
        {
          src: "/case-studies/ready2drive/before-annotated-current-site.png",
          alt: "Annotated screenshot of the old site showing hierarchy and CTA issues.",
          caption: "Before: users had to work too hard to understand what to do next.",
          group: "problem-proof",
          layoutType: "long",
        },
        {
          src: "/case-studies/ready2drive/final-homepage-redesign.png",
          alt: "Final redesigned homepage with clearer layout and section flow.",
          caption: "After: clearer structure and clearer decision path from first view.",
          group: "problem-proof",
          layoutType: "long",
        },
      ],
    },
    {
      id: "audit-findings",
      label: "Audit Findings",
      style: "analysis",
      summary:
        "The audit showed that layout and visual priority were slowing people down.",
      keyPoints: [
        "Main messages did not stand out enough from the rest of the page.",
        "Important actions were visible, but they were easy to miss.",
        "Too many sections looked similar, so people could not tell what mattered first.",
      ],
      deepDive: [
        "Method: heuristic review, core journey walkthrough, and mobile/desktop checks.",
        "Most friction appeared in the first 45 seconds when users were trying to choose a path.",
        "Many sections looked equally important, so users could not quickly rank what to read first.",
        "I prioritized changes by business impact and user confidence, not by visual preference.",
        "The sequence became clear: clarify paths, improve hierarchy, and support confident action.",
      ],
    },
    {
      id: "competitor-analysis",
      label: "Competitor Analysis",
      style: "analysis",
      summary:
        "The competitor review confirmed what to avoid: crowded menus and too many equal actions.",
      keyPoints: [
        "Many competitor sites showed too many options at once.",
        "That made simple decisions slower before people could take action.",
        "Ready2Drive could stand out by being cleaner and easier to scan.",
      ],
      figures: [
        {
          src: "/case-studies/ready2drive/competitor-benchmark-site.png",
          alt: "Competitor screenshot showing overloaded navigation and action clutter.",
          caption: "Competitor signal: cluttered structure reduces decision speed.",
          group: "competitor-proof",
          layoutType: "long",
        },
      ],
      deepDive: [
        "Benchmark criteria: service clarity, action visibility, trust communication, and speed to action.",
        "Common pattern: most competitors showed many equal actions, which reduced urgency.",
        "Key insight: dense navigation and weak action priority made first decisions slower.",
        "Strategic takeaway: Ready2Drive should lead with clarity and confidence over density.",
      ],
    },
    {
      id: "strategy-key-decisions",
      label: "Strategy and Key Design Decisions",
      style: "decision",
      summary:
        "The redesign turned those findings into practical decisions that make action easier.",
      keyPoints: [
        "Separate offline lessons and online theory into clear sections.",
        "Give each section one clear main action.",
        "Show trust details right before users need to decide.",
      ],
      figures: [
        {
          src: "/case-studies/ready2drive/decision-service-routing-hero.png",
          alt: "Redesigned hero section with stronger primary and secondary action hierarchy.",
          caption: "Decision 1: clarify service routes at the first interaction point.",
          group: "strategy-decisions",
          layoutType: "standard",
        },
        {
          src: "/case-studies/ready2drive/decision-course-credibility.png",
          alt: "Online course section with benefits and focused action.",
          caption: "Decision 2: present the online course as a credible, structured option.",
          group: "strategy-decisions",
          layoutType: "standard",
        },
        {
          src: "/case-studies/ready2drive/dec3.png",
          alt: "Offline lesson plans laid out in one place with clearer comparison detail.",
          caption:
            "Decision 3: Clarified the offline lesson plans so users can compare options more easily and choose with more confidence.",
          group: "strategy-decisions",
          layoutType: "standard",
        },
        {
          src: "/case-studies/ready2drive/decision-contact-confidence.png",
          alt: "Redesigned contact section with clear framing and reduced anxiety.",
          caption:
            "Decision 4: reduce hesitation in inquiry with stronger expectation and clarity.",
          group: "strategy-decisions",
          layoutType: "standard",
        },
      ],
      deepDive: [
        "Copy and layout were refined together so they support the same decision flow.",
        "Decision links: every change is tied to a specific friction point found in the audit.",
        "Offline and online paths are related but shown as separate decisions with separate next steps.",
        "Trust copy is placed before form actions so users feel ready to proceed.",
        "The final scan flow is simple: understand, trust, then act.",
      ],
    },
    {
      id: "final-screens",
      label: "Final Screens",
      style: "showcase",
      summary:
        "The final interface is easier to scan, easier to trust, and easier to use.",
      keyPoints: [
        "Better hierarchy and clearer CTAs make key actions easier to notice.",
        "A smoother booking flow helps users move forward with less friction.",
        "More context near inquiry actions supports confidence before sending a message.",
      ],
      figures: [
        {
          src: "/case-studies/ready2drive/final-homepage-redesign.png",
          alt: "Final redesigned homepage screenshot.",
          caption: "Homepage optimized for service clarity and conversion flow.",
          group: "final-screens",
          layoutType: "long",
        },
        {
          src: "/case-studies/ready2drive/final-online-course-page.png",
          alt: "Final dedicated online course page screenshot.",
          caption: "Online course page with clearer value framing and progression cues.",
          group: "final-screens",
          layoutType: "long",
        },
      ],
    },
    {
      id: "expected-impact",
      label: "Expected Outcome",
      style: "decision",
      summary: "Expected outcome: a clearer path from first view to booking or inquiry.",
      keyPoints: [
        "People should understand service choices faster on first visit.",
        "Clearer structure should improve confidence before sending the form.",
        "Both lesson booking and online course paths should feel easier to complete.",
      ],
      deepDive: [
        "Planned metrics\n• inquiry completion rate\n• booking progression\n• course-page click-through",
        "Secondary metric\n• time to first meaningful action from landing.",
        "Validation method\n• compare post-redesign behavior against baseline data.",
      ],
    },
    {
      id: "reflection",
      label: "Reflection",
      style: "analysis",
      summary:
        "This project taught me that the biggest issue was not the lack of information, but how difficult that information was to scan, compare, and act on. The original website already contained the core content, but weak hierarchy and unclear next steps made the experience harder to follow.",
      keyPoints: [
        "A key takeaway from this redesign was that trust comes from clarity as much as visual style. For a driving school, users need to understand the offer quickly, compare lesson options easily, and feel confident about what to do next. Improving the structure and action flow had more impact than simply making the interface look better.",
        "Since this was my first UX case study, it helped me think more clearly about the difference between visual improvement and usability improvement. It pushed me to focus not just on how the interface looked, but on how clearly it communicated information and guided decisions.",
      ],
      deepDive: [
        "Next iteration should test first-minute clarity with real users.",
        "If confusion remains, the next focus will be menu labels and decision-support microcopy.",
      ],
    },
  ],
};
