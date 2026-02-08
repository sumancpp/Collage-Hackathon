import React from "react"
import { motion } from "framer-motion"
import qrCode from "../assets/qr.png"
import { FaRegClipboard } from "react-icons/fa"



export default function Register() {
  return (
    <section
      id="register"
      className="py-24 bg-gray-900 text-center px-8"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Register <span className="text-primary">Now</span>
      </motion.h2>

      {/* Info */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-300 mb-10 max-w-xl mx-auto"
      >
        Hackathon participation is team-based. Each team must consist of
        <strong> 3 to 5 members</strong>. Registration should be completed by the
        team leader only.
      </motion.p>

      {/* Links Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Registration Link */}
        <a
          href="https://register-hackathon.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition underline"
        >
          <FaRegClipboard className="text-lg" />
          <span>Registration Form</span>
        </a>


        {/* Payment QR Code */}
        <div className="mt-6 flex flex-col items-center">
          <p className="text-gray-400 mb-4 text-center">
            Scan the QR code below to complete the registration payment
          </p>

          <div className="bg-black border-2 border-dashed border-primary p-4 rounded-xl">
            <img
              src={qrCode}
              alt="Payment QR Code"
              className="w-36 h-36 object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>


        {/* Documents */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 w-full max-w-xl">
          <a
            href="https://example.com/omtech-ppt-format"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-black border border-gray-700 px-6 py-4 rounded-xl hover:border-primary transition"
          >
            <h4 className="font-semibold mb-1 underline">PPT Format</h4>
            <p className="text-sm text-gray-400">
              Download the official presentation format
            </p>
          </a>

          <a
            href="https://example.com/omtech-noc-form"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-black border border-gray-700 px-6 py-4 rounded-xl hover:border-primary transition"
          >
            <h4 className="font-semibold mb-1 underline">NOC Form</h4>
            <p className="text-sm text-gray-400">
              Download and submit the signed NOC form
            </p>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
