
type CardProps = {
    bgColor: string, 
    children: React.ReactNode,
    className?: string
}

const Card = ({bgColor, children, className, ...props}:CardProps) => {
    return (
        <div className={`rounded-2xl w-full p-4 ${className}`} style={{backgroundColor: bgColor}} {...props}>
            {children}
        </div>
    )
}

export {
    Card,
}