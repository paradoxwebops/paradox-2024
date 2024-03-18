"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
    motion,
    AnimatePresence,
} from "framer-motion"

type NavbarLink = {
    name: string,
    href: string,
    target: '_self' | '_target'
}

const NavBar = () => {
    return (
        <>

        {/* <NavBarMenuFullScreen /> */}
        <nav className="flex justify-between p-6 items-center fixed w-full z-[99]">
            <Image
                src={'/logo.webp'}
                alt="Logo"
                width={50}
                height={50}
            />
            <button onClick={() => {}}>
                <Menu />
            </button>
        </nav>
        </>
    )
}

const NavBarMenuFullScreen = () => {
    return (
        <>
        <div 
            className="w-full h-screen fixed bottom-0 top-0 left-0 right-0 z-[100]" 
            style={{backgroundColor: '#D7F1F9'}}
        >
            <NavBarMenuCloseButton />
            <div className="flex flex-col h-full items-start justify-center p-8">
                <Image 
                    src={'/chennai_blue.svg'}
                    alt="Paradox"
                    width={500}
                    height={500}
                />
                <NavBarLinks />
            </div>
        </div>
        </>
    )
}

const NavBarLinks = () => {
    const data:NavbarLink[] = [
        {
            href: '/team',
            name: 'TEAM',
            target: '_self'
        },
        {
            href: '/sponsors',
            name: 'PAST SPONSORS',
            target: '_self'
        },
        {
            href: '/contact',
            name: 'CONTACT US',
            target: '_self'
        },
        {
            href: '/about',
            name: 'ABOUT US',
            target: '_self'
        },
    ]
    return (
        <>
        {data.map((item) => {
            const {name} = item
            return (
                <Link {...item} key={name}>{name}</Link>
            )
        })}
        </>
    )
}


const NavBarMenuCloseButton = () => {
    const circleScales = [0.5, 1, 1.5]
    
    return (
        <>
            {circleScales.map((val, ind) => {
                return (
                    <motion.div 
                        initial={{transform: `scale(0)`}}
                        animate={{transform: `scale(${val})`}}
                        transition={{delay: 0.1 * (ind+1), ease: [0.87, 0, .25, 1]}}
                        className="w-[40vw] h-[40vw] z-[101] fixed top-[-20vw] right-[-20vw] rounded-full" 
                        style={{backgroundColor: 'rgba(32, 97, 125, 0.2)', transformOrigin: '50% 50% '}}
                        key={`${val}_${ind}`}
                    />
                )
            })}
            <button className="fixed top-4 right-4 z-[104]">
                <X className="w-8 h-8" />
            </button>
        </>
    )
}

export {
    NavBar,
}