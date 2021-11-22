import React from "react";

import SwiperCore, { Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";

import slide1 from "./../assets/img/slide-1.png";
import slide2 from "./../assets/img/slide-2.png";
import slide3 from "./../assets/img/slide-3.png";
import bigSlide1 from "./../assets/img/bigSlide-1.png";

SwiperCore.use([Thumbs]);

function Slider() {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

    return (
        <div className="product__slider">
            <Swiper
                id="product__thumbSlider"
                spaceBetween={15}
                slidesPerView={3}
                direction="vertical"
                onSwiper={setThumbsSwiper}
            >
                <SwiperSlide>
                    <img src={slide1} alt="Slide-1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Slide-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Slide-3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="Slide-1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Slide-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Slide-3" />
                </SwiperSlide>
            </Swiper>

            <Swiper
                id="product__main-slider"
                spaceBetween={15}
                slidesPerView={1}
                direction="vertical"
                thumbs={{ swiper: thumbsSwiper }}
            >
                <SwiperSlide>
                    <img src={bigSlide1} alt="Slide-1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Slide-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Slide-3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bigSlide1} alt="Slide-1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Slide-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Slide-3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
