import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import imagen from '../../assets/img/slider/imgSlider1.png'
import imagen2 from '../../assets/img/slider/imgSlider2.png'
import imagen3 from '../../assets/img/slider/imgSlider3.png'



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../assets/css/modules/slider.min.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function Slider() {
  return (
    <>
 
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imagen} className="slider__img1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagen2 } className="slider__img2"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagen3} className="slider__img3"/>
        </SwiperSlide>
      </Swiper>

    </>
  );
}

export default Slider