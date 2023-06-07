import React from "react";
import "./productItem.css";
import { Link } from "react-router-dom";
import { useProductActions } from "./../../../context/SingleProductProvider";

const ProductItem = ({ product }) => {
  const dispatch = useProductActions();

  const shoeDataHandler = () => {
    dispatch({ type: "SHOW_PRODUCT", payload: product });
  };
  console.log(product);

  return (
    <div className="product">
      <div className="product__image">
        <img
          src={product.images[0] ? product.images[0] : ""}
          alt={product.name}
        />
        <div className="product__fast__show">
          <div className="product__fast__show__buttons">
            <Link
              to="/single-product"
              onClick={shoeDataHandler}
              className="button"
            >
              مشاهده
            </Link>
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
          <span>{product.title}</span>
        </a>
        <div className="product__details__price">
          <span dir="rtl" className="product__info__price__amount alone">
            <span className="product__info__price__amount__number">
              {product.price}
            </span>
            تومان
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
