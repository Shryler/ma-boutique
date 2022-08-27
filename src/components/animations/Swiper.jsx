// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../../styles/components/_swiper.scss";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useEffect } from "react";
import { useState } from "react";


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
                    <div>
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 1</h3>
                        <span>miaou</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 2</h3>
                        <span>miaou</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 3</h3>
                        <span>miaou</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 4</h3>
                        <span>miaou</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 5</h3>
                        <span>miaou</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 6</h3>
                        <span>miaou</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 7</h3>
                        <span>miaou</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 8</h3>
                        <span>miaou</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <span className="badge-swiper badge-swiper-nouveautes">Nouveau</span>
                        <img src="http://via.placeholder.com/640x360" alt="" />
                        <h3>Info 9</h3>
                        <span>miaou</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
