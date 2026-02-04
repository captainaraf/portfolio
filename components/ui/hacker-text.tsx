"use client"

import { useEffect, useState } from "react"

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"

export const HackerText = ({ text, className = "" }: { text: string, className?: string }) => {
    const [displayText, setDisplayText] = useState(text)

    useEffect(() => {
        let iterations = 0

        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return text[index]
                        }
                        return letters[Math.floor(Math.random() * letters.length)]
                    })
                    .join("")
            )

            if (iterations >= text.length) {
                clearInterval(interval)
            }

            iterations += 1 / 3
        }, 30)

        return () => clearInterval(interval)
    }, [text])

    return (
        <span className={className}>
            {displayText}
        </span>
    )
}
