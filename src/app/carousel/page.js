import plant1 from '@/assets/images/plant1.avif';
import Image from 'next/image';
const Carousel = () => {
    return (
        <div className="w-full  bg-gray-200 h-screen">
            <div className="max-w-[1220px] pt-[100px] mx-auto">
                <div

                    className="w-full relative h-[600px]  bg-white after:content-[''] after:absolute after:h-20 after:w-1/4 after:bg-white after:top-[-80px] after:rounded-t-md rounded-r-md rounded-b-md before:content-[''] before:absolute before:size-6 before:transparent before:left-[303px]
                before:-top-[1.4rem] before:rounded-full carousel-custom-circle-shadow
                ">
                    <Image src={plant1} alt='plant-1' className='absolute right-0 h-full  object-cover rounded-md' />
                </div>
            </div>
        </div>
    );
};

export default Carousel;