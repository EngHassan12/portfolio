import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Footer() {
  const [ref, isVisible] = useScrollReveal();
  const year = new Date().getFullYear();

  const socials = [
    { label: "GitHub", href: "https://github.com/EngHassan12" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hassan-mukhtar-hassan-12767a343/" },
    { label: "Email", href: "mailto:xasanmuqtaar952@gmail.com" },
  ];

  return (
    <footer
      ref={ref}
      className={`border-t border-slate-200 bg-white transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-bold text-slate-900">Hassan</p>
          <p className="text-sm text-slate-700">Web Developer & Designer</p>
        </div>

        <div className="flex gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-slate-800 transition hover:text-slate-900"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-slate-400">
          © {year} Hassan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}