import React from "react"
import { motion } from "framer-motion"
import { FaEnvelope } from "react-icons/fa"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-black flex justify-center"
    >
      <motion.a
        href="mailto:suumaan@zohomail.in"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-xl cursor-pointer hover:scale-[1.02] transition"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Icon */}
          <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl mx-auto md:mx-0">
            <FaEnvelope />
          </div>

          {/* Mail Info */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">
              Email
            </h3>
            <p className="text-gray-400 break-all">
             suumaan@zohomail.in
            </p>
          </div>

          {/* Action (Visual only) */}
          <div className="px-6 py-2 rounded-lg bg-primary font-semibold text-center w-full md:w-auto">
            Send Mail
          </div>
        </div>
      </motion.a>
    </section>
  )
}
