"use client";

import React from 'react';
import {useTheme} from "next-themes"

const Companies = () => {
  const {theme, setTheme} = useTheme()
  return (
    <section className="m-auto m-[0px] flex flex-col overflow-hidden items-center relative mt-[6rem]">
        <h6 className='text-center  md:text-[16px] md:font-semibold'>Join these inspiring organisations that already love TWT</h6>
        <section className="company-list overflow-hidden md:w-[80%] w-full">
          <div className="flex pacifico companies md:text-[40px] text-[30px] md:h-[200px] h-[140px] items-center justify-center md:gap-6 gap-3">
            {/* <div className="fade"></div> */}
              <div className='backdrop-blur-md company shadow-sm p-2 rounded-[10px] text-nowrap'>Camelot</div>
              <div className='backdrop-blur-md company shadow-sm p-2 rounded-[10px] text-nowrap'>Rivers State</div>
              <div className='backdrop-blur-md company shadow-sm p-2 rounded-[10px] text-nowrap'>Megastar Nig LTD</div>
              <div className='backdrop-blur-md company shadow-sm p-2 rounded-[10px] text-nowrap'>Royal Orbit LTD</div>
              <div className='backdrop-blur-md company shadow-sm p-2 rounded-[10px] text-nowrap'>Goverfix Nig LTD</div>
              <div className='backdrop-blur-md company shadow-sm p-2 rounded-[10px] text-nowrap'>Adexx Tech Inc.</div>
              <div className='backdrop-blur-md company shadow-sm p-2 rounded-[10px] text-nowrap'>9rato Marketplace</div>
              {theme === "light" ? <div className="absolute bg-gradient-to-r from-[#FFFFFF] via-transparent via-10% to-[#FFFFFF] inset-0 pointer-events-none"></div> : <div className="absolute bg-gradient-to-r from-[#020817] via-transparent via-10% to-[#020817] inset-0 pointer-events-none"></div>}
          </div>
        </section>
    </section>
  )
}

export default Companies