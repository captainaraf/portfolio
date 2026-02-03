import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 max-w-7xl mx-auto pt-32 gap-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                        Shaidozzaman Araf
                    </span>
                </h1>

                <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl leading-relaxed mb-12">
                    At 16, I founded <span className="text-foreground font-bold">PippaQuiz</span>, an award-winning AI-driven examination platform. I am dedicated to architecting high-impact solutions at the confluence of <span className="text-foreground font-semibold">Artificial Intelligence</span>, <span className="text-foreground font-semibold">Computer Science</span>, and <span className="text-foreground font-semibold">Business Strategy</span>.
                </p>

                <div className="flex flex-wrap gap-6 mb-12">
                    <a
                        href="https://captainaraf.substack.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                    >
                        Read My Substack
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <button
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        className="group flex items-center gap-3 px-8 py-4 border border-border bg-card hover:bg-secondary rounded-full text-lg font-semibold transition-all hover:scale-105"
                    >
                        View My Work
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-shrink-0"
            >
                <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                    <img
                        src="/araf.jpg"
                        alt="Shaidozzaman Araf"
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
        </section>
    )
}
