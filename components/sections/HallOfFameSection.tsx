"use client";

import { useEffect, useRef, useState } from "react";
import {
  Trophy,
  Award,
  Star,
  Briefcase,
  BriefcaseBusiness,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const achievements = [
  {
    icon: Briefcase,
    role: "Assistant Executive of Technology",
    organization: "WhiteBoard Initiatives",
    period: "2025 - Present",
    description:
      "Playing a major role in the technology department of one of the largest STEM non profits in Bangladesh. Organizing events, managing projects, and leading teams that impact thousands of students.",
  },
  {
    icon: Briefcase,
    role: "Co-Founder, CEO and CTO",
    organization: "Dead Mans Tech",
    period: "2025 - Present",
    description:
      "A SaaS venture studio focused on creating high performance software services to make peoples' lives easier.",
    badge: "Not Launched Yet",
  },
  {
    icon: BriefcaseBusiness,
    role: "Freelance Discord Bot Developer",
    organization: "Fiverr",
    period: "2021 - 2022",
    description:
      "Developed custom Discord bots for various clients, enhancing their server functionality and user engagement. Gained experience in client communication, project management, and delivering high-quality software solutions.",
    badge: "Stopped Working",
  },
  {
    icon: Trophy,
    role: "National Camper",
    organization: "Bangladesh Artificial Intelligence Olympiad",
    period: "2025",
    description:
      'Selected as one of the top AI enthusiasts in Bangladesh to participate in "THE" national camp, collaborating with experts and peers to advance AI knowledge.',
  },
  {
    icon: Star,
    role: "National Contestant",
    organization: "Bangladesh Olympiad in Informatics",
    period: "2025",
    description:
      " Achieved the rank of national contestant in BdOI, showcasing my programming and problem solving skills on a national level.",
  },
  {
    icon: Award,
    role: "Divisional Runners Up",
    organization: "National High School Programming Contest",
    period: "2025",
    description:
      "Divisional runners up in secondary category, Sylhet Division.",
  },
];

export function HallOfFameSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            visibleCards.length < achievements.length
          ) {
            achievements.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) =>
                  prev.includes(index) ? prev : [...prev, index]
                );
              }, index * 200);
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
  }, [visibleCards]);

  return (
    <section
      ref={sectionRef}
      id="hall-of-fame"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-jetbrains text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Hall of Fame
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of roles, achievements, and milestones that define my{" "}
            <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full font-medium transform -rotate-2">
              journey
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isVisible = visibleCards.includes(index);

            return (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-400 dark:hover:border-blue-600 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } relative`}
              >
                {achievement.badge && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-600 to-red-400 text-white text-sm px-3 py-1 rounded-full shadow-lg transform rotate-12 font-medium">
                    {achievement.badge}
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-jetbrains text-xl mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {achievement.role}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {achievement.organization}
                      </CardDescription>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-jetbrains">
                        {achievement.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
