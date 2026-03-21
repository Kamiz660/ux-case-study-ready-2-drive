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
};

export function SectionDetails({ sectionId, details }: SectionDetailsProps) {
  const safeDetails = details ?? [];

  const [isOpen, setIsOpen] = useState(false);
  const detailId = useMemo(() => `${sectionId}-details`, [sectionId]);

  if (safeDetails.length < 3) return null;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Button
        type="button"
        variant="outline"
        size="sm"
        aria-controls={detailId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="w-full justify-between border-blue-700/35 bg-blue-600/10 text-blue-900 hover:bg-blue-600/20 sm:w-auto"
      >
        <span className="inline-flex items-center gap-2">
          <CircleHelp className="size-4" aria-hidden />
          {isOpen ? "Hide detailed notes" : "Questions? Open detailed notes"}
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
        className="mt-4 rounded-2xl border border-blue-600/35 bg-gradient-to-br from-blue-100/90 via-sky-100/90 to-blue-50/90 p-4 data-[ending-style]:animate-out data-[starting-style]:animate-in data-[starting-style]:fade-in-0 data-[ending-style]:fade-out-0 motion-reduce:animate-none"
      >
        <div className="mb-3 border-b border-blue-700/20 pb-3">
          <p className="text-sm font-semibold tracking-[0.08em] text-blue-900 uppercase">Detailed Notes</p>
          <p className="mt-1 text-sm leading-relaxed text-slate-700">
            Implementation logic, trade-offs, and deeper process context.
          </p>
        </div>
        <div className="space-y-3 text-sm leading-relaxed text-foreground/90">
          {safeDetails.map((item, index) => (
            <div key={item} className="flex items-start gap-3 rounded-xl bg-white/65 px-3 py-3 ring-1 ring-blue-600/20">
              <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-semibold text-white">
                {index + 1}
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
