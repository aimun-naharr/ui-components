'use client'
import Container from "@/components/Container";
import MobbinCarousel from "@/components/MobbinCarousel";
import SpringButton from "@/components/SpringButton";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";



export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const initialPath = `M36,0 L170,0 C217.34,0 217.34,72 170,72 L36,72 C-11.34,72 -11.34,0 36,0`
  const forwardPath = `M36,0 L170,0 C250.34,0 250.34,72 170,72 L36,72 C-11.34,72 -11.34,0 36,0`
  const backwardPath = `M36,0 L170,0 C178.34,0 178.34,72 170,72 L36,72 C-11.34,72 -11.34,0 36,0`



  const pathAnimation = {
    initial: {
      d: initialPath
    },
    enter: (delay = 0) => ({
      d: [backwardPath, initialPath],
      transition: {
        duration: 0.2,
        delay: delay,
        // ease: [.95, -0.15, .19, 2.01],
        type: 'spring',
        stiffness: 250,
        damping: 5,
        mass: 0.5
      }
    }),

  }
  // cubic-bezier(.95,-0.15,.19,2.01)

  return (
    <div className=" my-10">
      <Container>
        <h1 className="mb-1 font-semibold text-4xl ">Button variants</h1>
        <p
          className="">
          Inspired by  <Link className="text-blue-500 italic underline" href={'https://nodcoding.com/'} target='_blank'>Nod coding</Link>
        </p>
        <div className="relative mt-4">
          <SpringButton />
        </div>
      </Container>
    </div >
  );
}
