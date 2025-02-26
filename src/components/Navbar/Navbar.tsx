import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "../../assets";

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="w-full flex justify-center bg-black h-[40px]">
            <div className="w-[1030px] flex justify-start gap-1 items-center">
                <Link to="/" className="border-r border-r-white/20 px-[10px]"><HomeIcon className={`size-6 ${currentPath === "/" ? "fill-[#FF9601]" : "fill-white hover:fill-[#FF9601]"}`} /></Link>
                <Link to="/truyen-tranh" className={`text-[16px] border-r border-r-white/20 px-[10px] ${currentPath === "/truyen-tranh" ? "text-[#FF9601]" : "text-white hover:text-[#FF9601]"}`}>
                    Truyện tranh
                </Link>
                <Link to="/dien-dan" className={`text-[16px] border-r border-r-white/20 px-[10px] ${currentPath === "/dien-dan" ? "text-[#FF9601]" : "text-white hover:text-[#FF9601]"}`}>
                    Diễn đàn
                </Link>
                <Link to="/theo-doi" className={`text-[16px] border-r border-r-white/20 px-[10px] ${currentPath === "/theo-doi" ? "text-[#FF9601]" : "text-white hover:text-[#FF9601]"}`}>
                    Theo dõi
                </Link>
                <Link to="/xep-hang" className={`text-[16px] border-r border-r-white/20 px-[10px] ${currentPath === "/xep-hang" ? "text-[#FF9601]" : "text-white hover:text-[#FF9601]"}`}>
                    Xếp hạng
                </Link>
                <Link to="/thong-ke" className={`text-[16px] border-r border-r-white/20 px-[10px] ${currentPath === "/thong-ke" ? "text-[#FF9601]" : "text-white hover:text-[#FF9601]"}`}>
                    Thống kê
                </Link>
            </div>
        </div>
    )
}

export default Navbar;