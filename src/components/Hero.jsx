import React from "react"
import { motion } from "framer-motion"
import clgLogo from "../assets/clg-logo.png"
import iicLogo from "../assets/iic-logo.png"
import { FaRegHandPointRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4"
    >
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight sm:leading-normal"
      >
        <span className="text-primary mr-3">OMTECH</span>
        <br />
        <span className="text-white">Hackathon Programme</span>
      </motion.h1>

      {/* College Name */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-sm tracking-widest uppercase text-gray-400 mb-4"
      >
        Omdayal Group of Institutions
      </motion.p>

      {/* Date Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-6"
      >
        <span className="px-5 py-2 rounded-full bg-primary/20 border border-primary text-primary font-semibold">
          17 – 18 March
        </span>
      </motion.div>

      {/* Logos Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mb-10"
      >
        {/* Label */}
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
          Presented & Supported By
        </p>

        <div className="flex items-center justify-center gap-12 px-8 py-5 rounded-2xl border border-white/10 backdrop-blur">
          <img
            src={clgLogo}
            alt="College Logo"
            className="h-20 sm:h-24 md:h-28 object-contain transition-transform duration-300 hover:scale-110 drop-shadow-lg rounded-full"
          />

          <img
            src={iicLogo}
            alt="Institution Innovation Council Logo"
            className="h-20 sm:h-24 md:h-28 object-contain transition-transform duration-300 hover:scale-110 drop-shadow-lg"
          />
        </div>
      </motion.div>



      {/* CTA Button */}
      <motion.a
        href="#register"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="inline-flex items-center gap-2 bg-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
        <FaRegHandPointRight className="text-lg" />
        <span>Register Now</span>
      </motion.a>

    </section>
  )
}
