import React from "react";
import Header from "../components/header/Header";
import Breadcrumb from "./../components/breadcrumb/Breadcrumb";
import Footer from "../components/footer/Footer";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart_page">
      <Header />
      <Breadcrumb />
      <div>
        <div className="cart__top">
          <div class="cart__top__first">
            <Link>
              <span>سبد خرید</span>
            </Link>
            <Link>
              <span>اطلاعات ارسال</span>
            </Link>
            <Link>
              <span>اطلاعات پرداخت</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
