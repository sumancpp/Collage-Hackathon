"use client"

import React, { createContext, useContext, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const MouseEnterContext = createContext(false)

export function CardContainer({ children, className = "" }) {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove(e) {
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [18, -18]), {
    stiffness: 300,
    damping: 18,
  })
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-18, 18]), {
    stiffness: 300,
    damping: 18,
  })

  return (
    <MouseEnterContext.Provider value={true}>
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1000px",
        }}
        className={`relative ${className}`}
      >
        <motion.div
        whileHover={{ scale: 1.06 }}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </MouseEnterContext.Provider>
  )
}

export function CardBody({ children, className = "" }) {
  return (
    <div
      className={`relative transform-style-preserve-3d ${className}`}
    >
      {children}
    </div>
  )
}

export function CardItem({
  children,
  className = "",
  translateZ = 0,
  as: Component = "div",
  ...props
}) {
  const isInsideCard = useContext(MouseEnterContext)

  return (
    <Component
      {...props}
      className={className}
      style={{
        transform: isInsideCard
          ? `translateZ(${translateZ}px)`
          : "translateZ(0px)",
      }}
    >
      {children}
    </Component>
  )
}
