"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Trophy,
  Briefcase,
  BookOpen,
  Rocket,
  BrainCircuit,
  Bot,
  Telescope,
} from "lucide-react";

const interests = [
  { icon: Code2, title: "Coding", color: "from-blue-500 to-blue-600" },
  {
    icon: Trophy,
    title: "Competitive Programming",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: BrainCircuit,
    title: "AI and Machine Learning",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Bot,
    title: "Robotics and Electronics",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Briefcase,
    title: "Business and Entrepreneurship",
    color: "from-yellow-500 to-yellow-600",
  },
  { icon: BookOpen, title: "Reading", color: "from-orange-500 to-orange-600" },
  {
    icon: Rocket,
    title: "Aerospace Engineering",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Telescope,
    title: "Astronomy and Astrophysics",
    color: "from-amber-600 to-amber-700",
  },
];

export function InterestsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            interests.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-jetbrains text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Interests & Hobbies
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The elixir of life that keeps my soul alive
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                className={`group relative transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-10"
                }`}
              >
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-8 flex flex-col items-center justify-center gap-4 border-2 border-slate-200 dark:border-slate-700 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10 p-4 rounded-full bg-white dark:bg-slate-950 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-12 h-12 text-slate-700 dark:text-slate-300 dark:group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="relative z-10 font-jetbrains font-semibold text-lg text-slate-900 dark:text-slate-100 group-hover:text-white transition-colors duration-300 text-center">
                    {interest.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
