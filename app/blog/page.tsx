"use client";

import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import blogBg from '@/public/assets/blog_bg.svg';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 2 },
    };

  return (
    <section className="md:mt-[6rem] mt-[5rem]">
        <section className="">
            <div className='md:leading-[135px] leading-[38px] p-5'>
                <p className='md:text-[80px]'>Thedge It With</p>
                <p className='md:text-[265px] sm:text-[130px] text-[70px] font-bold'>THE BLOG</p>
            </div>

            <div className='flex md:flex-row gap-10 flex-col md:mt-[6rem] mt-5 px-8'>
                <aside className="">
                    <Link href={'/blog/new'} className='md:w-[600px] overflow-hidden'>
                        <Image src={blogBg} className='md:w-[600px]' alt="" />
                        <div className=''>
                            <span></span>
                            <h3 className='md:text-[40px] md:leading-[50px] font-semibold text-[20px]'>Lorem ipsum dolor sit amet. ipsum dolor sit amet</h3>
                            <p className='md:text-[15px] text-[12px] text-[#8e8e8e]'>Consectetur adipisicing elit. Eos rerum a repellendus cum ullam nesciunt odio nemo ratione quisquam. Tempora reprehenderit nisi quaerat quas natus, dolores unde nostrum! Quis, at?</p>
                        </div>
                    </Link>
                </aside>
                <aside className="flex flex-col gap-6">
                    {[1,2,3,4].map((_, index)=>(
                        <Link href={'/blog/new'} key={index} className='flex md:flex-row flex-col items-center gap-3'>
                            <Image src={blogBg} className='md:w-[200px]' alt="" />
                            <div className=''>
                                <span></span>
                                <h3 className='md:text-[20px] leading-50px] font-semibold text-[16px]'>Lorem ipsum dolor sit amet</h3>
                                <p className='md:text-[14px] text-[12px] text-[#8e8e8e]'>Ipsam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum a repellendus cum ullam nesciunt odio nemo ratione quisquam. Tempora reprehenderit nisi quaerat quas natus, dolores unde nostrum! Quis, at?</p>
                            </div>
                        </Link>
                    ))}
                </aside>
            </div>

            <section className='md:mt-[4rem] mt-[2rem] md:mb-[5rem] px-8'>
                <div className='text-center'>
                    <span className='md:text-[50px] text-[30px] text-white font-semibold'>Featured Blogs</span>
                    <p className='md:text-[20px] text-[15px] text-[#bdbdbd]'>Featured based articles on each and every tools and devices from @trackingwiththedge</p>
                </div>
                <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-5 gap-y-10 grid-cols-1 mt-8'>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((_, index)=>(
                        <Link href={'/blog/new'} key={index} className='md:w-[300px] overflow-hidden cursor-pointer'>
                            <Image src={blogBg} className='md:w-[300px]' alt="" />
                            <div className='mt-4'>
                                <span></span>
                                <h3 className='md:text-[20px] leading-[20px] font-semibold text-[15px]'>Lorem ipsum dolor sit amet</h3>
                                <p className='md:text-[12px] text-[10px] text-[#8e8e8e]'>Consectetur epellendus cum ullam nesciunt odio nemo ratione quisquam. Tempora reprehenderit nisi quaerat quas natus, dolores unde nostrum! Quis, at?</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </section>
    </section>
  )
}

export default page