"use client";

import Image from 'next/image';
import React from 'react'
import tag from '@/public/assets/tag4.png';
import gps from '@/public/assets/gps2.png';
import {CircleCheck} from "lucide-react";

const Display = () => {
  return (
    <>
    
        <div className='container md:mt-[10rem] mt-[4rem] flex md:flex-row flex-col justify-evenly'>
            <div className="p-6">
                <span className="md:p-2 p-1 md:text-[13px] text-[10px] border-[#201923] rounded-[30px] border-[1px]">RFID/driver's tag</span>
                <div className="mt-1">
                    <h1 className="font-bold md:text-[50px] text-[30px]">Quick and Simple <span className='text-yellow-400'>Tracking Tags.</span></h1>
                    <div className='flex flex-col gap-5 md:text-[15px] text-[12px] md:pl-6 mt-3'>
                        <div className='inline-flex items-center gap-1'>  
                            <CircleCheck className="w-4 h-4 text-green-500"/>
                            <p>Automatic recognition</p>
                        </div>
                        <div className='inline-flex items-center gap-1'>  
                            <CircleCheck className="w-4 h-4 text-green-500"/>
                            <p>No need for batteries</p>
                        </div>
                        <div className='inline-flex items-center gap-1'>  
                            <CircleCheck className="w-4 h-4 text-green-500"/>
                            <p>Can detect ‘hidden’ objects</p>
                        </div>
                        <div className='inline-flex items-center gap-1'>  
                            <CircleCheck className="w-4 h-4 text-green-500"/>
                            <p>Multiple tags can be read at once</p>
                        </div>
                        <div className='inline-flex items-center gap-1'>  
                            <CircleCheck className="w-4 h-4 text-green-500"/>
                            <p>Rugged and weatherproof</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 relative md:mt-0 mt-5 flex justify-end">
                <div className='absolute md:top-[-20px] top-[-10px] border-[1px] z-[-99] dark:border-[#5c5c5c] bg-[rgba(225,224,224,0.23)] backdrop-blur-md p-10 w-[70%] h-[60%] md:right-[150px] right-[-20px] rounded-[30px]'>

                </div>
                <Image src={tag} loading='lazy' className='rounded-[30px] md:w-[80%]' alt='' />
            </div>
        </div>
        <div className='container md:mt-[10rem] mt-[4rem] flex md:flex-row flex-col-reverse justify-evenly'>
            <div className="p-6 relative md:mt-0 mt-5 flex justify-start">
                <div className='absolute md:top-[-20px] top-[-10px] border-[1px] z-[-99] dark:border-[#5c5c5c] bg-[rgba(225,224,224,0.23)] backdrop-blur-md p-10 w-[70%] h-[60%] md:left-[150px] left-[-20px] rounded-[30px]'>

                </div>
                <Image src={gps} loading='lazy' className='rounded-[30px] md:w-[80%]' alt='' />
            </div>
            <div className="p-6">
                <span className="md:p-2 p-1 md:text-[13px] text-[10px] border-[#201923] rounded-[30px] border-[1px]">GEO-Location</span>
                <div className="mt-1">
                    <h1 className="font-bold md:text-[50px] text-[30px]">Reliable GPS/SMS/App <span className='text-yellow-400'>Live tracking.</span></h1>
                    <div className='flex flex-col gap-5 md:text-[15px] text-[12px] md:pl-6 mt-3'>
                        <div className='inline-flex items-center gap-1'>  
                            <CircleCheck className="w-4 h-4 text-green-500"/>
                            <p>Track your assets anywhere in the world with multiple connectivity options.</p>
                        </div>
                        <div className='inline-flex items-center gap-1'>  
                            <CircleCheck className="w-4 h-4 text-green-500"/>
                            <p>Seamlessly connect and track assets that move between indoor and outdoor environments</p>
                        </div>
                        <div className='inline-flex items-center gap-1'>  
                            <CircleCheck className="w-4 h-4 text-green-500"/>
                            <p>Activate real-time tracking for asset retrieval by switching to Recovery Mode in case of loss or theft.</p>
                        </div>
                        <div className='inline-flex items-center gap-1'>  
                            <CircleCheck className="w-4 h-4 text-green-500"/>
                            <p>Detect impacts or tipping to ensure the safety of fragile or sensitive assets</p>
                        </div>
                        <div className='inline-flex gap-1'>  
                            <CircleCheck className="w-4 h-4 text-green-500"/>
                            Powered by user-replaceable and easily sourced Alkaline, Lithium, or Lithium Thionyl Chloride (LTC) batteries.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Display