"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

export function FocusCards({ cards }) {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className="flex flex-col gap-3">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className={`relative cursor-pointer rounded-xl p-4 border transition-all duration-300
            ${
              activeIndex === index
                ? "bg-white/5 border-green-500 shadow-[0_0_25px_-10px_rgba(34,197,94,0.8)] scale-[1.03]"
                : "bg-black border-neutral-800"
            }`}
        >
          {activeIndex === index && (
            <motion.div
              layoutId="focus-indicator"
              className="absolute inset-0 rounded-xl ring-1 ring-green-500/40"
            />
          )}

          <h4 className="relative z-10 text-gray-200 font-medium text-sm md:text-base">
            {card.title}
          </h4>
        </motion.div>
      ))}
    </div>
  )
}
