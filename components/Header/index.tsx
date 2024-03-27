"use client"

import Image from "next/image"
import { Card } from ".."
import {motion} from 'framer-motion'

export type HeaderData = {
    bg: string,
    text: string,
    image: string,
}

export type PageHeaderData = {
    team: HeaderData,
    about: HeaderData,
    sponsors: HeaderData,
    contact: HeaderData,
    faq: HeaderData,
    events: HeaderData,
    fest: HeaderData,
    profile: HeaderData,
}




const Header = ({bg, text, image}: HeaderData) => {

    const circleMajorStyles:React.CSSProperties = {
        width: '200px', 
        height: '200px', 
        backgroundColor: 'rgba(0, 0, 0,0.25)',
        marginLeft: '-100px',
        marginTop: '-100px',
    }

    const circleMinorStyles:React.CSSProperties = {
        width: '125px', 
        height: '125px',
        backgroundColor: 'rgba(0, 0, 0,0.25)',
        zIndex: 10
    }

    return (
        <Card bgColor={bg} className="overflow-hidden">
            <div className="flex w-full justify-between items-start">
                <motion.div className="rounded-full border-2 border-white flex justify-center items-center" style={{ ...circleMajorStyles}}>
                    <motion.div className="rounded-full border-2 border-white" style={{ ...circleMinorStyles}} />
                </motion.div>
                <Image 
                    src={'/paradox_logo_text.png'}
                    alt="Paradox logo"
                    width={200}
                    height={150}
                    className="max-md:w-1/4 h-auto"
                />
            </div>
            <div className="flex w-full justify-start items-center px-6">
                <h1 className="milestone text-5xl md:text-8xl mb-0 text-white" style={{letterSpacing: '2px'}}>{text}</h1>
                {/* <Image 
                    src={image}
                    alt="Header image"
                    height={100}
                    width={200}
                /> */}
            </div>
        </Card>
    )
}

export {Header}