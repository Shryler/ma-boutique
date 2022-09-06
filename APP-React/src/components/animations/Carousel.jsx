import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper";

export default function CarouselPrincipal() {

    const [backgroundColor, setbackgroundColor] = useState("#f5f5f5");
    const [backgroundImage, setBackgroundImage] = useState("slide1");
    const [backgroundSelect, setBackgroundSelect] = useState("slide1");

    useEffect(() => {
        const container = document.getElementById('changeColor');
        container.style.backgroundColor = backgroundColor;
        container.classList.remove(backgroundSelect);
        container.classList.add(backgroundImage);
    }, [backgroundColor, backgroundSelect, backgroundImage]);

    const handleChange = (e) => {
        switch (e.snapIndex) {
            case 0:
                setbackgroundColor("#f0f0f0");
                setBackgroundImage("slide1");
                setBackgroundSelect("slide3");
                break;
            case 1:
                setbackgroundColor("#33276F");
                setBackgroundImage("slide2");
                setBackgroundSelect("slide1");
                break;
            case 2:
                setbackgroundColor("#f6ae28");
                setBackgroundImage("slide3");
                setBackgroundSelect("slide2");
                break;
            default:
                setbackgroundColor("#f0f0f0");
                setBackgroundImage("slide1");
                setBackgroundSelect("slide3");
                break;
        }
    }

    return (
        <Swiper
            pagination={true}
            modules={[EffectFade, Autoplay]}
            id="myCarousel"
            onSlideChange={(e) => handleChange(e)}
            effect={"fade"}
            autoplay={{
                delay: 7000,
                disableOnInteraction: false,
            }}>
            <SwiperSlide />
            <SwiperSlide />
            <SwiperSlide />
        </Swiper>
    );
}