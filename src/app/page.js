import GlowButton from "@/components/GlowButton";
import ShimmerButton2 from "@/components/ShimmerButon2";
import ShimmerButton from "@/components/ShimmerButton";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-zinc-100 font-bold">Button variants</h1>
      <div className="my-10 flex flex-wrap gap-8">

        <GlowButton width={300}>Place your order</GlowButton>
        <ShimmerButton width={300}>Shimmer button</ShimmerButton>
        <ShimmerButton2 width={300}>Purchase as gift</ShimmerButton2>
      </div>
    </div>
  );
}
