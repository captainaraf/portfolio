"use client"

import { motion } from "framer-motion"

const experiences = [
    {
        role: "Assistant Executive of Technology",
        company: "WhiteBoard Initiatives",
        period: "2025 - Present",
        description: "Spearheading technology initiatives for one of the nation's largest STEM non-profits. I orchestrate large-scale technical operations for events like 'Innoverse', manage cross-functional engineering teams, and implement digital strategies that impact thousands of students across the country.",
        color: "#4a90d9",
    },

    {
        role: "Co-Founder, CEO and CTO",
        company: "PippaQuiz",
        period: "2025 - Present",
        description: "Founder & CTO of an award-winning EdTech startup recognized as the 'Best Startup' at a premier Innovation Summit. I lead the end-to-end product strategy and engineering, transforming a simple tool into a robust examination platform used by educators to streamline assessments through AI-driven automation.",
        color: "#27ae60",
    },
    {
        role: "Software Engineer",
        company: "Prodigy Studios",
        period: "2025 - Present",
        description: "Delivering high-performance software solutions for a diverse client base. I specialize in architecting scalable web applications and leveraging modern tech stacks to build robust, production-grade digital products.",
        color: "#9b59b6",
    },
]

export function ExperienceSection() {
    return (
        <section id="experience" className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-16">Experience</h2>

                <div className="space-y-12 relative border-l-2 border-border ml-3 md:ml-6 pl-8 md:pl-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                            <span
                                className="absolute -left-[41px] md:-left-[59px] top-2 w-5 h-5 rounded-full border-4 border-background"
                                style={{ backgroundColor: exp.color }}
                            />

                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                                <h3 className="text-xl font-bold">{exp.role}</h3>
                                <span className="text-muted-foreground text-sm font-medium">{exp.period}</span>
                            </div>

                            <div className="text-lg font-semibold mb-3" style={{ color: exp.color }}>
                                {exp.company}
                            </div>

                            <p className="text-muted-foreground leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
