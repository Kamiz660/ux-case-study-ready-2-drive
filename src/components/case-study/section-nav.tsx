"use client";

import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type SectionNavProps = {
  sections: Array<{
    id: string;
    label: string;
  }>;
  mode?: "mobile" | "rail";
};

export function SectionNav({ sections, mode = "mobile" }: SectionNavProps) {
  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const resolveActive = () => {
      const marker = Math.max(150, window.innerHeight * 0.35);
      const visibleAtMarker: string[] = [];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= marker && rect.bottom >= marker) visibleAtMarker.push(id);
      }

      if (visibleAtMarker.length > 0) {
        setActiveId(visibleAtMarker[visibleAtMarker.length - 1]);
        return;
      }

      let closestId = sectionIds[0];
      let closestDistance = Number.POSITIVE_INFINITY;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const distance = Math.abs(section.getBoundingClientRect().top - marker);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = id;
        }
      }
      setActiveId(closestId);
    };

    resolveActive();
    window.addEventListener("scroll", resolveActive, { passive: true });
    window.addEventListener("resize", resolveActive);
    return () => {
      window.removeEventListener("scroll", resolveActive);
      window.removeEventListener("resize", resolveActive);
    };
  }, [sectionIds]);

  const activeIndex = Math.max(
    0,
    sections.findIndex((section) => section.id === activeId)
  );
  const progressPercent =
    sections.length > 0 ? ((activeIndex + 1) / sections.length) * 100 : 0;
  const tone =
    activeId === "audit-findings"
      ? "audit"
      : activeId === "final-screens"
        ? "final"
        : activeId === "reflection"
          ? "reflection"
          : "light";

  const navToneClass =
    tone === "audit"
      ? "border-blue-900/45 bg-gradient-to-b from-[#345896]/88 via-[#2f528f]/86 to-[#294985]/88 shadow-[0_14px_34px_-22px_rgba(17,38,90,0.62)]"
      : tone === "final"
        ? "border-blue-800/48 bg-gradient-to-b from-[#3f71eb]/88 via-[#3565e0]/86 to-[#2f5cd2]/88 shadow-[0_14px_34px_-20px_rgba(33,72,176,0.62)]"
        : tone === "reflection"
          ? "border-blue-900/48 bg-gradient-to-b from-[#2f569f]/88 via-[#274a92]/86 to-[#1f3f84]/88 shadow-[0_14px_34px_-20px_rgba(16,44,112,0.64)]"
          : "border-blue-500/45 bg-gradient-to-b from-blue-200/90 via-sky-200/88 to-blue-100/88 shadow-[0_12px_30px_-22px_rgba(37,99,235,0.65)]";

  const trackToneClass =
    tone === "light" ? "bg-primary/15" : "bg-white/20";
  const barToneClass =
    tone === "audit" ? "bg-sky-200" : tone === "final" ? "bg-blue-100" : tone === "reflection" ? "bg-blue-100" : "bg-primary";
  const linkToneClass =
    "border-blue-500/35 bg-white/84 text-slate-900 hover:border-primary/70 hover:bg-white";
  const activeLinkToneClass =
    tone === "audit"
      ? "border-sky-200 bg-sky-200/82 text-blue-950"
      : tone === "final"
        ? "border-blue-200 bg-blue-200/85 text-blue-950"
        : tone === "reflection"
          ? "border-indigo-200 bg-indigo-200/82 text-blue-950"
          : "border-primary bg-blue-300/65 text-blue-950";
  const headingToneClass = tone === "light" ? "text-muted-foreground" : "text-blue-100/90";
  const counterToneClass = tone === "light" ? "text-foreground" : "text-white";
  const indexToneClass = "text-blue-800";

  return (
    <nav
      aria-label="Case study table of contents"
      className={cn(
        "rounded-xl border backdrop-blur transition-colors duration-300 motion-reduce:transition-none",
        navToneClass,
        mode === "mobile" &&
          "sticky top-[calc(env(safe-area-inset-top)+0.5rem)] z-30 mt-5 px-2.5 py-2.5 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.55)] lg:hidden",
        mode === "rail" && "hidden lg:block lg:mt-2 lg:px-4 lg:py-4"
      )}
    >
      <div className="flex items-center justify-between text-sm tracking-[0.1em] uppercase">
        <span className={headingToneClass}>Contents</span>
        <span className={cn("font-semibold", counterToneClass)}>
          {activeIndex + 1}/{sections.length}
        </span>
      </div>
      <div className={cn("mt-2 h-1 overflow-hidden rounded-full", trackToneClass)}>
        <div
          className={cn(
            "h-full rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none",
            barToneClass
          )}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div
        className={cn(
          "mt-3 gap-2.5",
          mode === "mobile"
            ? "flex snap-x snap-mandatory overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none]"
            : "grid"
        )}
      >
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              linkToneClass,
              mode === "mobile" && "snap-start rounded-full px-3 py-2 text-xs sm:text-sm",
              mode === "rail" && "px-3 py-2.5",
              section.id === activeId && activeLinkToneClass
            )}
          >
            <span
              className={cn(
                "text-sm font-semibold",
                mode === "mobile" && "hidden sm:inline",
                section.id === activeId ? "text-blue-900" : indexToneClass
              )}
            >
              {index + 1}
            </span>
            <span>{section.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
