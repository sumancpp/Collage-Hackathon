"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card"
import { EncryptedText } from "../components/ui/encrypted-text"


export default function Prizes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section ref={ref} id="prizes" className="py-24 px-8 bg-black">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4
        bg-clip-text text-transparent
        bg-linear-to-b from-white via-neutral-200 to-neutral-600"
      >
        Prize <span className="text-green-500">Pool</span>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        Compete with the best teams and stand a chance to win exciting cash prizes
        along with recognition and certificates.
      </motion.p>

      {/* Prize Cards */}
      <div className="flex justify-center gap-10 flex-wrap">

        {/* 🥇 First Prize */}
        <CardContainer>
          <CardBody className="bg-linear-to-b from-yellow-400/20 to-gray-900
            border border-yellow-400/30 rounded-2xl p-8 w-64 text-center">

            <CardItem translateZ="60" className="text-4xl mb-3">
              🥇
            </CardItem>

            <CardItem translateZ="40" className="text-xl font-semibold mb-1">
              First Prize
            </CardItem>

            <CardItem translateZ="160" className="text-yellow-400 text-2xl font-bold">
              ₹{isInView && (
                <EncryptedText
                  text="15000"
                  encryptedClassName="text-yellow-400/40"
                  revealedClassName="text-yellow-400"
                  revealDelayMs={40}
                />
              )}
            </CardItem>


          </CardBody>
        </CardContainer>

        {/* 🥈 Second Prize */}
        <CardContainer>
          <CardBody className="bg-linear-to-b from-gray-300/20 to-gray-900
            border border-gray-300/30 rounded-2xl p-8 w-64 text-center">

            <CardItem translateZ="60" className="text-4xl mb-3">
              🥈
            </CardItem>

            <CardItem translateZ="40" className="text-xl font-semibold mb-1">
              Second Prize
            </CardItem>

            <CardItem translateZ="160" className="text-gray-200 text-2xl font-bold">
              ₹{isInView && (
                <EncryptedText
                  text="10000"
                  encryptedClassName="text-gray-400/40"
                  revealedClassName="text-gray-200"
                  revealDelayMs={40}
                />
              )}
            </CardItem>

          </CardBody>
        </CardContainer>

        {/* 🥉 Third Prize */}
        <CardContainer>
          <CardBody className="bg-linear-to-b from-orange-400/20 to-gray-900
            border border-orange-400/30 rounded-2xl p-8 w-64 text-center">

            <CardItem translateZ="60" className="text-4xl mb-3">
              🥉
            </CardItem>

            <CardItem translateZ="40" className="text-xl font-semibold mb-1">
              Third Prize
            </CardItem>

            <CardItem translateZ="160" className="text-orange-400 text-2xl font-bold">
              ₹{isInView && (
                <EncryptedText
                  text="5000"
                  encryptedClassName="text-orange-400/40"
                  revealedClassName="text-orange-400"
                  revealDelayMs={40}
                />
              )}
            </CardItem>

          </CardBody>
        </CardContainer>

      </div>

      {/* Extra Notes */}
      {/* Extra Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 text-center max-w-3xl mx-auto"
      >
        <p className="text-gray-400 mb-6">
          In addition to the main hackathon prizes,{" "}
          <strong className="text-white">exciting rewards</strong> will be given in
          the following categories:
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            💻 Coding Contest
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            🧠 Technical Quiz
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            🧩 Technical Puzzle
          </span>

          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
            ⚽ E-Football Tournament
          </span>

        </div>
      </motion.div>

    </section>
  )
}
