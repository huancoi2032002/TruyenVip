import React from "react";

interface ContentProps {
    image: string;
    
}

const Content: React.FC<ContentProps> = ({image}) => {
    return(
        <div className="div">
            <div className="px-2 pt-2 pb-5">
                <img src={image} className="border border-white h-[170px] w-[150px]"></img>
            </div>
        </div>
    )
}

export default Content;