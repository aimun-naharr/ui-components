
import Image from 'next/image'
import React from 'react'
import gift from '@/assets/gift.svg'
import glowingStar from '@/assets/glowingStar.svg'


export default function ShimmerButton2({ children = 'button', width = 100, height = 40 }) {
  const afterContentHeight = width + 20
  return (
    <button className='relative group '>
      <div className='border-b border-r border-r-[#128AA9] border-b-[#128AA9] size-2 absolute bottom-0 right-0 group-hover:border-b-2 group-hover:border-r-2'></div>
      <Image width={40} src={glowingStar} alt='glowing star' className='absolute -top-[15px] -right-[10px] z-[20] group-hover:animate-spin-scale opacity-0' />
      <Image width={40} src={glowingStar} alt='glowing star' className='absolute -bottom-[10px] -left-[15px] z-[20] group-hover:animate-spin-scale opacity-0 animation-delay-75 ' />
      <div
        style={{

          '--glow-btn-content-width': `${width}px`,
          '--glow-btn-content-height': `${height}px`,
          '--glow-btn-after-content-height': `${afterContentHeight}px`,
        }}
        className="glow-btn bg-[#3AB0D026]  group-hover:bg-[linear-gradient(180deg,#105A6D,5%,#105A6D,98%,#105A6D)]  transparent  p-[4px] overflow-hidden text-white  relative transition-colors duration-500 glow-btn-outer-clip

        group-hover:after:content-[''] group-hover:after:absolute group-hover:after:glow-effect group-hover:after:h-[--glow-btn-after-content-height] group-hover:after:w-[2rem] group-hover:after:top-1/2 group-hover:after:left-1/2 group-hover:after:-translate-x-1/2 group-hover:after:-translate-y-1/2 group-hover:after:rotate-[45deg] group-hover:after:animate-rotate-full
         ">


        <div className='p-[1px] bg-[#176D87] group-hover:[#176D87] glow-btn-clip relative z-10'>

          <div
            className="
        bg-[linear-gradient(180deg,#156F89,5%,#1A4C5F,98%,#156F89)]
        font-semibold
        relative
        h-[--glow-btn-content-height]
        flex
        z-[10]
        w-[--glow-btn-content-width]
        overflow-hidden
        text-shadow items-center
          glow-btn-clip
          group-hover:bg-[linear-gradient(180deg,#118AA9,20%,#1A5A70)]

        ">
            <div className='h-full   flex absolute w-10 group-hover:bg-[linear-gradient(180deg,#3FCEE5,40%,#118AA9)]  bg-[linear-gradient(180deg,#156F89,10%,#1A5A70,104%,#156F89)] items-center justify-center'>
              <Image src={gift} width={20} height={20} alt='gift icon' />
            </div>
            <span className='pl-14'>{children}</span>
          </div>
        </div>
      </div>
    </button>
  )
}


// after: content - ['']
// after: absolute
// after: w - full
// after: h - 10
// after: -rotate - [45deg]
// after: translate - x - 0
// after: shimmer - effect
// after: top - 0
// after: -left - 1 / 2
// after: animate - shimmer
// after: z - [2]