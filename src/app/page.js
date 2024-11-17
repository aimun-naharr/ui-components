'use client'
import Container from "@/components/Container";
import Diary from "@/components/diary";
import SpringButton from "@/components/SpringButton";
import WavyImage from "@/components/WavyImage";
import Link from "next/link";



export default function Home() {




  // cubic-bezier(.95,-0.15,.19,2.01)

  return (
    <div className=" my-10">
      <Container>
        <div className="space-y-40">
          <div>
            <h1 className="heading-1 mb-1">Button variants</h1>
            <p
              className="">
              Inspired by  <Link className="text-blue-500 italic underline" href={'https://nodcoding.com/'} target='_blank'>Nod coding</Link>
            </p>
            <div className="relative mt-4">
              <SpringButton />
            </div>
          </div>
          <div className="">
            <h1 className="heading-1 mb-8">Diary</h1>
            <Diary />
          </div>
          <div>
            <h1 className="heading-1 mb-4">Wavy image effect</h1>
            <WavyImage />
          </div>
          <div className="h-screen"></div>
        </div>
      </Container>
    </div >
  );
}
