"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { HallOfFameSection } from "@/components/sections/HallOfFameSection";
import { InterestsSection } from "@/components/sections/InterestsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { VenturesSection } from "@/components/sections/VenturesSection";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 font-jetbrains">
      <HeroSection />
      <HallOfFameSection />
      <VenturesSection />
      <InterestsSection />
      <ContactSection />
    </main>
  );
}
