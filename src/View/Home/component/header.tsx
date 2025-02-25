import React from "react";
import Logo from "../../../assets/image/logo.jpg";

function Header() {
    return (
        <div className="header h-[80px] bg-customBlue">
            <div className="container">
                <div className="navbar-logo">
                    <img src={Logo} alt="TruyenVip"/>
                </div>
                <div className="navbar-search">
                    <div className="input-seach">
                        <input type="text" className="search" placeholder="Tìm truyện..." autoComplete="off"/>
                    </div>
                    <div className="butto-seach">
                        <input type="submit" className="btn btn-search"/>
                    </div>
                </div>
            </div>
            <div className="inner">

            </div>
        </div>
    )
}

export default Header;