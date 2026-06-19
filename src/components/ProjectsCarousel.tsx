"use client";

import { useCallback, useRef, useState } from "react";

import type { Project } from "@/data/projects";

import { ProjectCard } from "./ProjectCard";

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      {direction === "left" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}

export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultiple = projects.length > 1;

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const nextIndex = Math.max(0, Math.min(projects.length - 1, index));
    const slide = track.children[nextIndex] as HTMLElement | undefined;
    slide?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    setActiveIndex(nextIndex);
  }, [projects.length]);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.offsetWidth === 0) return;

    const index = Math.round(track.scrollLeft / track.offsetWidth);
    setActiveIndex(index);
  }, []);

  return (
    <div className="relative mt-14">
      {hasMultiple ? (
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="font-mono text-sm text-slate-500">
            {activeIndex + 1} / {projects.length}
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous project"
              disabled={activeIndex === 0}
              onClick={() => scrollToIndex(activeIndex - 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-slate-100 transition-colors hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              disabled={activeIndex === projects.length - 1}
              onClick={() => scrollToIndex(activeIndex + 1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-slate-100 transition-colors hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>
      ) : null}

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="w-full shrink-0 snap-start snap-always"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {hasMultiple ? (
        <div
          className="mt-6 flex justify-center gap-2"
          role="tablist"
          aria-label="Project slides"
        >
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              role="tab"
              aria-label={`Go to ${project.title}`}
              aria-selected={index === activeIndex}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-6 bg-slate-200"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
