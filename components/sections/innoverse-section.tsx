"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Globe2, ArrowRight, Users, Trophy, Tv, PlayCircle } from "lucide-react"
import { getVentureImages } from "@/app/actions"

export function InnoverseSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

    const [image, setImage] = useState<string | null>(null)

    useEffect(() => {
        getVentureImages("innoverse").then((images) => {
            if (images && images.length > 0) {
                // Try to find a nice landscape one or just take the first
                setImage(images[0])
            }
        })
    }, [])

    return (
        <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden" aria-label="Innoverse Event Spotlight">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-7 order-2 lg:order-1 relative">
                    <motion.div
                        style={{ scale, opacity }}
                        className="relative rounded-3xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/10 aspect-[16/9] bg-card/30 group"
                    >
                        {image ? (
                            <img
                                src={image}
                                alt="Innoverse Event"
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-blue-500/5">
                                <Globe2 className="w-20 h-20 text-blue-500/20" />
                            </div>
                        )}


                        <a
                            href="https://www.facebook.com/reel/1385960089544284"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-background/90 text-foreground font-semibold backdrop-blur-md">
                                <PlayCircle className="w-6 h-6 text-blue-500" />
                                <span>Watch Event Reel</span>
                            </div>
                        </a>
                    </motion.div>

                    {/* Floating Stats Cards */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="hidden md:flex absolute -bottom-8 -right-8 p-6 rounded-2xl bg-card border border-border shadow-xl backdrop-blur-lg flex-col gap-1 z-20"
                    >
                        <span className="text-3xl font-bold text-blue-500">20,000+</span>
                        <span className="text-sm text-muted-foreground font-medium">Unique Visitors</span>
                    </motion.div>
                </div>

                <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
                        <Globe2 className="w-4 h-4" />
                        <span>National Impact Initiative</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        <span className="text-blue-500">Innoverse</span><br /> Bangladesh
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Orchestrating the largest Science and Technology Carnival in Bangladesh's history.
                        A national-scale event bringing together innovation, competition, and education under one roof.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50 border border-border/50">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                                <Users className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Massive Scale Operations</h4>
                                <p className="text-xs text-muted-foreground">Managed distinct technical infrastructure for the attendees.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50 border border-border/50">
                            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                                <Trophy className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">National Competitions</h4>
                                <p className="text-xs text-muted-foreground">Led the execution of nationwide programming contest.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <a
                            href="https://www.tbsnews.net/economy/corporates/innoverse-bangladesh-2025-concludes-buet-celebrating-young-innovators-1287276"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold underline decoration-blue-500/30 underline-offset-4 hover:decoration-blue-500 transition-all"
                        >
                            Read News Coverage <Tv className="w-4 h-4" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}
