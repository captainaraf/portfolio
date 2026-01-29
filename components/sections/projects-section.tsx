"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion } from "framer-motion"
import {
    X,
    ExternalLink,
    Rocket,
    Brain,
    FolderOpen,
    BookOpen,
    HelpCircle,
    Heart,
    Calculator,
    Truck,
    Wand2,
    Lock,
    MessageSquare,
    ShoppingBag,
    Target,
    AlertTriangle,
    Lightbulb,
} from "lucide-react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { getVentureImages } from "@/app/actions"
import { GlowCard } from "@/components/ui/glow-card"

type FailureEntry = {
    plan: string
    failure: string
    learned: string
}

type Venture = {
    icon: any
    role: string
    key: string
    organization: string
    subheading?: string
    description: string
    url?: string | Array<string>
    badge?: string
    buttonText?: string | Array<string>
    blocked?: boolean
    type?: "Website" | "Mobile App" | "SaaS" | "Library" | "Event" | "Machine Learning Model" | "API" | string
    notes?: string
    color: string
    category: "project" | "initiative"
    failureEntry?: FailureEntry
}

const ventures: Venture[] = [
    // Major Projects
    {
        icon: Rocket,
        role: "Core Team Member",
        key: "innoverse",
        organization: "Innoverse Bangladesh",
        subheading: "The Largest Science and Technology Carnival in the History of Bangladesh",
        description:
            "Orchestrated the largest sci-tech carnival in Bangladesh's history with 20,000+ visitors. Collaborated directly with the ICT Division to deliver a seamless event featuring competitions, expos, and tech talks. Managed critical technical infrastructure and led the programming contest execution.",
        url: ["https://www.tbsnews.net/economy/corporates/innoverse-bangladesh-2025-concludes-buet-celebrating-young-innovators-1287276", "https://www.facebook.com/reel/1385960089544284"],
        buttonText: ["Visit News Coverage", "View Event Reel"],
        blocked: false,
        type: "Event",
        notes:
            "As the Assistant Executive of Technology at WhiteBoard Initiatives, I was responsible for the major technical aspects of the event. I closely worked with the technical team to ensure smooth development of our website, I also managed the programming contest, and played an important role in other areas.",
        color: "#4a90d9",
        category: "initiative",
    },
    {
        icon: Brain,
        role: "Co-Founder, CEO and CTO",
        key: "pippaquiz",
        organization: "PippaQuiz",
        subheading: "AI-Powered Exam Platform",
        description:
            "Evolved from a simple quiz generator into a comprehensive assessment platform. I engineered the full-stack architecture supporting in-app exams with automatic MCQ evaluation, enabling educators to create, administer, and grade assessments effortlessly.",
        url: ["https://www.pippaquiz.com", "https://www.pippaquiz.com/onboarding"],
        buttonText: ["Visit Site", "How it Helps"],
        blocked: true,
        type: "Website",
        color: "#9b59b6",
        category: "initiative",
    },
    {
        icon: HelpCircle,
        role: "Creator & Designer",
        key: "jiggasha",
        organization: "Jiggasha",
        subheading: "Intelligent Study Helper",
        description:
            "Solved the 'limited practice problem' for students. When question banks run dry, Jiggasha's AI generates infinite similar practice questions, ensuring students never run out of material to master a concept.",
        url: "https://expo.dev/accounts/shaidozzamanaraf/projects/jiggasha/builds/89849e30-0929-4175-b77b-abe7de5b97e4",
        badge: "Beta Launched",
        buttonText: "Download Beta",
        blocked: false,
        type: "Mobile App",
        notes:
            "This is the beta version of our MVP with bare minimum features, not in Google playstore yet.",
        color: "#1abc9c",
        category: "initiative",
        failureEntry: {
            plan: "To provide students with unlimited practice questions for any topic they are struggling with.",
            failure: "Generating mathematically correct and contextually relevant questions for complex STEM topics proved difficult.",
            learned: "Niche problems require niche solutions. Fine-tuning models for specific subjects yields better results than general purpose AI.",
        },
    },
    {
        icon: Heart,
        role: "Full Stack Engineer",
        key: "n4cm",
        organization: "NutritionCare4Mom",
        subheading: "Maternal Health Platform",
        description:
            "Developed a comprehensive digital health platform for expectant mothers. Features include an AI-powered health assistant, appointment scheduling system, and bilingual content (English/Bangla) to make maternal healthcare accessible.",
        url: "https://nutritioncare4mom.com/",
        badge: "Professional Work",
        buttonText: "Visit Site",
        blocked: false,
        type: "Website",
        notes:
            "Successfully finished the development of the project. The client will launch it soon.",
        color: "#e74c3c",
        category: "initiative",
    },
    {
        icon: BookOpen,
        role: "Co-Creator, Lead Developer",
        key: "nyonnlearn",
        organization: "Nyonn Learn",
        subheading: "Study Companion App",
        description:
            "An intelligent study companion for NCTB students. Tracks syllabus progress, generates personalized study plans, and provides an interactive learning experience to keep students on track.",
        url: "https://pippaquiz.example",
        buttonText: "Visit Site",
        blocked: true,
        type: "Mobile App",
        notes:
            "The development is finished, we are waiting for Google Playstore verification to launch.",
        color: "#e67e22",
        category: "initiative",
        failureEntry: {
            plan: "To create a personalized study companion that adapts to each student's learning pace.",
            failure: "Keeping students engaged and motivated to stick to a digital study plan is a behavioral challenge, not just a technical one.",
            learned: "Gamification and positive reinforcement are essential for educational apps to retain user interest over time.",
        },
    },

    // Initiatives & Experiments (Failure Journal)
    {
        icon: ShoppingBag,
        role: "Solo Developer",
        key: "kindredhearts",
        organization: "Kindred Hearts",
        subheading: "Philanthropic E-commerce Platform",
        description:
            "Attempted to bridge e-commerce with philanthropy. Built a platform where shopping funds social causes. While technically successful, it highlighted the importance of community building over just code.",
        url: "https://kindredhearts.captainaraf.com/",
        badge: "Weekend Project",
        buttonText: "Visit Site",
        blocked: false,
        type: "Website",
        color: "#f39c12",
        category: "project",
    },
    {
        icon: Calculator,
        role: "Creator",
        key: "mathauction",
        organization: "Math Auction System",
        subheading: "Real-time Contest System",
        description:
            "Designed a real-time bidding system for math contests to gamify problem selection. A technical experiment in real-time synchronization and game theory applied to education.",
        url: "https://github.com/captainaraf/math-auction-system",
        buttonText: "View Source",
        blocked: false,
        type: "System",
        color: "#f1c40f",
        category: "project",
    },
    {
        icon: Truck,
        role: "ML Engineer",
        key: "shippingcostpredictor",
        organization: "Shipping Cost Predictor",
        subheading: "Logistics ML Model",
        description:
            "Developed an ML model to estimate shipping costs. An exploration into regression analysis and the challenges of predicting real-world logistics costs with limited variables.",
        url: "https://github.com/captainaraf/Shipping-Cost-Predictor",
        buttonText: "View Source",
        blocked: false,
        type: "Machine Learning Model",
        color: "#3498db",
        category: "project",
    },
    {
        icon: Wand2,
        role: "ML Engineer",
        key: "sortinghat",
        organization: "The Sorting Hat",
        subheading: "Personality Classifier",
        description:
            "A fun ML experiment to classify personalities into Hogwarts houses. A dive into classification algorithms and the subjectivity of 'ground truth' in psychology.",
        url: "https://github.com/captainaraf/the-sorting-hat",
        buttonText: "View Source",
        blocked: false,
        type: "Machine Learning Model",
        color: "#9b59b6",
        category: "project",
    },
    {
        icon: Lock,
        role: "Backend Developer",
        key: "ciphersherlock",
        organization: "Cipher Sherlock",
        subheading: "Cryptography API",
        description:
            "Built a universal API for solving classical ciphers. An exercise in algorithmic problem solving and API design for cryptographic tools.",
        url: "https://github.com/captainaraf/ciphersherlock",
        buttonText: "View Source",
        blocked: false,
        type: "API",
        color: "#2ecc71",
        category: "project",
    },
]

function ProjectModal({
    project,
    onClose,
}: {
    project: Venture
    onClose: () => void
}) {
    const [mounted, setMounted] = useState(false)
    const [images, setImages] = useState<string[]>([])
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [lightboxIndex, setLightboxIndex] = useState(0)

    useEffect(() => {
        setMounted(true)
        document.body.style.overflow = "hidden"
        getVentureImages(project.key).then(setImages)
        return () => {
            document.body.style.overflow = ""
        }
    }, [project.key])

    const Icon = project.icon

    if (!mounted) return null

    const urls = project.url
        ? Array.isArray(project.url)
            ? project.url
            : [project.url]
        : []
    const texts = project.buttonText
        ? Array.isArray(project.buttonText)
            ? project.buttonText
            : [project.buttonText]
        : []

    const getText = (i: number) => texts[i] ?? texts[0] ?? "Visit"

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-background/80 backdrop-blur-lg"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-card border border-border rounded-3xl p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 p-2 bg-secondary rounded-full hover:bg-destructive transition-colors z-10"
                    onClick={onClose}
                >
                    <X className="w-5 h-5" />
                </button>

                {project.badge && (
                    <div className="absolute top-6 right-16 bg-gradient-to-r from-red-600 to-red-400 text-white text-sm px-3 py-1 rounded-full shadow-lg transform rotate-6 font-medium">
                        {project.badge}
                    </div>
                )}

                <div className="flex items-start gap-4 mb-5">
                    <div className="p-4 rounded-2xl" style={{ backgroundColor: `${project.color}20` }}>
                        <Icon className="w-8 h-8" style={{ color: project.color }} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">{project.role}</h3>
                        <p className="text-lg font-semibold text-primary">{project.organization}</p>
                        <p className="text-muted-foreground text-sm">{project.subheading}</p>
                    </div>
                </div>

                {project.failureEntry && (
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                            <div className="flex items-center gap-2 mb-2 text-blue-500">
                                <Target className="w-5 h-5" />
                                <h4 className="font-bold">{project.category === "initiative" ? "The Vision" : "The Plan"}</h4>
                            </div>
                            <p className="text-sm text-foreground/80">{project.failureEntry.plan}</p>
                        </div>
                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
                            <div className="flex items-center gap-2 mb-2 text-red-500">
                                <AlertTriangle className="w-5 h-5" />
                                <h4 className="font-bold">{project.category === "initiative" ? "Challenges" : "What Went Wrong"}</h4>
                            </div>
                            <p className="text-sm text-foreground/80">{project.failureEntry.failure}</p>
                        </div>
                        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
                            <div className="flex items-center gap-2 mb-2 text-green-500">
                                <Lightbulb className="w-5 h-5" />
                                <h4 className="font-bold">{project.category === "initiative" ? "Key Learnings" : "What I Learned"}</h4>
                            </div>
                            <p className="text-sm text-foreground/80">{project.failureEntry.learned}</p>
                        </div>
                    </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

                        {project.notes && (
                            <div className="bg-secondary/50 border-l-4 border-primary p-4 rounded-md shadow-sm">
                                <div className="flex items-start gap-3">
                                    <MessageSquare className="w-5 h-5 text-primary mt-0.5" />
                                    <p className="text-sm text-foreground/80">{project.notes}</p>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-wrap gap-3 mt-4">
                            {project.blocked ? (
                                <button
                                    disabled
                                    className="px-5 py-2.5 bg-secondary text-muted-foreground rounded-full font-semibold text-sm cursor-not-allowed opacity-70"
                                >
                                    {project.buttonText || "Visit"}
                                </button>
                            ) : (
                                <>
                                    {urls.length > 0 ? (
                                        urls.map((u, i) => (
                                            <a
                                                key={i}
                                                href={u}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                                            >
                                                <span>{getText(i)}</span>
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        ))
                                    ) : (
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                                        >
                                            <span>{project.buttonText || "Visit"}</span>
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </>
                            )}
                        </div>

                        {project.type && (
                            <div className="mt-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white shadow-sm bg-gradient-to-r from-purple-500 via-pink-500 to-red-400">
                                    {project.type}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Gallery</h3>
                        {images.length === 0 ? (
                            <div className="h-48 bg-secondary rounded-md flex items-center justify-center text-sm text-muted-foreground">
                                No images found
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto pr-2">
                                {images.map((src, idx) => (
                                    <button
                                        key={src}
                                        onClick={() => {
                                            setLightboxIndex(idx)
                                            setLightboxOpen(true)
                                        }}
                                        className="relative w-full h-48 rounded-lg overflow-hidden group hover:ring-2 hover:ring-primary transition-all"
                                    >
                                        <img
                                            src={src}
                                            alt={`${project.organization} screenshot ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div onClick={(e) => e.stopPropagation()}>
                <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    index={lightboxIndex}
                    slides={images.map((src) => ({ src }))}
                    styles={{
                        container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
                        root: { "--yarl__color_backdrop": "rgba(0, 0, 0, 0.9)" },
                    }}
                />
            </div>
        </div>,
        document.body,
    )
}

export function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Venture | null>(null)

    const projects = ventures.filter((v) => v.category === "project")
    const initiatives = ventures.filter((v) => v.category === "initiative")

    return (
        <section id="projects" className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-16">Selected Works</h2>

                {/* Startups & Initiatives Section (Previously Initiatives) */}
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-8">
                        <Rocket className="w-6 h-6 text-primary" />
                        <h3 className="text-2xl font-bold">Startups & Solving World Problems</h3>
                    </div>

                    <div className="space-y-8">
                        {initiatives.map((project) => {
                            const Icon = project.icon
                            return (
                                <GlowCard
                                    key={project.key}
                                    className="cursor-pointer group relative overflow-visible"
                                    glowColor={`${project.color}30`}
                                >
                                    <div
                                        onClick={() => setSelectedProject(project)}
                                        className="hover:scale-[1.01] active:scale-[0.99] transition-transform p-8"
                                    >
                                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                                                style={{ backgroundColor: `${project.color}20` }}
                                            >
                                                <Icon className="w-8 h-8" style={{ color: project.color }} />
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                                                    <h4 className="font-bold text-xl md:text-2xl group-hover:text-primary transition-colors">
                                                        {project.organization}
                                                    </h4>
                                                    {project.badge && (
                                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                                                            {project.badge}
                                                        </span>
                                                    )}
                                                </div>

                                                <p className="text-base font-medium text-muted-foreground mb-4">{project.role}</p>
                                                <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                                        <span>View Details</span>
                                                        <ExternalLink className="w-4 h-4" />
                                                    </div>

                                                    {project.failureEntry && (
                                                        <div className="flex items-center gap-2 text-xs font-bold text-accent">
                                                            <Target className="w-3 h-3" />
                                                            <span>Failure Journal Entry</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </GlowCard>
                            )
                        })}
                    </div>
                </div>

                {/* Hobby Projects Section (Previously Major Projects) */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <FolderOpen className="w-6 h-6 text-accent" />
                        <h3 className="text-2xl font-bold">Hobby Projects & Experiments</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project) => {
                            const Icon = project.icon
                            return (
                                <GlowCard
                                    key={project.key}
                                    className="cursor-pointer group relative overflow-visible h-full"
                                    glowColor={`${project.color}30`}
                                >
                                    <div
                                        onClick={() => setSelectedProject(project)}
                                        className="hover:scale-[1.02] active:scale-[0.98] transition-transform p-6 h-full flex flex-col"
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                                style={{ backgroundColor: `${project.color}20` }}
                                            >
                                                <Icon className="w-6 h-6" style={{ color: project.color }} />
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-lg group-hover:text-accent transition-colors">
                                                    {project.organization}
                                                </h4>
                                                <p className="text-sm font-medium text-muted-foreground">{project.role}</p>
                                            </div>
                                        </div>

                                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">{project.description}</p>
                                    </div>
                                </GlowCard>
                            )
                        })}
                    </div>
                </div>
            </motion.div>

            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </section>
    )
}
