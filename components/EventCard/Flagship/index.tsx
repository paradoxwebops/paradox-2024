import { Card } from "@/components/Card"
import { rgba } from "@/lib/utils"

import { Zen_Dots, Zilla_Slab } from 'next/font/google'
import Image from "next/image"
import Link from "next/link"

const zen_font = Zen_Dots({ weight: ['400'], subsets: ['latin'] })
const zilla_font = Zilla_Slab({weight: ["300", "400", "500"], subsets: ["latin"]})

export type FlagshipEventDetails = { url: string, name: string, image: string }

export type GenAIPrizeCardProps = {
    main: boolean,
    prize: string,
    amount: string | number,
    color: 'gold' | 'silver' | 'bronze',
}

export type GenAIRoundCardProps = {
    round: number,
    title: string
}

export type GenAIPersonCardProps = {
    name: string,
    description: string,
}

const GenAIMentorCard = ({name, description}: GenAIPersonCardProps) => {
    return (
        <Card bgColor={rgba('#ffffff', .1)} className="!p-8">
            <h6>{name}</h6>
            <div>{description}</div>
        </Card>
    )
}

const GenAIInstructorCard = ({...props}: GenAIPersonCardProps) => {
    return (
        <GenAIMentorCard {...props} />
    )
}

const GenAIRoundCard =  ({round, title}:GenAIRoundCardProps) => {
    return (
        <Card bgColor={rgba('#ffffff', 0.1)} className={`w-full max-w-[1000px] tracking-wide mx-auto my-12 flex items-center gap-6`}>
            <Card bgColor={rgba('#ffffff', 0.1)} className={`${zen_font.className} text-xl w-full max-w-[75px] text-center`}>
                {round}
            </Card>
            <div className="w-full">
                {title}
            </div>
        </Card>
    )
}

const GenAIPrizeCard = ({main, prize, amount, color}: GenAIPrizeCardProps) => {
    return (
        <>
        {main && (
            <div className="w-[1px] h-[1px] shadow-[0_0_100px_200px_rgba(220,164,254,0.35)] rounded-full z-[0] absolute" />
        )}
        <Card bgColor={rgba('#ffffff', 0.1)} className="text-center flex flex-col items-center lg:max-w-[300px] !p-8 !max-md:scale-100" style={{transform: `scale(${main ? '1.1' : '1'})`}}>
            <div className={`${zilla_font.className} text-xl`}>
                {prize}
            </div>
            <div className="py-6">
                <Image 
                    src={`/${color}.svg`}
                    width={100}
                    height={100}
                    alt={`${prize} prize ${color} trophy`}
                />
            </div>
            <div className={`${zilla_font.className} text-2xl`}>
                &#8377;
            </div>
            <div className={`${zen_font.className}`}>
                <h3 className="tracking-wide">{amount}</h3>
            </div>
        </Card>
        </>
    )
}

const FlagshipContainerCard = () => {

    const events:FlagshipEventDetails[] = [
        // {
        //     name: '',
        //     url: 'genai',
        //     image: '/genai_bot.svg'
        // },
        {
            name: 'Laser Tag',
            url: 'lasertag',
            image: ''
        },
        {
            name: 'Prom Night',
            url: 'promnight',
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
            <div className="grid grid-cols-2 gap-12">
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
                <Image
                    src={image}
                    alt={name}
                    className="w-full h-auto object-cover rounded-xl"
                    width={100}
                    height={100}
                />
            </div>
        </Link>
    )
}

export {
    FlagshipContainerCard,
    FlagshipEventCard,
    GenAIPrizeCard,
    GenAIRoundCard,
    GenAIMentorCard,
    GenAIInstructorCard,
}