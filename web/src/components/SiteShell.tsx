/**
 * SiteShell - Main layout wrapper for the site
 * Updated: Fixed structure so header border extends edge-to-edge,
 * left/right frame borders display properly, and no blank space above hero
 */
import Link from "next/link";
import TechCrosshair from "@/components/TechCrosshair";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-wrapper mx-auto">
      <div className="frame-wrapper">
        {/* Header - sits inside frame-wrapper so its border extends full width */}
        <header className="sticky top-0 z-50 grid h-[60px] grid-cols-[1fr_auto_1fr] items-center border-b border-black bg-[var(--c-concrete)] px-6">
          <div className="flex items-center gap-3">
            <TechCrosshair />
            <span className="text-sm font-bold tracking-tight">PATH 19 // VOICE PROGRAM OS</span>
          </div>
          <div className="mx-6 h-full w-[1px] bg-black" />
          <div className="flex items-center justify-end gap-6">
            <nav className="font-tech text-xs uppercase tracking-widest">
              <Link href="/manifesto" className="hover:opacity-70">Manifesto</Link>
              <span className="mx-3 opacity-40">/</span>
              <Link href="/contact" className="hover:opacity-70">Contact</Link>
              <span className="mx-3 opacity-40">/</span>
              <Link href="/#qualify" className="hover:opacity-70">Qualify</Link>
            </nav>
            <div className="font-tech text-lg font-bold tracking-tighter">SYS/V.1.0</div>
          </div>
        </header>

        {/* Main content */}
        <main id="main-content">{children}</main>

        {/* Footer */}
        <footer className="bg-black p-8 text-[var(--c-concrete)] lg:p-12">
          <div className="grid items-end gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6">
                <TechCrosshair bgColor="white" />
              </div>
              <h3 className="max-w-xl text-2xl font-bold uppercase leading-tight lg:text-3xl">
                Voice AI works. <br />
                <span className="text-[var(--c-acid)]">Voice AI programs don&apos;t</span>—until someone installs the operating system.
              </h3>
            </div>

            <div className="flex h-full flex-col justify-between gap-8 lg:items-end">
              <div className="font-tech flex gap-8 text-sm">
                <Link href="/manifesto" className="transition-colors hover:text-white">Manifesto</Link>
                <Link href="/contact" className="transition-colors hover:text-white">Contact</Link>
                <Link href="/#qualify" className="transition-colors hover:text-white">Qualify</Link>
              </div>
              <div className="font-tech text-xs opacity-50">
                © 2024 PATH 19 INC. ALL SYSTEMS OPERATIONAL.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
