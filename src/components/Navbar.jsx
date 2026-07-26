import { useReducer } from "react";
import { Moon, Sun } from "lucide-react";
import { navReducer, initialNavState } from "../reducers/navReducer";

const links = [
  { key: "about", label: "About" },
  { key: "services", label: "Services" },
  { key: "skills", label: "Skills" },
  { key: "projects", label: "Projects" },
  { key: "experience", label: "Experience" },
  { key: "contact", label: "Contact" },
];

export default function Navbar({ sectionRefs, theme, toggleTheme }) {
  const [state, dispatch] = useReducer(navReducer, initialNavState);

  const handleNavClick = (key) => {
    dispatch({ type: "SET_ACTIVE", payload: key });
    dispatch({ type: "CLOSE_MENU" });
    sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 bg-white/80 dark:bg-slate-950/90 backdrop-blur-md">
        <a href="#hero" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
            HQ
          </div>
          <div className="leading-none">
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-900 uppercase">
              H. Quuyow
            </p>
            <p className="mt-1 text-xs text-slate-500">Engineer</p>
          </div>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <li key={link.key}>
              <button
                onClick={() => handleNavClick(link.key)}
                className={`hover:text-blue-600 transition ${
                  state.active === link.key ? "text-blue-600 font-semibold" : "text-slate-700 dark:text-slate-200"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-full border border-slate-200 bg-white p-2 text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            className="md:hidden text-2xl"
            aria-label="Toggle navigation menu"
            aria-expanded={state.menuOpen}
            aria-controls="mobile-menu"
            onClick={() => dispatch({ type: "TOGGLE_MENU" })}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {state.menuOpen && (
        <ul id="mobile-menu" className="md:hidden flex flex-col bg-white px-6 pb-4 gap-4 text-sm font-medium dark:bg-slate-950">
          {links.map((link) => (
            <li key={link.key}>
              <button onClick={() => handleNavClick(link.key)} className="w-full text-left text-slate-700 dark:text-slate-200">
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex w-full items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}