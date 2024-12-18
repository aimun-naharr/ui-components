import GlowButton from "@/components/GlowButton";
import LitButton from "@/components/LitButton";
import RadioButton from "@/components/RadioButton";
import ShimmerButton2 from "@/components/ShimmerButon2";
import ShimmerButton from "@/components/ShimmerButton";
import ThemeSwitch from "@/components/ThemeSwitch";

const ButtonsPage = () => {
    return (
        <div className="bg-gray-200 h-screen pl-20 pt-20">
            <ThemeSwitch />
            <h1 className="text-2xl text-zinc-100 font-bold">Button variants</h1>
            <div className="my-10 space-y-8">

                <div>
                    <GlowButton width={300}>Place your order</GlowButton>
                </div>
                <div>
                    <ShimmerButton width={300}>Shimmer button</ShimmerButton>
                </div>
                <div>
                    <ShimmerButton2 width={300}>Purchase as gift</ShimmerButton2>
                </div>


                <div>
                    <LitButton>Lit button</LitButton>
                </div>
                <div>
                    <RadioButton />
                </div>
            </div>
        </div>
    );
};

export default ButtonsPage;