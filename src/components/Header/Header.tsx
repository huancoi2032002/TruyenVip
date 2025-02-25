import React, { FC } from "react";
import Logo from "../../assets/image/logo-nettruyen.png"
import Search from "../Search/Search";
import { NotificationIcon, UserIcon } from "../../assets";


type SinginProps = {
    isActive: boolean
}

const Header:React.FC<SinginProps> = ({isActive}) => {
    return (
        <div className="header h-[80px] bg-slate-600 flex justify-center">
            <div className="flex w-[1030px] justify-between items-center">
                <div className="">
                    <img src={Logo} alt="TruyenVip" className="h-[30px] object-cover"/>
                </div>
                <Search/>

                <div className="flex gap-3 items-center h-[32px]">
                    <div className="div">
                        <NotificationIcon className="size-5 fill-white"/>
                    </div>
                
                    <div className="flex gap-1 h-full items-center">
                        <UserIcon className="size-[19px] fill-white"/>
                        <span className="text-white">{isActive ? "Dao Van Hoat" : "Dang nhap"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;