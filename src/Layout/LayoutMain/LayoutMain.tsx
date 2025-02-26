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
            <div className="">
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default LayoutMain