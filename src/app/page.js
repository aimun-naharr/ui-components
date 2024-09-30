
import Container from "@/components/Container";
import MobbinCarousel from "@/components/MobbinCarousel";
import Link from "next/link";



export default function Home() {
  return (
    <div className=" my-10">
      <Container>
        <h1>Button variants</h1>
        <Link href={'/buttons'} className="bg-zinc-200 px-6 py-2">Explore Buttons</Link>

        <div className="my-10">
          <MobbinCarousel />
        </div>
      </Container>
    </div>
  );
}
