import React, { useState } from "react";
import "./mainProducts.css";
import ChildCategory from "./childCategory/ChildCategory";
import ProductItem from "../main/product/ProductItem";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Pagination from "./../pagination/Pagination";
import { MenProducts } from "./../../data";

const MainProducts = () => {
  const [productsInfo, setProductsInfo] = useState();
  const [shownCourses, setShownCourses] = useState([]);

  // console.log(MenProducts);

  const categoryTitle = ["مردانه", "زنانه", "بچگانه"];
  const categories = [
    [
      { type: "روزمره و کالج مردانه", count: 41 },
      { type: "کتانی و ورزشی مردانه", count: 41 },
      { type: "مجلسی و رسمی مردانه", count: 70 },
      { type: "بوت و نیم بوت مردانه", count: 48 },
      { type: "بزرگ‌پا مردانه", count: 67 },
      { type: "صندل", count: 3 },
      { type: "vip مردانه", count: 153 },
    ],
    [
      { type: "کتانی و ورزشی زنانه", count: 415 },
      { type: "بوت و نیم بوت زنانه", count: 53 },
      { type: "صندل", count: 1 },
      { type: "vip زنانه", count: 66 },
    ],
    [{ type: "صندل", count: 0 }],
  ];
  const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
  const colors = [
    { name: "آبی کاربنی", class: "one" },
    { name: "زرد", class: "two" },
    { name: "نارنجی", class: "three" },
    { name: "کالباسی", class: "four" },
    { name: "طوسی", class: "five" },
    { name: "سفید", class: "six" },
  ];

  return (
    <div className="mainProducts">
      <Breadcrumb
        links={[
          { id: 1, to: "/", title: "فروشگاه پاشیک" },
          { id: 2, to: "/all-products/:id", title: "همه محصولات" },
        ]}
      />

      {/* products */}
      <div className="products">
        <div className="products__list">
          <div className="products__list__side">
            <div className="products__side__box">
              <div className="products__side__box__header">
                <span>دسته بندی</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  data-v-39d11c8f=""
                >
                  <g
                    id="vuesax_linear_layer"
                    data-name="vuesax/linear/layer"
                    transform="translate(-618 -382)"
                  >
                    <g id="layer">
                      <path
                        id="Vector"
                        d="M9.615.225l5.9,2.62c1.7.75,1.7,1.99,0,2.74L9.615,8.2a3.42,3.42,0,0,1-2.44,0l-5.9-2.62c-1.7-.75-1.7-1.99,0-2.74l5.9-2.62A3.42,3.42,0,0,1,9.615.225Z"
                        transform="translate(621.395 384.695)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        id="Vector-2"
                        data-name="Vector"
                        d="M0,0A2.562,2.562,0,0,0,1.4,2.15L8.19,5.17a1.988,1.988,0,0,0,1.62,0L16.6,2.15A2.562,2.562,0,0,0,18,0"
                        transform="translate(621 393)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        id="Vector-3"
                        data-name="Vector"
                        d="M0,0A2.357,2.357,0,0,0,1.4,2.15L8.19,5.17a1.988,1.988,0,0,0,1.62,0L16.6,2.15A2.357,2.357,0,0,0,18,0"
                        transform="translate(621 398)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        id="Vector-4"
                        data-name="Vector"
                        d="M0,0H24V24H0Z"
                        transform="translate(618 382)"
                        fill="none"
                        opacity="0"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="products__side__box__body">
                <div className="products__list__side__categories">
                  {categories.map((category, index) => (
                    <ChildCategory
                      category={category}
                      title={categoryTitle[index]}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="products__side__box">
              <div className="products__side__box">
                <div className="products__side__box__header">
                  <span>سایز</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    data-v-39d11c8f=""
                  >
                    <g
                      id="vuesax_linear_box-2"
                      data-name="vuesax/linear/box-2"
                      transform="translate(-300 -572)"
                    >
                      <g id="box-2">
                        <path
                          id="Vector"
                          d="M11.11,7.78,8.89,8.89ZM8.89,8.89,6.67,7.78Zm0,0v0Zm8.89-4.45L15.56,5.55Zm0,0L15.56,3.33Zm0,0v0ZM11.11,1.11,8.89,0,6.67,1.11ZM0,4.44,2.22,3.33Zm0,0L2.22,5.55Zm0,0v0ZM8.89,20,6.67,18.89Zm0,0,2.22-1.11Zm0,0v0ZM2.22,16.67,0,15.56V12.78Zm13.34,0,2.22-1.11V12.78"
                          transform="translate(303.11 574)"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        ></path>
                        <path
                          id="Vector-2"
                          data-name="Vector"
                          d="M0,0H24V24H0Z"
                          transform="translate(300 572)"
                          fill="none"
                          opacity="0"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>

                <div className="products__side__box__body">
                  <div className="products__list__side__sizes">
                    {sizes.map((size) => (
                      <button className="product__sizes__item">
                        <span>{size}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="products__side__box">
              <div className="products__side__box__header">
                <span>رنگ</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.508"
                  height="25.508"
                  viewBox="0 0 25.508 25.508"
                  data-v-39d11c8f=""
                >
                  <path
                    id="Icon_ionic-md-color-palette"
                    data-name="Icon ionic-md-color-palette"
                    d="M17.254,4.5a12.754,12.754,0,0,0,0,25.508,2.087,2.087,0,0,0,2.126-2.126,1.979,1.979,0,0,0-.567-1.417,1.979,1.979,0,0,1-.567-1.417,2.088,2.088,0,0,1,2.126-2.126h2.551a7.106,7.106,0,0,0,7.086-7.085C30.008,9.6,24.269,4.5,17.254,4.5ZM9.46,17.254a2.126,2.126,0,1,1,2.126-2.126A2.087,2.087,0,0,1,9.46,17.254Zm4.251-5.668A2.126,2.126,0,1,1,15.837,9.46,2.088,2.088,0,0,1,13.711,11.586Zm7.085,0A2.126,2.126,0,1,1,22.922,9.46,2.088,2.088,0,0,1,20.8,11.586Zm4.251,5.668a2.126,2.126,0,1,1,2.126-2.126A2.088,2.088,0,0,1,25.048,17.254Z"
                    transform="translate(-4.5 -4.5)"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>

              <div className="products__side__box__body">
                <div className="products__list__side__colors">
                  {colors.map((color) => (
                    <div className="products__list__side__colors__item">
                      <div
                        className={`products__list__side__colors__item__color ${color.class}`}
                      ></div>
                      <div className="products__list__side__colors__item__name">
                        {color.name}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="products__list__side__colors__more">
                  مشاهده بیشتر <span>+</span>
                </button>
              </div>
            </div>

            <div className="products__side__box">
              <div className="products__side__box__header">
                <span data-v-39d11c8f="">قیمت</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  data-v-39d11c8f=""
                >
                  <g id="wallet-money" transform="translate(-108 -380)">
                    <path
                      id="Vector"
                      d="M7.15,0V2.03A3.363,3.363,0,0,1,3.58,5.14,3.373,3.373,0,0,1,0,2.03V0C0,1.72,1.6,2.94,3.58,2.94S7.15,1.71,7.15,0Z"
                      transform="translate(111.602 396.86)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      id="Vector-2"
                      data-name="Vector"
                      d="M7.16,3.1a2.623,2.623,0,0,1-.38,1.36,3.675,3.675,0,0,1-3.2,1.58A3.7,3.7,0,0,1,.38,4.46,2.623,2.623,0,0,1,0,3.1,2.9,2.9,0,0,1,1.04.91,3.817,3.817,0,0,1,3.57,0,3.869,3.869,0,0,1,6.1.91,2.843,2.843,0,0,1,7.16,3.1Z"
                      transform="translate(111.59 391.01)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      id="Vector-3"
                      data-name="Vector"
                      d="M7.15,3.11V5.86c0,1.72-1.6,2.94-3.57,2.94S0,7.57,0,5.86V3.11A3.367,3.367,0,0,1,3.58,0,3.869,3.869,0,0,1,6.11.91,2.925,2.925,0,0,1,7.15,3.11Z"
                      transform="translate(111.602 391)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      id="Vector-4"
                      data-name="Vector"
                      d="M5.129,1.02V3.08a1.027,1.027,0,0,1-1,1.02H2.169A2.132,2.132,0,0,1,.009,2.23,2.008,2.008,0,0,1,.609.6,1.993,1.993,0,0,1,2.049,0h2.08A1.027,1.027,0,0,1,5.129,1.02Z"
                      transform="translate(124.871 389.95)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      id="Vector-5"
                      data-name="Vector"
                      d="M0,7V5A4.654,4.654,0,0,1,4.19.06,5.322,5.322,0,0,1,5,0h9a4.573,4.573,0,0,1,.75.05A4.664,4.664,0,0,1,19,5V6.45H16.92a2.06,2.06,0,0,0-2.04,2.23,2.132,2.132,0,0,0,2.16,1.87H19V12a4.724,4.724,0,0,1-5,5H11.5"
                      transform="translate(110 383.5)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      id="Vector-6"
                      data-name="Vector"
                      d="M0,0H24V24H0Z"
                      transform="translate(132 404) rotate(180)"
                      fill="none"
                      opacity="0"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="products__side__box__body">
                <div className="products__list__side__price">
                  <div className="vue-slider vue-slider-rtl">
                    <div className="vue-slider-rail">
                      <div className="vue-slider-process"></div>
                      <div className="vue-slider-dot">
                        <div className="vue-slider-dot-handle"></div>
                      </div>
                      <div className="vue-slider-dot">
                        <div className="vue-slider-dot-handle"></div>
                      </div>
                    </div>
                  </div>

                  <div className="products__list__side__price__numbers">
                    <div className="products__list__side__price__numbers__number">
                      0
                    </div>
                    <div data-v-1e8249f0="">تا</div>
                    <div className="products__list__side__price__numbers__number">
                      ۳.۳۹۸.۰۰۰
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="products__list__side__filter__button">
              <button className="orange__button">
                <span className="orange__button__text">انجام فیلتر</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.983"
                    height="21.784"
                    viewBox="0 0 23.983 21.784"
                    className="orange__button__icon"
                  >
                    <path
                      id="Icon_feather-filter"
                      data-name="Icon feather-filter"
                      d="M24.983,4.5H3l8.793,10.4v7.188l4.4,2.2V14.9Z"
                      transform="translate(-2 -3.5)"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="products__list__main">
            <div className="products__list__main__header">
              <div className="products__list__header__sort">
                <span>ترتیب بر اساس:</span>
                <div className="products__list__header__sort__item">
                  <button>جدیدترین</button>
                  <button>پرفروش ترین</button>
                  <button>تخفیف دار</button>
                  <button>ارزان ترین</button>
                  <button>گران ترین</button>
                </div>
                <div className="products__list__header__sort__count">
                  <span>41 کالا</span>
                </div>
              </div>
            </div>

            <div className="products__list__main__body__container">
              <div className="products__list__main__body">
                {shownCourses.map((product) => (
                  <ProductItem product={product} />
                ))}
              </div>

              <Pagination
                items={MenProducts}
                itemsCount={12}
                pathname="/all-products"
                setShownCourses={setShownCourses}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProducts;
