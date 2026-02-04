/**
 * Changes (2026-02-04):
 * - Fix JSX lint errors: replace `"` with typographic quotes in text.
 * - Fix `// ...` JSX text nodes by rendering them via expressions.
 */
import type { CSSProperties } from "react";
import Link from "next/link";
import CheckBox from "@/components/CheckBox";
import QualifyForm from "@/components/QualifyForm";
import SiteShell from "@/components/SiteShell";
import ArtifactsCarousel from "@/components/ArtifactsCarousel";

const SECTION_VISIBILITY = {
  hero: true,
  why: true,
  concept: true,
  warning: true,
  timeline: true,
  handover: true,
  artifacts: false,
  stats: true,
  targeting: true,
  questions: true,
  qualify: true
};

const HeroSection = () => (
  <section className="relative grid min-h-[85vh] grid-cols-1 overflow-hidden border-b border-black lg:grid-cols-12">
    <div className="hidden flex-col items-center justify-between border-r border-black py-6 lg:col-span-1 lg:flex">
      <div
        className="font-tech text-xs uppercase tracking-widest"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)"
        }}
      >
        Overview
      </div>
      <div className="font-tech text-xs">01</div>
    </div>

    <div className="relative flex flex-col justify-center p-6 lg:col-span-11 lg:p-12">
      <div className="font-tech absolute right-6 top-6 text-xs opacity-60">
        [STATUS: PRODUCTION]<br />
        [LATENCY: &lt;50MS]
      </div>

      <div className="max-w-6xl">
        <h1 className="giant-type animate-rise mb-8 font-black uppercase" style={{ "--delay": "40ms" } as CSSProperties}>
          Voice<br />
          Program<br />
          OS
        </h1>

        <h2
          className="animate-rise mb-12 max-w-4xl text-2xl font-medium leading-tight tracking-tight lg:text-3xl"
          style={{ "--delay": "120ms" } as CSSProperties}
        >
          The control layer that turns pilots into production systems—installed in 60 days.
        </h2>

        <div className="grid gap-12 border-t border-black pt-12 lg:grid-cols-2">
          <div>
            <p className="text-lg font-medium leading-relaxed">
              Platforms like Retell and Vapi give you the agents. Your implementation partner builds
              them. <span className="bg-[var(--c-acid)] px-1">Path 19 installs the operating system</span>
              —the architecture, routing, dashboards, and runbooks that make it a program you can
              actually run.
            </p>

            <Link
              href="/#qualify"
              className="font-tech mt-8 inline-flex items-center gap-3 bg-black px-8 py-4 text-sm uppercase tracking-wider text-[var(--c-acid)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_var(--c-black)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              See if you qualify
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="font-tech grid grid-cols-2 gap-4 text-xs opacity-70">
            <div>
              &gt; SYS_ARCH: READY<br />
              &gt; ROUTING: OPTIMIZED<br />
              &gt; DASHBOARDS: LIVE
            </div>
            <div>
              &gt; RUNBOOKS: DEPLOYED<br />
              &gt; INCIDENT_RESP: ACTIVE<br />
              &gt; SCALE: UNLIMITED
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ConceptSection = () => (
  <section className="grid grid-cols-1 border-b border-black lg:grid-cols-2">
    <div className="border-b border-black p-8 lg:border-b-0 lg:border-r lg:p-16">
      <div className="font-tech mb-4 text-xs">CONCEPT_DEFINITION</div>
      <h3 className="mb-6 text-4xl font-black uppercase tracking-tight">Not Software. <br />The Operating Layer.</h3>
      <p className="max-w-md text-lg font-medium leading-relaxed">
        Voice Program OS is not a dedicated piece of software; it is a series of artifacts,
        processes, dashboards, and configurations that ties the chaotic reality of voice AI into a
        manageable system.
      </p>
    </div>

    <div className="grid grid-rows-2">
      <div className="border-b border-black p-8 transition-colors hover:bg-white/30 lg:p-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h4 className="text-xl font-bold uppercase">Program Foundation</h4>
          <span className="font-tech text-xs">[LAYER_01]</span>
        </div>
        <p className="mb-4 text-sm font-medium opacity-80">
          The architecture layer—scope, ownership, data flows, routing logic, guardrails. Installed
          before momentum locks in bad decisions.
        </p>
        <ul className="font-tech list-disc space-y-1 pl-4 text-xs">
          <li>Architecture Diagrams</li>
          <li>Routing Logic</li>
          <li>Ownership Matrix</li>
        </ul>
      </div>
      <div className="p-8 transition-colors hover:bg-white/30 lg:p-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h4 className="text-xl font-bold uppercase">Operational Readiness</h4>
          <span className="font-tech text-xs">[LAYER_02]</span>
        </div>
        <p className="mb-4 text-sm font-medium opacity-80">
          The runtime layer—dashboards, health signals, runbooks, incident response. Live from day
          one in production.
        </p>
        <ul className="font-tech list-disc space-y-1 pl-4 text-xs">
          <li>Live Dashboards</li>
          <li>Incident Protocols</li>
          <li>Health Signals</li>
        </ul>
      </div>
    </div>
  </section>
);

const WhySection = () => (
  <section className="border-b border-black bg-white px-8 py-16 lg:px-24 lg:py-28">
    <div className="mx-auto max-w-3xl">
      <div className="font-tech inline-flex border border-black px-3 py-1 text-xs uppercase tracking-widest">
        WHY_THIS_EXISTS
      </div>
      <h2 className="mt-6 text-3xl font-black uppercase leading-tight lg:text-4xl">
        You bought a voice bot. <br /> We deliver the program to run it.
      </h2>

      <div className="mt-8 space-y-5 text-lg font-medium leading-relaxed">
        <p>
          Most teams think they&apos;re buying a voice agent. In reality, they&apos;re signing up to build a
          new operational system.
        </p>
        <p>
        To make a voice AI agent actually perform, you need a program designed to fit your business—one that sets up visibility, defines guardrails, and turns experiments into a repeatable system.
        </p>
        <p>Most companies don&apos;t have the time, budget, or expertise in-house to build it.</p>
      </div>

      <div className="mt-10 border-t border-black pt-4">
        <span className="inline-flex bg-[var(--c-acid)] px-3 py-2 text-sm font-bold uppercase tracking-widest">
          Voice Program OS is the missing piece.
        </span>
      </div>
    </div>
  </section>
);

const WarningSection = () => (
  <section className="relative overflow-hidden border-b border-black bg-[var(--c-acid)] p-8 lg:p-24">
    <div className="pattern-bg pointer-events-none absolute inset-0 opacity-10" />

    <div className="relative z-10 mx-auto max-w-5xl">
      <div className="mb-6 inline-block border border-black bg-[var(--c-acid)] px-3 py-1 font-tech text-xs uppercase">
        Warning: System Critical
      </div>
      <h2 className="medium-type mb-12 font-black uppercase">Most Voice Programs<br />Fail Silently</h2>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xl font-bold leading-tight">
            Nothing breaks catastrophically. The system just never becomes scalable.
          </p>
          <ul className="space-y-4 border-l-2 border-black pl-6 font-medium">
            <li className="flex items-start gap-3">
              <span className="font-bold text-red-600">×</span> Transfers happen with no context
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-red-600">×</span> CRM data silently corrupts
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-red-600">×</span> Dashboards look green while margin erodes
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-end">
          <p className="border-t border-black pt-6 text-lg font-medium">
            By the time leadership asks “is this working?”—you&apos;re six months in with no clean answer.
            <br /><br />
            <span className="bg-black px-1 text-[var(--c-acid)]">These aren&apos;t platform failures. They&apos;re operating system failures.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

const TimelineSection = () => {
  const phases = [
    {
      id: 1,
      title: "Foundation\non Paper",
      desc: "Scope definition, architectural mapping, and KPI alignment."
    },
    {
      id: 2,
      title: "Foundation\nin Stack",
      desc: "Integration setup, data flow configuration, and guardrail implementation."
    },
    {
      id: 3,
      title: "Readiness\nGoes Live",
      desc: "Production launch, monitoring activation, and initial feedback loops."
    },
    {
      id: 4,
      title: "Readiness\nat Scale",
      desc: "Full volume ramp, playbook refinement, and handover."
    }
  ];

  return (
    <section className="grid min-h-[50vh] grid-cols-1 border-b border-black lg:grid-cols-12">
      <div className="hidden flex-col items-center justify-between border-r border-black py-6 lg:col-span-1 lg:flex">
        <div
          className="font-tech text-xs uppercase tracking-widest"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)"
          }}
        >
          Timeline
        </div>
        <div className="font-tech text-xs">02</div>
      </div>

      <div className="p-8 lg:col-span-11 lg:p-16">
        <div className="mb-16 flex flex-col items-end justify-between border-b border-black pb-8 lg:flex-row">
          <h2 className="max-w-3xl text-4xl font-black uppercase tracking-tight lg:text-6xl">
            We install your Voice Program OS in ~60 days.
          </h2>
          <div className="font-tech mt-4 text-sm lg:mt-0">EST_TIME: 8 WEEKS</div>
        </div>

        <div className="grid grid-cols-1 gap-0 border-l border-t border-black sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <div key={phase.id} className="border-b border-r border-black p-6">
              <div className="font-tech mb-4 text-xs opacity-50">PHASE_0{phase.id}</div>
              <h4 className="whitespace-pre-line text-xl font-bold uppercase">
                {phase.title}
              </h4>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <div
              key={`desc-${phase.id}`}
              className="border border-black/70 bg-white/80 p-5 text-sm font-medium shadow-[0_2px_0_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_6px_0_rgba(0,0,0,0.18)]"
              style={{ borderRadius: "10px" }}
            >
              {phase.desc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HandoverSection = () => (
  <section className="grid grid-cols-1 border-b border-black lg:grid-cols-2">
    <div className="flex flex-col justify-center border-b border-black bg-black p-8 text-[var(--c-concrete)] lg:border-b-0 lg:border-r lg:p-16">
      <h3 className="mb-6 text-4xl font-black uppercase leading-none lg:text-5xl">
        When we leave,<br />you own a<br /><span className="text-[var(--c-acid)]">Voice Program OS.</span>
      </h3>
      <p className="font-tech mt-4 text-sm opacity-70">
        {'// COMPLETE_HANDOVER_PROTOCOL'}
      </p>
    </div>

    <div className="bg-[#e8e8e8] p-8 lg:p-16">
      <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
        {[
          "Architecture Map",
          "Agent Registry",
          "Control Registry",
          "Health Dashboard",
          "Trust Ledger",
          "Escalation Runbooks"
        ].map((item) => (
          <div key={item} className="flex items-center gap-4">
            <CheckBox />
            <span className="font-bold uppercase tracking-tight">{item}</span>
          </div>
        ))}
      </div>

      <div className="font-tech mt-12 border-t border-black pt-8 text-sm opacity-60">
        STATUS: READY_FOR_IMPORT
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="border-b border-black bg-white p-8 lg:p-24">
    <div className="mx-auto mb-16 max-w-4xl text-center">
      <h2 className="mb-4 text-3xl font-black uppercase lg:text-4xl">
        Built by operators who&apos;ve run this in production.
      </h2>
      <div className="mx-auto mb-8 h-1 w-24 bg-black" />
    </div>

    <div className="grid gap-0 border border-black md:grid-cols-3">
      <div className="border-b border-black bg-[var(--c-concrete)] p-8 md:border-b-0 md:border-r">
        <div className="font-tech mb-2 text-xs">METRIC_01</div>
        <div className="mb-2 text-4xl font-black">$100M+</div>
        <div className="text-sm font-medium">Healthcare Marketplace Volume Managed</div>
      </div>
      <div className="border-b border-black bg-[var(--c-concrete)] p-8 md:border-b-0 md:border-r">
        <div className="font-tech mb-2 text-xs">METRIC_02</div>
        <div className="mb-2 text-4xl font-black">1M+</div>
        <div className="text-sm font-medium">Live Calls Routed Successfully</div>
      </div>
      <div className="bg-[var(--c-concrete)] p-8">
        <div className="font-tech mb-2 text-xs">METRIC_03</div>
        <div className="mb-2 text-4xl font-black">99.9%</div>
        <div className="text-sm font-medium">Uptime Across Distributed Agents</div>
      </div>
    </div>
  </section>
);

const ArtifactsSection = () => (
  <section className="border-b border-black bg-[var(--c-concrete)] p-8 lg:p-24">
    <ArtifactsCarousel />
  </section>
);

const TargetingSection = () => (
  <section className="grid grid-cols-1 border-b border-black lg:grid-cols-12">
    <div className="hidden flex-col items-center justify-between border-r border-black py-6 lg:col-span-1 lg:flex">
      <div
        className="font-tech text-xs uppercase tracking-widest"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)"
        }}
      >
        Targeting
      </div>
      <div className="font-tech text-xs">03</div>
    </div>

    <div className="grid md:grid-cols-2 lg:col-span-11">
      <div className="border-b border-black p-8 md:border-b-0 md:border-r lg:p-16">
        <div className="font-tech mb-8 inline-block bg-black px-3 py-1 text-xs uppercase text-white">Target Profile</div>
        <h3 className="mb-8 text-2xl font-black uppercase">Who This Is For</h3>
        <ul className="space-y-6">
          <li className="flex gap-4">
            <div className="mt-1 h-4 w-4 bg-black" />
            <span className="font-medium">Teams scaling beyond pilot phase (100+ calls/day)</span>
          </li>
          <li className="flex gap-4">
            <div className="mt-1 h-4 w-4 bg-black" />
            <span className="font-medium">Operations with complex routing or compliance needs</span>
          </li>
          <li className="flex gap-4">
            <div className="mt-1 h-4 w-4 bg-black" />
            <span className="font-medium">Companies using platforms like Retell, Vapi, or Bland</span>
          </li>
        </ul>
      </div>

      <div className="bg-gray-200 p-8 opacity-80 lg:p-16">
        <div className="font-tech mb-8 inline-block border border-black px-3 py-1 text-xs uppercase">Anti-Pattern</div>
        <h3 className="mb-8 text-2xl font-black uppercase text-gray-600">Not For You If</h3>
        <ul className="space-y-6 text-gray-600">
          <li className="flex gap-4">
            <div className="mt-1 h-4 w-4 border border-black" />
            <span className="font-medium">You&apos;re just looking for a dev shop to code a bot</span>
          </li>
          <li className="flex gap-4">
            <div className="mt-1 h-4 w-4 border border-black" />
            <span className="font-medium">You haven&apos;t selected a voice platform yet</span>
          </li>
          <li className="flex gap-4">
            <div className="mt-1 h-4 w-4 border border-black" />
            <span className="font-medium">Volume is under 50 calls/day</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const QuestionsSection = () => (
  <section className="border-b border-black p-8 lg:p-24">
    <h2 className="mb-16 text-center text-3xl font-black uppercase">The Questions That Matter</h2>

    <div className="grid gap-8 md:grid-cols-3">
      <div className="relative border border-black p-6">
        <div className="font-tech absolute -top-3 left-6 border border-black bg-[var(--c-concrete)] px-2 text-xs font-bold">Q_01</div>
        <h4 className="mb-4 text-lg font-bold leading-tight">
          Can you trace a call from initiation to CRM record without gaps?
        </h4>
        <p className="text-sm opacity-70">If not, you&apos;re losing data fidelity every minute.</p>
      </div>

      <div className="relative border border-black p-6">
        <div className="font-tech absolute -top-3 left-6 border border-black bg-[var(--c-concrete)] px-2 text-xs font-bold">Q_02</div>
        <h4 className="mb-4 text-lg font-bold leading-tight">
          Do you know exactly why the last 5 calls failed?
        </h4>
        <p className="text-sm opacity-70">&quot;It didn&apos;t work&quot; isn&apos;t an error log. You need precise failure taxonomy.</p>
      </div>

      <div className="relative border border-black p-6">
        <div className="font-tech absolute -top-3 left-6 border border-black bg-[var(--c-concrete)] px-2 text-xs font-bold">Q_03</div>
        <h4 className="mb-4 text-lg font-bold leading-tight">
          Is your escalation path documented or tribal knowledge?
        </h4>
        <p className="text-sm opacity-70">Scalable systems don&apos;t rely on &quot;ask Dave&quot;.</p>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <SiteShell>
      <>
        {SECTION_VISIBILITY.hero ? <HeroSection /> : null}
        {SECTION_VISIBILITY.why ? <WhySection /> : null}
        {SECTION_VISIBILITY.concept ? <ConceptSection /> : null}
        {SECTION_VISIBILITY.warning ? <WarningSection /> : null}
        {SECTION_VISIBILITY.timeline ? <TimelineSection /> : null}
        {SECTION_VISIBILITY.handover ? <HandoverSection /> : null}
        {SECTION_VISIBILITY.artifacts ? <ArtifactsSection /> : null}
        {SECTION_VISIBILITY.stats ? <StatsSection /> : null}
        {SECTION_VISIBILITY.targeting ? <TargetingSection /> : null}
        {SECTION_VISIBILITY.questions ? <QuestionsSection /> : null}
        {SECTION_VISIBILITY.qualify ? <QualifyForm /> : null}
      </>
    </SiteShell>
  );
}
