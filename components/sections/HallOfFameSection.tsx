"use client";

import { useEffect, useRef, useState } from 'react';
import { Trophy, Award, Star, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const achievements = [
  {
    icon: Briefcase,
    role: 'Senior Full Stack Developer',
    organization: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading development of enterprise-scale applications, mentoring junior developers, and architecting scalable solutions.',
    highlights: ['Led team of 8 developers', 'Reduced load time by 60%', 'Implemented CI/CD pipeline']
  },
  {
    icon: Trophy,
    role: 'Open Source Contributor',
    organization: 'Various Projects',
    period: '2020 - Present',
    description: 'Active contributor to major open-source projects with over 500+ contributions and 2000+ stars across repositories.',
    highlights: ['500+ contributions', '2000+ stars', 'Maintained 5 packages']
  },
  {
    icon: Award,
    role: 'Hackathon Winner',
    organization: 'Global Tech Challenge 2023',
    period: '2023',
    description: 'First place winner for developing an AI-powered solution that revolutionized community engagement.',
    highlights: ['1st place out of 200 teams', '$10,000 prize', 'Featured in TechCrunch']
  },
  {
    icon: Star,
    role: 'Technical Lead',
    organization: 'StartupX',
    period: '2020 - 2022',
    description: 'Built the core platform from scratch, scaled to 100K+ users, and established engineering best practices.',
    highlights: ['0 to 100K users', 'Built core platform', 'Established eng culture']
  },
];

export function HallOfFameSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            achievements.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
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
  }, []);

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
            A collection of roles, achievements, and milestones that define my professional journey
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
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
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
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 font-jetbrains">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1">
                      {achievement.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
