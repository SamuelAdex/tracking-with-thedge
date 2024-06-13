"use client";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {ArrowRightIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import ServiceRequest from "@/components/layout/ServiceRequest";
import Image from "next/image";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {features} from "@/data/features";
import {pricing} from "@/data/pricing";
import {CircleCheck} from "lucide-react";
import Companies from "@/components/layout/Companies";
import { Fragment, useState } from "react";
import Display from "@/components/layout/Display";
import About from "@/components/layout/About";
import Testimonies from "@/components/layout/Testimonies";

interface Plan {
    title: string;
    description: string;
    price: string;
    features: string[];
    fancy?: boolean;
}
  

export default function Home() {
    
    return (
        <>
            <div className="mt-[11rem]">
                <main className="container mx-auto">
                    <div className="relative md:mt-24 mx-auto w-full max-w-4xl pt-4 text-center">
                        <div className="justify-center hidden md:flex">
                            <div
                                className="flex flex-row items-center justify-center gap-5 p-1 text-xs bg-card/60 backdrop-blur-lg rounded-md border border-border">
                                <Badge className="font-semibold">New</Badge>
                                <h5>Announce your new feature here</h5>
                                <Link href="/" className="flex flex-row items-center">
                                    View all features
                                    <ArrowRightIcon className="w-6 h-6 ml-2"/>
                                </Link>
                            </div>
                        </div>
                        <h1 className="md:text-7xl my-4 font-extrabold text-4xl md:leading-tight">Stay One Step Ahead of Thieves with TAT!</h1>
                        <p className="mx-auto my-4 text-sm w-full max-w-xl text-center font-medium leading-relaxed tracking-wide">
                        Are you in search of a tracking solution that doesn't just reduce the chances of your car disappearing forever despite having tracker onboard? Then you're welcome to Thedge Asset Tracker (TAT). At TAT, we go the extra mile to guarantee  the safe recovery of your precious asset in the event of theft.
                        </p>
                        <div className="flex flex-row justify-center items-center space-x-4 my-8">
                            <Button className="md:p-9 p-7 rounded-[40px]">
                                Get Started
                            </Button>
                            <Button className="md:p-9 p-7 rounded-[40px]" variant="secondary">
                                Learn More
                            </Button>
                        </div>

                        <div
                            className="absolute top-0 -z-10 max-h-full max-w-screen-lg w-full h-full blur-2xl">
                            <div
                                className="absolute top-24 left-24 w-56 h-56 bg-violet-600 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl">
                            </div>
                            <div
                                className="absolute hidden md:block bottom-2 right-1/4 w-56 h-56 bg-sky-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-1000 filter blur-3xl"></div>
                            <div
                                className="absolute hidden md:block bottom-1/4 left-1/3 w-56 h-56 bg-pink-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-500 filter blur-3xl"></div>
                        </div>
                    </div>

                    {/* <div className="max-w-4xl mx-auto mb-8">
                        <Image className="w-full" src="/dashboard-ui.png" alt="Dashboard ui design" priority
                               width={1200}
                               height={800}/>
                    </div> */}
                    <div className="max-w-4xl mx-auto mb-8">
                        <Companies />
                    </div>
                </main>
            </div>

            {/* trust */}
            <Card className="max-w-7xl flex md:flex-row rounded-xl flex-col md:justify-evenly gap-4 container p-12 mx-auto md:my-16 my-8">
                <div className="flex-[3]">
                    <h3 className="md:text-[50px] text-[30px] md:text-left text-center font-bold">With Integrity and trust</h3>
                    <p className="md:text-[14px] text-[13px] md:text-justify text-center md:leading-[25px] leading-[20px]">At THEDGE ASSET TRACKERS, we understand that one major flaw that these conversational GPS trackers in the market has is that experienced car-jackers can easily detect their presence and location in the dashboard or elsewhere in the asset by following their wiring and eventually compromising their traceability, hence rendering the trackers useless in the event of emergency. That is why we don't just stop at installing regular GPS trackers, that at best increases the chances of car recovery by a meagre 40%. We've gone a step further.</p>
                </div>
                <div className="flex flex-col flex-[2] gap-8 md:items-end items-center md:text-left text-center">
                    <div className="flex flex-col">
                        <h1 className="md:text-[50px] text-[40px] font-bold text-yellow-400">25k</h1>
                        <p className="md:text-[14px] md:mt-[-15px] text-[12px]">Operations per hour</p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="md:text-[50px] text-[40px] font-bold text-yellow-400">346</h1>
                        <p className="md:text-[14px] md:mt-[-15px] text-[12px]">Businesses trust us</p>
                    </div>
                </div>
            </Card>

            {/* features */}

            <section
                className="border-b border-border bg-gradient-to-b from-background to-transparent via-background via-90% relative">
                <div className="container mx-auto text-center">
                    <div className="my-24">
                        <h5 className="text-primary">
                            WHY CHOOSE US
                        </h5>
                        <h2 className="text-4xl font-extrabold my-4">
                            Guaranteed Premium theft protection with TAT
                        </h2>

                        <p className="mx-auto my-4 text-sm w-full max-w-md bg-transparent text-center font-medium leading-relaxed tracking-wide text-muted-foreground">
                        At TAT, we go the extra mile to guarantee  the safe recovery of your precious asset in the event of theft.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 mt-12">
                            {features.map((feature) => (
                                <Card key={feature.title} className="max-w-lg mx-auto">
                                    <CardHeader>
                                        <div
                                            className="w-16 h-16 text-primary-foreground flex justify-center items-center border border-border rounded-xl bg-primary mx-auto">
                                            {feature.icon}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardTitle>{feature.title}</CardTitle>
                                        <CardDescription className="mt-4">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="absolute top-0 -z-10 max-h-full w-full h-full blur-2xl">
                    <div
                        className="absolute bottom-0 left-0 w-1/2 h-56 bg-violet-600 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl">
                    </div>
                    <div
                        className="absolute bottom-0 right-0 w-1/2 h-56 bg-sky-600 rounded-full mix-blend-multiply opacity-70 animate-blob delay-1000 filter blur-3xl"></div>
                </div>
            </section>

            {/* Pricing */}

            <section
                className="border-b dark border-border bg-background">
                <div className="container mx-auto text-center">
                    <div className="py-14">
                        <h2 className="text-4xl font-extrabold my-4 text-foreground">
                            Pricing Plans
                        </h2>

                        <p className="mx-auto my-4 text-sm w-full max-w-md bg-transparent text-center font-medium leading-relaxed tracking-wide text-muted-foreground">
                            Choose a plan that works best for you. You can always upgrade or downgrade your plan later.
                        </p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4
                         gap-4">
                            {pricing.map((plan, index) => (
                                    <PriceList key={index} plan={plan} />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Display />
            <About />
            <Testimonies />
            <ServiceRequest />
        </>
    );
}

interface PriceListProps {
    plan: Plan;
}


const PriceList: React.FC<PriceListProps> = ({plan}) =>{
    const [featureIndex, setFeatureIndex] = useState(10)
    const [isHide, setIsHide] = useState(true)
    return (
        <Card key={plan.title} className="w-full mx-auto max-w-xl text-left relative">
            {plan.fancy && (
                <Badge className="absolute top-4 right-4">
                    Popular
                </Badge>
            )}
            <CardHeader>
                <CardTitle className="text-2xl">
                    {plan.title}
                </CardTitle>
                <CardDescription className="mt-4">
                    {plan.description.slice(0, 50)}{"..."}
                </CardDescription>
                <h5 className="text-2xl font-bold">{plan.price}</h5>
            </CardHeader>
            <CardContent>
                <Button className="w-full" variant={plan.fancy ? "default" : "secondary"}>
                    Get Started
                </Button>
            </CardContent>
            <CardFooter>
                <ul className="mt-4">
                    {plan.features.slice(0, featureIndex).map((feature) => (
                        <li key={feature} className="flex md:text-[13px] text-[12px] items-center gap-2">
                            <div className="inline-flex gap-2">
                                <CircleCheck className="w-4 h-4 text-green-500"/>
                                {feature.slice(0,40)}
                            </div>
                        </li>
                    ))}
                    {isHide == true ? (
                        <>
                            {plan.features.length > 10 && <p onClick={()=> {
                                setFeatureIndex(20)
                                setIsHide(false)
                            }} className="md:text-[12px] text-[10px] mt-1 cursor-pointer font-semibold">see more</p>}
                        </>
                    ) : (
                        <>
                            {plan.features.length > 10 && <p onClick={()=> {
                                setFeatureIndex(10)
                                setIsHide(true)
                            }} className="md:text-[12px] text-[10px] mt-1 cursor-pointer font-semibold">see less</p>}
                        </>
                    )}
                </ul>
            </CardFooter>
        </Card>
    )
}
