import React from "react";
import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation, EffectCoverflow, Pagination } from "swiper";

const Slider = () => {
  const sliderSuggestion = [
    {
      id: 1,
      title: "کتانی ونس مردانه Ashoes کد 1516",
      category: "جدیدترین",
      price: "۹۸۸.۰۰۰",
      img: "./images/suggestion/product-1479-thumb_lg.jpg",
    },
    {
      id: 2,
      title: "کتانی زنانه yezzy450 کد 1508",
      category: "جدیدترین",
      price: "۹۸۸.۰۰۰",
      img: "./images/suggestion/product-1529-thumb_lg.jpg",
    },
    {
      id: 3,
      title: "صندل مردانه fitness کد 1512",
      category: "جدیدترین",
      price: "۱.۷۹۸.۰۰۰",
      img: "./images/suggestion/product-1187-thumb_lg.jpg",
    },
    {
      id: 4,
      title: "کتانی ونس بچگانه fashion کد 1515",
      category: "جدیدترین",
      price: "۷۹۸.۰۰۰",
      img: "./images/suggestion/product-1493-thumb_lg.jpg",
    },
    {
      id: 5,
      title: "کتانی ونس مردانه Ashoes کد 1516",
      category: "جدیدترین",
      price: "۱.۱۹۸.۰۰۰",
      img: "./images/suggestion/product-1609-thumb_lg.jpg",
    },
    {
      id: 6,
      title: "ونس زنانه A-SHOES طرح خرسی کد 1517",
      category: "جدیدترین",
      price: "۱.۱۹۸.۰۰۰",
      img: "./images/suggestion/product-1617-thumb_lg.jpg",
    },
    {
      id: 7,
      title: "کتانی بچگانه SPORT کد 1519",
      category: "جدیدترین",
      price: "۷۹۸.۰۰۰",
      img: "./images/suggestion/product-1608-thumb_lg.jpg",
    },
    {
      id: 8,
      title: "کتانی مردانه YEZZY350 کد 1522",
      category: "جدیدترین",
      price: "۱.۴۹۸.۰۰۰",
      img: "./images/suggestion/product-1322-thumb_lg.jpg",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        // modules={[Navigation]}
        className="mySwiper"
      >
        {sliderSuggestion.map((item) => (
          <SwiperSlide className="slide" key={item.id}>
            <div className="product__image">
              <img src={item.img} alt="" />
              <div className="product__fast__show">
                <div className="product__fast__show__buttons">
                  <a className="button" href="##">
                    مشاهده
                  </a>
                  <button className="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.624"
                      height="15.39"
                      viewBox="0 0 24.624 15.39"
                    >
                      <defs>
                        <radialGradient
                          id="radial-gradient"
                          cx="0.5"
                          cy="0.5"
                          r="0.5"
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset="0" stop-color="#eb7400"></stop>
                          <stop offset="1" stop-color="#763a00"></stop>
                        </radialGradient>
                      </defs>
                      <path
                        id="Icon_metro-eye"
                        data-name="Icon metro-eye"
                        d="M14.883,7.712a13.79,13.79,0,0,0-12.312,7.7,13.7,13.7,0,0,0,24.624,0,13.79,13.79,0,0,0-12.312-7.7Zm6.071,4.081a11.709,11.709,0,0,1,3.593,3.614,11.709,11.709,0,0,1-3.593,3.614,11.283,11.283,0,0,1-12.141,0,11.709,11.709,0,0,1-3.593-3.614,11.708,11.708,0,0,1,3.593-3.614c.094-.06.189-.118.285-.176a6.156,6.156,0,1,0,11.571,0q.144.086.285.176ZM14.883,13.1a2.309,2.309,0,1,1-2.309-2.309A2.308,2.308,0,0,1,14.883,13.1Z"
                        transform="translate(-2.571 -7.712)"
                        opacity="0.8"
                        fill="url(#radial-gradient)"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="product__details">
              <a className="product__details__title" href="##">
                <span>{item.title}</span>
              </a>
              <div className="product__details__price">
                <span className="product__info__price__amount">
                  <span className="product__info__price__amount__number">
                    {item.price}
                  </span>
                  تومان
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
