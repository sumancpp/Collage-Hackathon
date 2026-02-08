import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoMdMenu } from "react-icons/io"
import { HiX } from "react-icons/hi"
import logo from "../assets/logo.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full bg-black/70 backdrop-blur z-50 px-6 py-4 flex justify-between items-center"
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Omdyal Hackathon Logo"
        className="h-10 object-contain rounded-full"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm">
        <a href="#home" className="hover:text-primary transition hover:underline">Home</a>
        <a href="#about" className="hover:text-primary transition hover:underline">About</a>
        <a href="#register" className="hover:text-primary transition font-bold hover:scale-105">Registration</a>
        <a href="#contact" className="hover:text-primary transition hover:underline">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden text-3xl mr-3"
      >
        <IoMdMenu />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-64 bg-black z-50 p-6 flex flex-col gap-6"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-2xl"
            >
              <HiX />
            </button>

            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a className='font-bold underline' href="#register" onClick={() => setMenuOpen(false)}>Registration</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
