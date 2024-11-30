"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      className="relative bg-primary h-screen w-screen items-center justify-center overflow-x-hidden"
      style={{
        backgroundImage: "url('/images/prmsu_gate.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute w-full h-full bg-primary opacity-80 z-0"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center pt-8 pb-40 px-12">
        <div className="space-y-4">
          <h1 className="font-mono font-bold text-background text-6xl sm:text-6xl md:text-8xl lg:text-9xl">
            BSCS _Database
          </h1>
        </div>
        <div className="absolute bottom-20 left-2 gap-2 flex flex-row font-mono text-white text-base sm:text-base md:text-xl lg:text-2xl">
          <p className="bg-gray-700 rounded-sm px-2">LOG</p> $Running Live by
          Jay-ar<p className="bg-white inline-block animate-pulse">_</p>
        </div>
        <div className="gap-2 absolute bottom-32 right-4 flex flex-col sm:flex-col md:flex-row">
          <Image
            src="/images/prmsu.png"
            width={500}
            height={500}
            className="h-24 w-24 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-48 xl:w-48"
            alt="PRMSU Logo"
          />
          <Image
            src="/images/bscs.png"
            width={500}
            height={500}
            className="h-24 w-24 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-48 xl:w-48 scale-110"
            alt="BSCS Logo"
          />
        </div>
      </div>
    </div>
  );
}
