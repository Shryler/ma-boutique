import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';


// import required modules
import { Autoplay, Pagination } from "swiper";

export default function CarouselPrincipal() {

    const [backgroundColor, setbackgroundColor] = useState("#f5f5f5");

    useEffect(() => {
        const container = document.getElementById('changeColor');
        container.style.backgroundColor = backgroundColor;
    }, [backgroundColor]);

    const handleChange = (e) => {
        switch (e.snapIndex) {
            case 0:
                setbackgroundColor("#f0f0f0");
                break;
            case 1:
                setbackgroundColor("#33276F");
                break;
            case 2:
                setbackgroundColor("#f6ae28");
                break;

            default:
                setbackgroundColor("#f0f0f0");
                break;
        }
    }


    return (
        <Swiper 
        pagination={true} 
        modules={[Pagination, Autoplay]} 
        id="myCarousel" 
        onSlideChange={(e) => handleChange(e)}         
        autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}>
            <SwiperSlide>
                <div>
                    <img src="/img/carousel/slider1.png" className="d-block" alt="..." />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src="/img/carousel/slider2.png" className="d-block" alt="..." />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/img/carousel/slider3.png" className="d-block" alt="..." />
            </SwiperSlide>
        </Swiper>
    );
}