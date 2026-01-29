"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { Mail, Github, Twitter, Facebook } from "lucide-react"

export function LandingPage() {
    return (
        <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10">
                <HeroSection />
                <ExperienceSection />
                <ProjectsSection />

                <footer className="py-12 border-t border-border mt-24">
                    <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-muted-foreground text-sm">
                            © {new Date().getFullYear()} Shaidozzaman Araf. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            <a href="mailto:shaidozzamanaraf21@gmail.com" aria-label="Email Shaidozzaman Araf" className="text-muted-foreground hover:text-primary transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/captainaraf" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://facebook.com/in/shaidozzamanaraf" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com/captainaraf" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    )
}
