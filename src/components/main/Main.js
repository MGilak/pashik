import { useState, useEffect } from "react";
import ProductItem from "./product/ProductItem";
import "./main.css";
import products from "./../../data";
import Slider from "../slider/Slider";
import BrandsSlider from "./../slider/brands/BrandsSlider";

const Main = () => {
  const [activePoint, setActivePoint] = useState(0);
  const [opacity, setOpacity] = useState(false);
  const [productsInfo, setProductsInfo] = useState(products);

  const detailTitleShoe = [
    "کتانی زنانه زارا کاپشنی کد 1342",
    "کتانی مردانه ایرفورس international کد 6114",
    "کتانی ست آدیداس بونس کد 1298",
    "کتانی ونس بلک شوز طرح سوعد کد 1398",
  ];
  const priceTitleShoe = ["۶۴۸.۰۰۰", "۴۹۸.۰۰۰", "۶۹۸.۰۰۰", "۴۹۸.۰۰۰"];
  const categories = ["پرفروش‌ترین", "جدیدترین", "تخفیف‌دار"];

  const getImageSrc = () => {
    switch (activePoint) {
      case 0:
        return "./images/sh2.png";
      case 1:
        return "./images/sh2.png";
      case 2:
        return "./images/sh1.png";
      case 3:
        return "./images/sh3.png";
      default:
        return "./images/sh4.png";
    }
  };

  const handlePointClick = (pointIndex) => {
    setActivePoint(pointIndex);
    setOpacity(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpacity(false);
    }, 300);
  }, [opacity]);

  const filterProducts = (category) => {
    const newProducts = products.filter(
      (product) => product.category === category
    );
    setProductsInfo(newProducts);
  };

  return (
    <div>
      <div className="main-head">
        <div className="orange-circle">
          <div className={opacity ? "show-info active" : "show-info"}>
            <div className="price-info">
              <span className="price-number">
                {activePoint === 0
                  ? priceTitleShoe[0]
                  : priceTitleShoe[activePoint - 1]}
              </span>
              <span>تومان</span>
            </div>
            <div className="line"></div>
            <div className="detail">مشاهده محصول</div>
          </div>
          <div className={opacity ? "slider-img active" : "slider-img"}>
            <img src={getImageSrc()} alt="titleShoe" />
          </div>
          <div className="top__slider__dots">
            <img src="./images/top-slider-dots.f8d90272 (1).svg" alt="" />
          </div>
          <div
            class={opacity ? "top__slider__title active" : "top__slider__title"}
          >
            <h3>
              {activePoint === 0
                ? detailTitleShoe[0]
                : detailTitleShoe[activePoint - 1]}
            </h3>
          </div>
          <div className="line_slider">
            <div
              onClick={() => handlePointClick(1)}
              className={(activePoint === 0 || activePoint === 1) && "active"}
            ></div>
            <span></span>
            <div
              onClick={() => handlePointClick(2)}
              className={activePoint === 2 && "active"}
            ></div>
            <span></span>
            <div
              onClick={() => handlePointClick(3)}
              className={activePoint === 3 && "active"}
            ></div>
            <span></span>
            <div
              onClick={() => handlePointClick(4)}
              className={activePoint === 4 && "active"}
            ></div>
          </div>
        </div>
      </div>

      {/* triple */}
      <div className="triple has-padding">
        <a className="firstRow" href="##">
          <img src="./images/Group-256.png" alt="" />
        </a>
        <a className="firstRow" href="##">
          <img src="./images/Group-255 (1).png" alt="" />
        </a>
        <a className="firstRow" href="##">
          <img src="./images/Group-255.png" alt="" />
        </a>
        <a className="firstRow" href="##">
          <img src="./images/Group-254.png" alt="" />
        </a>
        <a className="secondRow" href="##">
          <img src="./images/Group-257 (1).png" alt="" />
        </a>
        <a className="secondRow" href="##">
          <img src="./images/Group-253.png" alt="" />
        </a>
        <a className="secondRow" href="##">
          <img src="./images/Group-257.png" alt="" />
        </a>
      </div>

      {/* products */}
      <div className="products__home has-padding">
        <div className="products__home__buttons">
          {categories.map((item) => (
            <button onClick={() => filterProducts(item)} className="two">
              {item}
            </button>
          ))}
        </div>
        <div className="products__home__products">
          {productsInfo.map((product) => (
            <ProductItem
              img={product.img}
              price={product.price}
              title={product.title}
            />
          ))}
        </div>
        <div class="products__home__more">
          <a href="##" class="">
            <span class="products__home__more__text">مشاهده همه</span>
          </a>
        </div>
      </div>

      {/* swiper slider */}
      <div className="bg__dark">
        <div className="products__slider">
          <div class="products__slider__info">
            <div class="products__slider__info__top">
              <h4> پیشنـهـادی پاشیـک </h4>
              <h4>Best Selling Products</h4>
            </div>
            <div class="products__slider__info__bottom">
              <a href="/products" class="">
                <span class="products__home__more__text">مشاهده همه</span>
              </a>
            </div>
          </div>
          <Slider className="products__main__slider" />
        </div>
      </div>

      {/* banner */}
      <div className="banners__home has-padding">
        <div className="banners__home__right">
          <div className="banners__home__instagram">
            <video src="./videos/pashik-video.mp4" loop muted autoPlay></video>
          </div>
        </div>
        <div className="banners__home__left">
          <div className="banners__home__left__top">
            <a href="##" className="banners__home__banner__1">
              <img src="./images/ezgif.com-gif-maker-(2)-(1).png" alt="" />
            </a>
          </div>
          <div className="banners__home__left__bottom">
            <a href="##" className="banners__home__banner__item">
              <img src="./images/whatsapp.png" alt="" />
            </a>
            <a href="##" className="banners__home__banner__item">
              <img src="./images/instagram.png" alt="" />
            </a>
            <a href="##" className="banners__home__banner__item">
              <img src="./images/333.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      {/* brands */}
      <div className="brands__container bg__dark">
        <div className="brands__home">
          <BrandsSlider />
        </div>
      </div>

      {/* footer */}
      <div className="footer bg__dark">
        <div className="footer__info">
          <div className="footer__title">
            <img src="./images/logo-footer.0791f788.svg" alt="" />
          </div>
          <address className="footer__info__address">
            گلستان ، گرگان، بلوار آیت الله کاشانی خیابان آیت الله کاشانی 28
            (آبشار)
          </address>
          <div class="footer__info__telephone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.451"
              height="21.489"
              viewBox="0 0 21.451 21.489"
              class="icon"
            >
              <path
                id="Icon_feather-phone-call"
                data-name="Icon feather-phone-call"
                d="M15.476,5.305a4.757,4.757,0,0,1,3.758,3.758M15.476,1.5a8.562,8.562,0,0,1,7.563,7.554m-.951,7.592V19.5a1.9,1.9,0,0,1-2.074,1.9,18.827,18.827,0,0,1-8.21-2.921A18.551,18.551,0,0,1,6.1,12.773,18.827,18.827,0,0,1,3.176,4.525,1.9,1.9,0,0,1,5.069,2.451H7.923a1.9,1.9,0,0,1,1.9,1.636,12.215,12.215,0,0,0,.666,2.673,1.9,1.9,0,0,1-.428,2.007L8.855,9.976a15.221,15.221,0,0,0,5.708,5.708l1.208-1.208a1.9,1.9,0,0,1,2.007-.428,12.215,12.215,0,0,0,2.673.666A1.9,1.9,0,0,1,22.088,16.645Z"
                transform="translate(-2.417 -0.672)"
                fill="none"
                stroke="#eb7400"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
            </svg>
            <span>پشتیبانی: 32138043-017</span>
          </div>
          <a class="footer__info__email" href="##">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23.408"
              height="23.73"
              viewBox="0 0 23.408 23.73"
              class="icon"
              data-v-136966fa=""
            >
              <g
                id="Icon_zocial-www"
                data-name="Icon zocial-www"
                transform="translate(-150.86 -102.942)"
              >
                <path
                  id="Path_104"
                  data-name="Path 104"
                  d="M79.638,111.689a12.169,12.169,0,0,0-11.631,8.343H69.73a9.941,9.941,0,0,1,.641-1.38h3.317a13.984,13.984,0,0,0-.362,1.38h1.68a12.967,12.967,0,0,1,.424-1.38h3.2v1.38h1.622v-1.38h3.458a12.1,12.1,0,0,1,.474,1.38h1.68a13.574,13.574,0,0,0-.406-1.38H88.9a9.94,9.94,0,0,1,.641,1.38h1.72A12.164,12.164,0,0,0,79.638,111.689Zm2.448,1.908a10.568,10.568,0,0,1,5.689,3.433H84.765A11.38,11.38,0,0,0,82.086,113.6Zm-5.37.119a10.773,10.773,0,0,0-2.39,3.313H71.5A10.555,10.555,0,0,1,76.715,113.717Zm3.538.521a9.35,9.35,0,0,1,2.618,2.792H80.253Zm-1.622.011v2.781H76.187A8.589,8.589,0,0,1,78.631,114.249ZM68.492,121.6a.693.693,0,0,0-.406.112.333.333,0,0,0-.163.279,1.071,1.071,0,0,0,.076.34l.862,2.477c.026.074.056.158.091.246a.847.847,0,0,0,.138.235.566.566,0,0,0,.228.159.96.96,0,0,0,.362.058.828.828,0,0,0,.431-.1.591.591,0,0,0,.228-.214,3.89,3.89,0,0,0,.159-.366l.771-2.173.768,2.184c.064.162.115.281.156.359a.574.574,0,0,0,.225.214.851.851,0,0,0,.435.094.839.839,0,0,0,.445-.1.584.584,0,0,0,.221-.225,3.589,3.589,0,0,0,.148-.377l.862-2.477a1.19,1.19,0,0,0,.08-.34.331.331,0,0,0-.167-.279.7.7,0,0,0-.4-.112.638.638,0,0,0-.366.087.5.5,0,0,0-.174.192,2.024,2.024,0,0,0-.1.272l-.608,2.108-.681-1.974a3.694,3.694,0,0,0-.156-.362.622.622,0,0,0-.228-.221.867.867,0,0,0-.46-.1.913.913,0,0,0-.46.1.629.629,0,0,0-.243.228,2.627,2.627,0,0,0-.156.359l-.677,1.974-.612-2.122a1.2,1.2,0,0,0-.185-.387A.536.536,0,0,0,68.492,121.6Zm8.34,0a.693.693,0,0,0-.406.112.333.333,0,0,0-.163.279,1.1,1.1,0,0,0,.08.34l.862,2.477c.026.074.056.158.091.246a.838.838,0,0,0,.134.235.566.566,0,0,0,.228.159.96.96,0,0,0,.362.058.843.843,0,0,0,.435-.1.578.578,0,0,0,.225-.214,3.894,3.894,0,0,0,.159-.366l.771-2.173.768,2.184c.064.162.115.281.156.359a.574.574,0,0,0,.225.214.851.851,0,0,0,.435.094.839.839,0,0,0,.445-.1.584.584,0,0,0,.221-.225,3.589,3.589,0,0,0,.148-.377l.862-2.477a1.19,1.19,0,0,0,.08-.34.331.331,0,0,0-.167-.279.7.7,0,0,0-.4-.112.638.638,0,0,0-.366.087.5.5,0,0,0-.174.192,2.023,2.023,0,0,0-.1.272l-.608,2.108-.681-1.974a3.694,3.694,0,0,0-.156-.362.608.608,0,0,0-.225-.221.867.867,0,0,0-.46-.1.928.928,0,0,0-.464.1.629.629,0,0,0-.243.228,2.627,2.627,0,0,0-.156.359l-.677,1.974-.612-2.122a1.2,1.2,0,0,0-.181-.387.544.544,0,0,0-.449-.148Zm8.34,0a.693.693,0,0,0-.406.112.333.333,0,0,0-.163.279,1.1,1.1,0,0,0,.08.34l.862,2.477c.026.074.056.158.091.246a.838.838,0,0,0,.134.235.566.566,0,0,0,.228.159.96.96,0,0,0,.362.058.843.843,0,0,0,.435-.1.578.578,0,0,0,.225-.214,3.712,3.712,0,0,0,.163-.366l.768-2.173.768,2.184c.064.162.115.281.156.359a.574.574,0,0,0,.225.214.851.851,0,0,0,.435.094.839.839,0,0,0,.445-.1.584.584,0,0,0,.221-.225,3.587,3.587,0,0,0,.148-.377l.862-2.477a1.19,1.19,0,0,0,.08-.34.327.327,0,0,0-.163-.279.71.71,0,0,0-.406-.112.638.638,0,0,0-.366.087.5.5,0,0,0-.174.192,2.025,2.025,0,0,0-.1.272l-.6,2.108-.684-1.974a3.69,3.69,0,0,0-.156-.362.608.608,0,0,0-.225-.221.867.867,0,0,0-.46-.1.928.928,0,0,0-.464.1.629.629,0,0,0-.243.228,2.628,2.628,0,0,0-.156.359l-.677,1.974-.608-2.122a1.2,1.2,0,0,0-.185-.387A.544.544,0,0,0,85.171,121.6Zm-17.226,5.262a12.268,12.268,0,0,0,23.386,0H89.618a9.991,9.991,0,0,1-.587,1.351H85.555a13.8,13.8,0,0,0,.373-1.351H84.273a11.341,11.341,0,0,1-.424,1.351h-3.6v-1.351H78.631v1.351H75.347a13.727,13.727,0,0,1-.384-1.351H73.3c.093.457.207.909.337,1.351H70.244a10.011,10.011,0,0,1-.59-1.351H67.945Zm3.364,2.973h2.908a10.3,10.3,0,0,0,2.394,3.531A10.531,10.531,0,0,1,71.309,129.835Zm4.715,0h2.607v3.031A7.729,7.729,0,0,1,76.024,129.835Zm4.23,0h2.788a8.885,8.885,0,0,1-2.788,2.955Zm4.653,0h3.06a10.552,10.552,0,0,1-5.961,3.7,10.921,10.921,0,0,0,2.9-3.7Z"
                  transform="translate(82.938 -8.747)"
                  fill="#eb7400"
                ></path>
              </g>
            </svg>{" "}
            <span>pashikshoescom@gmail.com</span>
          </a>
        </div>

        <div className="footer__menu">
          <div class="footer__title">دسترسی سریع</div>
          <ul className="footer__menu__list">
            <li>
              <a href="##">رویه ارسال کالا</a>
            </li>
            <li>
              <a href="##">شیوه‌های پرداخت</a>
            </li>
            <li>
              <a href="##">درباره ما</a>
            </li>
            <li>
              <a href="##">تماس با ما</a>
            </li>
            <li>
              <a href="##">کفش مردانه</a>
            </li>
            <li>
              <a href="##">کفش زنانه</a>
            </li>
            <li>
              <a href="##">کفش بچگانه</a>
            </li>
            <li>
              <a href="##">رهگیری پستی</a>
            </li>
          </ul>
        </div>

        <div className="footer__enamad">
          <div className="footer__title">نماد الکترونیکی</div>
          <div className="footer__enamad__images">
            <a href="##">
              <img src="./images/enamad.09e76a6a.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer__bottom bg__dark">
        <div class="footer__bottom__copyright">
          کلیه حقوق این وب‌سایت به{" "}
          <a href="##" class="router-link-active router-link-exact-active">
            پاشیک{" "}
          </a>
          تعلق دارد و کپی‌برداری از آن ممنوع می‌باشد.
        </div>
        <div class="footer__bottom__english__copyright">
          Copyright 2021
          <a href="##"> pashikshoes.com </a>
          Designed By
          <a href="##"> shetabit </a>| All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Main;
