import { useReducer } from "react";
import { navReducer, initialNavState } from "../reducers/navReducer";

const links = [
  { key: "about", label: "About" },
  { key: "skills", label: "Skills" },
  { key: "projects", label: "Projects" },
  { key: "contact", label: "Contact" },
];

export default function Navbar({ sectionRefs }) {
  const [state, dispatch] = useReducer(navReducer, initialNavState);

  const handleNavClick = (key) => {
    dispatch({ type: "SET_ACTIVE", payload: key });
    dispatch({ type: "CLOSE_MENU" });
    sectionRefs[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
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
                  state.active === link.key ? "text-blue-600 font-semibold" : "text-gray-700"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => dispatch({ type: "TOGGLE_MENU" })}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {state.menuOpen && (
        <ul className="md:hidden flex flex-col bg-white px-6 pb-4 gap-4 text-sm font-medium">
          {links.map((link) => (
            <li key={link.key}>
              <button onClick={() => handleNavClick(link.key)}>{link.label}</button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}