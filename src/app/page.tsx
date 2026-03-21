import { ArrowRight, ArrowRightLeft, Compass, Flame, Sparkles, Target } from "lucide-react";

import { FigureGallery } from "@/components/case-study/figure-gallery";
import { ScrollReveal } from "@/components/case-study/scroll-reveal";
import { SectionDetails } from "@/components/case-study/section-details";
import { SectionNav } from "@/components/case-study/section-nav";
import { ready2DriveCaseStudy } from "@/data/case-study-ready2drive";
import { Badge } from "@/components/ui/badge";

const toc = [
  { id: "the-problem", label: "The Problem" },
  { id: "audit-findings", label: "Audit Findings" },
  { id: "competitor-analysis", label: "Competitor Analysis" },
  { id: "strategy-key-decisions", label: "Strategy and Decisions" },
  { id: "final-screens", label: "Final Screens" },
  { id: "expected-impact", label: "Expected Impact" },
  { id: "reflection", label: "Reflection" },
];

const outcomeCardThemes = [
  "bg-gradient-to-br from-blue-200 via-sky-100 to-blue-50 ring-blue-700/35",
  "bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-50 ring-blue-700/35",
  "bg-gradient-to-br from-indigo-200 via-blue-100 to-sky-50 ring-blue-700/35",
];

const decisionEvidenceDetails = [
  {
    reason:
      "People needed to see the two services right away instead of reading many sections first.",
    uxImpact:
      "Less confusion on first look and faster movement to the right page.",
  },
  {
    reason:
      "The online course needed to feel like a real product, not a side note.",
    uxImpact:
      "Better trust in the course and a clearer next step for interested users.",
  },
  {
    reason:
      "People were unsure what to send in the form and whether they were choosing the right option.",
    uxImpact:
      "More confidence in contacting the team and less drop-off before submit.",
  },
];

const sectionMap = new Map(
  ready2DriveCaseStudy.sections.map((section) => [section.id, section] as const)
);

function mustGetSection(id: string) {
  const section = sectionMap.get(id);
  if (!section) throw new Error(`Missing section: ${id}`);
  return section;
}

function KeyLines({ points, tone = "light" }: { points: string[]; tone?: "light" | "dark" }) {
  return (
    <div className="mt-5 space-y-3">
      {points.map((point) => (
        <div
          key={point}
          className={
            tone === "dark"
              ? "flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-base leading-relaxed text-slate-100"
              : "flex items-start gap-3 rounded-xl border border-blue-300/60 bg-sky-50/80 px-4 py-3 text-base leading-relaxed text-slate-900"
          }
        >
          <span
            className={
              tone === "dark"
                ? "mt-1.5 size-2.5 shrink-0 rounded-sm bg-sky-300 shadow-[0_0_0_3px_rgba(125,211,252,0.25)]"
                : "mt-1.5 size-2.5 shrink-0 rounded-sm bg-blue-700 shadow-[0_0_0_3px_rgba(37,99,235,0.2)]"
            }
          />
          <span>{point}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const problem = mustGetSection("the-problem");
  const audit = mustGetSection("audit-findings");
  const competitor = mustGetSection("competitor-analysis");
  const strategy = mustGetSection("strategy-key-decisions");
  const finalScreens = mustGetSection("final-screens");
  const expectedImpact = mustGetSection("expected-impact");
  const reflection = mustGetSection("reflection");

  return (
    <div className="page-glow relative flex flex-1 overflow-x-clip">
      <main className="relative mx-auto w-full max-w-[1600px] px-4 pb-24 pt-8 sm:px-6 lg:px-10">
        <ScrollReveal>
          <section className="relative overflow-hidden rounded-[2rem] border border-blue-500/45 bg-gradient-to-br from-blue-200 via-sky-100 to-blue-50 px-6 py-7 shadow-[0_20px_70px_-34px_rgba(31,68,173,0.5)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <svg
              aria-hidden
              viewBox="0 0 620 300"
              className="pointer-events-none absolute -right-24 -top-14 h-[17rem] w-[39rem] text-blue-700/35"
            >
              <path
                d="M24 248C118 132 212 52 336 72C420 86 496 152 612 74"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeDasharray="7 10"
              />
              <circle cx="286" cy="84" r="11" fill="currentColor" />
              <circle cx="456" cy="148" r="8" fill="currentColor" />
            </svg>

            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="border-blue-700/25 bg-white/75 text-blue-950" variant="outline">
                  UX Case Study
                </Badge>
                <Badge className="border-blue-700/25 bg-white/75 text-blue-950" variant="outline">
                  Ready2Drive PEI
                </Badge>
                <Badge className="border-blue-700/25 bg-white/75 text-blue-950" variant="outline">
                  Role: {ready2DriveCaseStudy.meta.role}
                </Badge>
                <Badge className="border-blue-700/25 bg-white/75 text-blue-950" variant="outline">
                  Duration: {ready2DriveCaseStudy.meta.timeline}
                </Badge>
                <Badge className="border-blue-700/25 bg-white/75 text-blue-950" variant="outline">
                  Deliverables: Audit, Redesign, Build
                </Badge>
              </div>

              <h1 className="mt-5 max-w-4xl text-3xl leading-tight text-slate-900 sm:text-4xl lg:text-[3.2rem]">
                {ready2DriveCaseStudy.title}
              </h1>
              <p className="mt-3 max-w-4xl text-xl leading-snug text-slate-900">
                {ready2DriveCaseStudy.subtitle}
              </p>
              <p className="mt-5 max-w-4xl text-lg leading-relaxed text-slate-900/95">
                {ready2DriveCaseStudy.quickSummary}
              </p>

              <div className="mt-4">
                <a
                  href="https://ready2drive.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-900 underline decoration-blue-700/60 underline-offset-4"
                >
                  View live website
                </a>
              </div>

              <h2 className="mt-6 text-base font-semibold tracking-[0.08em] text-blue-900 uppercase">
                Core Project Shift
              </h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <article className="rounded-xl bg-white/80 p-4 ring-1 ring-blue-700/30">
                  <h2 className="text-sm font-semibold tracking-[0.08em] text-blue-700 uppercase">
                    Problem
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-slate-900">
                    {ready2DriveCaseStudy.outcomeSnapshot.challenge}
                  </p>
                </article>
                <article className="rounded-xl bg-white/80 p-4 ring-1 ring-blue-700/30">
                  <h2 className="text-sm font-semibold tracking-[0.08em] text-blue-700 uppercase">
                    What Was Redesigned
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-slate-900">
                    {ready2DriveCaseStudy.outcomeSnapshot.solutionDirection}
                  </p>
                </article>
              </div>

              <h2 className="mt-6 text-base font-semibold tracking-[0.08em] text-blue-900 uppercase">
                What Improved
              </h2>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {ready2DriveCaseStudy.outcomeCards.map((card, index) => (
                  <article
                    key={card.title}
                    className={`rounded-xl p-4 ring-1 ${outcomeCardThemes[index] ?? outcomeCardThemes[0]}`}
                  >
                    <h2 className="text-base font-semibold text-slate-950">{card.title}</h2>
                    <p className="mt-1 text-base font-semibold text-blue-900">{card.value}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-900">{card.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <SectionNav mode="mobile" sections={toc} />

        <div className="mt-8 grid gap-9 lg:grid-cols-[minmax(0,1fr)_18.5rem]">
          <div className="space-y-16">
            <ScrollReveal delayMs={4}>
              <section
                id={problem.id}
                className="scroll-mt-32 rounded-[1.75rem] bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-100 px-6 py-7 shadow-[0_20px_50px_-38px_rgba(37,99,235,0.45)] sm:px-7 lg:px-8"
              >
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-3 py-1 text-sm font-medium text-blue-100">
                    <Target className="size-4" />
                    {problem.label}
                  </div>
                  <h2 className="mt-4 text-3xl leading-tight text-slate-900">{problem.summary}</h2>
                  <KeyLines points={problem.keyPoints} />
                  <div className="mt-5">
                    <SectionDetails sectionId={problem.id} details={problem.deepDive} />
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-3 inline-flex items-center rounded-full bg-slate-800 px-4 py-1.5 text-sm font-semibold tracking-[0.08em] text-slate-100 uppercase">
                    Before
                  </p>
                  {ready2DriveCaseStudy.heroBeforePreview ? (
                    <FigureGallery
                      sectionLabel="Before annotated screenshot"
                      figures={[ready2DriveCaseStudy.heroBeforePreview]}
                      className="md:grid-cols-1"
                    />
                  ) : null}
                </div>

                <div className="mt-8">
                  <p className="mb-3 inline-flex items-center rounded-full bg-blue-700 px-4 py-1.5 text-sm font-semibold tracking-[0.08em] text-blue-50 uppercase">
                    After
                  </p>
                  <FigureGallery
                    sectionLabel="After preview"
                    figures={[ready2DriveCaseStudy.heroPreview]}
                    className="md:grid-cols-1"
                  />
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delayMs={6}>
              <section className="rounded-[1.75rem] border border-blue-500/35 bg-gradient-to-r from-blue-200/75 via-sky-100/70 to-indigo-100/75 px-6 py-6 sm:px-7 lg:px-8">
                <h2 className="text-2xl leading-tight text-slate-900">UX Study Process</h2>
                <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
                  <article className="rounded-xl bg-blue-100 p-3 ring-1 ring-blue-700/30">
                    <p className="text-sm tracking-[0.08em] text-indigo-700 uppercase">Step 1</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">Audit</p>
                  </article>
                  <ArrowRight className="mx-auto hidden size-4 text-indigo-500 md:block" />
                  <article className="rounded-xl bg-sky-100 p-3 ring-1 ring-blue-700/30">
                    <p className="text-sm tracking-[0.08em] text-indigo-700 uppercase">Step 2</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">Findings</p>
                  </article>
                  <ArrowRight className="mx-auto hidden size-4 text-indigo-500 md:block" />
                  <article className="rounded-xl bg-blue-50 p-3 ring-1 ring-blue-700/30">
                    <p className="text-sm tracking-[0.08em] text-indigo-700 uppercase">Step 3</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">Strategy</p>
                  </article>
                  <ArrowRight className="mx-auto hidden size-4 text-indigo-500 md:block" />
                  <article className="rounded-xl bg-sky-50 p-3 ring-1 ring-blue-700/30">
                    <p className="text-sm tracking-[0.08em] text-indigo-700 uppercase">Step 4</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">Design</p>
                  </article>
                  <ArrowRight className="mx-auto hidden size-4 text-indigo-500 md:block" />
                  <article className="rounded-xl bg-indigo-100 p-3 ring-1 ring-blue-700/30">
                    <p className="text-sm tracking-[0.08em] text-indigo-700 uppercase">Step 5</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">Build</p>
                  </article>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delayMs={8}>
              <section
                id={audit.id}
                className="scroll-mt-32 rounded-[1.75rem] bg-gradient-to-r from-[#0b1733] via-[#132951] to-[#1e3a74] px-6 py-7 text-slate-100 shadow-[0_20px_58px_-38px_rgba(16,42,123,0.85)] sm:px-7 lg:px-8"
              >
                <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-sky-200">
                      <Compass className="size-4" />
                      {audit.label}
                    </div>
                    <h2 className="mt-4 text-3xl leading-tight">{audit.summary}</h2>
                    <KeyLines points={audit.keyPoints} tone="dark" />
                    <div className="mt-5">
                      <SectionDetails sectionId={audit.id} details={audit.deepDive} />
                    </div>
                  </div>
                  <div className="grid gap-3 self-start">
                    <article className="rounded-xl border border-white/20 bg-white/10 p-4">
                      <h3 className="text-base font-semibold">Main finding</h3>
                      <p className="mt-2 text-base leading-relaxed text-slate-100">
                        The biggest issue was not visual style. It was unclear structure and unclear next steps.
                      </p>
                    </article>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delayMs={10}>
              <section
                id={competitor.id}
                className="scroll-mt-32 rounded-[1.75rem] bg-gradient-to-br from-blue-200 via-sky-100 to-indigo-100 px-6 py-7 shadow-[0_18px_46px_-34px_rgba(37,99,235,0.45)] sm:px-7 lg:px-8"
              >
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-3 py-1 text-sm font-medium text-blue-100 ring-1 ring-blue-400/60">
                    <ArrowRightLeft className="size-4" />
                    {competitor.label}
                  </div>
                  <h2 className="mt-4 text-3xl leading-tight text-slate-900">{competitor.summary}</h2>
                  <KeyLines points={competitor.keyPoints} />
                  <div className="mt-5">
                    <SectionDetails sectionId={competitor.id} details={competitor.deepDive} />
                  </div>
                </div>

                <div className="mt-6">
                  <FigureGallery
                    sectionLabel={competitor.label}
                    figures={competitor.figures ?? []}
                    className="md:grid-cols-1"
                  />
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delayMs={12}>
              <section id={strategy.id} className="scroll-mt-32">
                <div className="rounded-[1.75rem] bg-gradient-to-br from-blue-200 via-sky-100 to-indigo-100 px-6 py-7 sm:px-7 lg:px-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-3 py-1 text-sm font-medium text-blue-100 ring-1 ring-blue-400/65">
                    <Sparkles className="size-4" />
                    {strategy.label}
                  </div>
                  <h2 className="mt-4 text-3xl leading-tight text-slate-900">{strategy.summary}</h2>
                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    {strategy.keyPoints.map((point) => (
                      <article key={point} className="rounded-xl bg-sky-50/85 p-4 ring-1 ring-blue-700/30">
                        <p className="text-base leading-relaxed text-slate-900">{point}</p>
                      </article>
                    ))}
                  </div>
                  <div className="mt-5">
                    <SectionDetails sectionId={strategy.id} details={strategy.deepDive} />
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  {strategy.figures?.map((figure, index) => (
                    <article
                      key={figure.src}
                      className="rounded-2xl border border-blue-700/25 bg-gradient-to-br from-sky-50/90 via-blue-50/90 to-indigo-50/90 p-4 shadow-[0_14px_36px_-26px_rgba(37,99,235,0.5)] sm:p-5"
                    >
                      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                          <h3 className="text-2xl leading-tight text-slate-900">{figure.caption}</h3>
                          <p className="mt-3 text-base leading-relaxed text-slate-800">
                            <span className="font-semibold">Why this change:</span>{" "}
                            {decisionEvidenceDetails[index]?.reason}
                          </p>
                          <p className="mt-2 text-base leading-relaxed text-slate-800">
                            <span className="font-semibold">What improved:</span>{" "}
                            {decisionEvidenceDetails[index]?.uxImpact}
                          </p>
                        </div>
                        <FigureGallery
                          sectionLabel={`Decision evidence ${index + 1}`}
                          figures={[figure]}
                          className="md:grid-cols-1"
                        />
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delayMs={14}>
              <section
                id={finalScreens.id}
                className="scroll-mt-32 rounded-[1.9rem] border border-blue-300/40 bg-gradient-to-br from-[#0a2f9f] via-[#1d4ed8] to-[#0f2f8a] px-6 py-8 text-white shadow-[0_20px_58px_-30px_rgba(30,64,175,0.9)] sm:px-7 lg:px-8"
              >
                <div className="max-w-4xl">
                  <h2 className="text-4xl leading-tight">{finalScreens.label}</h2>
                  <p className="mt-3 text-lg leading-relaxed text-blue-100">{finalScreens.summary}</p>
                </div>
                <KeyLines points={finalScreens.keyPoints} tone="dark" />
                <div className="mt-6">
                  <FigureGallery
                    sectionLabel={finalScreens.label}
                    figures={finalScreens.figures ?? []}
                    className="md:grid-cols-2"
                    forceGrid
                  />
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delayMs={16}>
              <section
                id={expectedImpact.id}
                className="scroll-mt-32 rounded-[1.75rem] bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-100 px-6 py-7 shadow-[0_18px_44px_-34px_rgba(37,99,235,0.42)] sm:px-7 lg:px-8"
              >
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-3 py-1 text-sm font-medium text-blue-100 ring-1 ring-blue-500/75">
                    <Target className="size-4" />
                    {expectedImpact.label}
                  </div>
                  <h2 className="mt-4 text-3xl leading-tight text-slate-900">{expectedImpact.summary}</h2>
                  <KeyLines points={expectedImpact.keyPoints} />
                  <div className="mt-5">
                    <SectionDetails sectionId={expectedImpact.id} details={expectedImpact.deepDive} />
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delayMs={18}>
              <section
                id={reflection.id}
                className="scroll-mt-32 rounded-[1.9rem] border border-blue-300/35 bg-gradient-to-br from-[#102b6f] via-[#163d97] to-[#1b4db6] px-6 py-8 text-white shadow-[0_20px_58px_-30px_rgba(17,55,148,0.85)] sm:px-7 lg:px-8"
              >
                <div className="max-w-5xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-sm font-medium text-blue-100 ring-1 ring-white/20">
                    <Flame className="size-4" />
                    Closing Reflection
                  </div>
                  <h2 className="mt-4 text-4xl leading-tight">{reflection.label}</h2>
                  <p className="mt-3 text-lg leading-relaxed text-blue-100">{reflection.summary}</p>
                  <KeyLines points={reflection.keyPoints} tone="dark" />
                </div>

                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  <article className="rounded-2xl border border-white/20 bg-white/10 p-5">
                    <h3 className="text-lg font-semibold text-white">What this project proved</h3>
                    <p className="mt-2 text-base leading-relaxed text-blue-100">
                      Better structure and clearer action flow can change how quickly users understand a service.
                    </p>
                  </article>
                  <article className="rounded-2xl border border-white/20 bg-white/10 p-5">
                    <h3 className="text-lg font-semibold text-white">What comes next</h3>
                    <p className="mt-2 text-base leading-relaxed text-blue-100">
                      Validate expected impact with live traffic data and refine copy where users still hesitate.
                    </p>
                  </article>
                </div>
              </section>
            </ScrollReveal>
          </div>

          <aside className="hidden lg:block">
            <SectionNav mode="rail" sections={toc} />
          </aside>
        </div>
      </main>
    </div>
  );
}
