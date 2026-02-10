"use client"

import React from "react"
import { motion } from "framer-motion"
import { WobbleCard } from "../components/ui/wobble-card"

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-8 max-w-6xl mx-auto"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center
        bg-clip-text text-transparent
        bg-linear-to-b from-white via-neutral-200 to-neutral-600"
      >
        About <span className="text-green-500">OMTECH</span>
      </motion.h2>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-stretch"
      >
        {/* Left Content */}
        <div className="leading-relaxed space-y-5 text-gray-300">
          <p>
            <strong className="text-white">OMTECH Hackathon</strong> is a flagship
            technical initiative organized by{" "}
            <strong>Omdayal Group of Institutions</strong>, aimed at fostering
            innovation, collaboration, and real-world problem-solving skills
            among students.
          </p>

          <p>
            The hackathon encourages participants to ideate, design, and develop
            creative solutions within a limited time frame, promoting teamwork,
            critical thinking, and technical excellence.
          </p>

          <p>
            The event will be conducted inside the{" "}
            <strong>college campus</strong> and is open to students with a passion
            for technology and innovation.
          </p>
        </div>

        {/* 🔥 Wobble Card */}
        <WobbleCard
          containerClassName="bg-gray-900 rounded-2xl p-6 h-full"
        >
          <div className="space-y-4 max-w-sm">
            <h3 className="text-xl font-semibold text-white">
              Team & Registration Guidelines
            </h3>

            <ul className="space-y-3 text-gray-300 text-x leading-relaxed">
              <li>👥 Each team must consist of <strong>3 to 5 members</strong>.</li>

              <li>
                🧑‍💼 Every team must have a{" "}
                <strong>Team Leader</strong>.
              </li>

              <li>
                📝 Only the <strong>Team Leader</strong> needs to complete
                registration.
              </li>

              <li>
                💰 Registration fee:{" "}
                <strong className="text-white">₹300 per team</strong>.
              </li>
            </ul>
          </div>
        </WobbleCard>

      </motion.div>
    </section>
  )
}
