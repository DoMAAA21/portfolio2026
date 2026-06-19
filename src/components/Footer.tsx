import { contact } from "@/data/contact";

const footerLinks = [
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
  { label: "Instagram", href: contact.instagram },
  { label: "Email", href: contact.email },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 sm:px-10 lg:px-4">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-50">Jharold Cataluna</p>
          <p className="mt-1 text-sm text-slate-500">
            © {new Date().getFullYear()} · Software Developer
          </p>
        </div>

        <nav aria-label="Footer links">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="text-sm text-slate-400 transition-colors hover:text-slate-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
