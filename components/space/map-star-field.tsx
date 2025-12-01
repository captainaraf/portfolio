"use client"

import { useEffect, useRef } from "react"

interface MapStarFieldProps {
  width: number
  height: number
}

export function MapStarField({ width, height }: MapStarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = width
    canvas.height = height

    // Draw background
    ctx.fillStyle = "#0a0a1a"
    ctx.fillRect(0, 0, width, height)

    // Draw nebulae (static)
    const nebulaColors = [
      "rgba(100, 50, 150, 0.08)",
      "rgba(50, 100, 200, 0.06)",
      "rgba(150, 50, 100, 0.08)",
      "rgba(50, 150, 150, 0.06)",
    ]

    for (let i = 0; i < 15; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const radius = Math.random() * 500 + 200
      const color = nebulaColors[Math.floor(Math.random() * nebulaColors.length)]

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      gradient.addColorStop(0, color)
      gradient.addColorStop(1, "transparent")
      ctx.fillStyle = gradient
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2)
    }

    // Draw stars (static, reduced count)
    for (let i = 0; i < 600; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = Math.random() * 2 + 0.5
      const opacity = Math.random() * 0.8 + 0.2

      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.fill()

      // Add glow to larger stars
      if (size > 1.5) {
        ctx.beginPath()
        ctx.arc(x, y, size * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(150, 200, 255, ${opacity * 0.2})`
        ctx.fill()
      }
    }
  }, [width, height])

  return <canvas ref={canvasRef} className="absolute inset-0" />
}
