import { useState, useEffect } from "react";
import ProductItem from "./product/ProductItem";
import BrandsSlider from "./../slider/brands/BrandsSlider";
import Footer from "../footer/Footer";
import { MenProducts } from "./../../data";
import Slider from "../slider/Slider";
import Sliderr from "./../slider/Sliderr";
import "./main.css";
import { Link } from "react-router-dom";

const Main = () => {
  const [activePoint, setActivePoint] = useState(0);
  const [opacity, setOpacity] = useState(false);
  const [productsInfo, setProductsInfo] = useState(MenProducts);
  const [activeCat, setActiveCat] = useState(null);
  const [breakpoint, setBreakpoint] = useState(0);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 1080) {
      setBreakpoint(1080);
    } else if (width >= 1080) {
      setBreakpoint(0);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    const newProducts = MenProducts.filter(
      (product) => product.category === category
    );
    setProductsInfo(newProducts);

    setActiveCat(category);
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
            className={
              opacity ? "top__slider__title active" : "top__slider__title"
            }
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
        <Link className="firstRow" to="/all-products/1">
          <img src={`./images/${breakpoint}Group-256.png`} alt="" />
        </Link>
        <Link to="/all-products/1" className="firstRow">
          <img src={`./images/${breakpoint}Group-255 (1).png`} alt="" />
        </Link>
        <Link className="firstRow" to="/all-products/1">
          <img src={`./images/${breakpoint}Group-255.png`} alt="" />
        </Link>
        <Link className="firstRow" to="/all-products/1">
          <img src={`./images/${breakpoint}Group-254.png`} alt="" />
        </Link>
        <Link className="secondRow" to="/all-products/1">
          <img src={`./images/${breakpoint}Group-257 (1).png`} alt="" />
        </Link>
        <Link className="secondRow" to="/all-products/1">
          <img src={`./images/${breakpoint}Group-253.png`} alt="" />
        </Link>
        <Link className="secondRow" to="/all-products/1">
          <img src={`./images/${breakpoint}Group-257.png`} alt="" />
        </Link>
      </div>

      {/* products */}
      <div className="products__home has-padding">
        <div className="products__home__buttons">
          {categories.map((item) => (
            <button
              onClick={() => filterProducts(item)}
              key={item}
              className={activeCat === item && "active"}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="products__home__products">
          {productsInfo.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
        <div className="products__home__more">
          <div
            onClick={() => {
              setActiveCat(null);
              setProductsInfo(MenProducts);
            }}
          >
            <span className="products__home__more__text">مشاهده همه</span>
          </div>
        </div>
      </div>

      {/* swiper slider */}
      <div>
        <div className="products__slider">
          <div className="products__slider__info">
            <div className="products__slider__info__top">
              <h4> پیشنـهـادی پاشیـک </h4>
              <h4>Best Selling Products</h4>
            </div>
            <div className="products__slider__info__bottom">
              <Link to="/all-products/1">
                <span className="products__home__more__text">مشاهده همه</span>
              </Link>
            </div>
          </div>
          {breakpoint === 0 ? (
            <Slider className="products__main__slider" />
          ) : (
            <Sliderr className="products__main__slider" />
          )}
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
      <Footer />
    </div>
  );
};

export default Main;
