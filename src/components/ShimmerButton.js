
import React from 'react'

export default function ShimmerButton({ children = 'button', width = 100 }) {
  return (
    <button className='relative group '>
      <div className='border-b border-r border-r-[#128AA9] border-b-[#128AA9] size-2 absolute bottom-0 right-0 group-hover:border-b-2 group-hover:border-r-2'></div>

      <div
        style={{

          '--glow-btn-content-width': `${width}px`
        }}
        className="glow-btn bg-[#3AB0D026] group-hover:bg-[#218da8a6]  transparent  p-[4px] overflow-hidden text-white  relative transition-colors duration-500 glow-btn-clip
         ">


        <div className='p-[1.5px] bg-[#176D87] glow-btn-clip'>
          <div className="px-6
        py-2
        bg-gradient-to-b
        from-[#118AA9]
        from-10% to-90%
        to-[#1A5A70]

        font-semibold
        relative
        z-[10]
        w-[--glow-btn-content-width]
        overflow-hidden
        text-shadow
        after:content-['']
        after:absolute
        after:w-full
        after:h-10
        after:-rotate-[45deg]
        after:translate-x-0
        after:shimmer-effect
        after:top-0
        after:-left-1/2
        after:animate-shimmer
        after:z-[2]

          glow-btn-clip
        ">

            {children}
          </div>
        </div>
      </div>
    </button>
  )
}

// border
// border - [#176D87]