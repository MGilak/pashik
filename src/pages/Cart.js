import React, { useState, useEffect, useRef } from "react";
import Header from "../components/header/Header";
import Breadcrumb from "./../components/breadcrumb/Breadcrumb";
import Footer from "../components/footer/Footer";
import "./cart.css";
import { Link } from "react-router-dom";
import { useCart, useCartActions } from "../context/CartProvider";

const Cart = () => {
  const [item, setItem] = useState();
  const [modal, setModal] = useState(false);

  const dispatch = useCartActions();
  const { cart } = useCart();

  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollTop = 0;
  }, []);

  const incHandler = (cartItem) => {
    dispatch({ type: "ADD", payload: cartItem });
  };

  const decHandler = (cartItem) => {
    dispatch({ type: "DEC", payload: cartItem });
  };

  const deletHandler = (cartItem) => {
    dispatch({ type: "REMOVE", payload: cartItem });
    setModal(false);
  };

  const showModal = (itemCart) => {
    setModal(true);
    setItem(itemCart);
  };

  const totalPrice = () => {
    let total = cart.reduce((sum, obj) => {
      return sum + obj.price * obj.quantity;
    }, 0);
    return +total;
  };

  return (
    <div ref={scrollRef} className="cart_page">
      <Header />
      <Breadcrumb
        links={[
          { id: 1, to: "/", title: "فروشگاه پاشیک" },
          { id: 2, to: "/all-products/1", title: "همه محصولات" },
        ]}
      />

      <div>
        <div className="cart__top">
          <div class="cart__top__first">
            <Link>
              <div>سبد خرید</div>
            </Link>
            <Link>
              <div>اطلاعات ارسال</div>
            </Link>
            <Link>
              <div>اطلاعات پرداخت</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="step">
        <div className="cart__one">
          <div className="cart__one__table">
            <div class="cart__one__table__header">
              <div>سبد خریــد شما</div>
              <div>قیمت</div>
              <div>تعداد</div>
              <div>قیمت نهایی</div>
            </div>

            <div className="cart__one__table__body">
              {cart.length ? (
                cart.map((item) => (
                  <div className="cart__one__table__body__item">
                    <div className="cart__one__table__body__item__detail">
                      <a
                        className="cart__one__table__body__item__detail__image"
                        href="##"
                      >
                        <img src={cart ? item.images[0] : ""} alt="" />
                        <div
                          onClick={() => showModal(item)}
                          class="cart__one__table__body__item__detail__delete"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18.454"
                            height="19.373"
                            viewBox="0 0 18.454 19.373"
                            data-v-1e8d8000=""
                          >
                            <path
                              id="Union_5"
                              data-name="Union 5"
                              d="M1981.5,442l-8.5,9,8.5-9-8.5-9,8.5,9,8.5-9-8.5,9,8.5,9Z"
                              transform="translate(-1972.273 -432.313)"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                            ></path>
                          </svg>
                        </div>
                      </a>

                      <div class="cart__one__table__body__item__detail__info">
                        <a
                          href="##"
                          class="cart__one__table__body__item__detail__info__title"
                        >
                          کتانی مردانه نایک ایرفورس کد 1573
                        </a>
                        <div class="cart__one__table__body__item__detail__info__attribute">
                          {" "}
                          رنگ: {item.colors}
                        </div>
                        <div class="cart__one__table__body__item__detail__info__attribute">
                          {" "}
                          سایز: {item.sizes}
                        </div>
                      </div>
                    </div>

                    <div className="cart__one__table__body__item__price">
                      <div className="product__info__price">
                        <span
                          dir="rtl"
                          class="product__info__price__amount alone"
                        >
                          <span class="product__info__price__amount__number">
                            {item.price}
                          </span>{" "}
                          تومان{" "}
                        </span>
                      </div>
                    </div>

                    <div className="cart__one__table__body__item__quantity">
                      <div className="product__quantity__container">
                        <span>تعداد:</span>
                        <div class="product__quantity__container">
                          <div class="product__quantity">
                            <button
                              onClick={() => incHandler(item)}
                              class="product__quantity__plus"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                data-v-7606a178=""
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
                                    stroke-linecap="round"
                                    stroke-width="1"
                                  ></line>
                                  <line
                                    id="Line_22"
                                    data-name="Line 22"
                                    x2="13"
                                    transform="translate(615.5 648.849) rotate(90)"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-width="1"
                                  ></line>
                                </g>
                              </svg>
                            </button>
                            <div class="product__quantity__input">
                              {item.quantity}
                            </div>
                            <button
                              onClick={() => decHandler(item)}
                              class="product__quantity__minus"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="2"
                                viewBox="0 0 14 1"
                                data-v-7606a178=""
                              >
                                <line
                                  id="Line_23"
                                  data-name="Line 23"
                                  x2="13"
                                  transform="translate(0.5 0.5)"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-width="5"
                                ></line>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="cart__one__table__body__item__price">
                      {item.price} تومان{" "}
                    </div>
                  </div>
                ))
              ) : (
                <h3 className="no_item">آیتمی جهت خرید وجود ندارد</h3>
              )}

              {cart.length ? (
                <section className="total-price">
                  <form action="" className="total-price-discount-btn">
                    <input
                      type="text"
                      class="discount-input"
                      placeholder="کد تخفیف را وارد کنید"
                    />
                    <input
                      type="submit"
                      class="discount-btn"
                      value="ثبت کد تخفیف"
                    />
                  </form>

                  <div className="total-price-detail">
                    <div>
                      <span>مجموع قیمت های کالا : </span>
                      <span>
                        <span>{totalPrice()}</span>
                        <span> تومان</span>
                      </span>
                    </div>

                    <div>
                      <span> تخفیف : </span>
                      <span>
                        <span>0</span>
                        <span>تومان</span>
                      </span>
                    </div>

                    <div>
                      <span> پرداخت نهایی : </span>
                      <span>
                        <span>{totalPrice()}</span>
                        <span> تومان</span>
                      </span>
                    </div>
                  </div>
                </section>
              ) : null}
            </div>
          </div>

          <div className="cart__next__prev single">
            <div></div>
            <div>
              <button
                id="cart-next-btn"
                class={`orange__button ${!cart.length && "disable"}`}
              >
                ادامه فرآیند خرید
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`swal-overlay ${modal && "swal-overlay--show-modal"}`}>
        <div className="swal-modal">
          <div className="swal-icon swal-icon--warning">
            <span className="swal-icon--warning__body">
              <span className="swal-icon--warning__dot"></span>
            </span>
          </div>

          <div className="swal-title">محصول از سبد خرید حذف شود؟</div>

          <div className="swal-footer">
            <div class="swal-button-container">
              <button
                onClick={() => deletHandler(item)}
                class="swal-button swal-button--ok"
              >
                بله
              </button>
            </div>
            <div class="swal-button-container">
              <button
                onClick={() => setModal(false)}
                class="swal-button swal-button--catch"
              >
                خیر
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
