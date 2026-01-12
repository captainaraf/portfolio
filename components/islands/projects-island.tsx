"use client"

import type React from "react"
import { createPortal } from "react-dom"
import { useState, useEffect } from "react"
import { GlowCard } from "@/components/ui/glow-card"
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
} from "lucide-react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { getVentureImages } from "@/app/actions"

interface IslandProps {
  x: number
  y: number
  isActive: boolean
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
  type?: "Website" | "Mobile App" | "SaaS" | "Library" | string
  notes?: string
  color: string
}

const ventures: Venture[] = [
  {
    icon: Rocket,
    role: "Core Team Member",
    key: "innoverse",
    organization: "Innoverse Bangladesh",
    subheading: "The Largest Science and Technology Carnival in the History of Bangladesh Organized by WhiteBoard Initiatives.",
    description:
      "Innoverse Bangladesh is the largest science and technology carnival in the history of Bangladesh. It featured competitions, innovation expo, sketch talk, and much more. It was a two days event, with 2,000+ attendees, 20,000+ visitors. It was successfully held with direct collaboration with the ICT Division and A2I project of Bangladesh Government.",
    url: ["https://www.tbsnews.net/economy/corporates/innoverse-bangladesh-2025-concludes-buet-celebrating-young-innovators-1287276", "https://www.facebook.com/reel/1385960089544284"],
    buttonText: ["Visit News Coverage", "View Event Reel"],
    blocked: false,
    type: "Event",
    notes:
      "As the Assistant Executive of Technology at WhiteBoard Initiatives, I was responsible for the major technical aspects of the event. I closely worked with the technical team to ensure smooth development of our website, I also managed the programming contest, and played an important role in other areas.",
    color: "#4a90d9",
  },
  {
    icon: Brain,
    role: "Co-Creator, Lead Developer",
    key: "pippaquiz",
    organization: "PippaQuiz",
    subheading: "Product of Dead Mans Tech",
    description:
      "An AI powered software service that can instantly generate quizzes from any study material, reducing the time and effort required to create quizzes manually. It aims to make the lives of teachers easier so that they can give their focus into teaching, while leaving the repetitive and redundant part on us.",
    url: "https://www.pippaquiz.com",
    buttonText: "Visit Site",
    blocked: true,
    type: "Website",
    color: "#9b59b6",
  },
  {
    icon: ShoppingBag,
    role: "Develoepr",
    key: "kindredhearts",
    organization: "Kindred Hearts",
    subheading: "A philanthropic site with e-commerce, donation, volunteer signup, and blog.",
    description:
      "A philanthropic website that allows users to donate, volunteer, and shop for products. It has a blog section where users can read about the latest news and updates. It also has an admin panel to manage the content.",
    url: "https://kindredhearts.captainaraf.com/",
    badge: "Weekend Project",
    buttonText: "Visit Site",
    blocked: false,
    type: "Website",
    notes:
      "It was a weekend project I did alone. It is not a real site, but it has all the features of a real e-commerce site. It has a donation system, volunteer signup, and blog.",
    color: "#f39c12",
  },
  {
    icon: BookOpen,
    role: "Co-Creator, Lead Developer",
    key: "nyonnlearn",
    organization: "Nyonn Learn",
    subheading: "A companion app for NCTB Students",
    description:
      "An AI powered study companion for NCTB students, that can keep track of syllabus, generate intelligent study plans and provide interactive learning experience.",
    url: "https://pippaquiz.example",
    badge: "Not Launched Yet",
    buttonText: "Visit Site",
    blocked: true,
    type: "Mobile App",
    notes:
      "The development is finished, we are waiting for Google Playstore verification to launch.",
    color: "#e67e22",
  },
  {
    icon: HelpCircle,
    role: "Creator and UI/UX Designer",
    key: "jiggasha",
    organization: "Jiggasha",
    subheading: "A study helper for NCTB Students",
    description:
      "You find a very interesting question, and realize you need to practice more similar questions. But there are no more such questions in the question bank. What do you do? You come to Jiggasha, and our AI will generate similar questions for you to practice.",
    url: "https://expo.dev/accounts/shaidozzamanaraf/projects/jiggasha/builds/89849e30-0929-4175-b77b-abe7de5b97e4",
    badge: "Beta Launched",
    buttonText: "Download Beta Version",
    blocked: false,
    type: "Mobile App",
    notes:
      "This is the beta version of our MVP with bare minimum features, not in Google playstore yet.",
    color: "#1abc9c",
  },
  {
    icon: Heart,
    role: "Frontend and Backend Engineer",
    key: "n4cm",
    organization: "NutritionCare4Mom",
    subheading: "A Professional Work for a Client",
    description:
      "A website my friend and I developed together for a client. Here mothers can find nutritional help content, schedule appointments with doctors, and most importantly, there is an AI chatbot to help them with their queries. It also has English to Bangla switching, an admin panel, and an amazing blog system.",
    url: "https://nutritioncare4mom.com/",
    badge: "Professional Work",
    buttonText: "Visit Site",
    blocked: false,
    type: "Website",
    notes:
      "Successfully finished the development of the project. The client will launch it soon. I am not entirely sure if it is live right now. The data visible in the images are dummy data.",
    color: "#e74c3c",
  },
  {
    icon: Calculator,
    role: "Creator",
    key: "mathauction",
    organization: "Math Auction System",
    subheading: "A real time math auction system I developed for the math maestro contest of Innoverse Bangladesh",
    description:
      "A real time math auction system where participants can bid for questions they want to solve in a math contest. The system allows for dynamic question selection based on participant interest and bidding strategies, making the contest more engaging and competitive.",
    url: "https://github.com/captainaraf/math-auction-system",
    buttonText: "View Source Code",
    blocked: false,
    type: "Machine Learning Model",
    color: "#f1c40f",
  },
  {
    icon: Truck,
    role: "Creator",
    key: "shippingcostpredictor",
    organization: "Shipping Cost Predictor",
    subheading: "A Machine Learning Model for Predicting Shipping Costs",
    description:
      "A machine learning model that can predict the shipping cost required for a package based on relevant information such as distance, delivery style, package volume, etc.",
    url: "https://github.com/captainaraf/Shipping-Cost-Predictor",
    buttonText: "View Source Code",
    blocked: false,
    type: "Machine Learning Model",
    notes: "It actually performs pretty decent.",
    color: "#3498db",
  },
  {
    icon: Wand2,
    role: "Builder",
    key: "sortinghat",
    organization: "The Hogwarts Sorting Hat",
    subheading:
      "A Machine Learning Model for Sorting People into Hogwarts Houses",
    description:
      "A machine learning model that can sort people into Hogwarts houses based on their personality traits and preferences. It uses a custom algorithm to analyze the input data and predict the most suitable house.",
    url: "https://github.com/captainaraf/the-sorting-hat",
    buttonText: "View Source Code",
    blocked: false,
    type: "Machine Learning Model",
    notes: "It actually performs pretty decent.",
    color: "#9b59b6",
  },
  {
    icon: Lock,
    role: "Builder",
    key: "ciphersherlock",
    organization: "Cipher Sherlock",
    subheading: "An API that can solve ciphers",
    description:
      "An API that can solve various types of ciphers, including Caesar, Vigenere, Atbash, and more. It can also detect the type of cipher used in a given text. It is built with FastAPI and uses a custom algorithm for solving ciphers.",
    url: "https://github.com/captainaraf/ciphersherlock",
    buttonText: "View Source Code",
    blocked: false,
    type: "API",
    notes:
      "It can be used as a library as well, for encrypting and decrypting texts.",
    color: "#2ecc71",
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

    // Load images
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

export function ProjectsIsland({ x, y, isActive }: IslandProps) {
  const [selectedProject, setSelectedProject] = useState<Venture | null>(null)

  const openProject = (project: Venture, e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setSelectedProject(project)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <div
        className="absolute transition-all duration-500"
        style={{
          left: x,
          top: y,
          transform: "translate(-50%, -50%)",
          scale: isActive ? 1 : 0.9,
          opacity: isActive ? 1 : 0.6,
        }}
      >
        <div
          className="absolute rounded-full bg-primary/20 blur-3xl pointer-events-none animate-pulse"
          style={{ width: 600, height: 600, left: -300, top: -300 }}
        />

        <div className="relative w-[650px]">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary mb-3">
              <FolderOpen className="w-5 h-5" />
              <span className="font-semibold">Mission Log</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Projects <span className="text-primary">Worked On</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-2">Click any project to explore details</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {ventures.map((project, index) => {
              const Icon = project.icon
              return (
                <div
                  key={project.key}
                  className="transition-all duration-300"
                  style={{
                    opacity: isActive ? 1 : 0.7,
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  <GlowCard className="cursor-pointer group h-full relative overflow-visible" glowColor={`${project.color}30`}>
                    {project.badge && (
                      <div className="absolute -top-2 -right-2 z-20 bg-gradient-to-r from-red-600 to-red-400 text-white text-[10px] px-2 py-0.5 rounded-full shadow-lg font-bold">
                        {project.badge}
                      </div>
                    )}

                    <div
                      onPointerDown={(e) => openProject(project, e)}
                      className="hover:scale-[1.02] active:scale-[0.98] transition-transform h-full"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${project.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: project.color }} />
                      </div>

                      <h3 className="font-bold text-sm group-hover:text-primary transition-colors mb-1">
                        {project.role}
                      </h3>
                      <p className="text-xs font-semibold mb-1">{project.organization}</p>
                      <p className="text-[10px] text-muted-foreground line-clamp-2">{project.subheading}</p>
                    </div>
                  </GlowCard>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={closeProject} />}
    </>
  )
}
