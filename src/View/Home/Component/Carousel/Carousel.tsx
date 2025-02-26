import React from "react";
import { Title } from "../../../../components/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "../../../../assets/image/Mu.jpg"
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

interface CarouselProps {
    image: string;
    name: string;
    chapter: string
}

const Carousel: React.FC<CarouselProps> = ({ image, name, chapter }) => {
    
    return(
        <div className="div">
            <Title />
            <div className="px-2 pt-2 pb-5">
                <div className="relative w-[187px]">
                    <img src={image} className="border border-white h-[243px] w-[187px]"></img>
                    <div className="text-white absolute bottom-0 left-0 w-full bg-black/60">
                        <h3>
                            <a className="font-bold truncate px-2">{name}</a>
                        </h3>
                        <a className="px-4">{chapter}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;