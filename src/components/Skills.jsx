import { useScrollReveal } from "../hooks/useScrollReveal";

const categories = [
  {
    title: "Web Development",
    icon: "💻",
    groups: [
      { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js"] },
      { label: "Backend & Databases", items: ["PHP", "Java", "MySQL", "SQL Server"] },
      { label: "Core Abilities", items: ["Responsive Web Design", "Clean Code Structure", "Web Performance & Security"] },
    ],
  },
  {
    title: "Graphic Design & UI/UX",
    icon: "🎨",
    groups: [
      { label: "Design Tools", items: ["Figma", "Adobe Photoshop", "Adobe Illustrator"] },
      { label: "Creative Expertise", items: ["Brand Identity & Logo Design", "UI/UX Prototyping", "Social Media Graphics", "Print & Layout Design"] },
    ],
  },
  {
    title: "Digital Marketing",
    icon: "📈",
    groups: [
      { label: "Strategies", items: ["Social Media Marketing (SMM)", "Content Strategy", "Digital Campaign Management"] },
      { label: "Growth", items: ["Audience Targeting", "Brand Strategy", "Conversion Optimization"] },
    ],
  },
];

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" ref={ref} className={`bg-slate-50 px-6 py-20 transition-all duration-700 ease-out sm:px-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
      <div className="mx-auto max-w-5xl">
        <h3 className="mb-10 text-3xl font-bold text-slate-900 md:text-4xl">
          Skills & Expertise
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl">{cat.icon}</span>
                <h4 className="text-lg font-bold text-slate-900">{cat.title}</h4>
              </div>

              {cat.groups.map((group) => (
                <div key={group.label} className="mb-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-800">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-900"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}