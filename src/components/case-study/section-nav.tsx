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

  return (
    <nav
      aria-label="Case study table of contents"
      className={cn(
        "rounded-2xl border border-blue-500/45 bg-gradient-to-b from-blue-200/90 via-sky-200/88 to-blue-100/88 shadow-[0_12px_30px_-22px_rgba(37,99,235,0.65)] backdrop-blur",
        mode === "mobile" && "sticky top-3 z-30 mt-6 px-3 py-3 lg:hidden",
        mode === "rail" && "hidden lg:block lg:sticky lg:top-6 lg:px-4 lg:py-4"
      )}
    >
      <div className="flex items-center justify-between text-sm tracking-[0.1em] uppercase">
        <span className="text-muted-foreground">Contents</span>
        <span className="font-semibold text-foreground">
          {activeIndex + 1}/{sections.length}
        </span>
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-primary/15">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-300 motion-reduce:transition-none"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className={cn("mt-3 gap-2", mode === "mobile" ? "flex overflow-x-auto pb-1" : "grid")}>
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-xl border border-blue-500/35 bg-white/76 px-3 py-2 text-sm font-medium text-slate-900 transition-colors hover:border-primary/70 hover:bg-blue-200/70 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              mode === "mobile" && "rounded-full text-sm",
              section.id === activeId && "border-primary bg-blue-300/65 text-blue-950"
            )}
          >
            <span className="text-sm font-semibold text-muted-foreground">{index + 1}</span>
            <span>{section.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
