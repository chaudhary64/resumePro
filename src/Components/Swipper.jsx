import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation } from "swiper/modules";

export default function Swipper({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true} // Enable built-in navigation arrows
        modules={[Navigation]} // Include the Navigation module
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index + "swiper-element"}>
            <div className="h-full bg-amber-500 border border-gray-400">
              <img src={item.src} alt={item.src} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
