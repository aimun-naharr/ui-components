import glowingStar from '@/assets/glowingStar.svg'
import Image from 'next/image'

export default function GlowButton( { children = 'button', width = 100 } ) {
  const afterContentHeight = width + 20
  return (
    <button className='relative group'>
      <div className='border-b border-r border-r-[#128AA9] border-b-[#128AA9] size-2 absolute bottom-0 right-0'></div>
      <Image width={40} src={glowingStar} alt='glowing star' className='absolute -top-[15px] -right-[10px] z-[20] group-hover:animate-spin-scale opacity-0' />
      <Image width={40} src={glowingStar} alt='glowing star' className='absolute -bottom-[10px] -left-[15px] z-[20] group-hover:animate-spin-scale opacity-0 animation-delay-75 ' />
      <div
        style={{
          '--glow-btn-after-content-height': `${afterContentHeight}px`,
          '--glow-btn-content-width': `${width}px`
        }}
        className="glow-btn bg-[#3AB0D026] glow-btn-outer-clip  transparent  p-[4px] overflow-hidden text-white  relative group-hover:after:content-[''] group-hover:after:absolute group-hover:after:glow-effect group-hover:after:h-[--glow-btn-after-content-height] group-hover:after:w-[2rem] group-hover:after:top-1/2 group-hover:after:left-1/2 group-hover:after:-translate-x-1/2 group-hover:after:-translate-y-1/2 group-hover:after:rotate-[45deg] group-hover:after:animate-rotate-full  ">

        <div className='p-[1.5px] bg-[#176D87] glow-btn-clip z-[10] relative'>
          <div className="px-6 py-2 bg-gradient-to-b from-[#118AA9] from-10% to-90% to-[#1A5A70]  font-semibold relative  w-[--glow-btn-content-width]   glow-btn-clip text-shadow">

            {children}
          </div>
        </div>
      </div>
    </button>
  )
}
