"use client"

import { motion } from "framer-motion"
import { Building2, Code2, Users2 } from "lucide-react"

const experiences = [
    {
        role: "Assistant Executive of Technology",
        company: "WhiteBoard Initiatives",
        period: "2025 - Present",
        description: "Spearheading technology initiatives for one of the nation's largest STEM non-profits. Orchestrating large-scale technical operations for events like 'Innoverse' and managing cross-functional engineering teams.",
        color: "#4a90d9",
        icon: Users2
    },
    {
        role: "Co-Founder, CEO and CTO",
        company: "PippaQuiz",
        period: "2025 - Present",
        description: "Leading end-to-end product strategy and engineering for an award-winning EdTech startup. Transforming assessment workflows for educators through AI-driven automation.",
        color: "#9b59b6",
        icon: Building2
    },
    {
        role: "Software Engineer",
        company: "Prodigy Studios",
        period: "2025 - Present",
        description: "Architecting scalable web applications and delivering high-performance software solutions for a diverse client base using modern tech stacks.",
        color: "#27ae60",
        icon: Code2
    },
]

export function ExperienceSection() {
    return (
        <section id="experience" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center md:text-left"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Current Positions</h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    Where I'm currently driving impact and building the future.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group relative p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-colors"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <exp.icon className="w-6 h-6" style={{ color: exp.color }} />
                        </div>

                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.company}</h3>
                        <p className="text-sm font-medium text-muted-foreground mb-4">{exp.role}</p>

                        <p className="text-sm text-muted-foreground/80 leading-relaxed">
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
