"use client"

import { Card, Footer, Header, PageHeaderData } from "@/components";
import { useParams, usePathname } from "next/navigation"

const data:PageHeaderData = {
    team: {
        bg: '#FEA500',
        text: 'OUR TEAM',
        image: '/paradox_logo_text.png'
    },
    about: {
        bg: '#D4555C',
        text: 'ABOUT',
        image: '/paradox_logo_text.png'
    },
    sponsors: {
        bg: '#740D47',
        text: 'PAST SPONSORS',
        image: '/paradox_logo_text.png'
    },
    contact: {
        bg: '#03190F',
        text: 'CONTACT US',
        image: '/paradox_logo_text.png'
    },
    faq: {
        bg: '#FF8B8D',
        text: 'FAQs',
        image: '/paradox_logo_text.png'
    },
    events: {
        bg: '#9700E9',
        text: 'EVENTS',
        image: '/paradox_logo_text.png'
    },
    fest: {
        bg: '#76CEE2',
        text: 'FEST',
        image: '/paradox_logo_text.png'
    },
    profile: {
        bg: '#65376B',
        text: 'PROFILE',
        image: '/paradox_logo_text.png'
    },
}

type ComponentProps = {
    page: 'team' | 'about' | 'sponsors' | 'contact' | 'faq' | 'events' | 'fest' | 'profile' | string & any
}

export default function Template({children}: {children: React.ReactNode}) {
    const p = usePathname()
    const n:ComponentProps&any = p.replace('/', '')

    const headerData:any = {...data[n]}
    
    return (
        <>
        {p === '/' ? children : 
            <>
            <div>
                <div className="flex flex-col p-6 pt-0 items-center justify-between h-full">
                    <Header {...headerData} />
                    <div className="w-full py-6">
                        {children}
                    </div>
                    <Footer bg={headerData.bg} />
                </div>
            </div>
            </>
        }
        </>
    )
}