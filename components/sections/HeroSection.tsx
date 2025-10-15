"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div
          className={`space-y-6 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="space-y-4">
            <h1 className="font-jetbrains text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-slate-100 dark:via-slate-300 dark:to-slate-100">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Shaidozzaman Araf
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium">
              Computer Guy • Strategist • Mechanic
            </p>
          </div>

          <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
            <p className="text-lg">
              I am a tech guy with a passion for innovation. My primary aim in
              life is to serve humanity and I know that the only way to do so is
              by serving science. I want to contribute to building a world where
              no human has to worry about the boring stuffs and everyone can
              think about taking the world forward.
            </p>
            <p className="text-lg">
              My journey was never smooth, it was full of ups and downs (downs
              outnumber ups by 10 to 1). But who cares, I always kept doing what
              needed to be done.
            </p>
            <p className="text-lg">
              Everything I do is a part of my greater plan. Don't be confused
              when you see me doing something that makes absolute zero sense.
            </p>
            <p className="text-sm font-bold">
              Night gathers, and now my watch begins. It shall not end until my
              death. I shall live and die at my post. I am the sword in the
              darkness. I am the watcher on the walls. I am the shield that
              guards the realms of men. I pledge my life and honor to the
              Night's Watch, for this night and all the nights to come.
            </p>
            <p className="text-sm text-blue-900">
              A Song of Ice and Fire reference, ignore if you don't get it.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg font-jetbrains font-medium hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            >
              Get in Touch
            </a>
            <a
              href="#hall-of-fame"
              className="px-8 py-3 border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 rounded-lg font-jetbrains font-medium hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            >
              View My Hall of Fame
            </a>
          </div>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl rotate-6 animate-pulse opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-tl from-slate-400 via-slate-500 to-slate-600 rounded-3xl -rotate-6 animate-pulse opacity-20 animation-delay-500" />

            <div className="relative w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-600">
              <Image
                src="/assets/profile.jpg"
                alt="Shaidozzaman Araf"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#hall-of-fame">
          <svg
            className="w-6 h-6 text-slate-400 dark:text-slate-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
