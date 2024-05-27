import { Card } from "@/components";
import { GenAIPrizeCard, GenAIPrizeCardProps } from "@/components/EventCard/Flagship";
import { rgba } from "@/lib/utils";
import { Calendar, MapPin } from "lucide-react";
import { Inter, Island_Moments, Zen_Dots, Zen_Tokyo_Zoo, Zilla_Slab } from 'next/font/google'
import Image from "next/image";

const main_font = Zen_Tokyo_Zoo({weight: ["400"], subsets: ["latin"]})

const second_font = Inter({weight: ["300", "400", "500", "600"], subsets: ["latin"]})

const third_font = Zilla_Slab({weight: ['300', '400', '500', '600'], subsets: ['latin']})

const island_moments = Island_Moments({weight: ['400'], subsets: ['latin'], style: ['normal']})

const PromNightPagePill = ({children}: {children: React.ReactNode}) => {
    return (
        <Card bgColor={rgba('#000000', 0.5)} className={`${second_font.className} font-bold !w-auto`}>
            {children}
        </Card>
    )
}

const PromNightPageCard = ({title, description, className}: {title: React.ReactNode, description: React.ReactNode, className?: string}) => {
    return (
        <Card bgColor={rgba('#ffffff', .1)} className={`!p-8 ${className??""}`}>
            {!!title && <h2 className="tracking-wide mb-8">{title}</h2>}
            <div className="text-md lg:text-2xl">{description}</div>
        </Card>
    )
}

export default function FlagshipEventPromNightPage() {

    return (
        <Card bgColor="#0F0F30" className={`${main_font.className} overflow-hidden text-white !p-0`}>
            <div className="relative mix-blend-luminosity hidden lg:flex w-auto justify-end">
                <Image 
                    src={'/hanging_ball_short.svg'}
                    alt=""
                    width={250}
                    height={250}
                    className="w-full absolute max-w-[500px] h-auto right-[25%] z-[2]"
                />
                <Image 
                    src={'/hanging_ball_long.svg'}
                    alt=""
                    width={250}
                    height={250}
                    className="w-full absolute max-w-[500px] h-auto"
                />
            </div>
            <div className="bg-[url('/promnight_bg.webp')] w-full min-h-[75vh] flex flex-col justify-between bg-cover bg-no-repeat bg-center bg-origin-padding p-4">
                <div className="flex w-full justify-end items-start">
                    <Image
                        src={"/paradox_logo_text.webp"}
                        alt="Paradox logo"
                        width={200}
                        height={150}
                        className="w-16 sm:w-20 md:w-32 lg:w-48 z-[2] relative"
                        />
                </div>
                <div className="text-white text-left">
                    <Image 
                        src={'/french_essence_prom.webp'}
                        alt="French Essence"
                        width={200}
                        height={200}
                    />
                    <div className={`${island_moments.className} px-6 lg:text-4xl mt-[-20px]`}>
                        Presents
                    </div>
                    <h1 className="text-2xl lg:text-7xl tracking-wide px-6 z-[4] relative my-6">
                        <span className="">
                            ENCHANTED
                        </span><br />
                        <span className="">
                            FOREST
                        </span>
                    </h1>
                    <div className="flex gap-6 w-full lg:max-w-[50%] px-6 max-lg:flex-col">
                        <PromNightPagePill>
                            Prom Night
                        </PromNightPagePill>
                        <PromNightPagePill>
                            <div className="flex">
                                <Calendar className="mr-3" /> 1st June 2024
                            </div>
                        </PromNightPagePill>
                        <PromNightPagePill>
                            <div className="flex">
                                <MapPin className="mr-3" /> CC Terrace
                            </div>
                        </PromNightPagePill>
                    </div>
                </div>
            </div>
            <section className={`${third_font.className} grid flex-col justify-center lg:justify-start gap-12 p-6`}>
                
                <div className="w-full lg:max-w-[50%] text-right flex mt-6">
                    <Image 
                        src={'/dancing1.svg'}
                        alt=""
                        width={200}
                        height={200}
                        className="w-full h-auto max-w-[200px] mr-[-100px] lg:ml-24 z-[2]"
                    />
                    <div className="w-[1px] h-[1px] shadow-[0_0_100px_50px_rgba(220,164,254,0.35)] rounded-full z-[0] absolute lg:ml-48" />
                    <PromNightPageCard 
                        title="" 
                        description="Enjoy a night filled with great music, Salsa (no skills required, we'll teach you how to Salsa!^_^), and entertainment. Exclusively for IIT-Madras BS degree students."
                        className="!pl-24"
                    />
                </div>

                <div className="max-lg:flex-col flex gap-6 w-full lg:max-w-[75%] justify-self-center items-start">
                    <PromNightPageCard 
                        title="Dress Code" 
                        description={<>
                            <div>
                            Prom night is a formal event. To maintain the elegance and formality of the evening, please adhere to the following guidelines:
                            </div>
                            <div className="my-4">
                                <h5 className="my-3 mt-6">For Boys:</h5>
                                <ul className="list-none">
                                    <li>
                                        Formals: Shirt and pant tucked in with a belt.
                                    </li>
                                    <li>
                                        Formals with Blazer: Shirt and pant tucked in with a belt, and a blazer on top.
                                    </li>
                                    <li>
                                        Three-Piece Suit: A proper three-piece suit.
                                    </li>
                                </ul>
                                <h5 className="my-3 mt-6">For Girls:</h5>
                                <ul className="list-none">
                                    <li>
                                        Formal Attire: Girls are expected to be properly dressed in formal attire appropriate for the event.
                                    </li>
                                </ul>
                                <h5 className="my-3 mt-6">For All Attendees:</h5>
                                <ul className="list-none">
                                    <li>
                                        Footwear: Flip flops and any type of casual footwear are not permitted.
                                    </li>
                                </ul>
                            </div>
                        </>}
                        className="lg:!pr-[200px] lg:max-w-[60%] h-full" 
                    />
                        <div className="w-[1px] h-[1px] shadow-[0_0_200px_100px_rgba(220,164,254,0.35)] rounded-full z-[0] absolute lg:ml-48" />

                    <div className="flex flex-col gap-6 max-lg:flex-col-reverse max-lg:items-center w-full
                    ">
                        <PromNightPageCard title={(new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(300))} description="Couple Entry" className="text-center w-[fit-content]" />
                        
                        <div className="w-[1px] h-[1px] shadow-[0_0_200px_100px_rgba(220,164,254,0.35)] rounded-full z-[0] absolute lg:ml-48 right-[0] lg:mt-96 lg:mr-48" />

                        <Image 
                            src={'/dancing2.svg'}
                            alt=""
                            width={200}
                            height={200}
                            className="w-full h-auto lg:ml-[-100px] z-[2]"
                        />
                        <div className="w-[1px] h-[1px] shadow-[0_0_200px_100px_rgba(220,164,254,0.35)] rounded-full z-[0] absolute lg:ml-48" />
                    </div>
                </div>

                
                <div className="w-full text-right lg:flex">
                    <Image 
                        src={'/thepianoman.svg'}
                        alt=""
                        width={200}
                        height={200}
                        className="w-full lg:max-w-[600px] h-auto lg:mr-[-100px] ml-[-50px] lg:ml-[-80px] z-[2]"
                    />
                    <div className="w-[1px] h-[1px] shadow-[0_0_200px_100px_rgba(220,164,254,0.35)] rounded-full z-[0] absolute lg:ml-48" />
                    <div className="w-full lg:max-w-[60%]">

                        <PromNightPageCard 
                            title="Entry Guidelines" 
                            description={<>
                            <div>
                                No Stag Entry: Entry to the prom is restricted to couples only. Single attendees will not be admitted.
                            </div>
                            <div>
                                Eligibility: The prom is exclusively for IIT-Madras BS degree students.
                            </div>
                            </>}
                            className="lg:!pl-24"
                        />
                    </div>
                </div>

                <div className="w-full max-lg:flex-col flex gap-12 text-right lg:max-w-[75%] justify-self-center">
                    <PromNightPageCard 
                        title="Inclusivity and Conduct"
                        description="We are committed to creating an inclusive space where everyone feels welcome and respected. Discrimination of any form, including heteronormativity, will not be tolerated. You are invited to join us for a night of celebration and fun." 
                    />
                    <div className="w-[1px] h-[1px] shadow-[0_0_200px_100px_rgba(220,164,254,0.35)] rounded-full z-[0] absolute lg:ml-48" />
                    <PromNightPageCard 
                        title="Safety and Support"
                        description="To ensure everyone has an enjoyable experience, Chaperones will be stationed around the venue. If you feel uncomfortable at any point, please reach out to the coordinators or a chaperone for assistance."
                    />
                </div>
                <Image 
                    src={'/dancing3.png'}
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-auto mix-blend-multiply"
                />
            </section>
            <div className="w-[1px] h-[1px] shadow-[0_0_200px_100px_rgba(220,164,254,0.35)] rounded-full z-[0] absolute lg:ml-48" />
            <div className="w-[1px] h-[1px] shadow-[0_0_200px_100px_rgba(220,164,254,0.35)] rounded-full z-[0] absolute lg:ml-48 right-[0]" />
        </Card>
    )
}
