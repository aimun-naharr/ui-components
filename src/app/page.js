
import Container from "@/components/Container";
import MobbinCarousel from "@/components/MobbinCarousel";
import Link from "next/link";



export default function Home() {
  return (
    <div className=" my-10">
      <Container>
        <h1 className="mb-4 font-semibold">Button variants</h1>
        <Link href={'/buttons'} className=" relative  rounded   z-[2] text-black text-xl  w-full h-full">

          <span className="absolute text-xl top-[20px] left-[34px] whitespace-nowrap">Explore Buttons</span>

          {/* btn-inner */}
          <svg
            width="10"
            height="10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg" className="button-svg absolute top-0 left-0 -z-[1]" overflow="visible"
            preserveAspectRatio="none"

            style={{ width: '140px', height: '60px' }}>
            <path d="M36,0 L170,0 C217.34,0 217.34,72 170,72 L36,72 C-11.34,72 -11.34,0 36,0" className="btn-plain__path js-background-path"></path>
            <path d="M36,0 L170,0 C217.34,0 217.34,72 170,72 L36,72 C-11.34,72 -11.34,0 36,0" className="btn-plain__path js-background-path">

            </path>
          </svg>

        </Link>

        {/* <div className="my-10">
          <h1 className="mb-4 font-semibold">Mobbin carousel</h1>
          <MobbinCarousel />
        </div> */}
      </Container>
    </div>
  );
}
