import React, { useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import logo from "../assets/logo.png"
import CustomButtonOne from "./CustomButtonOne"

export default function Navbar() {
  const ref = useRef(null)
  const { scrollY } = useScroll({ target: ref })
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100)
  })

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Prizes", link: "#prizes" },
    { name: "Schedule", link: "#schedule" },
    { name: "Contact", link: "#contact" },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 mx-auto max-w-6xl px-4"
    >
      {/* ================= Desktop Navbar ================= */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 10px 40px rgba(0,0,0,0.25)"
            : "none",
          y: visible ? 10 : 0,
          width: visible ? "85%" : "100%",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className="mx-auto hidden items-center justify-between rounded-full px-6 py-3 lg:flex bg-black"
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="OmTech Logo" className="h-10 w-10 rounded-full" />
          <span className="font-semibold text-white">OmTech</span>
        </a>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="text-gray-300 hover:text-green-400 transition cursor-pointer hover:underline hover:scale-110"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Button */}
        <CustomButtonOne text="Register Now" />
      </motion.div>

      {/* ================= Mobile Navbar ================= */}
      <div className="lg:hidden">

        {/* Top Bar */}
        <motion.div
          animate={{
            backdropFilter: visible ? "blur(10px)" : "none",
            boxShadow: visible
              ? "0 10px 40px rgba(0,0,0,0.25)"
              : "none",
          }}
          className="flex items-center justify-between px-4 py-3 bg-black/80 rounded-xl"
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="OmTech Logo"
              className="h-9 w-9 rounded-full"
            />
            <span className="font-semibold text-white">OmTech</span>
          </a>

          {/* Animated Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="relative w-8 h-8 flex items-center justify-center z-[90]"
          >
            <span
              className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </motion.div>

        {/* ================= Full Screen Menu ================= */}
        <div
          className={`fixed top-16 left-0 w-full h-[calc(100vh-4rem)] z-40 
          bg-black/95 backdrop-blur-lg
          flex flex-col items-center justify-center gap-8
          transition-all duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setOpen(false)}
              className="text-3xl font-bold text-gray-200 hover:text-green-400 transition transform hover:scale-120"
            >
              {item.name}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfIE_wFn7svABJa7Zuu6lUiaPcoXNFS8Ry3gAucSJG2Qws3_Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-8 py-3 rounded-xl font-bold 
            text-green-400 border border-green-400/50
            shadow-[0_0_20px_rgba(34,197,94,0.5)]
            hover:scale-110 hover:shadow-[0_0_35px_rgba(34,197,94,0.9)]
            transition duration-300"
          >
            🚀 Register Now
          </a>
        </div>

      </div>
    </motion.div>
  )
}