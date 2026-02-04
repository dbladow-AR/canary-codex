"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const initialState = {
  name: "",
  email: "",
  companyUrl: "",
  platform: "",
  stage: "",
  question: "",
  website: ""
};

export default function QualifyForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/qualify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setMessage("Request initialized. We'll respond within 24 hours.");
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Try again or email us directly.");
    }
  };

  return (
    <section id="qualify" className="relative border-b border-black bg-[var(--c-acid)] p-8 lg:p-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-5xl font-black uppercase leading-none lg:text-7xl">
            See if<br />Path 19<br />Fits.
          </h2>
          <p className="mt-6 border-l-2 border-black py-2 pl-6 text-xl font-medium max-w-md">
            Let&apos;s find out if your program is ready for an Operating System.
          </p>

          <div className="font-tech mt-12 text-xs">
            // RESPONSE_TIME: &lt; 24HRS<br />
            // SLOT_AVAILABILITY: LIMITED
          </div>
        </div>

        <div
          className="border border-black bg-[var(--c-concrete)] p-8"
          style={{ boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)" }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-tech text-xs font-bold uppercase">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-none border-b border-black bg-transparent py-2 placeholder-gray-500 transition-all focus:border-b-2 focus:bg-white/50 focus:outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="font-tech text-xs font-bold uppercase">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-none border-b border-black bg-transparent py-2 placeholder-gray-500 transition-all focus:border-b-2 focus:bg-white/50 focus:outline-none"
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-tech text-xs font-bold uppercase">Company URL</label>
              <input
                type="text"
                name="companyUrl"
                value={formData.companyUrl}
                onChange={handleChange}
                className="w-full rounded-none border-b border-black bg-transparent py-2 placeholder-gray-500 transition-all focus:border-b-2 focus:bg-white/50 focus:outline-none"
                placeholder="company.com"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-tech text-xs font-bold uppercase">Platform</label>
                <select
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-none border-b border-black bg-transparent py-2 transition-all focus:border-b-2 focus:bg-white/50 focus:outline-none"
                  required
                >
                  <option value="">Select Platform...</option>
                  <option value="Retell AI">Retell AI</option>
                  <option value="Vapi">Vapi</option>
                  <option value="Bland AI">Bland AI</option>
                  <option value="Other / Not Sure">Other / Not Sure</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-tech text-xs font-bold uppercase">Stage</label>
                <select
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-none border-b border-black bg-transparent py-2 transition-all focus:border-b-2 focus:bg-white/50 focus:outline-none"
                  required
                >
                  <option value="">Select Stage...</option>
                  <option value="Exploring">Exploring</option>
                  <option value="Pilot (Live)">Pilot (Live)</option>
                  <option value="Scaling">Scaling</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-tech text-xs font-bold uppercase">One Key Question</label>
              <textarea
                rows={3}
                name="question"
                value={formData.question}
                onChange={handleChange}
                className="w-full rounded-none border border-black bg-transparent p-3 placeholder-gray-500 transition-all focus:bg-white focus:outline-none"
                placeholder="What&apos;s your biggest bottleneck?"
                required
              />
            </div>

            <div className="sr-only" aria-hidden="true">
              <label className="font-tech text-xs font-bold uppercase">Website</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full border border-transparent bg-black py-4 font-bold uppercase tracking-widest text-[var(--c-acid)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_var(--c-black)] hover:bg-[#222] active:translate-x-0 active:translate-y-0 active:shadow-none disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Initializing..." : "Initialize Request"}
            </button>

            {message ? (
              <div
                className={`text-sm ${status === "error" ? "text-red-600" : "text-black"}`}
                role="status"
                aria-live="polite"
              >
                {message}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
