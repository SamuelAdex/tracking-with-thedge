"use client";

import React from 'react'
import { Card } from '../ui/card';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const Testimonies = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 2 },
    };
  return (
    <section className='container max-w-6xl space-y-4'>
        <div className='text-center space-y-4'>
            <h1 className='md:text-[80px] text-[30px] md:leading-[80px] font-extrabold'>Trusted (and loved) by our <span className='text-yellow-400'>customers</span>.</h1>
            <p className='md:text-[20px] text-[18px]'>Hear from some of the world’s most inspirational organisations already using TWT asset tools to track and manage their properties and assets.</p>
        </div>

        <AliceCarousel
            mouseTracking
            responsive={responsive}
            // controlsStrategy="alternate"
            disableButtonsControls={true} 
            // className='grid md:grid-cols-3 mt-8 sm:grid-cols-2 grid-cols-1 gap-8'
        >
            {[1,2,3,4,5,6,7,8,9].map((_, index)=>(
                <div className='p-5 dark:bg-transparent shadow-sm dark:shadow-neutral-600 mx-2 space-y-1 rounded-[18px]' key={index}>
                    <div className=''>
                        <p className='font-semibold md:text-[13px] text-[12px]'>Samuel Adex</p>
                        <p className='text-[11px] dark:text-[#e8e8e8]'>Barksley Inc.</p>
                    </div>
                    <p className='md:text-[14px] md:leading-[80px] text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iusto, optio labore sit magni deserunt iure debitis nobis perferendis! Laudantium illo voluptates officia, minima perferendis quas dignissimos maiores quasi esse?</p>
                </div>
            ))}
        </AliceCarousel>
    </section>
  )
}

export default Testimonies;