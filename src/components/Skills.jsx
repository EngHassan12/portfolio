import { useScrollReveal } from "../hooks/useScrollReveal";

const categories = [
  {
    title: "Web Development",
    icon: "💻",
    accent: {
      ring: "ring-blue-500/30",
      glow: "shadow-blue-500/10",
      bar: "from-blue-500 to-cyan-400",
      badge: "bg-blue-500/10 text-blue-600",
      dot: "bg-blue-500",
    },
    groups: [
      { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js"] },
      { label: "Backend & Databases", items: ["PHP", "Java", "MySQL", "SQL Server"] },
      { label: "Core Abilities", items: ["Responsive Web Design", "Clean Code Structure", "Web Performance & Security"] },
    ],
  },
  {
    title: "Graphic Design & UI/UX",
    icon: "🎨",
    accent: {
      ring: "ring-violet-500/30",
      glow: "shadow-violet-500/10",
      bar: "from-violet-500 to-fuchsia-400",
      badge: "bg-violet-500/10 text-violet-600",
      dot: "bg-violet-500",
    },
    groups: [
      { label: "Design Tools", items: ["Figma", "Adobe Photoshop", "Adobe Illustrator"] },
      { label: "Creative Expertise", items: ["Brand Identity & Logo Design", "UI/UX Prototyping", "Social Media Graphics", "Print & Layout Design"] },
    ],
  },
  {
    title: "Digital Marketing",
    icon: "📈",
    accent: {
      ring: "ring-amber-500/30",
      glow: "shadow-amber-500/10",
      bar: "from-amber-500 to-orange-400",
      badge: "bg-amber-500/10 text-amber-600",
      dot: "bg-amber-500",
    },
    groups: [
      { label: "Strategies", items: ["Social Media Marketing (SMM)", "Content Strategy", "Digital Campaign Management"] },
      { label: "Growth", items: ["Audience Targeting", "Brand Strategy", "Conversion Optimization"] },
    ],
  },
];

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className={`bg-white px-6 py-20 text-slate-900 transition-all duration-700 ease-out sm:px-8 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              What I bring to the table
            </p>
            <h3 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Skills & Expertise
            </h3>
          </div>

          {/* Years of experience stat */}
          <div className="flex items-center gap-4 border-t border-slate-200 pt-4 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
            <span className="text-5xl font-extrabold leading-none text-slate-900">
              3+
            </span>
            <span className="text-sm leading-tight text-slate-600">
              Years of
              <br />
              Experience
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
              className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl ${cat.accent.glow} ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {/* accent bar */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${cat.accent.bar}`} />

              <div>
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-xl ring-1 ${cat.accent.ring} ${cat.accent.badge}`}
                >
                  {cat.icon}
                </div>
                <h4 className="mb-5 text-xl font-semibold text-slate-900">
                  {cat.title}
                </h4>
              </div>

              <div className="space-y-5">
                {cat.groups.map((group) => (
                  <div key={group.label}>
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      <span className={`h-1.5 w-1.5 rounded-full ${cat.accent.dot}`} />
                      {group.label}
                    </p>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-slate-700 transition-colors group-hover:text-slate-900"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}