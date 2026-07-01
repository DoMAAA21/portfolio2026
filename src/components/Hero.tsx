import { HeroBlobBackground } from "./HeroBlobBackground";
import { HeroCodeBackground } from "./HeroCodeBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-0px)] w-full items-center overflow-hidden bg-background px-6 py-24 sm:px-10 lg:px-4">
      <HeroBlobBackground />
      <HeroCodeBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
            Software Developer
          </span>
          <span aria-hidden className="text-slate-600">
            →
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-slate-100">
            AI Engineer
          </span>
        </p>

        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-7xl lg:leading-[1.08]">
          I build reliable software—and I&apos;m growing into{" "}
          <span className="text-slate-400">AI engineering</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          Full-stack developer focused on clean code, solid systems, and shipping
          products that work. Currently learning how to design and deploy
          intelligent features—from LLMs to practical ML workflows.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-full bg-slate-50 px-6 text-sm font-medium text-[#12253f] transition-colors hover:bg-white"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-slate-100 transition-colors hover:bg-white/5"
          >
            Get in Touch
          </a>
        </div>

        <ul className="mt-14 flex flex-wrap gap-2">
          {["Full-Stack Developer", "AI Engineer", "LLMs", "RAG", "Prompt Engineering"].map(
            (item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-slate-400"
              >
                {item}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
