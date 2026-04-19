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
            <strong className="text-white">OMTECH 2026</strong> is a two-day technical
            hackathon organized by the <strong>Departments of CSE, AIML, and BCA</strong> at{" "}
            <strong>OmDayal Group of Institutions</strong>, scheduled on{" "}
            <strong>22nd–23rd May 2026</strong> at the college campus.
          </p>

          <p>
            The hackathon focuses on applications of <strong>AI, ML, Deep Learning</strong>,
            and <strong>Smart Technologies</strong>, while also welcoming innovative
            solutions across all emerging domains.
          </p>

          <p>
            The main event requires <strong>mandatory pre-registration</strong> and offers
            a platform for teams to design and develop impactful, real-world solutions
            within a limited time frame.
          </p>

          <p>
            In addition, exciting parallel events such as{" "}
            <strong>Coding Contest</strong>, <strong>Technical Quiz</strong>,{" "}
            <strong>Technical Puzzle</strong>, and{" "}
            <strong>E-Football Tournament</strong> will be conducted with{" "}
            <strong>on-spot registration</strong>.
          </p>

          <p>
            <strong>OMTECH 2026</strong> aims to foster innovation, technical excellence,
            and collaborative learning among aspiring technologists.
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

            <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">

              <li>
                👥 Each team can have a maximum of <strong>5 members</strong>.
              </li>

              <li>
                🧑‍🤝‍🧑 Every team must have a <strong>team name</strong> and a{" "}
                <strong>team leader</strong>.
              </li>

              <li>
                🧑‍💼 The <strong>team leader</strong> is responsible for completing the
                registration process.
              </li>

              <li>
                🎓 Participation is open to{" "}
                <strong>
                  Diploma (CS/IT/Commerce), UG (B.Sc/CS), MSc, B.Tech (CSE/IT/ECE/EE),
                  and PG (M.Tech/CSE/ECE/IT/EE)
                </strong>.
              </li>

              <li>
                📂 All teams must upload a <strong>PPT</strong> and a{" "}
                <strong>College Authorization Letter</strong> (signed by HOI).
              </li>

              <li>
                💰 Registration fee:{" "}
                <strong className="text-white">₹300 per team</strong>.
              </li>

              <li>
                📜 To receive an <strong>E-Certificate</strong>, teams must complete
                registration and participate in <strong>Round 1</strong>.
              </li>

              <li>
                🚫 One participant can be part of <strong>only one team</strong>.
              </li>

            </ul>
          </div>
        </WobbleCard>

      </motion.div>
    </section>
  )
}
