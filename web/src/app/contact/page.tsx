import SiteShell from "@/components/SiteShell";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="border-b border-black p-8 lg:p-24">
        <div className="mx-auto max-w-4xl">
          <div className="font-tech mb-6 text-xs uppercase tracking-widest">CONTACT_01</div>
          <h1 className="mb-6 text-4xl font-black uppercase tracking-tight lg:text-6xl">
            Contact is a placeholder.
          </h1>
          <p className="text-lg font-medium leading-relaxed">
            Add your preferred contact workflow here or route visitors back to the qualification form.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
