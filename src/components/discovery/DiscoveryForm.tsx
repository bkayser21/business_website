"use client";

import { useState, FormEvent } from "react";

type Step1Data = { project_type: string };
type Step2Data = { budget: string; timeline: string };
type Step3Data = { name: string; email: string; company: string; message: string };
type FormData = Step1Data & Step2Data & Step3Data;

const PROJECT_TYPES = [
  { value: "web", label: "Website / Landing Page", icon: "🌐" },
  { value: "saas", label: "SaaS Product", icon: "⚙️" },
  { value: "ai", label: "AI & Automation", icon: "🤖" },
  { value: "consulting", label: "Technical Consulting", icon: "💡" },
  { value: "unsure", label: "Not sure yet", icon: "🤔" },
];

const BUDGETS = ["<$1k", "$1k–$5k", "$5k–$15k", "$15k+", "Not sure"];
const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "Flexible"];

export default function DiscoveryForm({
  initialName,
  initialEmail,
}: {
  initialName: string;
  initialEmail: string;
}) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    project_type: "",
    budget: "",
    timeline: "",
    name: initialName,
    email: initialEmail,
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const setField = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/discovery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-16 px-4">
        <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2
          className="text-2xl font-bold font-display text-charcoal mb-3"
          style={{ letterSpacing: "-0.5px" }}
        >
          All set!
        </h2>
        <p className="text-stone max-w-sm mx-auto">
          Thanks for filling this out. I&apos;ll review your answers before our call so we can hit the ground running.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${
                s < step
                  ? "bg-cyan text-charcoal"
                  : s === step
                  ? "bg-cyan text-charcoal ring-4 ring-cyan-ice"
                  : "bg-lavender text-stone"
              }`}
            >
              {s < step ? (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </div>
            {s < 3 && <div className={`flex-1 h-px ${s < step ? "bg-cyan" : "bg-lavender"}`} />}
          </div>
        ))}
      </div>

      {/* Step 1 — Project type */}
      {step === 1 && (
        <div>
          <h1
            className="text-2xl font-bold font-display text-charcoal mb-2"
            style={{ letterSpacing: "-1.5px" }}
          >
            What do you need help with?
          </h1>
          <p className="text-stone mb-6">Pick the option that best describes your project.</p>
          <div className="grid grid-cols-1 gap-3">
            {PROJECT_TYPES.map((pt) => (
              <button
                key={pt.value}
                type="button"
                onClick={() => {
                  setField("project_type", pt.value);
                  setStep(2);
                }}
                className={`flex items-center gap-4 px-5 py-4 rounded-xl border text-left transition-all ${
                  form.project_type === pt.value
                    ? "border-cyan bg-cyan-ice ring-1 ring-cyan-deep"
                    : "border-lavender hover:border-cyan-sky hover:bg-off-white"
                }`}
              >
                <span className="text-2xl">{pt.icon}</span>
                <span className="font-medium text-charcoal">{pt.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 — Budget & Timeline */}
      {step === 2 && (
        <div>
          <h1
            className="text-2xl font-bold font-display text-charcoal mb-2"
            style={{ letterSpacing: "-1.5px" }}
          >
            Scope &amp; timeline
          </h1>
          <p className="text-stone mb-6">These help me come to our call with relevant options.</p>

          <div className="mb-6">
            <p className="text-sm font-semibold text-charcoal mb-3">Rough budget</p>
            <div className="flex flex-wrap gap-2">
              {BUDGETS.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setField("budget", b)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                    form.budget === b
                      ? "border-cyan bg-cyan-ice text-cyan-deep ring-1 ring-cyan"
                      : "border-lavender text-stone hover:border-cyan-sky"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-sm font-semibold text-charcoal mb-3">Timeline</p>
            <div className="flex flex-wrap gap-2">
              {TIMELINES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setField("timeline", t)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                    form.timeline === t
                      ? "border-cyan bg-cyan-ice text-cyan-deep ring-1 ring-cyan"
                      : "border-lavender text-stone hover:border-cyan-sky"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-5 py-2.5 rounded-lg border border-lavender text-stone text-sm font-medium hover:bg-off-white transition-colors"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              disabled={!form.budget || !form.timeline}
              className="flex-1 px-5 py-2.5 rounded-lg bg-cyan text-charcoal text-sm font-semibold hover:bg-cyan-deep disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — Details */}
      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h1
            className="text-2xl font-bold font-display text-charcoal mb-2"
            style={{ letterSpacing: "-1.5px" }}
          >
            A bit more detail
          </h1>
          <p className="text-stone mb-6">Last step — tell me about your project and confirm your info.</p>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-lavender text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-lavender text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Company <span className="text-stone font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setField("company", e.target.value)}
                placeholder="Acme Inc."
                className="w-full px-4 py-2.5 rounded-lg border border-lavender text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Tell me about your project <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setField("message", e.target.value)}
                placeholder="What are you trying to build or solve? What does success look like?"
                className="w-full px-4 py-2.5 rounded-lg border border-lavender text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                {errorMsg}
              </p>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-5 py-2.5 rounded-lg border border-lavender text-stone text-sm font-medium hover:bg-off-white transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex-1 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-cyan text-charcoal text-sm font-semibold hover:bg-cyan-deep disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-charcoal" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
