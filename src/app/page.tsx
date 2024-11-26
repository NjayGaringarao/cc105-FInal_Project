"use client";

import MainSection from "@/components/MainSection";
import HeroSection from "@/components/HeroSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
      <HeroSection />
      <MainSection />
      <FooterSection />
    </div>
  );
}
