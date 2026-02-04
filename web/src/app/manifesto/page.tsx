import SiteShell from "@/components/SiteShell";

export default function ManifestoPage() {
  return (
    <SiteShell>
      <section className="border-b border-black p-8 lg:p-24">
        <div className="mx-auto max-w-4xl">
          <div className="font-tech mb-6 text-xs uppercase tracking-widest">MANIFESTO_01</div>
          <h1 className="mb-8 text-4xl font-black uppercase tracking-tight lg:text-6xl">
            This page is a placeholder.
          </h1>
          <p className="text-lg font-medium leading-relaxed">
            We&apos;ll expand this into the full manifesto: operating principles, system design philosophy,
            and the non-negotiables that keep voice programs stable at scale.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
