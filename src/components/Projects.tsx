import { projects } from "@/data/projects";

import { AnimatedBlobBackground } from "./AnimatedBlobBackground";
import { ProjectsCarousel } from "./ProjectsCarousel";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/10 bg-background px-6 py-24 sm:px-10 lg:px-4"
    >
      <AnimatedBlobBackground variant="projects" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
          Projects
        </p>

        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Work that blends software and AI
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Real projects where I ship code and apply what I&apos;m learning in AI
          engineering—from RAG pipelines to full-stack apps.
        </p>

        <ProjectsCarousel projects={projects} />
      </div>
    </section>
  );
}
