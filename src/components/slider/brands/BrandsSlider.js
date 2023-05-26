import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./brandsSlider.css";

// import required modules
import { Autoplay, Navigation } from "swiper";

const BrandsSlider = () => {
  const brands = [
    "./images/brands/Path-51.png",
    "./images/brands/Path-54.png",
    "./images/brands/Path-53.png",
    "./images/brands/Path-48.png",
    "./images/brands/Path--1.png",
    "./images/brands/Path-46.png",
    "./images/brands/Path-49.png",
  ];

  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        // modules={[Navigation]}
        className="mySwiper mySwiperBrands"
      >
        {brands.map((item) => (
          <SwiperSlide className="brands__slide">
            <img src={item} alt="brands" key={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BrandsSlider;
