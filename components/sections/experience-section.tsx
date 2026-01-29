"use client"

import { motion } from "framer-motion"

const experiences = [
    {
        role: "Assistant Executive of Technology",
        company: "WhiteBoard Initiatives",
        period: "2025 - Present",
        description: "Leading technology strategy for one of Bangladesh's largest STEM non-profits. Orchestrated major events like Innoverse, managed cross-functional teams, and drove technological impact reaching thousands of students nationwide.",
        color: "#4a90d9",
    },

    {
        role: "Co-Founder & Lead Developer",
        company: "PippaQuiz (Dead Mans Tech)",
        period: "2025 - Present",
        description: "Founded and engineered PippaQuiz, evolving it from a quiz generator into a complete examination platform. Led the development of advanced features including in-app exams and automatic MCQ evaluation systems. Spearheading product strategy, full-stack architecture, and user experience to democratize educational assessment tools.",
        color: "#27ae60",
    },
    {
        role: "Software Engineer",
        company: "Prodigy Studios",
        period: "2025 - Present",
        description: "Architecting innovative software solutions with a focus on scalability and performance. Leveraging modern web technologies to deliver high-quality, robust digital products for diverse clients.",
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
