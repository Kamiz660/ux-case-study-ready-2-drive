"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

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

  if (safeDetails.length === 0) return null;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Button
        type="button"
        variant="outline"
        size="sm"
        aria-controls={detailId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="w-full justify-between border-primary/25 bg-primary/5 text-primary hover:bg-primary/10 sm:w-auto"
      >
        {isOpen ? "Hide process notes" : "More process detail"}
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
        className="mt-4 rounded-xl border border-border/70 bg-muted/45 p-4 data-[ending-style]:animate-out data-[starting-style]:animate-in data-[starting-style]:fade-in-0 data-[ending-style]:fade-out-0 motion-reduce:animate-none"
      >
        <div className="space-y-3 text-sm leading-relaxed text-foreground/90">
          {safeDetails.map((item) => (
            <p key={item} className="rounded-lg bg-background/60 px-3 py-2 ring-1 ring-border/60">
              {item}
            </p>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
