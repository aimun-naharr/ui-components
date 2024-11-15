'use client'
import Container from "@/components/Container";
import Diary from "@/components/diary";
import SpringButton from "@/components/SpringButton";
import Link from "next/link";



export default function Home() {




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
        <div className="mt-40">
          <Diary />
        </div>
      </Container>
    </div >
  );
}
