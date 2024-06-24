"use client"

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {navLinks} from "@/data/navLinks";
import {ThemeChanger} from "@/app/Theme-changer";
import AssetLogo from '@/public/assets/thedge_logo.png'
import AssetLogo2 from '@/public/assets/thedge_logo3.png'
import Image from "next/image";
import {useTheme} from "next-themes"

const Navbar = () => {
    const {theme, setTheme} = useTheme()
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

                <div className="flex flex-row justify-end space-x-2">
                    <ThemeChanger/>
                    <Button>
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;