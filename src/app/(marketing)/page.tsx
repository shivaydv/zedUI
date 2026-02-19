import { ComponentsSection } from "./_components/components-section";
import { HeroSection } from "./_components/hero-section";
import { TrustedSection } from "./_components/trusted-section";
import { Footer } from "@/components/shared/Footer";
import { SloganSection } from "./_components/slogan-section";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 -z-10 h-full w-full
        [background:radial-gradient(var(--border)_1px,transparent_1px)]
        bg-size-[64px_64px]
        bg-opacity-5"
      />

      <div className="relative">
        <HeroSection />

        <TrustedSection />

        <div className="mx-auto w-full max-w-7xl px-6 space-y-24 py-20">
          <h2 className="text-xl font-medium text-foreground uppercase tracking-widest text-[13px] opacity-40">
            Components Library
          </h2>
          <ComponentsSection />
          <SloganSection />
        </div>

        <Footer />
      </div>
    </main>
  );
}
