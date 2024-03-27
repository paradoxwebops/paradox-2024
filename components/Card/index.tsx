"use client"

import { CSSProperties } from "react"

type CardProps = {
    bgColor: string, 
    children: React.ReactNode,
    className?: string,
    style?: CSSProperties,
}

const Card = ({bgColor, children, className, style, ...props}:CardProps) => {
    return (
        <div className={`rounded-2xl w-full p-4 ${className}`} style={{backgroundColor: bgColor, ...style}} {...props}>
            {children}
        </div>
    )
}

export {
    Card,
}