"use client"

interface BackgroundPlanetProps {
  type: "mars" | "jupiter" | "saturn" | "neptune" | "earth"
  size: number
  x: number
  y: number
  satellites?: number
}

export function BackgroundPlanet({ type, size, x, y, satellites = 0 }: BackgroundPlanetProps) {
  const planetConfigs = {
    mars: {
      baseColor: "#c1440e",
      highlightColor: "#e77d4d",
      darkColor: "#8b2d0a",
      glowColor: "rgba(193, 68, 14, 0.5)",
      hasRing: false,
      features: true,
    },
    jupiter: {
      baseColor: "#d4a574",
      highlightColor: "#e8c9a0",
      darkColor: "#a67c52",
      glowColor: "rgba(212, 165, 116, 0.4)",
      hasRing: false,
      features: true,
    },
    saturn: {
      baseColor: "#e8d4a8",
      highlightColor: "#f5e6c8",
      darkColor: "#c9b896",
      glowColor: "rgba(232, 212, 168, 0.4)",
      hasRing: true,
      ringColor: "#a89070",
      features: false,
    },
    neptune: {
      baseColor: "#4b70dd",
      highlightColor: "#7b9eef",
      darkColor: "#2d4a9e",
      glowColor: "rgba(75, 112, 221, 0.5)",
      hasRing: false,
      features: false,
    },
    earth: {
      baseColor: "#4a90d9",
      highlightColor: "#6bb3f0",
      darkColor: "#2d5a8c",
      glowColor: "rgba(74, 144, 217, 0.5)",
      hasRing: false,
      features: true,
    },
  }

  const config = planetConfigs[type]
  const id = `planet-${type}-${x}-${y}`

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size * (config.hasRing ? 2.2 : 1),
        height: size * (config.hasRing ? 1.2 : 1),
        ["--glow-color" as string]: config.glowColor,
      }}
    >
      {/* Satellite orbits */}
      {Array.from({ length: satellites }).map((_, i) => {
        const orbitRadius = size * 0.6 + i * 25
        const duration = 15 + i * 8
        const delay = i * 3
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: "50%",
              top: "50%",
              width: orbitRadius * 2,
              height: orbitRadius * 2,
              marginLeft: -orbitRadius,
              marginTop: -orbitRadius,
              border: "1px dashed rgba(255,255,255,0.1)",
            }}
          >
            <div
              className="absolute w-2 h-2 bg-gray-300 rounded-full"
              style={{
                ["--orbit-radius" as string]: `${orbitRadius}px`,
                animation: `orbit-satellite ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
                boxShadow: "0 0 6px rgba(255,255,255,0.6)",
              }}
            />
          </div>
        )
      })}

      <svg
        width="100%"
        height="100%"
        viewBox={config.hasRing ? "0 0 220 120" : "0 0 100 100"}
        className="animate-planet-glow"
      >
        <defs>
          <radialGradient id={`${id}-grad`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor={config.highlightColor} />
            <stop offset="50%" stopColor={config.baseColor} />
            <stop offset="100%" stopColor={config.darkColor} />
          </radialGradient>
          <filter id={`${id}-glow`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ring behind planet for Saturn */}
        {config.hasRing && (
          <ellipse
            cx="110"
            cy="60"
            rx="100"
            ry="25"
            fill="none"
            stroke={config.ringColor}
            strokeWidth="8"
            opacity="0.6"
            strokeDasharray="5,3"
          />
        )}

        {/* Planet body */}
        <circle
          cx={config.hasRing ? 110 : 50}
          cy={config.hasRing ? 60 : 50}
          r={40}
          fill={`url(#${id}-grad)`}
          filter={`url(#${id}-glow)`}
        />

        {/* Surface features for Mars/Jupiter/Earth */}
        {config.features && type === "mars" && (
          <>
            <ellipse
              cx={config.hasRing ? 100 : 40}
              cy={config.hasRing ? 50 : 40}
              rx="12"
              ry="8"
              fill="#a33a0c"
              opacity="0.5"
            />
            <circle cx={config.hasRing ? 125 : 65} cy={config.hasRing ? 70 : 60} r="6" fill="#8b2d0a" opacity="0.4" />
          </>
        )}
        {config.features && type === "jupiter" && (
          <>
            <ellipse
              cx={config.hasRing ? 110 : 50}
              cy={config.hasRing ? 50 : 40}
              rx="30"
              ry="4"
              fill="#c9955a"
              opacity="0.6"
            />
            <ellipse
              cx={config.hasRing ? 110 : 50}
              cy={config.hasRing ? 65 : 55}
              rx="25"
              ry="3"
              fill="#b8844a"
              opacity="0.5"
            />
            <ellipse
              cx={config.hasRing ? 125 : 65}
              cy={config.hasRing ? 72 : 62}
              rx="8"
              ry="6"
              fill="#d45a30"
              opacity="0.7"
            />
          </>
        )}
        {config.features && type === "earth" && (
          <>
            <ellipse
              cx={config.hasRing ? 100 : 40}
              cy={config.hasRing ? 55 : 45}
              rx="15"
              ry="12"
              fill="#3d7a3d"
              opacity="0.6"
            />
            <ellipse
              cx={config.hasRing ? 120 : 60}
              cy={config.hasRing ? 65 : 55}
              rx="10"
              ry="8"
              fill="#3d7a3d"
              opacity="0.5"
            />
          </>
        )}

        {/* Atmosphere highlight */}
        <ellipse
          cx={config.hasRing ? 95 : 35}
          cy={config.hasRing ? 45 : 35}
          rx="12"
          ry="8"
          fill="rgba(255,255,255,0.25)"
        />

        {/* Ring in front for Saturn */}
        {config.hasRing && (
          <path d="M 10 60 Q 110 85, 210 60" fill="none" stroke={config.ringColor} strokeWidth="8" opacity="0.7" />
        )}
      </svg>
    </div>
  )
}
