import FeaturedCources from "@/components/FeaturedCources";
import HeroSection from "@/components/HeroSection";
import StickyScrollSection from "@/components/StickyScrollSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCources />
      <StickyScrollSection />
      <TestimonialCards />
      <UpcomingWebinars />
    </main>
  );
}
