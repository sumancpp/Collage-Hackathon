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
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
      >
        Event <span className="text-primary">Schedule</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-4xl mx-auto text-center text-gray-300 mb-14 leading-relaxed"
      >
        The OMTECH Hackathon will be conducted over <strong>two consecutive days</strong>,
        providing participants with an immersive experience in innovation,
        problem-solving, and technical excellence. Alongside the hackathon,
        several on-spot registration events will be organized to encourage
        wider participation.
      </motion.p>

      {/* Hackathon Topics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-5xl mx-auto mb-16 bg-black rounded-2xl p-6"
      >
        <h3 className="text-xl font-semibold mb-4 text-white">
          Hackathon Problem Domains
        </h3>

        <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
          <li>• Artificial Intelligence & Machine Learning</li>
          <li>• Web & Mobile Application Development</li>
          <li>• Cyber Security & Data Privacy</li>
          <li>• Smart Campus & IoT Solutions</li>
          <li>• Sustainable Technology & Green Energy</li>
          <li>• Open Innovation (Any Domain)</li>
        </ul>
      </motion.div>

      {/* Day-wise Events */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Day 1 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-black rounded-2xl"
        >
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Day 1 – 17 March
          </h3>

          <p className="text-gray-300 mb-3">
            On the first day, participants can take part in the following
            technical events through <strong>on-spot registration</strong>:
          </p>

          <ul className="text-gray-300 space-y-2">
            <li>• Coding Competition – Entry Fee: ₹30</li>
            <li>• Debugging Challenge – Entry Fee: ₹30</li>
            <li>• Technical Quiz – Entry Fee: ₹20</li>
          </ul>
        </motion.div>

        {/* Day 2 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 bg-black rounded-2xl"
        >
          <h3 className="text-xl font-semibold mb-4 text-primary">
            Day 2 – 18 March
          </h3>

          <p className="text-gray-300 mb-3">
            The second day will focus on analytical thinking and competitive
            gaming events:
          </p>

          <ul className="text-gray-300 space-y-2">
            <li>• Technical Puzzle Solving – Entry Fee: ₹30</li>
            <li>• E-Football Tournament – Entry Fee: ₹20</li>
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
        <span className="inline-block px-6 py-3 rounded-full bg-primary/20 border border-primary text-primary font-semibold">
          Special Offer: Participate in all events for just ₹80
        </span>
      </motion.div>
    </section>
  )
}
