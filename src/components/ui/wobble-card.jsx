"use client"

import React, { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function WobbleCard({
  children,
  containerClassName = "",
  className = "",
}) {
  const ref = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove(e) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  // 🎯 Wobble intensity (tweak here)
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [8, -8]), {
    stiffness: 200,
    damping: 20,
  })

  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  })

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${containerClassName}`}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className={`relative h-full w-full rounded-2xl ${className}`}
      >
        {children}
      </motion.div>
    </div>
  )
}
