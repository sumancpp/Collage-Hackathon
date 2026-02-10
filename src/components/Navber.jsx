import React, { useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { IoMdMenu } from "react-icons/io"
import { IoClose } from "react-icons/io5"
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
        <a
          href="#hero"
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={logo}
            alt="OmTech Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="font-semibold text-white">OmTech</span>
        </a>


        {/* Links */}
        <div className="flex gap-6 text-sm">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="text-gray-300 hover:text-primary transition cursor-pointer hover:underline"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Registration Button */}
        <CustomButtonOne text="Register Now" />
      </motion.div>

      {/* ================= Mobile Navbar ================= */}
      <div className="lg:hidden">
        <motion.div
          animate={{
            backdropFilter: visible ? "blur(10px)" : "none",
            boxShadow: visible ? "0 10px 40px rgba(0,0,0,0.25)" : "none",
          }}
          className="flex items-center justify-between rounded-xl bg-black/80 px-4 py-3"
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


          {/* Menu Toggle */}
          {open ? (
            <IoClose
              className="text-2xl cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <IoMdMenu
              className="text-2xl cursor-pointer mr-1"
              onClick={() => setOpen(true)}
            />
          )}
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-2 rounded-xl bg-black px-6 py-6 space-y-5"
            >
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="block text-gray-300 hover:text-primary transition"
                >
                  {item.name}
                </a>
              ))}

              {/* Registration Button (mobile style consistent) */}
              <div onClick={() => setOpen(false)}>
                <CustomButtonOne text="Register Now" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
