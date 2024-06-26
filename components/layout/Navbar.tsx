"use client"

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {navLinks} from "@/data/navLinks";
import {ThemeChanger} from "@/app/Theme-changer";
import AssetLogo from '@/public/assets/thedge_logo.png'
import AssetLogo2 from '@/public/assets/thedge_logo3.png'
import Image from "next/image";
import {useTheme} from "next-themes"
import { SetStateAction, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";

interface MobileNavProps {
    setIsNav: (isNav: boolean) => void;
}

const Navbar = () => {
    const {theme, setTheme} = useTheme()
    const [isNav, setIsNav] = useState<boolean>(false)

    return (
        <nav className="py-4 bg-background/30 backdrop-blur-sm fixed w-full top-0 z-30">
            <div className="container flex flex-row justify-between items-center">
                <Link href="/">
                    {/* <h1 className="text-2xl">
                        TWT
                    </h1> */}
                    {theme === "light" 
                    ? <Image src={AssetLogo} className="w-[150px]" alt="" />
                    :
                    <Image src={AssetLogo2} className="w-[150px]" alt="" />                    
                    }
                </Link>
                <ul className="md:flex flex-row justify-between gap-8 hidden">
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <Link href={link.href
                            }>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-row justify-end md:gap-0 gap-4 items-center space-x-2">
                    <ThemeChanger/>
                    <Button className="md:flex hidden">
                        Get Started
                    </Button>
                    <div className="md:hidden flex">
                        {isNav == true ? <RiCloseFill onClick={()=> setIsNav(!isNav)} className="cursor-pointer text-[30px] active:rotate-[90deg] transition duration-300 ease-in-out" /> : <CgMenuRight onClick={()=> setIsNav(!isNav)} className="cursor-pointer active:rotate-[-90deg] text-[30px] transition duration-500 ease-in-out" /> }                        
                    </div>
                </div>
            </div>
            {isNav == true && (
                <MobileNav setIsNav={setIsNav} />
            )}
        </nav>
    );
}

export default Navbar;


const MobileNav: React.FC<MobileNavProps> = ({setIsNav}) =>{
    return (
        <section className="h-[100vh] backdrop-blur-xl slide-left">
            <div className="pt-5">
                <ul className="md:hidden flex flex-col justify-between gap-8">
                    {navLinks.map((link) => (
                        <li key={link.title} onClick={()=> setIsNav(false)} className="py-3 px-9 font-semibold">
                            <Link href={link.href
                            }>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}