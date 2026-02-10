import React from "react"
import { FaArrowRight } from "react-icons/fa"

export default function CustomButtonOne({ text = "Register Now" }) {
  return (
    <a href="#register" className="relative group inline-block">
      <div className="relative p-[1.5px] rounded-2xl overflow-hidden bg-neutral-900">
        <button
          type="button"
          className="
            relative px-6 py-2 rounded-[14.5px]
            bg-black transition-all duration-200
            group-hover:bg-neutral-950
            active:scale-95
            flex items-center gap-2
            cursor-pointer w-full
            hover:scale-105
          "
        >
          <p className="text-white text-sm font-bold tracking-tight">
            {text}
          </p>
          <FaArrowRight className="text-white text-sm" />
        </button>
      </div>
    </a>
  )
}
