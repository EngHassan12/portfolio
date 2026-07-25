import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();
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
      <h3 className="mb-10 text-3xl font-bold text-slate-900 md:text-4xl">Projects</h3>

      <div className="grid gap-8">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 transition hover:-translate-y-1 hover:shadow-lg md:flex-row"
          >
            {/* Image */}
            <div className="bg-slate-100 md:w-2/5">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-56 md:h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col p-6 md:w-3/5">
              <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-700">
                {proj.category}
              </span>
              <h4 className="mb-2 text-xl font-bold text-slate-900">{proj.title}</h4>
              <p className="mb-4 text-sm text-slate-800">{proj.overview}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {proj.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <ul className="mb-6 list-inside list-disc space-y-1 text-sm text-slate-800">
                {proj.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <a
                href={proj.ctaLink}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-block w-fit rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition duration-200 hover:bg-slate-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                {proj.ctaLabel} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}