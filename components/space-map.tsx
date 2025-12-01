"use client"

import type React from "react"
import { useState, useRef, useCallback, useEffect, memo } from "react"
import { Home, User, Trophy, Briefcase, FolderOpen, Mail, Quote, Compass, Move } from "lucide-react"

import { MapStarField } from "@/components/space/map-star-field"
import { HeroIsland } from "@/components/islands/hero-island"
import { AboutIsland } from "@/components/islands/about-island"
import { HallOfFameIsland } from "@/components/islands/hall-of-fame-island"
import { ExperienceIsland } from "@/components/islands/experience-island"
import { ProjectsIsland } from "@/components/islands/projects-island"
import { ContactIsland } from "@/components/islands/contact-island"
import { QuoteIsland } from "@/components/islands/quote-island"
import { BackgroundPlanet } from "@/components/space/background-planet"
import { TravelingRocket } from "@/components/space/traveling-rocket"

const MAP_WIDTH = 5000
const MAP_HEIGHT = 4000

const sections = [
  { id: "hero", label: "Home", icon: Home, x: 2500, y: 2000 },
  { id: "about", label: "About", icon: User, x: 1200, y: 1400 },
  { id: "achievements", label: "Achievements", icon: Trophy, x: 3800, y: 1200 },
  { id: "experience", label: "Experience", icon: Briefcase, x: 800, y: 2800 },
  { id: "projects", label: "Projects", icon: FolderOpen, x: 3600, y: 2600 },
  { id: "contact", label: "Contact", icon: Mail, x: 2000, y: 3400 },
  { id: "quote", label: "Quote", icon: Quote, x: 4200, y: 3200 },
]

const planets = [
  { type: "mars" as const, size: 180, x: 350, y: 500, satellites: 2 },
  { type: "jupiter" as const, size: 280, x: 4100, y: 700, satellites: 3 },
  { type: "saturn" as const, size: 220, x: 500, y: 3100, satellites: 1 },
  { type: "neptune" as const, size: 150, x: 4300, y: 2400, satellites: 2 },
  { type: "earth" as const, size: 160, x: 2800, y: 600, satellites: 1 },
]

const rocketRoutes = [
  { startX: 530, startY: 590, endX: 2880, endY: 680, duration: 18, delay: 0 },
  { startX: 4240, startY: 840, endX: 610, endY: 3210, duration: 22, delay: 5 },
  { startX: 2880, startY: 680, endX: 4380, endY: 2480, duration: 16, delay: 10 },
  { startX: 610, startY: 3210, endX: 530, endY: 590, duration: 20, delay: 15 },
]

// Memoize child components to prevent re-renders
const MemoizedMapStarField = memo(MapStarField)
const MemoizedBackgroundPlanet = memo(BackgroundPlanet)
const MemoizedTravelingRocket = memo(TravelingRocket)
const MemoizedHeroIsland = memo(HeroIsland)
const MemoizedAboutIsland = memo(AboutIsland)
const MemoizedHallOfFameIsland = memo(HallOfFameIsland)
const MemoizedExperienceIsland = memo(ExperienceIsland)
const MemoizedProjectsIsland = memo(ProjectsIsland)
const MemoizedContactIsland = memo(ContactIsland)
const MemoizedQuoteIsland = memo(QuoteIsland)

function animatePosition(
  from: { x: number; y: number },
  to: { x: number; y: number },
  duration: number,
  onUpdate: (pos: { x: number; y: number }) => void,
  onComplete: () => void,
) {
  const startTime = performance.now()

  function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3)
  }

  function tick(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutCubic(progress)

    const currentX = from.x + (to.x - from.x) * eased
    const currentY = from.y + (to.y - from.y) * eased

    onUpdate({ x: currentX, y: currentY })

    if (progress < 1) {
      requestAnimationFrame(tick)
    } else {
      onComplete()
    }
  }

  requestAnimationFrame(tick)
}

export function SpaceMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapContentRef = useRef<HTMLDivElement>(null)

  // Use refs for mutable state that doesn't need to trigger re-renders during drag
  const positionRef = useRef({ x: 0, y: 0 })
  const dragStartRef = useRef({ x: 0, y: 0 })
  const isDraggingRef = useRef(false)
  const isAnimatingRef = useRef(false)

  // State for UI that needs to update
  const [activeSection, setActiveSection] = useState("hero")
  const [showHint, setShowHint] = useState(true)
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 })
  // We still need a position state for the minimap and initial render, 
  // but we won't update it during every drag frame
  const [syncedPosition, setSyncedPosition] = useState({ x: 0, y: 0 })

  const updateMapTransform = useCallback((x: number, y: number) => {
    if (mapContentRef.current) {
      mapContentRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    positionRef.current = { x, y }
  }, [])

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setViewportSize({ width, height })

      // Only set initial position if we haven't moved yet (or on first load)
      if (positionRef.current.x === 0 && positionRef.current.y === 0) {
        const heroSection = sections.find((s) => s.id === "hero")!
        const initialX = -(heroSection.x - width / 2)
        const initialY = -(heroSection.y - height / 2)

        updateMapTransform(initialX, initialY)
        setSyncedPosition({ x: initialX, y: initialY })
      }
    }

    updateViewport()
    window.addEventListener("resize", updateViewport)
    return () => window.removeEventListener("resize", updateViewport)
  }, [updateMapTransform])

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const navigateTo = useCallback(
    (sectionId: string) => {
      if (isAnimatingRef.current) return

      const section = sections.find((s) => s.id === sectionId)
      if (!section) return

      // Don't set active section immediately to avoid "turning black" transition
      isAnimatingRef.current = true

      const targetX = -(section.x - viewportSize.width / 2)
      const targetY = -(section.y - viewportSize.height / 2)

      const clampedX = Math.max(Math.min(targetX, 0), -(MAP_WIDTH - viewportSize.width))
      const clampedY = Math.max(Math.min(targetY, 0), -(MAP_HEIGHT - viewportSize.height))

      animatePosition(
        positionRef.current,
        { x: clampedX, y: clampedY },
        800,
        (pos) => {
          updateMapTransform(pos.x, pos.y)
          // Optional: Update synced position less frequently or not at all during animation if performance is key
          // But for the minimap to update smoothly, we might want to sync it. 
          // However, to keep it super smooth, let's use a ref for minimap too or accept React updates here.
          // Given the user wants "0 lag", let's avoid React updates during animation loop if possible,
          // but the minimap needs state. Let's try updating state here, if it lags we can optimize minimap.
          setSyncedPosition(pos)
        },
        () => {
          isAnimatingRef.current = false
          setActiveSection(sectionId) // Update active section ONLY after arrival
          setSyncedPosition({ x: clampedX, y: clampedY })
        }
      )
    },
    [viewportSize, updateMapTransform],
  )

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isAnimatingRef.current) return
    isDraggingRef.current = true
    dragStartRef.current = {
      x: e.clientX - positionRef.current.x,
      y: e.clientY - positionRef.current.y
    }
    setShowHint(false)

    // Change cursor style
    if (containerRef.current) containerRef.current.style.cursor = "grabbing"
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || isAnimatingRef.current) return

    let newX = e.clientX - dragStartRef.current.x
    let newY = e.clientY - dragStartRef.current.y

    newX = Math.max(Math.min(newX, 0), -(MAP_WIDTH - viewportSize.width))
    newY = Math.max(Math.min(newY, 0), -(MAP_HEIGHT - viewportSize.height))

    updateMapTransform(newX, newY)
  }

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false

    if (containerRef.current) containerRef.current.style.cursor = "grab"

    // Sync state at the end of drag
    setSyncedPosition({ ...positionRef.current })

    const centerX = -positionRef.current.x + viewportSize.width / 2
    const centerY = -positionRef.current.y + viewportSize.height / 2

    let closest = sections[0]
    let minDist = Number.POSITIVE_INFINITY

    for (const section of sections) {
      const dist = Math.sqrt(Math.pow(section.x - centerX, 2) + Math.pow(section.y - centerY, 2))
      if (dist < minDist) {
        minDist = dist
        closest = section
      }
    }

    setActiveSection(closest.id)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimatingRef.current) return
    const touch = e.touches[0]
    isDraggingRef.current = true
    dragStartRef.current = {
      x: touch.clientX - positionRef.current.x,
      y: touch.clientY - positionRef.current.y
    }
    setShowHint(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || isAnimatingRef.current) return
    const touch = e.touches[0]

    let newX = touch.clientX - dragStartRef.current.x
    let newY = touch.clientY - dragStartRef.current.y

    newX = Math.max(Math.min(newX, 0), -(MAP_WIDTH - viewportSize.width))
    newY = Math.max(Math.min(newY, 0), -(MAP_HEIGHT - viewportSize.height))

    updateMapTransform(newX, newY)
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden bg-background cursor-grab"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      <div
        ref={mapContentRef}
        className="absolute"
        style={{
          width: MAP_WIDTH,
          height: MAP_HEIGHT,
          // Initial transform will be set by useEffect, but we can set a default here to avoid flash
          transform: `translate(0px, 0px)`,
          willChange: "transform",
        }}
      >
        <MemoizedMapStarField width={MAP_WIDTH} height={MAP_HEIGHT} />

        {planets.map((planet, i) => (
          <MemoizedBackgroundPlanet
            key={i}
            type={planet.type}
            size={planet.size}
            x={planet.x}
            y={planet.y}
            satellites={planet.satellites}
          />
        ))}

        {rocketRoutes.map((route, i) => (
          <MemoizedTravelingRocket
            key={i}
            startX={route.startX}
            startY={route.startY}
            endX={route.endX}
            endY={route.endY}
            duration={route.duration}
            delay={route.delay}
            size={35}
          />
        ))}

        {/* Connection lines */}
        <svg className="absolute inset-0 pointer-events-none" width={MAP_WIDTH} height={MAP_HEIGHT}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {sections.slice(1).map((section) => (
            <line
              key={section.id}
              x1={2500}
              y1={2000}
              x2={section.x}
              y2={section.y}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="10,10"
            />
          ))}
        </svg>

        {/* Section Islands */}
        <MemoizedHeroIsland
          x={sections[0].x}
          y={sections[0].y}
          isActive={activeSection === "hero"}
          onNavigate={navigateTo}
        />
        <MemoizedAboutIsland x={sections[1].x} y={sections[1].y} isActive={activeSection === "about"} />
        <MemoizedHallOfFameIsland x={sections[2].x} y={sections[2].y} isActive={activeSection === "achievements"} />
        <MemoizedExperienceIsland x={sections[3].x} y={sections[3].y} isActive={activeSection === "experience"} />
        <MemoizedProjectsIsland
          x={sections[4].x}
          y={sections[4].y}
          isActive={activeSection === "projects"}
        />
        <MemoizedContactIsland x={sections[5].x} y={sections[5].y} isActive={activeSection === "contact"} />
        <MemoizedQuoteIsland x={sections[6].x} y={sections[6].y} isActive={activeSection === "quote"} />
      </div>

      {/* Hint overlay */}
      {showHint && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-40 animate-pulse">
          <div className="flex flex-col items-center gap-4 text-foreground/60 bg-background/50 backdrop-blur-sm px-8 py-6 rounded-2xl">
            <Move className="w-12 h-12" />
            <span className="text-lg font-medium">Drag to explore the cosmos</span>
          </div>
        </div>
      )}

      {/* Mini map */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative w-40 h-32 bg-card/80 backdrop-blur-xl border border-border rounded-xl overflow-hidden">
          <div className="absolute inset-2">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`absolute w-3 h-3 rounded-full transition-colors hover:scale-150 ${activeSection === section.id ? "bg-primary" : "bg-muted-foreground/50"
                  }`}
                style={{
                  left: `${(section.x / MAP_WIDTH) * 100}%`,
                  top: `${(section.y / MAP_HEIGHT) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  navigateTo(section.id)
                }}
              />
            ))}
            <div
              className="absolute border-2 border-primary/50 rounded pointer-events-none"
              style={{
                left: `${(-syncedPosition.x / MAP_WIDTH) * 100}%`,
                top: `${(-syncedPosition.y / MAP_HEIGHT) * 100}%`,
                width: `${(viewportSize.width / MAP_WIDTH) * 100}%`,
                height: `${(viewportSize.height / MAP_HEIGHT) * 100}%`,
              }}
            />
          </div>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs text-muted-foreground flex items-center gap-1">
            <Compass className="w-3 h-3" />
            <span>Map</span>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 px-3 py-2 bg-card/90 backdrop-blur-xl border border-border rounded-full shadow-2xl">
          {sections.map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id

            return (
              <button
                key={section.id}
                onClick={(e) => {
                  e.stopPropagation()
                  navigateTo(section.id)
                }}
                className={`relative flex flex-col items-center gap-0.5 px-3 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-[10px] sm:text-xs font-medium leading-none">{section.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
