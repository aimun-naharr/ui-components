'use client'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function SpringButton() {
  const [isHovered, setIsHovered] = useState(false)
  const initialPath = `M36,0 L170,0 C217.34,0 217.34,72 170,72 L36,72 C-11.34,72 -11.34,0 36,0`
  const forwardPath = `M36,0 L170,0 C250.34,0 250.34,72 170,72 L36,72 C-11.34,72 -11.34,0 36,0`
  const backwardPath = `M36,0 L170,0 C168.34,0 168.34,72 170,72 L36,72 C-11.34,72 -11.34,0 36,0`



  const pathAnimation = {
    initial: {
      d: initialPath
    },
    enter: (delay = 0) => ({
      d: [backwardPath, initialPath],
      transition: {
        duration: 0.1,
        delay: delay,
        // ease: [.95, -0.15, .19, 2.01],
        type: 'spring',
        stiffness: 250,
        damping: 5,
        mass: 0.5
      }
    }),

  }
  return (
    <Link
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={'/buttons'} className=" relative  rounded   z-[2] text-black text-xl  w-full h-full group ">

      <div className='relative  inline-block top-[20px] left-[16px] px-4'>
        <span className=" inline-block text-xl group-hover:-translate-x-2 font-semibold transition-transform duration-300  whitespace-nowrap">
          Explore Buttons
        </span>
        <span className="absolute inline-block text-xl group-hover:-translate-x-8 opacity-0 group-hover:opacity-[1] transition-transform duration-300 top-2 -right-8 whitespace-nowrap">
          <ChevronRight size={16} />
        </span>
      </div>
      {/* <span><ChevronRight /></span> */}

      {/* btn-inner */}
      <svg
        width="10"
        height="10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg" className="button-svg absolute top-0 left-0 -z-[1]" overflow="visible"
        preserveAspectRatio="none"

        style={{ width: '190px', height: '60px' }}>
        <motion.path custom={-0.1}
          variants={pathAnimation}
          initial={'initial'}
          // animate={isHovered ? 'enter' : 'initial'}
          className=" btn-plain__path js-background-path">

        </motion.path>
        <motion.path variants={pathAnimation} initial={'initial'} animate={isHovered ? 'enter' : 'initial'} className=" btn-plain__path js-background-path">

        </motion.path>
      </svg>

    </Link>
  )
}
