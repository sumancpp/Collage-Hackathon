import React from "react"
import { motion } from "framer-motion"

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
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        About <span className="text-primary">OMTECH Hackathon</span>
      </motion.h2>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 text-gray-300"
      >
        {/* Left Content */}
        <div className="leading-relaxed space-y-5">
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
            The event will be conducted inside the <strong>college campus</strong>
            and is open to students with a passion for technology and innovation.
          </p>
        </div>

        {/* Rules & Registration */}
        <div className="bg-gray-900 rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-semibold text-white mb-3">
            Team & Registration Guidelines
          </h3>

          <ul className="space-y-3">
            <li>👥 Each team must consist of <strong>3 to 5 members</strong>.</li>

            <li>
              🧑‍💼 Every team must have a <strong>Team Leader</strong>, who will
              be responsible for registration and communication.
            </li>

            <li>
              📝 Only the <strong>Team Leader</strong> is required to complete
              the registration process on behalf of the team.
            </li>

            <li>
              💰 The <strong>team registration fee</strong> for the hackathon is{" "}
              <strong>₹300 per team</strong>.
            </li>

          </ul>
        </div>
      </motion.div>
    </section>
  )
}
