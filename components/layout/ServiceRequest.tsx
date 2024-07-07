"use client"
import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import Cam1 from '@/public/assets/cam1.jpg'
import patternBg from '@/public/assets/pattern_bg.png'
import { Button } from '../ui/button';
import { FiPhoneCall } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";


const ServiceRequest = () =>{
    return (
        <section id="contact" className="md:mt-[8rem] container md:w-[85%] w-full mt-3 flex lg:flex-row gap-8 flex-col justify-center ">
            <aside className="flex-[3]">
                <h1 className="md:text-[40px] md:leading-[50px] font-semibold text-[25px]">Request for our <span className="text-yellow-400">Premium Services</span></h1>
                <p className='md:text-[20px] text-[14px] mt-1'>Leverage guaranteed premium security of all assets, both tracking and real-time asset monitoring.</p>

                <section className='border-y-[1px] border-dashed border-slate-300 mt-8 pt-4 pb-8'>
                    <div className='font-semibold md:text-[30px] mb-3 text-[15px]'>Our Office</div>
                    {/* <Image src={Cam1} className="rounded-[30px] w-full" alt="" /> */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31823.1802249188!2d7.180494393292132!3d4.430184577952936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106857493b22b751%3A0xa8945f3feed9d6f0!2sGE%20THEDGE%20NIG%20LTD!5e0!3m2!1sen!2sng!4v1720353246689!5m2!1sen!2sng"
                        style={{border: 0}}
                        className='rounded-[12px] md:w-full w-full md:h-[300px] h-[350px]'
                        loading="lazy"
                    ></iframe>
                </section>
                <section className='flex text-[15px] flex-wrap items-center mt-4'>
                    <div className='flex items-center gap-2'>
                        <FiPhoneCall color="" />
                        <span>+2348037763045</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <HiOutlineLocationMarker />
                        <span>3 DAG Pepple Close off Abalamabia
                        Rd, Bonny Island, Rivers State.</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <LuMail />
                        <span>gethedgenigltd@gmail.com</span>
                    </div>
                </section>
            </aside>
            <aside className="flex-[4] relative">
                <section className="rounded-[25px] md:w-[90%] w-full m-auto m-[0px] md:space-y-5 space-y-3 shadow-lg bg-[rgba(225,224,224,0.23)] backdrop-blur-md md:p-7 p-5">
                    <div className=''>
                        <span></span>
                    </div>
                    <div className="flex md:flex-row flex-col gap-5">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="">First Name</label>
                            <input type="text" className='md:p-4 p-3 rounded-[10px] text-[13px]  w-full' placeholder="First Name" />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="">Last Name</label>
                            <input type="text" className='md:p-4 p-3 rounded-[10px] text-[13px]  w-full' placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-5">
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="">Phone</label>
                            <input type="text" className='md:p-4 p-3 rounded-[10px] text-[13px]  w-full' placeholder="Phone Number" />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="">Email</label>
                            <input type="email" className='md:p-4 p-3 rounded-[10px] text-[13px] w-full' placeholder="Email Address" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="">Service Category</label>
                        <select className='md:p-4 p-3 rounded-[10px] w-full'>
                            <option value="" disabled>Select Service Category</option>
                            <option value="">Plain-Sight Tracking</option>
                            <option value="">Standard Tracking</option>
                            <option value="">Multi-layer Tracking</option>
                            <option value="">Multi-layer Advanced Tracking</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="">Message</label>
                        <textarea rows={6} className='rounded-[10px] p-4 text-[13px]' cols={10}>Type your message here...</textarea>
                    </div>
                    <button className='p-4 rounded-[10px] bg-[#020817] w-full text-white font-semibold'>Submit</button>
                </section>
                <Image src={patternBg} className='bottom-[-80px] border-none md:flex hidden absolute z-[-99] bg-yellow-400 w-full h-[60%] rounded-[25px]' alt='' />
                {/* <section className='border-[1px] bottom-[-80px] absolute z-[-99] bg-yellow-400 p-10 w-full h-[60%] rounded-[25px]'>

                </section> */}
            </aside>
        </section>
    )
}

export default ServiceRequest;