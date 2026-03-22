"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

import type { Figure } from "@/types/case-study";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FigureGalleryProps = {
  figures: Figure[];
  sectionLabel: string;
  className?: string;
  forceGrid?: boolean;
  showEnlargeBadge?: boolean;
  captionPosition?: "top" | "bottom";
  emphasizeCaption?: boolean;
};

export function FigureGallery({
  figures,
  sectionLabel,
  className,
  forceGrid = false,
  showEnlargeBadge = false,
  captionPosition = "bottom",
  emphasizeCaption = false,
}: FigureGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const hasMultipleFigures = figures.length > 1;
  const hasLongLayout = figures.some((figure) => figure.layoutType === "long");
  const useGridLayout = forceGrid || (!hasLongLayout && figures.length > 1);

  const activeFigure = useMemo(
    () => (activeIndex === null ? null : figures[activeIndex]),
    [activeIndex, figures]
  );

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const moveFigure = useCallback(
    (direction: "next" | "prev") => {
      if (activeIndex === null || !hasMultipleFigures) return;
      const delta = direction === "next" ? 1 : -1;
      const nextIndex = (activeIndex + delta + figures.length) % figures.length;
      setActiveIndex(nextIndex);
    },
    [activeIndex, hasMultipleFigures, figures.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") moveFigure("next");
      if (event.key === "ArrowLeft") moveFigure("prev");
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, moveFigure]);

  return (
    <>
      <div className={cn(useGridLayout ? "grid gap-3 md:grid-cols-2" : "space-y-3 sm:space-y-4", className)}>
        {figures.map((figure, index) => (
          <figure
            key={`${figure.src}-${index}`}
            className={cn(
              "overflow-hidden rounded-xl border border-blue-300/60 bg-gradient-to-b from-sky-50/95 to-blue-100/80 shadow-[0_12px_32px_-24px_rgba(30,64,175,0.55)]",
              figure.layoutType === "long" && "mx-auto max-w-5xl"
            )}
          >
            {captionPosition === "top" ? (
              <figcaption
                className={cn(
                  "px-3 pt-2.5 pb-2 leading-relaxed text-slate-900 sm:px-4 sm:pt-3",
                  emphasizeCaption ? "text-base font-semibold" : "text-sm"
                )}
              >
                {figure.caption}
              </figcaption>
            ) : null}
            <button
              type="button"
              className="relative block w-full cursor-zoom-in overflow-hidden text-left"
              onClick={() => setActiveIndex(index)}
              aria-label={`Enlarge image ${index + 1} from ${sectionLabel}`}
            >
              <Image
                src={figure.src}
                alt={figure.alt}
                width={1600}
                height={1000}
                className="h-auto w-full"
              />
              {showEnlargeBadge ? (
                <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full border border-white/50 bg-black/55 px-2 py-1 text-[11px] font-medium text-white shadow-sm backdrop-blur-sm">
                  <Expand className="size-3" aria-hidden />
                  Enlarge
                </span>
              ) : null}
            </button>
            {captionPosition === "bottom" ? (
              <figcaption className="px-3 py-2 text-sm leading-relaxed text-slate-700 sm:py-2.5">
                {figure.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {activeFigure ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 px-4 py-6 backdrop-blur-sm animate-in fade-in-0 duration-200 motion-reduce:animate-none"
          role="dialog"
          aria-modal="true"
          aria-label={`${sectionLabel} image preview`}
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl rounded-xl border border-white/20 bg-slate-950/88 p-3 shadow-2xl animate-in zoom-in-95 duration-200 motion-reduce:animate-none"
            onClick={(event) => event.stopPropagation()}
          >
            <Button
              type="button"
              variant="secondary"
              size="icon-sm"
              onClick={closeLightbox}
              className="absolute right-3 top-3 z-20 border-white/30 bg-slate-900/70 text-white hover:bg-slate-800"
              aria-label="Close enlarged image"
            >
              <X aria-hidden />
            </Button>

            {hasMultipleFigures ? (
              <>
                <Button
                  type="button"
                  variant="secondary"
                  size="icon-sm"
                  onClick={() => moveFigure("prev")}
                  className="absolute left-3 top-1/2 z-20 -translate-y-1/2 border-white/30 bg-slate-900/70 text-white hover:bg-slate-800"
                  aria-label="Previous image"
                >
                  <ChevronLeft aria-hidden />
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="icon-sm"
                  onClick={() => moveFigure("next")}
                  className="absolute right-3 top-1/2 z-20 -translate-y-1/2 border-white/30 bg-slate-900/70 text-white hover:bg-slate-800"
                  aria-label="Next image"
                >
                  <ChevronRight aria-hidden />
                </Button>
              </>
            ) : null}

            <div className="overflow-hidden rounded-xl">
              <Image
                src={activeFigure.src}
                alt={activeFigure.alt}
                width={1800}
                height={1200}
                className="h-auto max-h-[78vh] w-full object-contain"
              />
            </div>
            <p className="mt-3 px-2 text-sm text-slate-200">{activeFigure.caption}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
