"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { HackerText } from "@/components/ui/hacker-text"
import { useRef } from "react"

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null)

    // Parallax effect for opacity and vertical movement
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center overflow-hidden"
            aria-label="Hero Section"
        >
            {/* Background Image Container */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for readability */}

                <div className="w-full h-full bg-[url('/hero-background.jpeg')] bg-cover bg-center bg-no-repeat" />

                {/* Cosmic overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start text-left pt-20">

                {/* Animated Name Reveal */}
                <div className="overflow-hidden mb-2">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                            <HackerText text="Shaidozzaman" />
                        </span>
                    </motion.h1>
                </div>

                <div className="overflow-hidden mb-8">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                            <HackerText text="Araf" />
                        </span>
                    </motion.h1>
                </div>

                {/* Highlights */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-4 mb-8 text-lg md:text-xl font-medium"
                >
                    <div className="flex items-center gap-2 text-purple-300">
                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                        <span>Co-Founder, PippaQuiz (Best Startup Award)</span>
                    </div>
                    <div className="hidden md:block text-white/20">|</div>
                    <div className="flex items-center gap-2 text-blue-300">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>National Camper, Bangladesh AI Olympiad</span>
                    </div>
                </motion.div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-xl space-y-4"
                >
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                        I don't just write code. I build intelligent systems and sustainable businesses.
                    </p>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer z-20"
                onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-xs uppercase tracking-widest font-mono">Explore</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
            </motion.div>
        </section>
    )
}
