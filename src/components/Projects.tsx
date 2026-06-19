import { projects } from "@/data/projects";

import { ProjectsCarousel } from "./ProjectsCarousel";

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-background px-6 py-24 sm:px-10 lg:px-4"
    >
      <div className="mx-auto w-full max-w-7xl">
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
