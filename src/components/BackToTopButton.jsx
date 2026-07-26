import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      aria-label="Scroll back to top"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
}
