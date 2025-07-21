import FAQSection from "@/src/components/landingPage/FAQSection";
import Features from "@/src/components/landingPage/FeatureSection";
import HeroSection from "@/src/components/landingPage/HeroSection";
import QuoteSection from "@/src/components/landingPage/QuoteSection";
import { TextScroll } from "@/src/components/landingPage/TextScrollSection";

export default function HomePage() {


  return (
    <main className="">
      <HeroSection />
      <TextScroll
        text="Dark Mode Ready • Easy to Use • Customizable Components • Minimal Design • Built with Tailwind CSS • TypeScript Support • Blazing Fast UI • Copy-Paste Friendly • Open Source • Designed For Developer • Lightweight and Scalable • "
        className="px-6 text-center text-2xl font-bold tracking-tight md:text-4xl md:leading-[5rem] text-fd-foreground/30 "
        default_velocity={1}
      />
      <Features />
      <QuoteSection />
      <FAQSection />
    </main>
  );
}
