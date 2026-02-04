"use client"

import { useMotionTemplate, useMotionValue, motion } from "framer-motion"
import { MouseEvent } from "react"

export function MouseSpotlight() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <div
            className="fixed inset-0 z-30 pointer-events-none transition-opacity duration-300"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(120, 119, 198, 0.1),
              transparent 80%
            )
          `,
                }}
            />
            {/* Global Spotlight for ambient glow */}
            <motion.div
                className="absolute inset-0 z-0 bg-transparent"
                style={{
                    background: useMotionTemplate`
                radial-gradient(
                    600px circle at ${mouseX}px ${mouseY}px,
                    rgba(88, 101, 242, 0.05),
                    transparent 40%
                )
             `
                }}
            />
        </div>
    )
}
