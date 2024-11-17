'use client'
import { cubicBezier, motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const Diary = () => {
    const diaryContainer = useRef( null )
    const mouseX_value = useMotionValue( 0 )
    const handleMouseMove = ( e ) => {
        const diaryRect = diaryContainer.current?.getBoundingClientRect();

        const mouseX = e.clientX - diaryRect.left;
        const divWidth = diaryRect.width;
        const normalizedX = Math.max( 0, Math.min( 1, mouseX / divWidth ) );
        mouseX_value.set( normalizedX )
    }

    const pageRotation = useTransform( mouseX_value, [0, 1], [-164, 0], { ease: cubicBezier( 0.17, 0.67, 0.83, 0.67 ) } );
    const transform = useMotionTemplate`rotate3d(0, 109064, -10, ${pageRotation}deg)`
    console.log( 'pagerot', pageRotation )
    // motion
    return (
        <div

            className="w-full mr-auto bg-[#F0ECE6] pt-10 pb-36 px-10 rounded-xl"
        >
            <h1 className="mb-20 text-4xl font-bold text-center text-amber-800">Hover on pages!!</h1>
            <div
                ref={diaryContainer}
                onMouseMove={handleMouseMove} className="bg-zinc-100 w-3/5 mx-auto h-[400px] rounded-3xl shadow-md ">
                <div className=" -rotate-[8deg] flex rounded-3xl shadow-2xl diary-pages bg-white">
                    <div className="h-[400px]    w-1/2 bg-white rounded-tl-md rounded-bl-md">

                    </div>
                    <motion.div
                        style={{ transform: transform }}
                        className="h-[400px] border-l-2 rounded-tr-md rounded-br-md   w-1/2 bg-white page">

                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Diary;