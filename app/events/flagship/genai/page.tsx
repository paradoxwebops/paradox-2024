import { Card } from "@/components";
import { Zen_Dots } from 'next/font/google'
import Image from "next/image";

const zen_font = Zen_Dots({ weight: ['400'], subsets: ['latin'] })

export default function FlagshipEventGenAIPage() {
    return (
        <Card bgColor="#12001D" className={`${zen_font.className} overflow-hidden`}>
            <div className="flex w-full justify-between items-start">
                <div 
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.25" }}
                    className="rounded-full border-2 ml-[-100px] mt-[-100px] w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 border-white flex justify-center items-center"
                >
                    <div
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.25" }}
                        className="rounded-full border-2 z-[10] h-24 w-24 md:h-28 md:w-28 lg:w-32 lg:h-32 border-white"
                    />
                </div>
                <Image
                    src={"/paradox_logo_text.webp"}
                    alt="Paradox logo"
                    width={200}
                    height={150}
                    className="w-16 sm:w-20 md:w-32 lg:w-48 z-[2] relative"
                />
            </div>
            <div className="text-white text-center">
                <h1 className="text-8xl tracking-wide">
                    <span className="text-[#5EE0CA]">
                        GEN AI
                    </span><br />
                    <span className="text-[#B493C8]">
                        HACKATHON
                    </span>
                </h1>
            </div>
        </Card>
    )
}