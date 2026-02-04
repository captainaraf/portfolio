"use client"

import { motion } from "framer-motion"
import { Sparkles, Brain, Code2, LineChart } from "lucide-react"

export function IntroSection() {
    return (
        <section id="intro" className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto relative overflow-hidden" aria-label="Introduction and Skills">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-12"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-secondary text-secondary-foreground text-sm font-medium">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span>The Builder's Mindset</span>
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    I don't just write code. <br />
                    <span className="text-muted-foreground">I build </span>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        ecosystems
                    </span>.
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    My journey isn't defined by languages or frameworks, but by the problems I solve.
                    From revolutionizing education with AI to orchestrating massive technological events,
                    I operate where deep technology meets real-world impact.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
                    >
                        <Brain className="w-10 h-10 text-primary mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-2">AI Architect</h3>
                        <p className="text-sm text-muted-foreground">
                            Designing intelligent systems that adapt, learn, and scale beyond simple automation.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-colors"
                    >
                        <LineChart className="w-10 h-10 text-accent mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-2">Strategist</h3>
                        <p className="text-sm text-muted-foreground">
                            Aligning technical capability with business vision to create sustainable product growth.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-2xl bg-card border border-border/50 hover:border-blue-500/50 transition-colors"
                    >
                        <Code2 className="w-10 h-10 text-blue-500 mb-4 mx-auto" />
                        <h3 className="text-xl font-bold mb-2">Engineer</h3>
                        <p className="text-sm text-muted-foreground">
                            Crafting robust, production-grade applications that serve thousands of users reliably.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
