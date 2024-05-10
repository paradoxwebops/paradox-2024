"use client"

import { Card } from "@/components";
import { GenAIInstructorCard, GenAIMentorCard, GenAIPersonCardProps, GenAIPrizeCard, GenAIPrizeCardProps, GenAIRoundCard, GenAIRoundCardProps } from "@/components/EventCard/Flagship";
import { rgba } from "@/lib/utils";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Calendar, MapPin, MessageCircleCode, Users2 } from "lucide-react";
import { Zen_Dots } from 'next/font/google'
import Image from "next/image";

const zen_font = Zen_Dots({ weight: ['400'], subsets: ['latin'] })

type FAQProps = {
    question: string,
    answer: string,
}

export default function FlagshipEventGenAIPage() {

    const prizes_data:GenAIPrizeCardProps[] = [
        {
            main: false,
            prize: "2nd",
            amount: '15,000',
            color: "silver",
        },
        {
            main: true,
            prize: "1st",
            amount: '25,000',
            color: "gold",
        },
        {
            main: false,
            prize: "3rd",
            amount: '10,000',
            color: "bronze",
        },
    ]
    
    const rounds_data: GenAIRoundCardProps[] = [
        {
            round: 1,
            title: 'Primary round of submission and evaluation on metrics'
        },
        {
            round: 2,
            title: 'Presentation of top 5 designs'
        }
    ]

    const mentors_data: GenAIPersonCardProps[] = [
        {
            name: 'Thejesh G N',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores harum inventore reiciendis voluptatibus dolores aut, quidem minus cum corporis earum sed? Blanditiis libero eos autem unde, facere fugit beatae!'
        },
        {
            name: 'Livin Nector',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores harum inventore reiciendis voluptatibus dolores aut, quidem minus cum corporis earum sed? Blanditiis libero eos autem unde, facere fugit beatae!'
        },
    ]

    const instructors_data: GenAIPersonCardProps[] = [
        {
            name: 'Rishav Thakker',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores harum inventore reiciendis voluptatibus dolores aut, quidem minus cum corporis earum sed? Blanditiis libero eos autem unde, facere fugit beatae!'
        },
        {
            name: 'Piyush Wairale',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores harum inventore reiciendis voluptatibus dolores aut, quidem minus cum corporis earum sed? Blanditiis libero eos autem unde, facere fugit beatae!'
        },
        {
            name: 'Jayakrishnan M',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores harum inventore reiciendis voluptatibus dolores aut, quidem minus cum corporis earum sed? Blanditiis libero eos autem unde, facere fugit beatae!'
        },
        {
            name: 'Subendu Gorai',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores harum inventore reiciendis voluptatibus dolores aut, quidem minus cum corporis earum sed? Blanditiis libero eos autem unde, facere fugit beatae!'
        },
    ]

    const faqs_data: FAQProps[] = [
        {
            question: 'Question1',
            answer: 'Answer1'
        }
    ]

    return (
        <Card bgColor="#12001D" className={`overflow-hidden text-white`}>

            {/* HEADER */}
            <div className="flex w-full justify-between items-start">
                <div 
                    style={{ backgroundColor: rgba('#000000', 0.25) }}
                    className="rounded-full border-2 ml-[-100px] mt-[-100px] w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 border-white flex justify-center items-center"
                >
                    <div
                        style={{ backgroundColor: rgba('#000000', 0.25) }}
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

            {/* IMAGE AND TITLE */}
            <div className="mb-6">
                <Image
                    src={'/genai_bot.svg'}
                    width={200}
                    height={200}
                    alt=""
                    className="mx-auto w-full max-w-[300px]"
                />

                <div className={`${zen_font.className} text-white text-center`}>
                    <h1 className="text-4xl lg:text-8xl tracking-wide">
                        <span className="text-[#5EE0CA]">
                            GEN AI
                        </span><br />
                        <span className="text-[#B493C8]">
                            HACKATHON
                        </span>
                    </h1>
                </div>
            </div>

            
            {/* DATE */}
            <Card bgColor={rgba('#ffffff', 0.1)} className="flex items-center justify-center text-center w-full max-w-[500px] my-12 mx-auto font-bold tracking-wide">
                <Calendar className="mr-3" /> 31<sup>st</sup> May 2024 - 01<sup>st</sup> June 2024
            </Card>

            <div className="flex flex-col max-w-[700px] mx-auto mb-12 gap-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    <Card bgColor={rgba('#ffffff', .1)} className="flex flex-col justify-between p-6">
                        <div className="text-[#CFB8DF]">
                            <div>
                                Start - 10<sup>th</sup> May 2024
                            </div>
                            <div>
                                End - 29<sup>th</sup> May 2024
                            </div>
                        </div>
                        <div className="flex items-center mt-3">
                            <span><Calendar className="mr-3" /></span><h6>Registration Dates</h6>
                        </div>
                    </Card>
                    <Card bgColor={rgba('#ffffff', .1)} className="flex flex-col justify-between p-6">
                        <div className="text-[#CFB8DF]">
                            To be announced.
                        </div>
                        <div className="flex items-center mt-3">
                            <span><MapPin className="mr-3" /></span><h6>Venue</h6>
                        </div>
                    </Card>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    <Card bgColor={rgba('#ffffff', .1)} className="flex flex-col justify-between p-6">
                        <div className="text-[#CFB8DF]">
                            <div>
                                Minimum - 3
                            </div>
                            <div>
                                Maximum - 5
                            </div>
                        </div>
                        <div className="flex items-center mt-3">
                            <span><Users2 className="mr-3" /></span><h6>Team</h6>
                        </div>
                    </Card>
                    <Card bgColor={rgba('#ffffff', .1)} className="flex flex-col justify-between p-6">
                        <div className="text-[#CFB8DF]">
                            To be announced.
                        </div>
                        <div className="flex items-center mt-3">
                            <span><MessageCircleCode className="mr-3" /></span><h6>Preliminary Workshop</h6>
                        </div>
                    </Card>
                </div>
            </div>

            {/* DESCRIPTION */}
            <div className="mb-12">

                <h2 className={`${zen_font.className} text-center text-[#9C8DA6]`}>DESCRIPTION</h2>
                
                <Card bgColor={rgba('#ffffff', 0.1)} className={`w-full max-w-[1000px] tracking-wide mx-auto mt-12 p-6`}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nobis beatae saepe cum id est itaque tempora dicta ut, aliquid voluptatibus sit laudantium aliquam perspiciatis! Voluptatibus, repellendus. Odio explicabo quasi sed commodi sunt modi maxime laborum? Quibusdam cupiditate corporis non optio! Hic quod et excepturi, reprehenderit iste delectus ipsam nemo neque! Adipisci at cumque, eaque voluptatibus corrupti aut magnam deserunt labore dignissimos, facere molestiae reprehenderit. Magni cumque ex perferendis odio iure incidunt? Necessitatibus, laborum. Impedit vitae non reiciendis, soluta vel optio aut quas aperiam a totam quia, placeat aspernatur iure culpa sit reprehenderit molestias quos recusandae at! A, explicabo recusandae.
                </Card>
            </div>


            {/* ROUNDS */}
            <div className="">

                <h2 className={`${zen_font.className} text-center text-[#9C8DA6]`}>ROUNDS</h2>
                
                {rounds_data.map((item) => {
                    return (
                        <GenAIRoundCard {...item} key={item.round} />
                    )
                })}
            </div>


            {/* PRIZES */}
            <div className="mb-12">

                <h2 className={`${zen_font.className} text-center text-[#9C8DA6]`}>PRIZE POOL</h2>
                <div className="flex justify-center items-center gap-12 my-12 flex-col lg:flex-row">
                    {prizes_data.map((item) => {
                        return (
                            <GenAIPrizeCard
                                {...item}
                                key={item.prize}
                            />
                        )
                    })}
                </div>
                <Card bgColor={rgba('#ffffff', 0.1)} className={`${zen_font.className} flex items-center justify-center w-full max-w-[600px] tracking-wide mx-auto shadow-[0_0_21px_10px_rgba(255,255,255,0.15)]`}>
                    <Image 
                        src={'/white_trophy.svg'}
                        alt=""
                        height={50}
                        width={50}
                        className="mr-6"
                    />

                    <span>&#8377; </span><span className="text-[#C5ACD4] mx-3">5,000</span> EACH FOR NEXT 2 FINALISTS
                </Card>
            </div>

            {/* MENTORS */}
            <div className="mb-12">

                <h2 className={`${zen_font.className} text-center text-[#9C8DA6]`}>MENTORS</h2>
                <div className="grid lg:grid-cols-2 gap-6 mt-12 max-w-[1000px] mx-auto">
                    {mentors_data.map((item, ind) => {
                        return (
                            <GenAIMentorCard 
                                {...item}
                                key={ind}
                            />
                        )
                    })}
                </div>
            </div>

            {/* INSTRUCTORS */}
            <div className="mb-12">

                <h2 className={`${zen_font.className} text-center text-[#9C8DA6]`}>INSTRUCTORS</h2>
                <div className="grid lg:grid-cols-2 gap-6 mt-12 max-w-[1000px] mx-auto">
                    {instructors_data.map((item, ind) => {
                        return (
                            <GenAIInstructorCard 
                                {...item}
                                key={ind}
                            />
                        )
                    })}
                </div>
            </div>

            {/* FAQS */}
            <div className="mb-12">

                <h2 className={`${zen_font.className} text-center text-[#9C8DA6]`}>FAQs</h2>
                <div className="mt-12 max-w-[1000px] mx-auto">
                    <Accordion variant="splitted">
                        {faqs_data.map(({ question, answer }, ind) => {
                            return (
                                <AccordionItem
                                    key={`_${ind}`}
                                    aria-label={question}
                                    indicator={<></>}
                                    classNames={{
                                        base: ["!bg-[#230137]", "!shadow-none"],
                                        title: ["!text-white"],
                                        content: ["!text-white"],
                                    }}
                                    title={`Q. ${question}`}
                                >
                                    {answer}
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>


        </Card>
    )
}