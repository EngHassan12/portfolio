import { Code2, Server, Palette } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance & Contract",
    period: "2023 — Present",
    icon: Code2,
    accent: {
      ring: "ring-blue-500/30",
      icon: "bg-blue-500/10 text-blue-600",
      bar: "from-blue-500 to-cyan-400",
      chip: "bg-blue-50 text-blue-700 ring-blue-500/20",
    },
    responsibilities: [
      "Built responsive websites using React, HTML5, CSS3, JavaScript, and Tailwind CSS.",
      "Created reusable UI components and optimized website performance.",
      "Focused on accessibility, responsiveness, and user experience.",
    ],
    stack: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  },
  {
    role: "Backend Developer",
    company: "Freelance & Contract",
    period: "2023 — Present",
    icon: Server,
    accent: {
      ring: "ring-indigo-500/30",
      icon: "bg-indigo-500/10 text-indigo-600",
      bar: "from-indigo-500 to-blue-400",
      chip: "bg-indigo-50 text-indigo-700 ring-indigo-500/20",
    },
    responsibilities: [
      "Developed secure REST APIs using PHP and MySQL.",
      "Designed databases and authentication systems.",
      "Integrated frontend applications with backend services.",
    ],
    stack: ["PHP", "MySQL", "REST API", "JWT", "XAMPP"],
  },
  {
    role: "Graphic Designer",
    company: "Branding & Product Design",
    period: "2020 — Present",
    icon: Palette,
    accent: {
      ring: "ring-violet-500/30",
      icon: "bg-violet-500/10 text-violet-600",
      bar: "from-violet-500 to-fuchsia-400",
      chip: "bg-violet-50 text-violet-700 ring-violet-500/20",
    },
    responsibilities: [
      "Designed social media posts, marketing materials, and branding assets.",
      "Created logos, visual identities, and promotional campaigns.",
      "Produced high-quality designs using modern design principles.",
    ],
    stack: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva"],
  },
];

export default function Experience() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className={`mx-auto max-w-5xl px-6 py-20 transition-all duration-700 ease-out sm:px-8 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
          Experience
        </p>
        <h3 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Where my skills come from.
        </h3>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          A summary of the roles and client work that shaped my skills in web development, product design, and digital marketing.
        </p>
      </div>

      <div className="grid gap-6">
        {experiences.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={item.role}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg sm:p-8 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent.bar}`} />

              <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ${item.accent.ring} ${item.accent.icon}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{item.role}</p>
                    <p className="text-sm text-slate-500">{item.company}</p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
                  {item.period}
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-[1.4fr_1fr]">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Key responsibilities
                  </p>
                  <ul className="space-y-2">
                    {item.responsibilities.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-6 text-slate-700">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${item.accent.icon.split(" ")[0]}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Tech stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ${item.accent.chip}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}