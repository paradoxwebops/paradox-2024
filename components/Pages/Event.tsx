"use client"

import { rgba } from "@/lib/utils"
import { Card } from "../Card"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Inter } from "next/font/google"
import React from "react"
import { Users2 } from "lucide-react"
import { Accordion, AccordionItem } from "@nextui-org/react";
import moment from "moment"

const inter = Inter({weight: ["300", "400", "500", "600", "700"], subsets: ['latin']})

type EventMember = {
    id: number,
    name: string,
    email: string
}

type EventDepartment = {
    id: number,
    name: string
}

type EventRound = {
    id: number,
    event: number,
    name: string,
    start_time: number | string,
    end_time: number | string,
    location: string,
    description: string
}



type EventFAQ = {
    id: number,
    question: string,
    answer: string,
}

type EventSponsor = {
    id: number,
    name: string,
    title: string,
    logo: string,
    url: string,
}

type EventPerson = {
    id: number,
    name: string,
    dude_type: string,
    email: string
}

type EventSocialLink = {
    id: number,
    name: string,
    url: string
}

export type EventData = {
    id: number,
    name: string,
    description: null | string,
    is_approved: boolean,
    department: EventDepartment,
    open: boolean,
    max_team_size: null | string | number,
    min_team_size: null | string | number,
    max_participants: null | string | number,
    header_image: null | string,
    start_date: null | string | number,
    end_date: null | string | number,
    registration_start_date: null | string | number,
    registration_end_date: null | string | number,
    fee: number,
    location: null | string,
    rounds: EventRound[],
    some_dudes: EventPerson[],
    social_links: EventSocialLink[],
    sponsors: EventSponsor[],
    faqs: EventFAQ[],
    is_team_event: boolean,
    location_link?: null | string,
    head?: string,
    members?: EventMember[],
    status?: string,
    messages?: any[],
    rules?: null | string
}

export const defaultEventValues = {
    id: 1,
    name: '',
    description: null,
    is_approved: false,
    department: {
        id: 0,
        name: ''
    },
    open: false,
    max_team_size: null,
    min_team_size: null,
    max_participants: null,
    header_image: null,
    start_date: null,
    end_date: null,
    registration_start_date: null,
    registration_end_date: null,
    fee: 0,
    location: null,
    rounds: [],
    some_dudes: [],
    social_links: [],
    sponsors: [],
    faqs: [],
    is_team_event: false,
    location_link: null,
    head: '',
    members: [],
    status: '',
    messages: [],
    rules: null
}

const EventSubHeading = ({children}:{children:React.ReactNode}) => {
    return (
        <h2 className={`${inter.className} text-white font-semibold text-3xl mb-4 mt-4`} style={{display: 'list-item', listStyleImage: 'url("/eventHeadingPrefix.png")', listStylePosition: 'inside'}}>
            <span className="pl-3">
                {children}
            </span>
        </h2>
    )
}

const EventPill = ({children, small, className}:{children:React.ReactNode, small?: boolean, className?: string}) => {
    return (
        <Card bgColor={rgba('#d9d9d9', 0.25)} className={`text-[#A36FC4] py-3 flex items-center ${className}`} style={{width: (small ? 'auto !important' : '100%'),}}>
            {children}
        </Card>
    )
}

const EventJudgeCard = ({name, email, dude_type}: EventPerson) => {
    return (
        <Card bgColor={rgba('#ffffff', 0.1)} className="text-white">
            <Card bgColor="#301042" className="!w-auto !py-1 !px-3 text-sm font-semibold" style={{display: "inline-block"}}>
                {dude_type}
            </Card>
            <h3 className="text-xl mt-3">
                {name}
            </h3>
            <div>
                <small>{email}</small>
            </div>
        </Card>
    )
}

const EventSponsorCard = ({name, url, title, logo}: EventSponsor) => {
    return (
        <Card bgColor={rgba('#230137', 1)} className="">
            <div className="flex items-center gap-4">
                <div className="w-1/2">
                    <img className="w-full h-auto rounded-2xl" src={logo} alt={name} />
                </div>
                <div className="w-full">
                    <h3 className="text-xl mt-3 text-white">
                        {name}
                    </h3>
                    <Card bgColor="#fff" className="!w-[fit-content] !py-1 !px-2 text-sm font-semibold my-3" style={{display: "inline-block"}}>
                        {title}
                    </Card>

                    <div className="text-white">
                        <small><a href={url} target="_blank">Website</a></small>
                    </div>
                </div>
            </div>
        </Card>
    )
}

const EventDetailCard = ({title, children, rounds}:{title:string, children?: React.ReactNode, rounds?: EventRound[]}) => {

    return (
        <Card bgColor={rgba('#230137', 1)} className="mt-6">
            <h3 className="font-bold text-xl text-[#6C3A8C] mb-4">{title}</h3>
            <div className="text-white">
                {(!!rounds && (rounds?.length !== 0)) ? 
                    rounds?.map(({name, description, start_time, end_time, location}, ind) => {
                        const pills = [
                            {
                                t: 'Start time',
                                v: (moment(start_time).format('Do MMMM YYYY h:mm A'))
                            },
                            {
                                t: 'End time',
                                v: (moment(end_time).format('Do MMMM YYYY h:mm A'))
                            },
                            {
                                t: 'Location',
                                v: location
                            },
                        ]

                        return (
                            <div key={`${start_time}_${end_time}_${ind}`} className="pl-12">
                                <h4 className="font-semibold text-white text-lg mb-3" style={{display: 'list-item', listStyleImage: 'url("/eventHeadingPrefix.png")', listStylePosition: 'outside'}}>{name}</h4>

                                <div className="flex max-md:flex-col gap-4">
                                    {pills.map(({t, v}, index) => {
                                        return (
                                            <EventPill className="!text-white" key={`${start_time}_${end_time}_${ind}_${index}`}>
                                                <div className="lg:flex items-center justify-between w-full">
                                                    <div className="lg:w-1/2">
                                                        <b>{t}</b>:
                                                    </div>
                                                    <div className="lg:w-1/2 text-right max-lg:text-sm">
                                                        {v}
                                                    </div>
                                                </div>
                                            </EventPill>
                                        )
                                    })}
                                </div>

                                <div className="my-4">
                                    {description}
                                </div>
                            </div>
                        )
                    })
                :
                    <>{children}</>
                }
            </div>
        </Card>
    )
}

const EventPageMainBody = ({description, rounds, rules, faqs, some_dudes, start_date, registration_start_date, registration_end_date, end_date, min_team_size, max_participants, max_team_size, is_team_event, fee, sponsors}: EventData) => {

    return (
        <Card bgColor='#230137' className="p-12 my-6">
            <Card bgColor="" style={{backgroundColor: rgba('#d9d9d9', 0.1), backdropFilter: 'blur(2px)'}}>
                
                <EventSubHeading>Details</EventSubHeading>
                <div className="flex max-md:flex-col gap-4">
                    <EventPill className="font-bold" small={true}>
                        <Users2 className="mr-3" /> {is_team_event ? 'Team' : 'Solo'} Event
                    </EventPill>
                    {is_team_event ? 
                    <>
                        <EventPill small={true}><b>Max</b>: {max_team_size}</EventPill>
                        <EventPill small={true}><b>Min</b>: {min_team_size}</EventPill>
                    </>
                    :
                    <>
                        <EventPill small={true}><b>Maximum participants</b>: {max_participants}</EventPill>
                    </>
                    }
                    
                    <EventPill small={true}><b>Fees</b>: {fee}</EventPill>
                </div>
                <div className="flex gap-4 mt-4">
                    <EventPill className="!text-white max-md:flex-col justify-between">
                        <span><b>Event Dates</b>:</span>
                        <span>
                            {moment(start_date).format('Do MMMM YYYY')} - {moment(end_date).format('Do MMMM YYYY')}
                        </span> 
                    </EventPill>
                    <EventPill className="!text-white max-md:flex-col justify-between">
                        <span>
                            <b>Registration Dates</b>: 
                        </span>
                        <span>
                            {moment(registration_start_date).format('Do MMMM YYYY')} - {moment(registration_end_date).format('Do MMMM YYYY')}
                        </span>
                    </EventPill>
                </div>
                <EventDetailCard title="Description">
                    {description}
                </EventDetailCard>

                <EventDetailCard title="Rounds" rounds={rounds} />

                {!!rules && <EventDetailCard title="Rules & Regulations">
                    <a href={`${rules}`} target="_blank">{rules}</a>
                </EventDetailCard>}




                <EventSubHeading>Sponsors</EventSubHeading>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:px-12 gap-4">
                    {sponsors?.map((sponsor, ind) => {
                        return (
                            <EventSponsorCard {...sponsor} key={ind} />
                        )
                    })}
                </div>

                <EventSubHeading>Judges</EventSubHeading>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 md:px-12 gap-4">
                    {some_dudes?.map((person, ind) => {
                        return (
                            <EventJudgeCard {...person} key={ind} />
                        )
                    })}
                </div>
                
                <EventSubHeading>FAQs</EventSubHeading>
                <Accordion variant="splitted">
                    {faqs.map(({ question, answer, id }, ind) => {
                        return (
                            <AccordionItem
                                key={`_${id}`}
                                aria-label={question}
                                indicator={<></>}
                                classNames={{ base: ["!bg-[#230137]", "!shadow-none",], title: ['!text-white'], content: ['!text-white'] }}
                                title={`Q. ${question}`}
                            >
                                {answer}
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </Card>
        </Card>
        
    )
}

const EventPage = ({...props}: EventData) => {

    return (
        <>
        <Header 
            bg={'#230137'}
            text={props.name} 
            isEvent
            eventCategory={props.department.name}
            eventImage={props.header_image ?? "https://placehold.co/200"}
            eventId={props.id}
        />

        <EventPageMainBody 
            {...props}
        />
        
        <Footer
            bg={'#230137'}
        />
        </>
    )
}

export {
    EventPage,
}