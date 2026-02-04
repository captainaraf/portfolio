"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { IntroSection } from "@/components/sections/intro-section"
import { PippaQuizSection } from "@/components/sections/pippaquiz-section"
import { InnoverseSection } from "@/components/sections/innoverse-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { HallOfFameSection } from "@/components/sections/hall-of-fame-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CommandMenu } from "@/components/command-menu"
import { Mail, Github, Twitter, Facebook, Linkedin } from "lucide-react"

import { MouseSpotlight } from "@/components/ui/mouse-spotlight"
import { useMotionValue, useMotionTemplate, motion } from "framer-motion"
import { MouseEvent } from "react"

export function LandingPage() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ clientX, clientY }: MouseEvent) {
        mouseX.set(clientX)
        mouseY.set(clientY)
    }

    return (
        <main
            className="min-h-screen bg-background text-foreground relative overflow-hidden font-sans group"
            onMouseMove={handleMouseMove}
        >
            {/* Mouse Spotlight */}
            <div className="pointer-events-none fixed inset-0 z-30 transition duration-300">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                600px circle at ${mouseX}px ${mouseY}px,
                                rgba(59, 130, 246, 0.08),
                                transparent 80%
                            )
                        `,
                    }}
                />
            </div>

            {/* Background Grain/Noise Effect */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            <CommandMenu />

            <div className="relative z-10 space-y-0">
                <HeroSection />

                <IntroSection />

                <PippaQuizSection />

                <InnoverseSection />

                <ExperienceSection />

                <HallOfFameSection />

                <ProjectsSection />

                <footer className="py-24 border-t border-border mt-0 bg-secondary/20 relative">
                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Let's build something <br />extraordinary.</h2>
                                <p className="text-muted-foreground max-w-sm">
                                    Always open to discussing deep tech, AI strategies, or just nerding out over the latest in tech.
                                </p>
                            </div>
                            <div className="flex flex-col md:items-end justify-center gap-6">
                                <a
                                    href="mailto:shaidozzamanaraf21@gmail.com"
                                    className="text-xl md:text-2xl font-bold hover:text-primary transition-colors underline decoration-primary/50 underline-offset-4 hover:decoration-primary"
                                >
                                    shaidozzamanaraf21@gmail.com
                                </a>
                                <div className="flex items-center gap-6">
                                    <a href="https://github.com/captainaraf" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-foreground/5 transition-colors" aria-label="GitHub">
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/shaidozzamanaraf" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-foreground/5 transition-colors" aria-label="LinkedIn">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a href="https://facebook.com/in/shaidozzamanaraf" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-foreground/5 transition-colors" aria-label="Facebook">
                                        <Facebook className="w-6 h-6" />
                                    </a>
                                    <a href="https://twitter.com/captainaraf" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-foreground/5 transition-colors" aria-label="Twitter">
                                        <Twitter className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                            <p>© {new Date().getFullYear()} Shaidozzaman Araf. All rights reserved.</p>
                            <p>Designed & Engineered by Captain Araf.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    )
}
