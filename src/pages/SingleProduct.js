import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import { useCartActions } from "./../context/CartProvider";
import { useProduct } from "../context/SingleProductProvider";

const SingleProduct = () => {
  const dispatch = useCartActions();
  const product = useProduct();

  const { img, price, title } = product;

  const addProductHandler = () => {
    dispatch({ type: "ADD", payload: product });
  };

  return (
    <div>
      <Header />
      <Breadcrumb />
      <div className="product__content">
        <div className="product__gallery">
          <div className="product__gallery__images">
            <div className="active product__gallery__images__item">
              <img src="./images/one/variety-32793.jpg" alt="shoes" />
            </div>
            <div className="product__gallery__images__item">
              <img src="./images/one/variety-32793.jpg" alt="shoes" />
            </div>
            <div className="product__gallery__images__item">
              <img src="./images/one/variety-32793.jpg" alt="shoes" />
            </div>
            <div className="product__gallery__images__item">
              <img src="./images/one/variety-32793.jpg" alt="shoes" />
            </div>
            <div className="product__gallery__images__item">
              <img src="./images/one/variety-32793.jpg" alt="shoes" />
            </div>
            <div className="product__gallery__images__item">
              <img src="./images/one/variety-32793.jpg" alt="shoes" />
            </div>
            <div className="product__gallery__images__item">
              <img src="./images/one/variety-32793.jpg" alt="shoes" />
            </div>
            <div className="product__gallery__images__item">
              <img src="./images/one/variety-32793.jpg" alt="shoes" />
            </div>
            <div className="product__gallery__images__item">
              <img src="./images/one/variety-32793.jpg" alt="shoes" />
            </div>
            <div className="product__gallery__images__item">
              <img src="./images/one/variety-32793.jpg" alt="shoes" />
            </div>
          </div>

          <div className="product__gallery__main__image">
            <button className="product__gallery__main__image__icon favorite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.66"
                height="20.827"
                viewBox="0 0 21.66 20.827"
              >
                <path
                  id="Icon_ionic-ios-heart-empty"
                  data-name="Icon ionic-ios-heart-empty"
                  d="M19.2,3.938h-.052A5.924,5.924,0,0,0,14.2,6.645,5.924,5.924,0,0,0,9.259,3.938H9.206A5.887,5.887,0,0,0,3.375,9.821,12.674,12.674,0,0,0,5.864,16.73,43.615,43.615,0,0,0,14.2,24.764a43.615,43.615,0,0,0,8.341-8.034,12.674,12.674,0,0,0,2.489-6.909A5.887,5.887,0,0,0,19.2,3.938Zm2.166,11.934a39.935,39.935,0,0,1-7.164,7.06,39.994,39.994,0,0,1-7.164-7.065A11.233,11.233,0,0,1,4.833,9.821,4.418,4.418,0,0,1,9.217,5.4h.047a4.365,4.365,0,0,1,2.14.562,4.55,4.55,0,0,1,1.583,1.484,1.463,1.463,0,0,0,2.447,0,4.6,4.6,0,0,1,1.583-1.484,4.365,4.365,0,0,1,2.14-.562H19.2a4.418,4.418,0,0,1,4.384,4.42A11.375,11.375,0,0,1,21.369,15.871Z"
                  transform="translate(-3.375 -3.938)"
                  fill="#fff"
                ></path>
              </svg>
            </button>
            <button className="product__gallery__main__image__icon zoom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.96"
                height="21.96"
                viewBox="0 0 21.96 21.96"
              >
                <g
                  id="Icon_feather-zoom-in"
                  data-name="Icon feather-zoom-in"
                  transform="translate(-3.75 -3.75)"
                >
                  <path
                    id="Path_1773"
                    data-name="Path 1773"
                    d="M22.411,13.455A8.955,8.955,0,1,1,13.455,4.5,8.955,8.955,0,0,1,22.411,13.455Z"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    id="Path_1774"
                    data-name="Path 1774"
                    d="M29.844,29.844l-4.869-4.869"
                    transform="translate(-5.195 -5.195)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    id="Path_1775"
                    data-name="Path 1775"
                    d="M16.5,12v6.716"
                    transform="translate(-3.045 -1.903)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    id="Path_1776"
                    data-name="Path 1776"
                    d="M12,16.5h6.716"
                    transform="translate(-1.903 -3.045)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </g>
              </svg>
            </button>
            <img src={img} alt="" />
          </div>
        </div>

        {/* <div className="silentbox-gallery"></div> */}

        <div className="product__info">
          <div className="product__info__1">
            <h2 className="product__info__title">
              کتانی کف‌تخت نایک sb کد 6124
            </h2>
            <span className="product__info__code">
              <div>
                <span className="ms-1">کد محصول:</span> 1613
              </div>
            </span>
          </div>

          <div className="product__info__2">
            <div className="rating product__info__2__rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.274"
                height="20.28"
                viewBox="0 0 21.274 20.28"
                data-v-771deb17=""
              >
                <path
                  id="Icon_feather-star"
                  data-name="Icon feather-star"
                  d="M13.137,3l3.132,6.346,7,1.024-5.068,4.937,1.2,6.974-6.265-3.294L6.872,22.28l1.2-6.974L3,10.37l7-1.024Z"
                  transform="translate(-2.5 -2.5)"
                  fill="none"
                  stroke="#eb7400"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.274"
                height="20.28"
                viewBox="0 0 21.274 20.28"
                data-v-771deb17=""
              >
                <path
                  id="Icon_feather-star"
                  data-name="Icon feather-star"
                  d="M13.137,3l3.132,6.346,7,1.024-5.068,4.937,1.2,6.974-6.265-3.294L6.872,22.28l1.2-6.974L3,10.37l7-1.024Z"
                  transform="translate(-2.5 -2.5)"
                  fill="none"
                  stroke="#eb7400"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.274"
                height="20.28"
                viewBox="0 0 21.274 20.28"
                data-v-771deb17=""
              >
                <path
                  id="Icon_feather-star"
                  data-name="Icon feather-star"
                  d="M13.137,3l3.132,6.346,7,1.024-5.068,4.937,1.2,6.974-6.265-3.294L6.872,22.28l1.2-6.974L3,10.37l7-1.024Z"
                  transform="translate(-2.5 -2.5)"
                  fill="none"
                  stroke="#eb7400"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.274"
                height="20.28"
                viewBox="0 0 21.274 20.28"
                data-v-771deb17=""
              >
                <path
                  id="Icon_feather-star"
                  data-name="Icon feather-star"
                  d="M13.137,3l3.132,6.346,7,1.024-5.068,4.937,1.2,6.974-6.265-3.294L6.872,22.28l1.2-6.974L3,10.37l7-1.024Z"
                  transform="translate(-2.5 -2.5)"
                  fill="none"
                  stroke="#eb7400"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.274"
                height="20.28"
                viewBox="0 0 21.274 20.28"
                data-v-771deb17=""
              >
                <path
                  id="Icon_feather-star"
                  data-name="Icon feather-star"
                  d="M13.137,3l3.132,6.346,7,1.024-5.068,4.937,1.2,6.974-6.265-3.294L6.872,22.28l1.2-6.974L3,10.37l7-1.024Z"
                  transform="translate(-2.5 -2.5)"
                  fill="none"
                  stroke="#eb7400"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                ></path>
              </svg>
            </div>

            <div className="sub__title mb-sm-4 mb-2">
              <span className="sub__title__name">دسته:</span>
              <span className="product__info__cats">
                <span>
                  کتانی و ورزشی مردانه <span>, </span>
                </span>
                <span>روزمره و کالج مردانه </span>
              </span>
            </div>

            <div className="sub__title">
              <span className="sub__title__name">قیمت:</span>
              <div className="product__info__price">
                <span dir="rtl" className="product__info__price__amount alone">
                  <span className="product__info__price__amount__number">
                    {price}
                  </span>{" "}
                  تومان{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="product__info__3">
            <div className="sub__title colors">
              <span className="sub__title__name">رنگ‌ها:</span>
              <div className="product__colors">
                <div className="product__colors__item">
                  <div className="product__colors__image">
                    <img src="./images/one/variety-32793.jpg" alt="shoe" />
                  </div>
                </div>
                <div className="product__colors__item">
                  <div className="product__colors__image">
                    <img src="./images/one/variety-32793.jpg" alt="shoe" />
                  </div>
                </div>
                <div className="product__colors__item">
                  <div className="product__colors__image">
                    <img src="./images/one/variety-32793.jpg" alt="shoe" />
                  </div>
                </div>
                <div className="product__colors__item">
                  <div className="product__colors__image">
                    <img src="./images/one/variety-32793.jpg" alt="shoe" />
                  </div>
                </div>
                <div className="product__colors__item">
                  <div className="product__colors__image">
                    <img src="./images/one/variety-32793.jpg" alt="shoe" />
                  </div>
                </div>
                <div className="product__colors__item">
                  <div className="product__colors__image">
                    <img src="./images/one/variety-32793.jpg" alt="shoe" />
                  </div>
                </div>
                <div className="product__colors__item">
                  <div className="product__colors__image">
                    <img src="./images/one/variety-32793.jpg" alt="shoe" />
                  </div>
                </div>
                <div className="product__colors__item">
                  <div className="product__colors__image">
                    <img src="./images/one/variety-32793.jpg" alt="shoe" />
                  </div>
                </div>
              </div>
            </div>
            <div className="sub__title">
              <div className="sub__title__box">
                <span className="sub__title__name">اندازه:</span>
                <button className="product__sizes__item__0">
                  <span>سایز من چنده؟</span>
                </button>
              </div>
              <div className="product__sizes">
                <button className="product__sizes__item">
                  <span>۴۱</span>
                </button>
                <button className="product__sizes__item">
                  <span>۴۲</span>
                </button>
                <button className="product__sizes__item">
                  <span>۴۳</span>
                </button>
                <button className="product__sizes__item">
                  <span>۴۴</span>
                </button>
              </div>
            </div>
          </div>

          <div className="product__info__4">
            <div className="product__quantity__container">
              <span>تعداد:</span>
              <div className="product__quantity__container">
                <div className="product__quantity">
                  <button className="product__quantity__plus">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <g
                        id="Group_240"
                        data-name="Group 240"
                        transform="translate(-608.5 -648.349)"
                      >
                        <line
                          id="Line_21"
                          data-name="Line 21"
                          x2="13"
                          transform="translate(609 655.349)"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="1"
                        ></line>
                        <line
                          id="Line_22"
                          data-name="Line 22"
                          x2="13"
                          transform="translate(615.5 648.849) rotate(90)"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="1"
                        ></line>
                      </g>
                    </svg>
                  </button>
                  <div className="product__quantity__input">۱</div>
                  <button className="product__quantity__minus">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="2"
                      viewBox="0 0 14 1"
                    >
                      <line
                        id="Line_23"
                        data-name="Line 23"
                        x2="13"
                        transform="translate(0.5 0.5)"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="5"
                      ></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <button onClick={addProductHandler} className="orange__button">
              <span className="orange__button__text">افزودن به سبد خرید</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.722"
                  height="24.811"
                  viewBox="0 0 21.722 24.811"
                  className="orange__button__icon"
                  data-v-59ff7e66=""
                >
                  <g
                    id="Union_3"
                    data-name="Union 3"
                    transform="translate(1427 0)"
                    fill="none"
                  >
                    <path
                      d="M-1411.84,24.735c-3.407,0-10.129.175-12.811-.01a2.476,2.476,0,0,1-2.294-1.872,14.576,14.576,0,0,1,.36-3.785c.378-2.464.729-4.869,1.1-7.327.287-1.885.244-4.336,1.454-4.936a3.23,3.23,0,0,1,1.489-.19c.147,0,.292.006.434,0a6.053,6.053,0,0,1,1.565-4.671,7.943,7.943,0,0,1,.807-.75,5.957,5.957,0,0,1,7.117-.038,6.141,6.141,0,0,1,2.432,5.454c.119,0,.249,0,.385,0,.909-.012,2.108-.023,2.418,1.348.366,1.622,1.358,8.988,1.666,11.024a18.308,18.308,0,0,1,.409,3.705c-.33,1.816-1.925,2.119-3.75,2.119C-1409.968,24.811-1410.94,24.735-1411.84,24.735Zm2.152-1.649c3.274.006,2.911.185,2.387-3.421-.275-1.887-.563-3.75-.846-5.63-.277-1.842-.665-3.891-.854-5.736l-14.184-.028a51.365,51.365,0,0,0-.92,5.6c-.286,1.9-.572,3.752-.854,5.638-.563,3.751-.905,3.577,2.165,3.576Zm-9.628-20.029c-.951.972-1.1,1.91-1.129,3.557l8.6.01c-.038-2.18-.543-3.607-2.4-4.528a4.216,4.216,0,0,0-1.878-.448A4.476,4.476,0,0,0-1419.316,3.056Zm-2.078,17.14c-.281-1.276,1.3-1.045,1.926-1.044h6.063c1,0,2.3-.251,2.5.6.307,1.3-1.478,1.045-1.917,1.044-1.01,0-2.022,0-3.032,0h-3.031c-.3,0-.673.027-1.042.027C-1420.609,20.828-1421.275,20.734-1421.394,20.2Z"
                      stroke="none"
                    ></path>
                    <path
                      d="M -1409.05419921875 24.8110294342041 C -1409.054321289062 24.8110294342041 -1409.054321289062 24.8110294342041 -1409.054443359375 24.8110294342041 C -1409.96826171875 24.81101989746094 -1410.940185546875 24.73507881164551 -1411.840087890625 24.73507881164551 C -1415.2470703125 24.73507881164551 -1421.968872070312 24.9102897644043 -1424.651245117188 24.72529029846191 C -1425.840698242188 24.64305877685547 -1426.689331054688 23.86286926269531 -1426.945068359375 22.85360908508301 C -1427.149169921875 22.0509090423584 -1426.723999023438 19.97267913818359 -1426.585083007812 19.06816864013672 C -1426.207397460938 16.60424995422363 -1425.855590820312 14.19906902313232 -1425.480834960938 11.74102973937988 C -1425.193481445312 9.855649948120117 -1425.237060546875 7.405439376831055 -1424.026733398438 6.80536937713623 C -1423.599609375 6.592023372650146 -1423.061279296875 6.603700160980225 -1422.537841796875 6.615459442138672 C -1422.390869140625 6.618401527404785 -1422.244873046875 6.621323585510254 -1422.103637695312 6.620349407196045 C -1422.147216796875 4.945439338684082 -1421.787475585938 3.085509538650513 -1420.538452148438 1.948999524116516 C -1420.248901367188 1.685669541358948 -1420.068603515625 1.437029480934143 -1419.731567382812 1.199149489402771 C -1417.485473632812 -0.3826605677604675 -1414.880249023438 -0.4034211933612823 -1412.6142578125 1.160979509353638 C -1410.954833984375 2.306299448013306 -1410.136108398438 4.236709594726562 -1410.182739257812 6.615459442138672 C -1410.06396484375 6.617420196533203 -1409.933837890625 6.616439342498779 -1409.798095703125 6.614479541778564 C -1408.890380859375 6.602743148803711 -1407.690551757812 6.591899394989014 -1407.38037109375 7.96243953704834 C -1407.014526367188 9.584489822387695 -1406.022338867188 16.95079040527344 -1405.713989257812 18.98691940307617 C -1405.584106445312 19.84543037414551 -1405.167846679688 21.93832969665527 -1405.304565429688 22.69208908081055 C -1405.635009765625 24.50805854797363 -1407.22900390625 24.8110294342041 -1409.05419921875 24.8110294342041 Z M -1422.79345703125 23.08561897277832 L -1409.688110351562 23.08561897277832 C -1406.41455078125 23.09148788452148 -1406.776733398438 23.27063751220703 -1407.301025390625 19.66432952880859 C -1407.575561523438 17.7769889831543 -1407.864135742188 15.91411972045898 -1408.146606445312 14.03461933135986 C -1408.423217773438 12.19230937957764 -1408.811767578125 10.1434497833252 -1409.000122070312 8.298209190368652 L -1423.18408203125 8.269819259643555 C -1423.47265625 8.812129020690918 -1423.960327148438 12.92354965209961 -1424.10400390625 13.87211990356445 C -1424.390502929688 15.77413940429688 -1424.675903320312 17.6242790222168 -1424.95849609375 19.50965881347656 C -1425.521362304688 23.26091384887695 -1425.862182617188 23.08659934997559 -1422.79345703125 23.08561897277832 Z M -1416.121826171875 1.647249460220337 C -1417.290893554688 1.647279500961304 -1418.428344726562 2.147529602050781 -1419.316284179688 3.056149482727051 C -1420.266845703125 4.028199672698975 -1420.420532226562 4.965999603271484 -1420.445190429688 6.613499641418457 L -1411.840942382812 6.623289585113525 C -1411.878662109375 4.443259716033936 -1412.38427734375 3.016009569168091 -1414.243896484375 2.094859600067139 C -1414.8564453125 1.791689515113831 -1415.493774414062 1.647239446640015 -1416.121826171875 1.647249460220337 Z M -1419.922607421875 20.82798004150391 C -1419.922729492188 20.82798004150391 -1419.922729492188 20.82798004150391 -1419.9228515625 20.82798004150391 C -1420.609130859375 20.82796859741211 -1421.275268554688 20.73390960693359 -1421.393920898438 20.19586944580078 C -1421.674682617188 18.92020606994629 -1420.096313476562 19.15039825439453 -1419.467895507812 19.15235900878906 L -1413.4052734375 19.15332984924316 C -1412.401977539062 19.1523609161377 -1411.102661132812 18.90278434753418 -1410.900390625 19.75536918640137 C -1410.592895507812 21.05034446716309 -1412.378051757812 20.80083465576172 -1412.817504882812 20.79986000061035 C -1413.827758789062 20.79789733886719 -1414.839721679688 20.79986000061035 -1415.849731445312 20.79986000061035 C -1416.85986328125 20.79986000061035 -1417.870971679688 20.79986000061035 -1418.880981445312 20.80084037780762 C -1419.179565429688 20.80084037780762 -1419.554077148438 20.82798004150391 -1419.922607421875 20.82798004150391 Z"
                      stroke="none"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
              </span>
            </button>
          </div>

          <div className="product__info__5">
            <div className="product__specification">
              <div className="collapse-btn">
                <div data-v-1fbf8fe8="">ویژگی های محصول</div>
                <button className="collapsed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    data-v-1fbf8fe8=""
                  >
                    <g
                      id="Group_240"
                      data-name="Group 240"
                      transform="translate(-608.5 -648.349)"
                    >
                      <line
                        id="Line_21"
                        data-name="Line 21"
                        x2="13"
                        transform="translate(609 655.349)"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1"
                      ></line>
                      <line
                        id="Line_22"
                        data-name="Line 22"
                        x2="13"
                        transform="translate(615.5 648.849) rotate(90)"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1"
                      ></line>
                    </g>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="2"
                    viewBox="0 0 14 1"
                    data-v-1fbf8fe8=""
                  >
                    <line
                      id="Line_23"
                      data-name="Line 23"
                      x2="13"
                      transform="translate(0.5 0.5)"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="5"
                    ></line>
                  </svg>
                </button>
              </div>

              <div className="collapse show" id="collapse-specification">
                <table>
                  <tbody>
                    <tr>
                      <th scope="row" className="bg-color-fa text-center w-25">
                        مناسب فصل
                      </th>
                      <td className="text-right pr-4">
                        <span>تمام فصول </span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="bg-color-fa text-center w-25">
                        ویژه
                      </th>
                      <td className="text-right pr-4">ایران</td>
                    </tr>
                    <tr>
                      <th scope="row" className="bg-color-fa text-center w-25">
                        جنسیت
                      </th>
                      <td className="text-right pr-4">
                        <span>مردانه -</span>
                        <span>پسرانه </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
