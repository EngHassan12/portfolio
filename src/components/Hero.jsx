import heroImg from "../assets/my picture.jpeg";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Hero() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      id="hero"
      ref={ref}
      className={`flex min-h-screen flex-col items-center justify-center px-6 py-20 transition-all duration-700 ease-out sm:px-8 lg:px-10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } bg-gradient-to-b from-white to-slate-50`}
    >
      <div className="flex w-full max-w-6xl flex-col items-center text-center md:flex-row md:items-center md:justify-between md:gap-12 md:text-left">
        <div className="order-2 max-w-xl md:order-1">
          <span className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-900">
            Web Developer , Graphic Designer & Digital Marketing
          </span>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900 md:text-5xl lg:text-6xl">
            Hi, I'm Hassan Mukhtar Hassan
          </h1>
          <p className="mb-8 max-w-xl text-lg text-slate-800">
            I design and build premium digital products for startups and growing brands, turning ideas into polished user experiences with measurable results.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <a
              href="#projects"
              className="inline-block rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              View My Work
            </a>
            <a
              href="/Hassan-Mukhtar-Hassan-CV.docx"
              download
              className="inline-block rounded-lg border border-slate-900 bg-white px-6 py-3 font-medium text-slate-900 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="order-1 mt-10 md:mt-0 md:order-2">
          <img
            src={heroImg}
            alt="Portrait of Hassan Mukhtar Hassan"
            loading="lazy"
            className="h-72 w-72 rounded-full border-4 border-slate-200 object-cover shadow-xl sm:h-80 sm:w-80"
          />
        </div>
      </div>
    </section>
  );
}