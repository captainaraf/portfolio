"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Trophy, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { getVentureImages } from "@/app/actions"

export function PippaQuizSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

    const [image, setImage] = useState<string | null>(null)

    useEffect(() => {
        getVentureImages("pippaquiz").then((images) => {
            if (images && images.length > 0) {
                setImage(images[2])
            }
        })
    }, [])

    return (
        <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-purple-950/10 to-background" aria-label="PippaQuiz Startup Spotlight">
            {/* Background Elements */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold">
                        <Trophy className="w-4 h-4" />
                        <span>Best Startup Award Winner</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        <span className="text-purple-400">PippaQuiz</span><br />
                        The Future of <br /> Exam Automation.
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                        An award-winning AI-powered assessment ecosystem. We utilize advanced computer vision and generative AI to automate grading, generate questions, and provide deep analytics for educators.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-foreground/80">
                            <CheckCircle2 className="w-5 h-5 text-purple-500" />
                            <span>AI-Powered OMR Grading</span>
                        </div>
                        <div className="flex items-center gap-3 text-foreground/80">
                            <CheckCircle2 className="w-5 h-5 text-purple-500" />
                            <span>Generative Question Creation</span>
                        </div>
                        <div className="flex items-center gap-3 text-foreground/80">
                            <CheckCircle2 className="w-5 h-5 text-purple-500" />
                            <span>Deep Performance Analytics</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <a
                            href="https://www.pippaquiz.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full bg-purple-600 text-white font-bold text-lg hover:bg-purple-700 transition-colors flex items-center gap-2 shadow-lg shadow-purple-500/25"
                        >
                            Try PippaQuiz <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#experience"
                            className="px-8 py-4 rounded-full bg-secondary text-foreground font-semibold hover:bg-secondary/80 transition-colors"
                        >
                            View Role
                        </a>
                    </div>
                </motion.div>

                <motion.div style={{ y, opacity }} className="relative">
                    <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-900/20 aspect-video bg-card/50 backdrop-blur-sm group">
                        {image ? (
                            <img
                                src={image}
                                alt="PippaQuiz Dashboard"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-purple-500/20">
                                <Sparkles className="w-20 h-20" />
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
