import { contactLinks } from "@/data/contact";

import { ContactRibbonBackground } from "./ContactRibbonBackground";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#00362c] px-6 py-24 sm:px-10 lg:px-4"
    >
      <ContactRibbonBackground />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-widest text-emerald-200/60">
          Contact
        </p>

        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Let&apos;s connect
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-100/70">
          Open to collaboration, feedback, and conversations about software
          development and AI engineering.
        </p>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group block transition-opacity hover:opacity-100"
              >
                <span className="text-lg font-semibold text-slate-50 underline decoration-emerald-400/30 underline-offset-4 transition-colors group-hover:decoration-emerald-300/70">
                  {link.label}
                </span>
                <span className="mt-2 block text-sm leading-6 text-emerald-100/60">
                  {link.description}
                </span>
                <span className="mt-3 block font-mono text-xs text-emerald-200/40 transition-colors group-hover:text-emerald-200/60">
                  {link.href
                    .replace(/^mailto:/, "")
                    .replace(/^https?:\/\//, "")}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
