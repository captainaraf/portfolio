"use client"

import { motion } from "framer-motion"
import { Trophy, Medal, Award } from "lucide-react"

const awards = [
    {
        title: "Best Startup Award",
        organization: "A Renowed Innovation Summit",
        description: "Awarded 'Best Startup' for PippaQuiz, recognizing excellence in AI-driven educational innovation.",
        icon: Trophy,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
    },
    {
        title: "National Finalist",
        organization: "Bangladesh Olympiad in AI",
        description: "Top 10 National Finalist among 5000+ participants nationwide.",
        icon: Trophy,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
    },
    {
        title: "Divisional Runner Up",
        organization: "National High School Programming Contest",
        description: "Secured 2nd Place in the Divisional Round of NHSPC.",
        icon: Medal,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
    },
    {
        title: "National Contestant",
        organization: "Bangladesh Olympiad in Informatics",
        description: "Selected as a National Contestant for BdOI, representing top algorithmic talent.",
        icon: Award,
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
    },
]

export function HallOfFameSection() {
    return (
        <section id="hall-of-fame" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Hall of Fame</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Recognition and achievements that mark my journey in technology and innovation.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {awards.map((award, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className={`relative group p-8 rounded-3xl border ${award.border} ${award.bg} backdrop-blur-sm overflow-hidden`}
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <award.icon className={`w-32 h-32 ${award.color}`} />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${award.bg} border ${award.border}`}>
                                <award.icon className={`w-6 h-6 ${award.color}`} />
                            </div>

                            <h3 className="text-2xl font-bold mb-2">{award.title}</h3>
                            <div className="text-primary font-medium mb-4">{award.organization}</div>

                            <p className="text-muted-foreground mt-auto">
                                {award.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
