
import Image from 'next/image'
import React from 'react'
import gift from '@/assets/gift.svg'

export default function ShimmerButton2({ children = 'button', width = 100, height = 40 }) {
  return (
    <button className='relative group '>
      <div className='border-b border-r border-r-[#128AA9] border-b-[#128AA9] size-2 absolute bottom-0 right-0 group-hover:border-b-2 group-hover:border-r-2'></div>

      <div
        style={{

          '--glow-btn-content-width': `${width}px`,
          '--glow-btn-content-height': `${height}px`,
        }}
        className="glow-btn bg-[#3AB0D026] group-hover:bg-[#218da8a6]  transparent  p-[4px] overflow-hidden text-white  relative transition-colors duration-500 glow-btn-clip
         ">


        <div className='p-[1.5px] bg-[#176D87] glow-btn-clip'>

          <div
            className="
        bg-[linear-gradient(180deg,#156F89,15%,#1A4C5F,85%,#156F89)]
        font-semibold
        relative
        h-[--glow-btn-content-height]
        flex
        z-[10]
        w-[--glow-btn-content-width]
        overflow-hidden
        text-shadow

items-center
          glow-btn-clip
        ">
            <div className='h-full flex absolute w-10  bg-[linear-gradient(180deg,#156F89,15%,#1A5A70,85%,#156F89)] items-center justify-center'>
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