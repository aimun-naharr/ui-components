import GirlWithBooks from '@/assets/girl-reading-books.avif';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from 'next/image';
import { useRef } from "react";
gsap.registerPlugin( ScrollTrigger )

const WavyImage = () => {
    const imgRef = useRef( null )
    useGSAP( () => {
        // GSAP animation for feTurbulence baseFrequency
        gsap.to( "#feTurbulence-effect", {
            attr: {
                baseFrequency: 0.0, // Animate to a higher value
            },
            duration: 0.5,
            scrollTrigger: {
                trigger: imgRef.current,
                start: "top bottom",
                end: "bottom 70%",
                scrub: true,

            },
        } );
    }, [] );
    return (
        <div>
            <svg
                className="hidden"
                width="200"
                height="200"
                viewBox="0 0 220 220"
            >
                <filter id="displacementFilter">
                    <feTurbulence
                        id="feTurbulence-effect"
                        baseFrequency="0.05" numOctaves="3" result="turbulence" />
                    <feDisplacementMap
                        in2="turbulence"
                        in="SourceGraphic"
                        scale="50"
                        xChannelSelector="R"
                        yChannelSelector="G" />
                </filter>
            </svg>

            <Image
                ref={imgRef}
                loading="lazy"

                className='  object-cover wavy-image rounded-md'
                src={GirlWithBooks}
                alt="a girl reading books" />
        </div>
    );
};

export default WavyImage;