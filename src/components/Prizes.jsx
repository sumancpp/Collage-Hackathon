import React from "react"
import { motion } from "framer-motion"

export default function Prizes() {
  return (
    <section
      id="prizes"
      className="py-24 px-8 bg-black"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Prize <span className="text-primary">Pool</span>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        Compete with the best teams and stand a chance to win exciting cash
        prizes along with recognition and certificates.
      </motion.p>

      {/* Prize Cards */}
      <div className="flex justify-center gap-8 flex-wrap">
        {/* First Prize */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.08 }}
          className="bg-gradient-to-b from-yellow-400/20 to-gray-900 p-8 rounded-2xl text-center w-64 border border-yellow-400/30"
        >
          <div className="text-4xl mb-3">🥇</div>
          <h3 className="text-xl font-semibold mb-1">First Prize</h3>
          <p className="text-2xl font-bold text-yellow-400">₹15,000</p>
        </motion.div>

        {/* Second Prize */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.08 }}
          className="bg-gradient-to-b from-gray-300/20 to-gray-900 p-8 rounded-2xl text-center w-64 border border-gray-300/30"
        >
          <div className="text-4xl mb-3">🥈</div>
          <h3 className="text-xl font-semibold mb-1">Second Prize</h3>
          <p className="text-2xl font-bold text-gray-200">₹10,000</p>
        </motion.div>

        {/* Third Prize */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.08 }}
          className="bg-gradient-to-b from-orange-400/20 to-gray-900 p-8 rounded-2xl text-center w-64 border border-orange-400/30"
        >
          <div className="text-4xl mb-3">🥉</div>
          <h3 className="text-xl font-semibold mb-1">Third Prize</h3>
          <p className="text-2xl font-bold text-orange-400">₹5,000</p>
        </motion.div>
      </div>

      {/* Extra Events Trophy Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 text-center max-w-3xl mx-auto"
      >
        <p className="text-gray-400">
          In addition to the main hackathon prizes, <strong className="text-white">
          trophies and certificates</strong> will be awarded to winners of the
          <strong> Coding, Debugging, Technical Quiz, Technical Puzzle Solving,</strong>
          and <strong>E-Football</strong> competitions, recognizing excellence
          in each individual event.
        </p>
      </motion.div>
    </section>
  )
}
