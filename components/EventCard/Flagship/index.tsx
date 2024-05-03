import { Card } from "@/components/Card"

import { Zen_Dots } from 'next/font/google'
import Image from "next/image"
import Link from "next/link"

const zen_font = Zen_Dots({ weight: ['400'], subsets: ['latin'] })

type FlagshipEventDetails = { url: string, name: string, image: string }

const FlagshipContainerCard = () => {

    const events:FlagshipEventDetails[] = [
        {
            name: '',
            url: 'genai',
            image: ''
        },
        {
            name: '',
            url: '2',
            image: ''
        },
        {
            name: '',
            url: '3',
            image: ''
        },
    ]

    return (
        <Card bgColor={"#230137"} className={`${zen_font.className} !p-12`}>
            <div className="w-full text-right pb-12">
                <div className="flex w-full justify-end items-center">
                    <Image 
                        src={'/thunder.svg'}
                        alt="Flagship event"
                        width={75}
                        height={75}
                        className="mr-[-40px] background-[#230137] hidden lg:block"
                    />
                    <h2 className="border-2 border-white text-white p-1 px-3 rounded-2xl lg:pl-12">FLAGSHIP EVENTS</h2>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-12">
                {events.map((item) => {
                    return (
                        <FlagshipEventCard {...item} key={item.url} />
                    )
                })}
            </div>
        </Card>
    )
}

const FlagshipEventCard = ({ url, name, image }: FlagshipEventDetails) => {
    return (
        <Link
            href={`/events/flagship/${url}`}
            className="flex flex-col w-full rounded-xl shadow-[0_0_21px_10px_rgba(255,255,255,0.25)]"
        >
            <div className="rounded-xl wrap container wrap--1 w-full h-full flex flex-col gap-2">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-auto object-cover rounded-xl"
                />
            </div>
        </Link>
    )
}

export {
    FlagshipContainerCard,
    FlagshipEventCard
}