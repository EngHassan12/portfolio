import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  const pillars = [
    {
      title: "Design",
      desc: "Crafting striking visual identities, branding materials, and intuitive interfaces.",
    },
    {
      title: "Development",
      desc: "Building high-performance, responsive, and secure web applications.",
    },
    {
      title: "Marketing",
      desc: "Driving engagement and conversions through targeted digital marketing strategies.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`mx-auto max-w-4xl px-6 py-20 transition-all duration-700 ease-out sm:px-8 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <h3 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">About Me</h3>

      <p className="mb-4 text-lg text-slate-900">
        Hi, I'm <span className="font-semibold text-slate-900">Hassan Mukhtar Hassan</span>.
      </p>
      <p className="mb-10 max-w-2xl text-lg text-slate-700">
        I am a multidisciplinary digital specialist blending design, development, and
        marketing. I help businesses scale by creating seamless end-to-end digital
        experiences.
      </p>

      <div className="grid gap-6 sm:grid-cols-3">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-slate-200 bg-gradient-to-b from-white to-blue-50/40 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <h4 className="mb-2 font-semibold text-blue-700">{p.title}</h4>
            <p className="text-sm text-slate-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}