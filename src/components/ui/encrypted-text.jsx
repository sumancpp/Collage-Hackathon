"use client"

import React, { useEffect, useState } from "react"

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function EncryptedText({
  text,
  revealDelayMs = 40,
  encryptedClassName = "",
  revealedClassName = "",
}) {
  const [displayText, setDisplayText] = useState("")
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    let frame = 0
    let interval

    function scramble() {
      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (i < frame) return char
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join("")
      )

      frame++
      if (frame > text.length) {
        clearInterval(interval)
        setRevealed(true)
      }
    }

    interval = setInterval(scramble, revealDelayMs)

    return () => clearInterval(interval)
  }, [text, revealDelayMs])

  return (
    <span
      className={`inline-block transition-colors duration-300 ${
        revealed ? revealedClassName : encryptedClassName
      }`}
    >
      {displayText}
    </span>
  )
}
