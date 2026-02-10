import React from "react"
import { motion } from "framer-motion"
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black border-t border-gray-800 py-10 px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        {/* Center Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm text-center"
        >
          Organized by{" "}
          <span className="text-white font-semibold">Omdayal Members</span>
          <br />
          © 2025 All Rights Reserved
        </motion.p>

        {/* Social Links */}
        <div className="flex gap-6">
          {[
            {
              icon: <FaFacebookF />,
              link: "https://facebook.com/omdayal",
              color: "hover:text-blue-500",
            },
            {
              icon: <FaInstagram />,
              link: "https://instagram.com/omdayal",
              color: "hover:text-pink-500",
            },
            {
              icon: <FaLinkedinIn />,
              link: "https://www.linkedin.com/in/suman-maity-b84879292/",
              color: "hover:text-blue-400",
            },
            {
              icon: <FaEnvelope />,
              link: "mailto:suumaan@zohomail.in",
              color: "hover:text-red-400",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.2 }}
              className={`text-gray-400 transition text-lg hover:scale-150 ${item.color}`}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

      </div>
    </motion.footer>
  )
}
