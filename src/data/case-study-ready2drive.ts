import type { CaseStudy } from "@/types/case-study";

export const ready2DriveCaseStudy: CaseStudy = {
  slug: "ready2drive-pei",
  title: "Ready2Drive PEI",
  subtitle: "How I redesigned Ready2Drive PEI to make choosing and contacting much easier",
  meta: {
    role: "Fullstack Developer",
    timeline: "1 week",
    platform: "Ready2Drive PEI",
    projectType: "UX Case Study",
  },
  quickSummary:
    "Ready2Drive PEI launched an online theory course, but the old website still felt like it only had one service. I redesigned and built the site so people can understand the two paths quickly, feel confident, and take action without second-guessing.",
  heroPreview: {
    src: "/case-studies/ready2drive/image8.png",
    alt: "Final redesigned Ready2Drive homepage.",
    caption: "Final homepage preview: clearer pathing, stronger hierarchy, and conversion-ready structure.",
    group: "hero-preview",
    layoutType: "long",
  },
  heroBeforePreview: {
    src: "/case-studies/ready2drive/image1.png",
    alt: "Annotated screenshot from the previous Ready2Drive experience.",
    caption: "Before snapshot: weak hierarchy and unclear next-step emphasis.",
    group: "hero-preview",
    layoutType: "long",
  },
  outcomeCards: [
    {
      title: "Path Clarity",
      value: "Offline vs Online separated",
      note: "Visitors can tell where to go right away instead of guessing.",
    },
    {
      title: "Decision Confidence",
      value: "Trust cues made explicit",
      note: "Key trust details now appear before people need to commit.",
    },
    {
      title: "Conversion Readiness",
      value: "Stronger action hierarchy",
      note: "The main actions are easier to see on both lesson and course paths.",
    },
  ],
  outcomeSnapshot: {
    challenge:
      "As the business grew, the old site mixed key information together and made next steps hard to spot.",
    solutionDirection:
      "Reorganize the page by user intent, make the main actions clear, and add trust signals near action points.",
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
        "The old site had useful content, but simple decisions took too much effort.",
      keyPoints: [
        "Offline lessons and online theory were mixed together, so people had to read too much before choosing.",
        "The main action button was there, but it did not stand out clearly.",
        "Trust details were scattered, so people felt less sure before contacting.",
      ],
      deepDive: [
        "On first visit, users had to figure out whether the site was for offline lessons, online theory, or both.",
        "Menu labels were broad and did not guide people to the right path quickly.",
        "Too many elements had similar visual weight, so the eye had no clear priority.",
        "For a paid learning service, this hurts confidence exactly where confidence should increase.",
      ],
      figures: [
        {
          src: "/case-studies/ready2drive/image1.png",
          alt: "Annotated screenshot of the old site showing hierarchy and CTA issues.",
          caption: "Before: users had to work too hard to understand what to do next.",
          group: "problem-proof",
          layoutType: "long",
        },
        {
          src: "/case-studies/ready2drive/image8.png",
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
          src: "/case-studies/ready2drive/image2.png",
          alt: "Competitor screenshot showing overloaded navigation and action clutter.",
          caption: "Competitor signal: cluttered structure reduces decision speed.",
          group: "competitor-proof",
          layoutType: "long",
        },
      ],
      deepDive: [
        "Benchmark criteria: service clarity, action visibility, trust communication, and speed to action.",
        "Most competitors showed many equal actions, which reduced urgency.",
        "The strongest insight was what not to copy: dense navigation and weak action priority.",
        "This shaped the strategy: win on clarity and confidence.",
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
          src: "/case-studies/ready2drive/image3.png",
          alt: "Redesigned hero section with stronger primary and secondary action hierarchy.",
          caption: "Decision 1: clarify service routes at the first interaction point.",
          group: "strategy-decisions",
          layoutType: "standard",
        },
        {
          src: "/case-studies/ready2drive/image6.png",
          alt: "Online course section with benefits and focused action.",
          caption: "Decision 2: present the online course as a credible, structured option.",
          group: "strategy-decisions",
          layoutType: "standard",
        },
        {
          src: "/case-studies/ready2drive/image5.png",
          alt: "Redesigned contact section with clear framing and reduced anxiety.",
          caption: "Decision 3: reduce hesitation in inquiry with stronger expectation-setting.",
          group: "strategy-decisions",
          layoutType: "standard",
        },
      ],
      deepDive: [
        "Copy and layout were refined together so they support the same decision flow.",
        "Each design decision maps to one clear problem found in the audit.",
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
        "Service choices are visible early, so people can decide faster.",
        "Section order and contrast make the page easier to scan.",
        "Online course and lesson inquiry now feel connected instead of separate.",
      ],
      figures: [
        {
          src: "/case-studies/ready2drive/image8.png",
          alt: "Final redesigned homepage screenshot.",
          caption: "Final screen: homepage optimized for service clarity and conversion flow.",
          group: "final-screens",
          layoutType: "long",
        },
        {
          src: "/case-studies/ready2drive/image7.png",
          alt: "Final dedicated online course page screenshot.",
          caption: "Final screen: online course page with clearer value framing and progression cues.",
          group: "final-screens",
          layoutType: "long",
        },
      ],
    },
    {
      id: "expected-impact",
      label: "Expected Impact",
      style: "decision",
      summary: "Expected impact: faster decisions, more confidence, and smoother action flow.",
      keyPoints: [
        "People should understand service choices faster on first visit.",
        "Clearer structure should improve confidence before sending the form.",
        "Both lesson booking and online course paths should feel easier to complete.",
      ],
      deepDive: [
        "Planned metrics: inquiry completion rate, booking progression, and course-page click-through.",
        "Secondary metric: time to first meaningful action from landing.",
        "Validation method: compare post-redesign behavior against baseline data.",
      ],
    },
    {
      id: "reflection",
      label: "Reflection",
      style: "analysis",
      summary:
        "The key lesson was simple: clear structure helps users more than visual polish alone.",
      keyPoints: [
        "Clear structure works better than adding more and more features.",
        "Trust messages work best inside the flow, not as an afterthought.",
        "Keeping design and code aligned preserved the original intent in the final build.",
      ],
      deepDive: [
        "Next iteration should test first-minute clarity with real users.",
        "If confusion remains, the next focus will be menu labels and decision-support microcopy.",
      ],
    },
  ],
};
