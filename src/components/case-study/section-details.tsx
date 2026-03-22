"use client";

import { useMemo, useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SectionDetailsProps = {
  sectionId: string;
  details?: string[];
  tone?: "light" | "dark";
  panelTitle?: string;
  minItemsToShow?: number;
  closedLabel?: string;
  openLabel?: string;
  emphasizeTrigger?: boolean;
};

export function SectionDetails({
  sectionId,
  details,
  tone = "light",
  panelTitle = "Notes",
  minItemsToShow = 3,
  closedLabel = "Open details",
  openLabel = "Hide details",
  emphasizeTrigger = false,
}: SectionDetailsProps) {
  const safeDetails = details ?? [];

  const [isOpen, setIsOpen] = useState(false);
  const detailId = useMemo(() => `${sectionId}-details`, [sectionId]);

  if (safeDetails.length < minItemsToShow) return null;

  const formatDetail = (item: string) => {
    const lines = item
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length > 1) {
      const [title, ...rest] = lines;
      const bulletPattern = /^(?:-|\u2022)\s*/;
      const bullets = rest.filter((line) => bulletPattern.test(line));
      const bodyLines = rest.filter((line) => !bulletPattern.test(line));

      return (
        <div>
          <p className="font-semibold text-blue-950">{title}</p>
          {bodyLines.length > 0 ? (
            <div className="mt-1 space-y-1">
              {bodyLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ) : null}
          {bullets.length > 0 ? (
            <ul className="mt-2 space-y-1.5">
              {bullets.map((line) => {
                const text = line.replace(bulletPattern, "");
                return (
                  <li key={line} className="flex items-start gap-2.5">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-blue-700" />
                    <span>{text}</span>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      );
    }

    const splitIndex = item.indexOf(":");
    if (splitIndex <= 0) return <span>{item}</span>;
    const lead = item.slice(0, splitIndex + 1);
    const rest = item.slice(splitIndex + 1).trimStart();
    return (
      <span>
        <strong className="font-semibold text-blue-950">{lead}</strong> {rest}
      </span>
    );
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Button
        type="button"
        variant="outline"
        size="sm"
        aria-controls={detailId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className={cn(
          "w-full justify-between sm:w-auto",
          emphasizeTrigger &&
            "border-blue-700/65 bg-blue-700/90 text-white shadow-[0_10px_20px_-16px_rgba(29,78,216,0.9)] hover:bg-blue-800",
          tone === "dark"
            ? "border-sky-100/65 bg-sky-100/15 text-sky-50 hover:bg-sky-100/25"
            : "border-blue-700/35 bg-blue-600/10 text-blue-900 hover:bg-blue-600/20"
        )}
      >
        <span className="inline-flex items-center gap-2">
          <CircleHelp className="size-4" aria-hidden />
          {isOpen ? openLabel : closedLabel}
        </span>
        <ChevronDown
          aria-hidden
          className={cn(
            "size-4 transition-transform duration-200 motion-reduce:transition-none",
            isOpen && "rotate-180"
          )}
        />
      </Button>

      <CollapsibleContent
        id={detailId}
        className="mt-4 rounded-xl border border-blue-600/35 bg-gradient-to-br from-blue-100/90 via-sky-100/90 to-blue-50/90 p-4 data-[ending-style]:animate-out data-[starting-style]:animate-in data-[starting-style]:fade-in-0 data-[ending-style]:fade-out-0 motion-reduce:animate-none"
      >
        <div className="mb-3">
          <span
            className={cn(
              "inline-flex rounded-md border px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase",
              tone === "dark"
                ? "border-sky-100/90 bg-white text-blue-950"
                : "border-blue-700/30 bg-blue-100/70 text-blue-900"
            )}
          >
            {panelTitle}
          </span>
        </div>
        <div className="rounded-xl border border-blue-600/20 bg-white/55 px-3.5 py-3">
          <div className="space-y-2.5 text-sm leading-6 text-foreground/90">
            {safeDetails.map((item, index) => (
              <div key={item} className="flex items-start gap-2.5">
                <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-700 text-[11px] font-semibold text-white">
                  {index + 1}
                </span>
                <div>{formatDetail(item)}</div>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
