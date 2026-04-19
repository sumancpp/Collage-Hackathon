import React from "react"
import { motion } from "framer-motion"

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="py-24 bg-gray-900 px-8"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-center
        bg-clip-text text-transparent
        bg-linear-to-b from-white via-neutral-200 to-neutral-600"
      >
        Event <span className="text-primary text-green-500">Schedule</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-4xl mx-auto text-center text-gray-300 mb-14 leading-relaxed"
      >
        The <strong>OMTECH Hackathon</strong> will be conducted over{" "}
        <strong>two consecutive days</strong>, providing participants with an
        immersive experience in innovation, problem-solving, and technical
        excellence. Alongside the hackathon, several{" "}
        <strong>on-spot registration events</strong> will be organized to
        encourage wider participation.
        <br /><br />

        📅 <strong className="font-extrabold">Online Screening Round:</strong>{" "}
        <span className="text-green-400 font-extrabold">
          7th & 8th May, 2026
        </span>
        <br />

        🏆 <strong className="font-extrabold">Result Announcement:</strong>{" "}
        <span className="text-yellow-400 font-extrabold">
          14th May, 2026
        </span>
      </motion.p>

      {/* Hackathon Topics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="
    relative max-w-5xl mx-auto mb-16 p-8 rounded-2xl
    bg-black/80 backdrop-blur
    border border-white/10
  "
      >
        {/* Glow Border */}
        <div className="absolute -inset-0.5 rounded-2xl opacity-20 blur pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center
      bg-clip-text text-transparent
      bg-linear-to-b from-white via-neutral-100 to-neutral-600">
            Hackathon Problem Domains
          </h3>
          {/* 🔥 Highlighted Final Round Date */}
          <div className="mt-10 text-center">
            <p className="text-gray-400 mb-2">Final Round (Offline)</p>
            <p className="text-xl md:text-2xl font-semibold text-green-400">
              📅 22nd & 23rd May, 2026
            </p>
          </div>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-200 mt-10">
            {[
              "AI-Driven Innovations in Agriculture",
              "Smart Healthcare Using AI, Machine Learning & IoT",
              "AI for Social Media Analytics & Insights",
              "Advanced Networking & Cybersecurity",
              "Web 3.0: Decentralized Technologies & Blockchain",
              "Intelligent Safety Systems Using AI, Machine Learning & IoT",
              "Open Innovation",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl
          bg-white/5 hover:bg-white/10
          transition hover:scale-110"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-green-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>


        </div>
      </motion.div>


      {/* Day-wise Events */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Day 1 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-black rounded-2xl hover:scale-105"
        >
          <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold text-center">
            <span className="text-white">Day 1</span>

            <span
              className="
        px-4 py-1.5 rounded-full
        border border-primary/40
        bg-primary/10
        text-primary
        text-sm font-semibold
        shadow-[0_0_18px_-8px_rgba(34,197,94,0.7)]
      "
            >
              22 May
            </span>
          </h3>

          <p className="text-gray-300 mb-3">
            On the first day, participants can take part in the following technical
            events through <strong>on-spot registration (cash only)</strong>:
          </p>

          <ul className="text-gray-300 space-y-2 font-bold">
            <li>💻 Coding Competition – Entry Fee: ₹30</li>
            <li>🧠 Technical Quiz – Entry Fee: ₹20</li>
          </ul>
        </motion.div>

        {/* Day 2 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-black rounded-2xl hover:scale-105"
        >
          <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold text-center">
            <span className="text-white">Day 2</span>

            <span
              className="
        px-4 py-1.5 rounded-full
        border border-primary/40
        bg-primary/10
        text-primary
        text-sm font-semibold
        shadow-[0_0_18px_-8px_rgba(34,197,94,0.7)]
      "
            >
              23 May
            </span>
          </h3>

          <p className="text-gray-300 mb-3">
            The second day will focus on analytical thinking and competitive gaming
            events through <strong>on-spot registration (cash only)</strong>:
          </p>

          <ul className="text-gray-300 space-y-2 font-bold">
            <li>🧩 Technical Puzzle Solving – Entry Fee: ₹30</li>
            <li>⚽ E-Football Tournament – Entry Fee: ₹20</li>
          </ul>
        </motion.div>
      </div>

      {/* Highlight Offer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-14 text-center"
      >
        {/* Glow Background */}
        <div className="relative inline-block">

          {/* Outer Glow */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 opacity-30 blur-xl"></div>

          {/* Main Badge */}
          <span
            className="
        relative inline-block px-6 py-3 rounded-full
        bg-black/70 backdrop-blur
        border border-green-400/40
        text-green-400 font-semibold
        shadow-[0_0_25px_rgba(34,197,94,0.6)]
        hover:shadow-[0_0_40px_rgba(34,197,94,0.9)]
        transition duration-300
      "
          >
            🎉 Special Offer: Participate in all events for just{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-white font-bold inline-block"
            >
              ₹80
            </motion.span>
          </span>

        </div>
      </motion.div>
    </section>
  )
}
