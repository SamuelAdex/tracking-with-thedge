"use client";

import React from 'react';
import blogBg from '@/public/assets/blog_bg.svg';
import Image from 'next/image';

const Page = ()=>{
    return (
        <section className="md:mt-[8rem] flex justify-center mt-[6rem]">
            <section className="md:p-0 p-8 md:w-[60%]">
                <div className="relative overflow-hidden">
                    <span className="p-3 rounded-br-[20px] text-white font-semibold md:text-[14px] text-[12px] bg-yellow-400 absolute">Essential for clients</span>
                    <Image src={blogBg} alt="" />
                </div>
                <div className="">
                    <h1 className="md:text-[45px] text-[20px] font-bold">The New Article from Tracking with Thedge</h1>
                    <div className='flex text-[#959595] md:text-[16px] text-[13px] dark:text-[#bdbdbd] items-center mt-2 gap-3'>
                        <p>Jun 2, 2024</p>
                        <p>8 min read</p>
                    </div>
                    <div className="md:mt-8 mt-4 md:text-[20px] text-[14px] text-justify">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quae odio sint, sequi laboriosam eveniet odit maiores eaque soluta ut! Voluptatibus autem tempore eum delectus in animi obcaecati! Maxime impedit excepturi necessitatibus, quisquam vitae ea cupiditate. Ipsam autem consectetur obcaecati fuga excepturi. Quae cumque numquam accusamus placeat sunt? Laudantium sint ab eveniet ipsam nostrum vero unde deleniti sequi accusamus commodi qui et quisquam quasi eaque delectus rem, harum aperiam! Soluta doloremque possimus voluptas odio vitae pariatur est praesentium deleniti officiis explicabo iste commodi, quisquam facilis, obcaecati rem delectus optio id facere molestiae aliquid? Quos, beatae id. Placeat aut similique ex.</p>
                    </div>
                    <div className="md:mt-8 mt-4 md:text-[20px] text-[14px] text-justify">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quae odio sint, sequi laboriosam eveniet odit maiores eaque soluta ut! Voluptatibus autem tempore eum delectus in animi obcaecati! Maxime impedit excepturi necessitatibus, quisquam vitae ea cupiditate. Ipsam autem consectetur obcaecati fuga excepturi. Quae cumque numquam accusamus placeat sunt? Laudantium sint ab eveniet ipsam nostrum vero unde deleniti sequi accusamus commodi qui et quisquam quasi eaque delectus rem, harum aperiam! Soluta doloremque possimus voluptas odio vitae pariatur est praesentium deleniti officiis explicabo iste commodi, quisquam facilis, obcaecati rem delectus optio id facere molestiae aliquid? Quos, beatae id. Placeat aut similique ex.</p>

                        <Image src={blogBg} className='md:mt-8 mt-4 rounded-[50px]' alt='' />
                    </div>
                    <div className="md:mt-8 mt-4 md:text-[20px] text-[14px] text-justify">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quae odio sint, sequi laboriosam eveniet odit maiores eaque soluta ut! Voluptatibus autem tempore eum delectus in animi obcaecati! Maxime impedit excepturi necessitatibus, quisquam vitae ea cupiditate. Ipsam autem consectetur obcaecati fuga excepturi. Quae cumque numquam accusamus placeat sunt? Laudantium sint ab eveniet ipsam nostrum vero unde deleniti sequi accusamus commodi qui et quisquam quasi eaque delectus rem, harum aperiam! Soluta doloremque possimus voluptas odio vitae pariatur est praesentium deleniti officiis explicabo iste commodi, quisquam facilis, obcaecati rem delectus optio id facere molestiae aliquid? Quos, beatae id. Placeat aut similique ex.</p>
                    </div>

                    <div className="md:mt-8 mt-4 md:text-[20px] text-[14px] text-justify">
                        <h1 className='font-bold md:text-[30px] text-[20px]'>Conclusion</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quae odio sint, sequi laboriosam eveniet odit maiores eaque soluta ut! Voluptatibus autem tempore eum delectus in animi obcaecati! Maxime impedit excepturi necessitatibus, quisquam vitae ea cupiditate. Ipsam autem consectetur obcaecati fuga excepturi. Quae cumque numquam accusamus placeat sunt? Laudantium sint ab eveniet ipsam nostrum vero unde deleniti sequi accusamus commodi qui et quisquam quasi eaque delectus rem, harum aperiam! Soluta doloremque possimus voluptas odio vitae pariatur est praesentium deleniti officiis explicabo iste commodi, quisquam facilis, obcaecati rem delectus optio id facere molestiae aliquid? Quos, beatae id. Placeat aut similique ex.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Page;