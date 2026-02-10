import React from "react"
import { motion } from "framer-motion"
import BackgroundLines from "./AnimatedBackground"
import iicLogo from "../assets/iic-logo.png"
import qrLogo from "../assets/qr.png"
import CountdownTimer from "./CountdownTimer"
import heroBg from "../assets/omdayal.png"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* ===== Animated Background Image =====*/}
       <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.15, opacity: 1 }}
        transition={{
          duration: 6,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Slow floating loop */}
      <motion.div
        animate={{
          scale: [1.15, 1.1, 1.15],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      /> 


      {/* ===== Dark Overlay ===== */}
      <div className="absolute inset-0 bg-black/70" />

      {/* ===== Animated Lighting ===== */}
    <BackgroundLines />  

      {/* ===== Content ===== */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-neutral-200 text-sm md:text-base uppercase font-medium"
        >
          A Hackathon Program
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-bold tracking-tighter
                     bg-clip-text text-transparent
                     bg-linear-to-b from-white via-neutral-200 to-neutral-400"
        >
          Om<span className="text-green-400">Tech</span>
        </motion.h1>

        {/* Organizer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-1 mt-2"
        >
          <p className="text-neutral-500 text-sm md:text-lg">
            Presented by
          </p>
          <p className="text-white text-lg md:text-2xl font-semibold tracking-wide">
            Omdayal Group of Institutions
          </p>
        </motion.div>

        {/* Countdown */}
        <CountdownTimer targetDate="2026-03-05T09:00:00" />

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex gap-6 p-4 rounded-2xl
                     bg-white/5 backdrop-blur-sm
                     border border-white/10"
        >
          {/* IIC */}
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-full blur
                            bg-linear-to-r from-green-500 to-blue-500
                            opacity-20 group-hover:opacity-50 transition" />
            <img
              src={iicLogo}
              alt="IIC Logo"
              className="relative w-16 h-16 md:w-20 md:h-20
                         rounded-full object-contain
                         bg-black/50 p-2"
            />
          </div>

          {/* QR */}
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-full blur
                            bg-linear-to-r from-purple-500 to-pink-500
                            opacity-20 group-hover:opacity-50 transition" />
            <img
              src={qrLogo}
              alt="QR Code"
              className="relative w-16 h-16 md:w-20 md:h-20
                         rounded-full object-contain
                         bg-black/50 p-2"
            />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2
                     flex flex-col items-center gap-2 text-neutral-500"
        >
          <span className="text-xs uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-12 bg-linear-to-b from-neutral-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
