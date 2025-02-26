import React from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"

type LayoutMainProps = {
    children: React.ReactNode
}

const LayoutMain:React.FC<LayoutMainProps> = ({children}) => {
    return(
        <div className="flex flex-col">
            <div>
                <Header />
            </div>
            <div>
                <Navbar/>
            </div>
            <div className="flex w-full justify-center bg-[#1A1A1A]">
                <div className="w-[1030px] bg-[#252525]">
                    {children}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default LayoutMain