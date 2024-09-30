'use client'

import Link from "next/link";
import { useState } from "react";
import { flushSync } from "react-dom";

export default function MobbinCarousel() {
  const [activeItem, _setActiveItem] = useState( null )

  const setActiveItem = ( id ) => {
    if ( document.startViewTransition ) {
      document.startViewTransition( () => {
        flushSync( () => {
          _setActiveItem( id )
        } )
      } )
    } else {
      _setActiveItem( id )
    }

  }
  const categories = [
    { id: 1, name: "Fashion & Apparel", image: "fashion-apparel.jpg" },
    { id: 2, name: "Beauty & Skincare", image: "beauty-skincare.jpg" },
    { id: 3, name: "Electronics & Gadgets", image: "electronics-gadgets.jpg" },
    { id: 4, name: "Home & Kitchen", image: "home-kitchen.jpg" },
    { id: 5, name: "Health & Wellness", image: "health-wellness.jpg" },
    { id: 6, name: "Toys & Games", image: "toys-games.jpg" },
    { id: 7, name: "Sports & Outdoors", image: "sports-outdoors.jpg" },
    { id: 8, name: "Books & Media", image: "books-media.jpg" },
    { id: 9, name: "Grocery & Food", image: "grocery-food.jpg" },
    { id: 10, name: "Pet Supplies", image: "pet-supplies.jpg" }
  ];

  return (
    <div>
      <div className='flex gap-4 relative'>
        {
          categories.map( itm => {
            return <div onPointerEnter={() => setActiveItem( itm.id )} className='border whitespace-nowrap relative group' key={itm.id}>
              <Link
                aria-expanded={activeItem === itm.id} className="peer" href='#'>
                {itm.name}
              </Link>
              <div className="absolute hidden pointer-events-none top-full h-40 border  [view-transition-name: floating-card] peer-aria-expanded:block">modal</div></div>
          } )
        }

      </div>
    </div>
  )
}
