"use client";

import Image from 'next/image';
import React from 'react'
import AboutImg from '@/public/assets/twt_aboutBG.svg'

const About = () => {
  return (
    <div id='about' className='md:mt-[8rem] flex flex-col items-center mt-[3rem]'>
      <div className="md:w-[95%]">
        <div className="">
          <h1 className='md:text-[90px] font-extrabold mx-auto md:leading-[90px] text-center text-[30px]'><span className='pacifico italic md:text-[80px] text-[25px]'>About</span> Tracking With Thedge Asset Security<span className='pacifico italic md:text-[80px] text-[25px]'>Company</span></h1>
          <p className='md:mt-8 mt-4 md:w-[55%] md:text-[20px] text-[14px] md:px-[20px] px-5'><span className='font-bold'>TRACKING WITH THEDGE</span> is a forward-thinking asset tracking company that has been in the business of providing advanced asset tracking solutions for both cooperate and individual security needs since 2016.</p>
        </div>
        <div className='flex md:flex-row flex-col px-5 md:mt-8 mt-4 items-center gap-8'>
          <div className='flex-[1]'>
            <Image src={AboutImg} className='rounded-[20px]' loading='lazy' alt='' />
          </div>
          <div className="flex-[1] space-y-8">
            <div className=''>
              <h1 className='font-bold md:text-[60px] border-b-[10px] md:w-[45%] md:leading-[65px] border-double border-yellow-400 text-[30px]'>About Us</h1>
              <p className='mt-4'><span className='font-bold'>At TRACKING WITH THEDGE</span>, we understand that one major flaw that these conversational GPS trackers in the market has is that experienced <span className='font-bold'>car-jackers</span> can easily detect their presence and location in the dashboard or elsewhere in the asset by following their wiring and eventually compromising their traceability, hence rendering the trackers useless in the event of emergency. 
              That is why we don't just stop at installing regular <span className='font-bold'>GPS trackers</span>, that at best increases the chances of <span className="font-bold">car recovery</span> by a meagre 40%.</p>
            </div>

            <p className=''>With the synergy of our experienced <span className='font-bold'>tracking security experts</span> and our multi-licensed foreign tracker manufacturers we have designed a <span className='font-bold'>Multi-layer Advanced Tracking System (MATS) and Multi-layer Tracking System (MTS)</span> that can circumvent even the most experienced car-jackers, thereby completely eliminating the untrackability chances of your assets when the need arises.</p>

            <p className=''>Through our various customized security solutions we have helped our clients to recover stolen vehicles, find missing pets, prevent fuel thefts, monitor their marine vessels and to covertly keep a watchful eye on their prized assets effortlessly.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About