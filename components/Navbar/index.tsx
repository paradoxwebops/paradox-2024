"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type NavbarLink = {
    name: string,
    href: string,
    target: '_self' | '_target'
}

const NavBar = () => {
    return (
        <>
        {/* <NavBarMenuFullScreen /> */}
        <nav className="flex justify-between p-6 items-center">
            <Image
                src={'/bird.svg'}
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
                <Link {...item}>{name}</Link>
            )
        })}
        </>
    )
}


const NavBarMenuCloseButton = () => {
    return (
        <>
            <div 
                className="w-[40vw] h-[40vw] z-[101] fixed top-[-20vw] right-[-20vw] rounded-full" 
                style={{backgroundColor: 'rgba(32, 97, 125, 0.2)', transform:'scale(1.5)', transformOrigin: '50% 50% '}}
            ></div>
            <div 
                className="w-[40vw] h-[40vw] z-[101] fixed top-[-20vw] right-[-20vw] rounded-full" 
                style={{backgroundColor: 'rgba(32, 97, 125, 0.2)', transform:'scale(1)', transformOrigin: '50% 50% '}}
            ></div>
            <div 
                className="w-[40vw] h-[40vw] z-[101] fixed top-[-20vw] right-[-20vw] rounded-full" 
                style={{backgroundColor: 'rgba(32, 97, 125, 0.2)', transform:'scale(.5)', transformOrigin: '50% 50% '}}
            ></div>
            <button className="fixed top-4 right-4 z-[104]">
                <X className="w-8 h-8" />
            </button>
        </>
    )
}

export {
    NavBar,
}