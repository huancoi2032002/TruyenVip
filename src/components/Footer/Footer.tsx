import React from "react"
import Logo1 from "../../assets/image/logo-nettruyen.png"
import { Link } from "react-router-dom"

const Footer = () => {
    return(
        <div className="bg-[#222] w-full flex justify-center">
            <div className="justify-between w-[1030px] grid grid-cols-3 gap-4">
                <div className="pt-4">
                    <img src={Logo1} alt="TruyenVip" />
                    <div className="flex gap-2 text-[14px] pt-2">
                        <Link to=" " className="text-[#FF9601]">Giới thiệu</Link>
                        <div className="text-white ">|</div>
                        <Link to=" " className="text-[#FF9601]">Liên hệ</Link>
                    </div>
                    <div className="flex gap-2 text-[14px] pt-2">
                        <Link to=" " className="text-[#FF9601]">Điều khoản</Link>
                        <div className="text-white ">|</div>
                        <Link to=" " className="text-[#FF9601]">Chính sách bảo mật</Link>
                    </div>
                </div>
                <div className="pt-4 flex flex-col">
                    <h1 className="text-[22px] text-[#aaa]">Liên hệ đặt quẳng cáo</h1>
                    <a className="text-[13px] text-[#aaa] pt-2">Email:<Link to=" " className="text-[#FF9601]">HuanHoat@gmail.com</Link></a>
                    <a className="text-[13px] text-[#aaa] pt-2">Vui lòng gửi Email cho chúng tôi kèm telegram</a>
                    <a className="text-[13px] text-[#aaa] pt-2">Copyright © 2025 NetTruyen</a>
                </div>
                <div className="pt-4 flex flex-col">
                    <h1 className="text-[22px] text-[#aaa]">Miễn trừ trách nhiệm</h1>
                    <a className="text-[13px] text-[#aaa] pt-2">Trang web này cung cấp nội dung truyện tranh chỉ với mục đích giải trí
                         và không chịu trách nhiệm về bất kỳ nội dung quảng cáo, liên kết của bên thứ ba hiển thị trên trang web của 
                         chúng tôi.</a>
                    <a className="text-[13px] text-[#aaa] pt-2 pb-2">Tất cả thông tin và hình ảnh trên website đều được thu thập từ 
                        internet. Chúng tôi không chịu trách nhiệm về bất kỳ nội dung nào. Nếu bạn hoặc tổ chức của bạn có vấn đề gì 
                        liên quan đến nội dung hiển thị trên website, vui lòng liên hệ với chúng tôi để được giải quyết.</a>
                </div>
            </div>
        </div>
    )
}

export default Footer