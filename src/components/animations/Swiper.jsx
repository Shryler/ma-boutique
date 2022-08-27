// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useEffect } from "react";
import { useState } from "react";
import { BsBasket } from 'react-icons/bs';


export default function SwiperMod() {

    const getNbSlide = () => {
        const width = window.innerWidth;

        if (width < 768) return 1;
        if (width > 768 && width < 1200) return 2;
        if (width >= 1200) return 3;
    }

    const [nbSlide, setNbSlide] = useState(getNbSlide());

    const resize = () => {
        setNbSlide(getNbSlide());
    }

    useEffect(() => {
        window.addEventListener("resize", resize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Swiper
                slidesPerView={nbSlide}
                spaceBetween={30}
                slidesPerGroup={nbSlide}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper-items">
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <div className="swiper-items-img">
                            <img src="https://media.ldlc.com/r150/ld/products/00/05/92/81/LD0005928160_1_0005973949.jpg" alt="" />
                        </div>
                        <div className="swiper-item-title">Apple MacBook Pro M1 Pro (2021) 16" Gris sidéral 32Go/2To (MK183FN/A-32GB-2TB-QWERTY)</div>
                        <div className="swiper-item-details">
                            <div className="swiper-item-price">125€<sup>99</sup></div>
                            <button className="swiper-item-basket"><BsBasket size="25" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-items">
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <div className="swiper-items-img">
                            <img src="https://media.ldlc.com/r150/ld/products/00/05/97/36/LD0005973600.jpg" alt="" />
                        </div>
                        <div className="swiper-item-title">Epson WorkForce WF-2965DWF</div>
                        <div className="swiper-item-details">
                            <div className="swiper-item-price">100€<sup>00</sup></div>
                            <button className="swiper-item-basket"><BsBasket size="25" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-items">
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <div className="swiper-items-img">
                            <img src="https://media.ldlc.com/r150/ld/products/00/05/97/37/LD0005973746.jpg" alt="" />
                        </div>
                        <div className="swiper-item-title">Dell Inspiron 14 5420-995</div>
                        <div className="swiper-item-details">
                            <div className="swiper-item-price">899€<sup>95</sup></div>
                            <button className="swiper-item-basket"><BsBasket size="25" /></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/" className="swiper-items">
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 4</h3>
                        <span>miaou</span>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/" className="swiper-items">
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 5</h3>
                        <span>miaou</span>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/" className="swiper-items">
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 6</h3>
                        <span>miaou</span>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/" className="swiper-items">
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 7</h3>
                        <span>miaou</span>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/" className="swiper-items">
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 8</h3>
                        <span>miaou</span>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="/" className="swiper-items">
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 9</h3>
                        <span>miaou</span>
                    </a>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
