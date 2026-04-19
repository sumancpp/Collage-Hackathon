import React from "react"
import { motion } from "framer-motion"
import BackgroundLines from "./AnimatedBackground"
import iicLogo from "../assets/iic-logo.png"
import qrLogo from "../assets/qr.png"
import IEEE from "../assets/IEEE.png"
import CountdownTimer from "./CountdownTimer"
import heroBg from "../assets/omdayal.png"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center px-4 py-16"
    >
      {/* ===== Background ===== */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Background lines (keep light) */}
      <BackgroundLines />

      {/* ===== Content ===== */}
      <div className="relative z-20 flex flex-col items-center text-center w-full max-w-5xl mx-auto">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-neutral-300 text-xs sm:text-sm md:text-base uppercase font-medium"
        >
          A Hackathon Program
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="
        mt-2 font-bold tracking-tight
        text-4xl sm:text-6xl md:text-8xl
        bg-clip-text text-transparent
        bg-gradient-to-b from-white via-neutral-200 to-neutral-400
      "
        >
          Om<span className="text-green-400">Tech</span>
        </motion.h1>

        {/* Organizer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3"
        >
          <p className="text-neutral-400 text-xs sm:text-sm md:text-lg">
            Presented by
          </p>
          <p className="text-white text-sm sm:text-lg md:text-2xl font-semibold">
            Omdayal Group of Institutions
          </p>
        </motion.div>

        {/* Countdown */}
        <div className="mt-6">
          <CountdownTimer targetDate="2026-05-07T10:30:00" />
        </div>

        {/* Deadline */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-red-400 font-medium"
        >
          Last date of registration:{" "}
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-red-700 font-bold inline-block"
          >
            5th May
          </motion.span>
        </motion.p>

        {/* Logos */}
        <motion.div
          className="
        mt-8 flex flex-wrap justify-center gap-4 sm:gap-6
        p-3 sm:p-4 rounded-xl
        bg-white/5 backdrop-blur-sm border border-white/10
      "
        >
          {[iicLogo, qrLogo, IEEE].map((img, i) => (
            <div key={i} className="relative group">
              <div className="absolute -inset-0.5 rounded-full blur opacity-20 bg-gradient-to-r from-green-400 to-blue-500" />
              <img
                src={img}
                className="
              relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20
              rounded-full object-contain bg-black/50 p-2
            "
              />
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll Indicator (hide on small devices) */}
      <motion.div
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center text-neutral-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-neutral-500 to-transparent" />
      </motion.div>

    </section>
  )
}
