'use client'

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function MobbinCarousel() {
  const [activeItem, _setActiveItem] = useState(null)
  const isTransitioningRef = useRef(false)
  const carouselContainerRef = useRef(null)
  const carouselInnerContainerRef = useRef(null)
  const [scrollRight, setScrollRight] = useState(true);
  const [scrollLeft, setScrollLeft] = useState(false);
  console.log(activeItem)
  console.log(isTransitioningRef)
  const setActiveItem = useCallback(
    async (id) => {
      if (isTransitioningRef.current || id === activeItem) return;

      isTransitioningRef.current = true;
      if (document.startViewTransition) {
        const transition = document.startViewTransition(() => {
          flushSync(() => {
            _setActiveItem(id);
          });
        });
        await transition.finished;
      } else {
        _setActiveItem(id);
      }

      isTransitioningRef.current = false;
    },
    [activeItem],
  );

  const categories = [
    { id: 1, name: "Fashion & Apparel", description: "Clothing, footwear, accessories, and jewelry" },
    { id: 2, name: "Beauty & Skincare", description: "Skincare products, makeup, personal care items" },
    { id: 3, name: "Electronics & Gadgets", description: "Smartphones, laptops, smart home devices, wearables" },
    { id: 4, name: "Home & Kitchen", description: "Furniture, decor, appliances, cookware" },
    { id: 5, name: "Health & Wellness", description: "Supplements, fitness equipment, wellness products" },
    { id: 6, name: "Toys & Games", description: "Children's toys, board games, puzzles" },
    { id: 7, name: "Sports & Outdoors", description: "Outdoor gear, sports equipment, fitness gear" },
    { id: 8, name: "Books & Media", description: "Physical books, eBooks, music, movies" },
    { id: 9, name: "Grocery & Food", description: "Organic foods, gourmet products, snacks, beverages" },
    { id: 10, name: "Pet Supplies", description: "Food, accessories, grooming products for pets" }
  ];

  const handleNextBtn = () => {
    const carouselContainer = carouselContainerRef.current;
    const carouselInnerContainer = carouselInnerContainerRef.current;

    // Get dimensions of both containers
    const containerRect = carouselContainer.getBoundingClientRect();
    const innerContainerRect = carouselInnerContainer.getBoundingClientRect();

    console.log(containerRect);

    // Calculate scrollable distance to the right
    const scrollRight = innerContainerRect.width - containerRect.width;

    console.log(scrollRight);

    // Check if the container can scroll right or left
    const currentScrollLeft = carouselInnerContainer.scrollLeft;
    setScrollRight(currentScrollLeft + containerRect.width < innerContainerRect.width);
    setScrollLeft(currentScrollLeft > 0 && true);

    // Update CSS variable --x with the scrollRight value
    document.documentElement.style.setProperty('--x', `-${scrollRight}px`);

    // Log the current scrollLeft of the inner container
    console.log(currentScrollLeft);
  };
  return (
    <div>
      <div ref={carouselContainerRef} className="relative overflow-x-clip text-sm">
        <ul ref={carouselInnerContainerRef} onMouseLeave={() => setActiveItem(null)} className='flex translate-x-[--x] gap-2 relative  py-2  w-max transition-transform duration-300'>
          <li onPointerEnter={() => setActiveItem(null)} className="px-6 py-2 bg-black text-white rounded-full">All</li>
          {
            categories.map(itm => {
              return <li onPointerEnter={() => setActiveItem(itm.id)} className='border whitespace-nowrap relative group px-6 py-2 cursor-pointer rounded-full font-semibold' key={itm.id}>
                <Link
                  aria-expanded={activeItem === itm.id} className="peer" href='#'>
                  {itm.name}
                </Link>
                <div className="shadow-lg absolute mt-1 hidden pointer-events-none top-full left-1/2 -translate-x-1/2  border  floating-card peer-aria-expanded:block p-3 rounded">
                  <div className="w-[250px] h-[150px] rounded bg-gray-100">

                  </div>
                  <p className="mt-2 text-xs text-wrap text-gray-500">{itm.description}</p>
                </div>
              </li>
            })
          }

        </ul>
        <div onPointerEnter={() => setActiveItem(null)} className="w-48 h-full floating-card-next-btn  absolute top-0 right-0 ">
          <button onClick={handleNextBtn} className="size-10 top-1/2 -translate-y-1/2 rounded-full bg-transparent hover:bg-gray-100 absolute right-4 flex items-center justify-center">
            <ArrowRight size={16} />
          </button>
        </div>
        {scrollLeft && <div onPointerEnter={() => setActiveItem(null)} className="w-48 h-full  floating-card-prev-btn  absolute top-0 left-0 ">
          <button
            // onClick={handleNextBtn}
            className="size-10 top-1/2 -translate-y-1/2 rounded-full bg-transparent hover:bg-gray-100 absolute left-4 flex items-center justify-center">
            <ArrowLeft size={16} />
          </button>
        </div>}
      </div>
    </div>
  )
}
