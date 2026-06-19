import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-2xl font-semibold text-slate-50">
              {project.title}
            </h3>
            {project.subtitle ? (
              <span className="font-mono text-sm text-slate-500">
                {project.subtitle}
              </span>
            ) : null}
          </div>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            {project.description}
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 px-5 text-sm font-medium text-slate-100 transition-colors hover:bg-white/5"
            >
              GitHub
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full bg-slate-50 px-5 text-sm font-medium text-[#12253f] transition-colors hover:bg-white"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-3 text-sm leading-6 text-slate-300"
          >
            <span
              aria-hidden
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"
            />
            {highlight}
          </li>
        ))}
      </ul>

      <ul className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-slate-400"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
