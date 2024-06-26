import {footerLinks} from "@/data/footerLinks";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-4 sm:max-w-5xl sm:mx-auto sm:text-center">
                    <h1 className="md:text-[60px] md:leading-[68px] font-extrabold text-[30px]">Don't just track it. <span className="text-yellow-400">Track with Thedge</span></h1>
                    <p className="md:text-[30px] text-[14px]">
                        Stay one Step ahead of Thieves and asset thief with TWT!
                    </p>
                    <div className="items-center gap-x-2 space-x-3 space-y-3 sm:flex md:justify-center justify-between sm:space-y-0">
                        <Button className="md:p-5 p-7 rounded-[40px]">
                            Get started
                        </Button>
                        <Button className="md:p-5 p-7 rounded-[40px]" variant="secondary">
                            Learn more
                        </Button>
                    </div>
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p>© 2024 Tracking With Thedge. All rights reserved.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        {footerLinks.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;