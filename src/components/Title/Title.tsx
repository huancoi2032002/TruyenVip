import React from "react"

type TitleProps = {
    title?: string
}

export const Title:React.FC<TitleProps> = ({title}) => {
    return (
        <div className="div">
            {title}
        </div>
    )
}