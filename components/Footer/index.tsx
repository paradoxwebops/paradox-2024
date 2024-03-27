import Image from "next/image"
import { Card } from ".."
import Link from "next/link"
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react"

type FooterProps = {
    bg: string
}

type SocialLink = {
    url: string,
    icon: React.ReactNode
}

const data:SocialLink[] = [
    {
        url: 'https://www.instagram.com/',
        icon: <Instagram />
    },
    {
        url: 'https://www.youtube.com/',
        icon: <Youtube />
    },
    {
        url: 'https://www.linkedin.com/',
        icon: <Linkedin />
    },
    {
        url: 'https://www.linkedin.com/',
        icon: <Mail />
    },
]

const Footer = ({bg}:FooterProps) => {
    return (
        <Card bgColor={bg}>
            <div className="md:flex justify-between items-center text-white">
                <Image 
                    src={'/paradox_logo_text.png'}
                    alt="Paradox Logo"
                    width={200}
                    height={150}
                />
                <div className="text-right">
                    <div className="flex justify-end mb-3">
                        {data.map(({url, icon}, ind) => {
                            return (
                                <Link 
                                    href={url} 
                                    className="text-white text-xl p-4 bg-white/10 rounded-2xl mx-1 hover:bg-white/20" 
                                    key={`${url}_${ind}`}
                                    target="_blank"
                                    children={icon}
                                />
                            )
                        })}
                    </div>
                    Designed with &#9829; by Multimedia & WebOps Team
                </div>
            </div>
        </Card>
    )
}

export {Footer}