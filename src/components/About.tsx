import { AboutRibbonBackground } from "./AboutRibbonBackground";

const softwareSkills = [
  "Build full-stack and frontend applications with modern frameworks",
  "Write TypeScript/JavaScript with attention to types, structure, and readability",
  "Design UI that is clear, responsive, and accessible",
  "Work with APIs, databases, and deployment pipelines",
  "Debug, refactor, and improve existing codebases",
];

const aiSkills = [
  "Learning how large language models work and how to use them effectively",
  "Building projects that combine traditional software with AI capabilities",
  "Exploring prompt design, RAG, agents, and tool use",
  "Studying ML fundamentals: data, models, evaluation, and iteration",
  "Applying AI in real applications—not just notebooks",
];

export function About() {
  return (
    <section
      id="about"
      className="relative mx-4 overflow-hidden rounded-3xl border border-white/10 bg-black px-6 py-24 sm:px-10 lg:px-4"
    >
      <AboutRibbonBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
          About
        </p>

        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Software at the core. AI on the horizon.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I&apos;m a <span className="text-slate-100">Software Developer</span>{" "}
          with a strong foundation in building web applications, writing clean
          code, and shipping products that work. Right now, I&apos;m focused on{" "}
          <span className="text-slate-100">becoming an AI Engineer</span>:
          learning how to design, integrate, and deploy intelligent systems—from
          LLM-powered features to practical ML workflows.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
          I care about writing maintainable code, understanding systems end to
          end, and applying AI where it genuinely improves the product—not where
          it&apos;s just hype.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-black/30 p-8 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-slate-50">
              Software Development
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              What I do today—building products that ship.
            </p>
            <ul className="mt-6 space-y-3">
              {softwareSkills.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-black/30 p-8 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-slate-50">
              Growing Into AI Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              What I&apos;m learning and building toward.
            </p>
            <ul className="mt-6 space-y-3">
              {aiSkills.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <p className="mt-12 max-w-3xl border-l-2 border-white/20 pl-6 text-base leading-7 text-slate-300 italic">
          I&apos;m not switching careers—I&apos;m expanding what I can build.
          Strong software engineering makes AI systems that actually ship.
        </p>
      </div>
    </section>
  );
}
