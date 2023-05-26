import { useState, useEffect } from "react";
import ProductItem from "./product/ProductItem";
import "./main.css";
import products from "./../../data";

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
      <div className="slider__bg__dark">
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
          <div className="products__slider__products"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
