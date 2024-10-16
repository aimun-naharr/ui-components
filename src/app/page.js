'use client'
import Container from "@/components/Container";
import MobbinCarousel from "@/components/MobbinCarousel";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";



export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const initialPath = `M36,0 L170,0 C217.34,0 217.34,72 170,72 L36,72 C-11.34,72 -11.34,0 36,0`
  const forwardPath = `M36,0 L170,0 C270.34,0 270.34,72 170,72 L36,72 C-11.34,72 -11.34,0 36,0`
  const backwardPath = `M36,0 L170,0 C150.34,0 150.34,72 170,72 L36,72 C-11.34,72 -11.34,0 36,0`

  const pathAnimation = {
    initial: {
      d: initialPath
    },
    enter: (delay = 0) => ({
      d: [backwardPath, initialPath],
      transition: {
        duration: 0.2,
        // ease: 'linear',
        // ease: [.66, -0.21, .34, 1.79],
        delay: delay,
        type: 'spring',
        stiffness: '170',
        damping: 7,
        mass: 0.5
      }
    }),
    // exit: {
    //   d: initialPath
    // }
  }
  // cubic-bezier(.66,-0.21,.34,1.79)

  return (
    <div className=" my-10">
      <Container>
        <h1 className="mb-4 font-semibold">Button variants</h1>
        <Link
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href={'/buttons'} className=" relative  rounded   z-[2] text-black text-xl  w-full h-full group">

          <span className="absolute inline-block text-xl group-hover:-translate-x-2 transition-transform duration-300 top-[20px] left-[34px] whitespace-nowrap">
            Explore Buttons
          </span>
          <span className="absolute inline-block text-xl group-hover:-translate-x-8 opacity-0 group-hover:opacity-[1] transition-transform duration-300 top-[30px] left-[204px] whitespace-nowrap">
            <ChevronRight size={16} />
          </span>
          {/* <span><ChevronRight /></span> */}

          {/* btn-inner */}
          <svg
            width="10"
            height="10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg" className="button-svg absolute top-0 left-0 -z-[1]" overflow="visible"
            preserveAspectRatio="none"

            style={{ width: '140px', height: '60px' }}>
            <motion.path custom={-0.1} variants={pathAnimation} initial={'initial'} animate={isHovered ? 'enter' : 'initial'} className=" btn-plain__path js-background-path"></motion.path>
            <motion.path variants={pathAnimation} initial={'initial'} animate={isHovered ? 'enter' : 'initial'} className=" btn-plain__path js-background-path">

            </motion.path>
          </svg>

        </Link>

        {/* <div className="my-10">
          <h1 className="mb-4 font-semibold">Mobbin carousel</h1>
          <MobbinCarousel />
        </div> */}
      </Container>
    </div >
  );
}
