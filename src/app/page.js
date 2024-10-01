
import Container from "@/components/Container";
import MobbinCarousel from "@/components/MobbinCarousel";
import Link from "next/link";



export default function Home() {
  return (
    <div className=" my-10">
      <Container>
        <h1 className="mb-4 font-semibold">Button variants</h1>
        <Link href={'/buttons'} className="bg-black text-white rounded shadow-md hover:shadow-yellow-200 transition-shadow px-6 py-3 shadow-yellow-100">Explore Buttons</Link>

        <div className="my-10">
          <h1 className="mb-4 font-semibold">Mobbin carousel</h1>
          <MobbinCarousel />
        </div>
      </Container>
    </div>
  );
}
