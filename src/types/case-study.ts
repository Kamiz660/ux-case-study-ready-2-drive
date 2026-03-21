export type Figure = {
  src: string;
  alt: string;
  caption: string;
  group?: string;
  layoutType?: "long" | "standard";
};

export type OutcomeCard = {
  title: string;
  value: string;
  note: string;
};

export type CaseSection = {
  id: string;
  label: string;
  summary: string;
  keyPoints: string[];
  deepDive?: string[];
  style?: "analysis" | "decision" | "showcase";
  figures?: Figure[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  meta: {
    role: string;
    timeline: string;
    platform: string;
    projectType: string;
  };
  quickSummary: string;
  heroPreview: Figure;
  heroBeforePreview?: Figure;
  outcomeCards: OutcomeCard[];
  outcomeSnapshot: {
    challenge: string;
    solutionDirection: string;
    deliverables: string;
    impact: string;
  };
  sections: CaseSection[];
};
