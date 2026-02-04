"use client";

import { useMemo, useRef } from "react";

type ArtifactCard = {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  body: React.ReactNode;
};

function MetricPill({ label, value, tone }: { label: string; value: string; tone?: "good" | "warn" | "bad" }) {
  const toneClass =
    tone === "good"
      ? "bg-green-200/70"
      : tone === "warn"
        ? "bg-[var(--c-acid)]"
        : tone === "bad"
          ? "bg-red-100"
          : "bg-white";

  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-3 border border-black/60 bg-white px-3 py-2">
      <div className="font-tech text-[11px] uppercase tracking-widest opacity-70">{label}</div>
      <div className={`min-w-[76px] border border-black/70 px-2 py-1 text-center text-sm font-bold ${toneClass}`}>
        {value}
      </div>
    </div>
  );
}

function ArtifactFrame({ kicker, title, subtitle, children }: { kicker: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <article className="group relative w-[min(520px,86vw)] shrink-0 snap-center border border-black bg-white shadow-[8px_8px_0_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-center justify-between border-b border-black bg-[var(--c-concrete)] px-4 py-3">
        <div className="font-tech text-[11px] font-bold uppercase tracking-[0.2em]">{kicker}</div>
        <div className="font-tech text-[11px] opacity-60">[SAMPLE_RENDER]</div>
      </div>
      <div className="px-5 pb-6 pt-5">
        <h3 className="text-xl font-black uppercase tracking-tight">{title}</h3>
        <p className="mt-1 text-sm font-medium opacity-75">{subtitle}</p>
        <div className="mt-5">{children}</div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-[var(--c-acid)]" />
      </div>
    </article>
  );
}

export default function ArtifactsCarousel() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const cards = useMemo<ArtifactCard[]>(
    () => [
      {
        id: "agent-health",
        kicker: "ARTIFACT_01",
        title: "Agent Health Dashboard",
        subtitle: "A daily readout that makes performance visible at a glance.",
        body: (
          <div className="grid gap-3">
            <div className="grid grid-cols-2 gap-3">
              <MetricPill label="Status" value="YELLOW" tone="warn" />
              <MetricPill label="Goal" value="60%" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <MetricPill label="Answer Rate" value="56.3%" tone="bad" />
              <MetricPill label="Transfer Rate" value="75.0%" tone="good" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <MetricPill label="Outbound" value="71" />
              <MetricPill label="Transfers" value="30" />
            </div>

            <div className="mt-2 grid grid-cols-4 gap-2 border border-black/60 bg-[var(--c-concrete)] p-3">
              {["Today", "Δ DoD", "Last Week", "Δ"].map((h) => (
                <div key={h} className="font-tech text-[11px] font-bold uppercase tracking-widest opacity-70">
                  {h}
                </div>
              ))}
              {[
                ["56.3%", "-10.8%", "55.0%", "+1.3%"],
                ["75.0%", "-13.4%", "75.8%", "-0.8%"]
              ].map((row, idx) => (
                <div key={idx} className="col-span-4 grid grid-cols-4 gap-2">
                  {row.map((v, j) => (
                    <div
                      key={j}
                      className={`border border-black/50 bg-white px-2 py-2 text-center text-sm font-bold ${
                        idx === 0 && j === 0 ? "bg-red-50" : idx === 1 && j === 0 ? "bg-green-50" : ""
                      }`}
                    >
                      {v}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )
      },
      {
        id: "prompt-framework",
        kicker: "ARTIFACT_02",
        title: "Agent Prompt Framework",
        subtitle: "A compact spec that keeps calls consistent, clear, and safe.",
        body: (
          <div className="grid gap-3">
            <div className="grid gap-2 border border-black/70 bg-[var(--c-concrete)] p-4">
              <div className="font-tech text-[11px] font-bold uppercase tracking-widest">Persona</div>
              <div className="text-sm font-medium">
                Virtual concierge agent for scheduling and intake. Confident, helpful, transparent.
              </div>
            </div>

            <div className="grid gap-2 border border-black/70 bg-white p-4">
              <div className="font-tech text-[11px] font-bold uppercase tracking-widest">Tone</div>
              <div className="grid grid-cols-2 gap-2 text-sm font-medium">
                <div className="border border-black/40 bg-[var(--c-concrete)] px-2 py-2">Concise</div>
                <div className="border border-black/40 bg-[var(--c-concrete)] px-2 py-2">Human-aware</div>
                <div className="border border-black/40 bg-[var(--c-concrete)] px-2 py-2">Dynamic phrasing</div>
                <div className="border border-black/40 bg-[var(--c-concrete)] px-2 py-2">Confirm + repeat</div>
              </div>
            </div>

            <div className="grid gap-2 border border-black/70 bg-white p-4">
              <div className="font-tech text-[11px] font-bold uppercase tracking-widest">Guardrails</div>
              <div className="grid gap-2 text-sm font-medium">
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 bg-black" />
                  Repeat sensitive details back (email, phone, IDs).
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 bg-black" />
                  Offer a human transfer when uncertain or when caller is upset.
                </div>
              </div>
            </div>

            <div className="grid gap-2 border border-black bg-[var(--c-acid)] p-4">
              <div className="font-tech text-[11px] font-bold uppercase tracking-widest">Flow</div>
              <div className="text-sm font-bold uppercase tracking-wide">
                Greet → Gather → Confirm → Next Step → Close
              </div>
            </div>
          </div>
        )
      },
      {
        id: "runbook",
        kicker: "ARTIFACT_03",
        title: "Escalation Runbook",
        subtitle: "What happens when the agent cannot confidently proceed.",
        body: (
          <div className="grid gap-3">
            <div className="border border-black/70 bg-white p-4">
              <div className="font-tech text-[11px] font-bold uppercase tracking-widest">Triggers</div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm font-medium">
                <div className="border border-black/40 bg-[var(--c-concrete)] px-2 py-2">Ambiguous intent</div>
                <div className="border border-black/40 bg-[var(--c-concrete)] px-2 py-2">Caller frustration</div>
                <div className="border border-black/40 bg-[var(--c-concrete)] px-2 py-2">Data mismatch</div>
                <div className="border border-black/40 bg-[var(--c-concrete)] px-2 py-2">Compliance edge</div>
              </div>
            </div>
            <div className="border border-black bg-black p-4 text-[var(--c-concrete)]">
              <div className="font-tech text-[11px] font-bold uppercase tracking-widest">Safe Exit</div>
              <div className="mt-2 text-sm font-medium opacity-90">
                Summarize what was collected → ask permission to transfer → handoff with context.
              </div>
            </div>
          </div>
        )
      }
    ],
    []
  );

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 420) + 16;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-6 flex items-end justify-between gap-6">
        <div>
          <div className="font-tech text-xs uppercase tracking-widest opacity-70">Artifacts</div>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight lg:text-4xl">
            What the OS Produces
          </h2>
        </div>
        <div className="hidden gap-3 lg:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="font-tech border border-black bg-[var(--c-concrete)] px-3 py-2 text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-[1px]"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="font-tech border border-black bg-[var(--c-concrete)] px-3 py-2 text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-[1px]"
          >
            Next
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pr-2 [-webkit-overflow-scrolling:touch]"
        style={{ scrollbarWidth: "thin" }}
      >
        {cards.map((card) => (
          <div key={card.id} data-card className="snap-center">
            <ArtifactFrame kicker={card.kicker} title={card.title} subtitle={card.subtitle}>
              {card.body}
            </ArtifactFrame>
          </div>
        ))}
      </div>

      <div className="font-tech mt-4 text-[11px] uppercase tracking-widest opacity-60">
        Note: illustrative samples. Content varies by program.
      </div>
    </div>
  );
}
