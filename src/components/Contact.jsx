import { useReducer } from "react";
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
      <h3 className="mb-10 text-3xl font-bold text-slate-900 md:text-4xl">Get In Touch</h3>

      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* Info side */}
        <div>
          <p className="mb-6 text-lg text-slate-900">
            Have a project in mind or want to collaborate? I'd love to hear from you —
            drop a message and I'll get back to you shortly.
          </p>

          <div className="space-y-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Email
              </p>
              <p className="font-medium text-slate-900">xasanmuqtaar952@gmail.com</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Based In
              </p>
              <p className="font-medium text-slate-900">Mogadishu, Somalia</p>
            </div>
          </div>
        </div>

        {/* Form side */}
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Magacaaga"
            value={state.values.name}
            onChange={handleChange}
            required
            className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Emailkaaga"
            value={state.values.email}
            onChange={handleChange}
            required
            className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
          <textarea
            name="message"
            placeholder="Fariintaada"
            rows={5}
            value={state.values.message}
            onChange={handleChange}
            required
            className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />

          <button
            type="submit"
            disabled={state.status === "sending"}
            className="rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state.status === "sending" ? "Diraya..." : "Send message"}
          </button>

          {state.status === "success" && (
            <p className="text-green-600 font-medium text-sm">
              ✅ Fariinta waa la diray, waan kula soo xiriiri doonaa!
            </p>
          )}
          {state.status === "error" && (
            <p className="text-red-600 font-medium text-sm">
              ❌ Wax baa qaldamay, fadlan mar kale isku day.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}