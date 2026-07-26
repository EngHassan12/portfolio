import { Quote } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const accents = [
  { ring: "ring-blue-500/30", icon: "bg-blue-500/10 text-blue-600", bar: "from-blue-500 to-cyan-400" },
  { ring: "ring-violet-500/30", icon: "bg-violet-500/10 text-violet-600", bar: "from-violet-500 to-fuchsia-400" },
  { ring: "ring-amber-500/30", icon: "bg-amber-500/10 text-amber-600", bar: "from-amber-500 to-orange-400" },
];

const testimonials = [
  {
    quote:
      "Hassan has played an important role in strengthening MAAN Group's digital presence through creative and professional social media designs. His posters consistently reflect our brand identity, engage our audience, and communicate our message effectively. He is reliable, creative, and always delivers high-quality work.",
    name: "Mohamed Salad Ibrahim",
    role: "Founder & CEO, MAAN Group",
  },
  {
    quote:
      "The website Hassan developed was fast, responsive, and easy to use. He paid attention to every detail and delivered the project on time.",
    name: "Amina Ali",
    role: "Business Owner",
  },
  {
    quote:
      "Working with Hassan was a great experience. His creativity, technical skills, and commitment to quality made the final result exceed our expectations.",
    name: "Mohamed Hassan",
    role: "Marketing Manager",
  },
];

export default function Testimonials() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`bg-white px-6 py-20 transition-all duration-700 ease-out sm:px-8 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            What people say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => {
            const accent = accents[i % accents.length];
            const initials = t.name
              .split(" ")
              .slice(0, 2)
              .map((n) => n[0])
              .join("");
            return (
              <div
                key={t.name}
                style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.bar}`} />

                <div
                  className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ${accent.ring} ${accent.icon}`}
                >
                  <Quote className="h-4 w-4" aria-hidden="true" />
                </div>

                <p className="mb-6 flex-1 text-sm leading-7 text-slate-600">
                  {t.quote}
                </p>

                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ring-1 ${accent.ring} ${accent.icon}`}
                  >
                    {initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{t.name}</h3>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}