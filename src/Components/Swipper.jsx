import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation } from "swiper/modules";
import Slides from "./Slides";

export default function Swipper({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={window.innerWidth > 768 ? 3 : 2}
        spaceBetween={window.innerWidth > 768 ? 30 : 15}
        navigation={true} // Enable built-in navigation arrows
        modules={[Navigation]} // Include the Navigation module
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index + "swiper-element"}>
            <Slides item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
