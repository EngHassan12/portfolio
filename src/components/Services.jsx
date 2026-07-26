import { Code2, Server, PenTool, Megaphone, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const roles = [
  {
    title: "Frontend Developer",
    period: "2023 — Present",
    icon: Code2,
    accent: {
      ring: "ring-blue-500/40",
      bar: "from-blue-500 to-cyan-400",
      icon: "bg-blue-500/15 text-blue-400",
      chip: "border-blue-500/30 text-blue-300",
    },
    responsibilities: [
      "Built responsive websites using React, HTML5, CSS3, JavaScript, and Tailwind CSS.",
      "Created reusable UI components and optimized website performance.",
      "Focused on accessibility, responsiveness, and user experience.",
    ],
    stack: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend Developer",
    period: "2023 — Present",
    icon: Server,
    accent: {
      ring: "ring-violet-500/40",
      bar: "from-violet-500 to-fuchsia-400",
      icon: "bg-violet-500/15 text-violet-400",
      chip: "border-violet-500/30 text-violet-300",
    },
    responsibilities: [
      "Developed secure REST APIs using PHP and MySQL.",
      "Designed databases and authentication systems.",
      "Integrated frontend applications with backend services.",
    ],
    stack: ["PHP", "MySQL", "REST API", "JWT", "XAMPP"],
  },
  {
    title: "Graphic Designer",
    period: "2021 — Present",
    icon: PenTool,
    accent: {
      ring: "ring-amber-500/40",
      bar: "from-amber-500 to-orange-400",
      icon: "bg-amber-500/15 text-amber-400",
      chip: "border-amber-500/30 text-amber-300",
    },
    responsibilities: [
      "Designed social media posts, marketing materials, and branding assets.",
      "Created logos, visual identities, and promotional campaigns.",
      "Produced high-quality designs using modern design principles.",
    ],
    stack: ["Photoshop", "Illustrator", "Figma", "Canva"],
  },
  {
    title: "Digital Marketing Specialist",
    period: "2022 — Present",
    icon: Megaphone,
    accent: {
      ring: "ring-emerald-500/40",
      bar: "from-emerald-500 to-teal-400",
      icon: "bg-emerald-500/15 text-emerald-400",
      chip: "border-emerald-500/30 text-emerald-300",
    },
    responsibilities: [
      "Planned and ran SEO and paid ad campaigns across Google and Meta platforms.",
      "Managed content calendars and grew social media engagement.",
      "Tracked and analyzed performance metrics to improve campaign ROI.",
    ],
    stack: ["SEO", "Google Ads", "Meta Ads", "Google Analytics", "Mailchimp", "Canva"],
  },
];

export default function Experience() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="experience" ref={ref} className="bg-black px-6 py-20 sm:px-8">
      <div
        className={`mx-auto max-w-6xl transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
            Experience
          </p>
          <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Roles I've grown through.
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {roles.map((role, i) => {
            const Icon = role.icon;
            const accent = role.accent;
            return (
              <article
                key={role.title}
                style={{ transitionDelay: isVisible ? `${i * 110}ms` : "0ms" }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl hover:shadow-black/40 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                {/* Top accent bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 ease-out group-hover:scale-x-100 ${accent.bar}`}
                />

                {/* Header: icon + title on left, date badge on right */}
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 transition-transform duration-300 group-hover:-translate-y-0.5 ${accent.ring} ${accent.icon}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="mt-1 whitespace-nowrap rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-300">
                    {role.period}
                  </span>
                </div>

                <h4 className="mb-4 text-xl font-semibold text-white">
                  {role.title}
                </h4>

                {/* Key responsibilities */}
                <ul className="mb-6 space-y-2.5">
                  {role.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-400">
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 shrink-0 ${accent.icon.split(" ")[1]}`}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack chips — pushed to bottom for aligned card heights */}
                <div className="mt-auto border-t border-slate-800 pt-5">
                  <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {role.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full border bg-slate-800/40 px-3 py-1 text-xs font-medium transition-colors duration-300 group-hover:bg-slate-800/70 ${accent.chip}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}