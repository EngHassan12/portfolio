import { useReducer } from "react";
import { Mail, MapPin } from "lucide-react";
import { formReducer, initialFormState } from "../reducers/formReducer";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FORM_ENDPOINT = "https://formspree.io/f/xgogpprw";

export default function Contact() {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const [ref, isVisible] = useScrollReveal();

  const handleChange = (e) => {
    dispatch({ type: "CHANGE", field: e.target.name, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SEND_START" });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (response.ok) {
        dispatch({ type: "SEND_SUCCESS" });
      } else {
        dispatch({ type: "SEND_ERROR" });
      }
    } catch {
      dispatch({ type: "SEND_ERROR" });
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`mx-auto max-w-5xl px-6 py-20 bg-slate-50 transition-all duration-700 ease-out sm:px-8 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
        Contact
      </p>
      <h3 className="mb-10 text-3xl font-bold text-slate-900 md:text-4xl">Get in touch</h3>

      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* Info side */}
        <div>
          <p className="mb-8 max-w-md text-lg leading-relaxed text-slate-600">
            Have a project in mind or want to collaborate? I'd love to hear from you —
            drop a message and I'll get back to you shortly.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 ring-1 ring-blue-500/30">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </p>
                <p className="font-medium text-slate-900">xasanmuqtaar952@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 ring-1 ring-blue-500/30">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Based in
                </p>
                <p className="font-medium text-slate-900">Mogadishu, Somalia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form side */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
              Your name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={state.values.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={state.values.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project"
              rows={5}
              value={state.values.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
            />
          </div>

          <button
            type="submit"
            disabled={state.status === "sending"}
            className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-200 hover:from-blue-700 hover:to-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state.status === "sending" ? "Diraya..." : "Send message"}
          </button>

          {state.status === "success" && (
            <p className="text-sm font-medium text-green-600">
              ✅ Fariinta waa la diray, waan kula soo xiriiri doonaa!
            </p>
          )}
          {state.status === "error" && (
            <p className="text-sm font-medium text-red-600">
              ❌ Wax baa qaldamay, fadlan mar kale isku day.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}