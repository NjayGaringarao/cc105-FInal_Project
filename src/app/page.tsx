"use client";

import MainSection from "@/components/MainSection";
import HeroSection from "@/components/HeroSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <MainSection />
      <FooterSection />
    </div>
  );
}
