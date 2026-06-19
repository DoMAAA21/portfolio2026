import { contactLinks } from "@/data/contact";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#00362c] px-6 py-24 sm:px-10 lg:px-4 rounded-3xl mx-4 mb-4"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
          Contact
        </p>

        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Let&apos;s connect
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Open to collaboration, feedback, and conversations about software
          development and AI engineering.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                <span className="text-lg font-semibold text-slate-50 group-hover:text-white">
                  {link.label}
                </span>
                <span className="mt-2 text-sm leading-6 text-slate-400">
                  {link.description}
                </span>
                <span className="mt-4 font-mono text-xs text-slate-500 group-hover:text-slate-400">
                  {link.href.replace(/^mailto:/, "").replace(/^https?:\/\//, "")}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
