import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();

  const accents = [
    {
      badge: "bg-blue-500/10 text-blue-700 ring-blue-500/20",
      chip: "bg-blue-600",
      cta: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-400",
      bar: "from-blue-500 to-cyan-400",
    },
    {
      badge: "bg-violet-500/10 text-violet-700 ring-violet-500/20",
      chip: "bg-violet-600",
      cta: "bg-violet-600 hover:bg-violet-700 focus:ring-violet-400",
      bar: "from-violet-500 to-fuchsia-400",
    },
    {
      badge: "bg-amber-500/10 text-amber-700 ring-amber-500/20",
      chip: "bg-amber-600",
      cta: "bg-amber-600 hover:bg-amber-700 focus:ring-amber-400",
      bar: "from-amber-500 to-orange-400",
    },
  ];

  const projects = [
    {
      title: "E-Commerce & Custom Web Application",
      category: "Web Development & UI/UX",
      overview:
        "Designed and developed a full-stack, dynamic web application focused on speed, user experience, and secure data handling.",
      stack: ["React", "PHP", "MySQL", "JavaScript", "CSS3"],
      features: [
        "Fully responsive design optimized for mobile and desktop devices.",
        "Efficient database architecture and RESTful APIs integration.",
        "Smooth user flow from landing page to checkout.",
      ],
      image: "/projects/ecommerce.jpg",
      ctaLabel: "Live Demo",
      ctaLink: "/projects/ecommerce.jpg",
    },
    {
      title: "Comprehensive Brand Identity & Visual Design",
      category: "Graphic Design & Branding",
      overview:
        "A complete visual identity package created for a modern startup to establish a strong market presence.",
      stack: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
      features: [
        "Custom Logo design, Typography, and Color System.",
        "High-converting Social Media Templates & Corporate Flyers.",
        "Professional Digital Product Mockups.",
      ],
      image: "/projects/branding.jpg",
      ctaLabel: "View Case Study",
      ctaLink: "/projects/branding.jpg",
    },
    {
      title: "Digital Marketing & Audience Growth Campaign",
      category: "Digital Marketing & Strategy",
      overview:
        "Executed a targeted social media marketing and content strategy to boost brand awareness and customer acquisition.",
      stack: ["Content Strategy", "Social Media Ads", "Audience Targeting", "Analytics"],
      features: [
        "Increased organic reach and engagement by over 150%.",
        "Successfully drove targeted leads through high-converting ad copy and visual content.",
      ],
      image: "/projects/marketing.jpg",
      ctaLabel: "View Case Study",
      ctaLink: "/projects/marketing.jpg",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`mx-auto max-w-5xl px-6 py-20 transition-all duration-700 ease-out sm:px-8 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
        Portfolio
      </p>
      <h3 className="mb-10 text-3xl font-bold text-slate-900 md:text-4xl">Projects</h3>

      <div className="grid gap-8">
        {projects.map((proj, i) => {
          const accent = accents[i % accents.length];
          return (
            <div
              key={proj.title}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl md:flex-row ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r md:hidden ${accent.bar}`} />
              <div className={`absolute inset-y-0 left-0 hidden w-1 bg-gradient-to-b md:block ${accent.bar}`} />

              {/* Image */}
              <div className="bg-slate-100 md:w-2/5">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="h-56 w-full object-cover md:h-full"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 sm:p-8 md:w-3/5">
                <span
                  className={`mb-3 w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ${accent.badge}`}
                >
                  {proj.category}
                </span>
                <h4 className="mb-2 text-xl font-bold text-slate-900">{proj.title}</h4>
                <p className="mb-4 text-sm leading-6 text-slate-600">{proj.overview}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {proj.stack.map((s) => (
                    <span
                      key={s}
                      className={`rounded-full px-2.5 py-1 text-xs font-medium text-white shadow-sm ${accent.chip}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="mb-6 list-inside list-disc space-y-1 text-sm text-slate-600">
                  {proj.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <a
                  href={proj.ctaLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-auto inline-block w-fit rounded-lg px-5 py-2.5 text-sm font-medium text-white shadow-sm transition duration-200 active:scale-95 focus:outline-none focus:ring-2 ${accent.cta}`}
                >
                  {proj.ctaLabel} →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}