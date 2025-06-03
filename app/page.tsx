import Cta from "@/components/Cta";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorksSection";
import InteractiveVideo from "@/components/InteractiveVideo";
import Pricing from "@/components/Pricing";
import TestimonialSection from "@/components/TestimonialSection";

import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* Features section */}
      <FeaturesSection />

      {/* how it workds section */}
      <HowItWorks />
      <InteractiveVideo />
      <Pricing/>
      <TestimonialSection />
      <Cta />
    </main>
  );
}
