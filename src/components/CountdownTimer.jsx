import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!hasMounted) return null

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] === undefined) return

    timerComponents.push(
      <div
        key={interval}
        className="flex flex-col items-center mx-2 md:mx-4"
      >
        <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-b from-purple-400 to-pink-600 tracking-tighter">
          {String(timeLeft[interval]).padStart(2, "0")}
        </span>
        <span className="text-xs md:text-sm text-neutral-400 uppercase tracking-widest mt-1">
          {interval}
        </span>
      </div>
    )
  })

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex justify-center items-center mt-8 mb-4 p-4 border border-neutral-800 rounded-2xl bg-transparent backdrop-blur-sm"
    >
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-xl md:text-2xl font-bold text-white">
          Event Started!
        </span>
      )}
    </motion.div>
  )
}
