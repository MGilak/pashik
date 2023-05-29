import React from "react";
import "./breadcrumb.css";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <a href="##">
        فروشگاه پاشیک
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="18"
          viewBox="0 0 9 18"
          data-v-27930b52=""
        >
          <path
            id="Icon_ionic-md-arrow-dropup"
            data-name="Icon ionic-md-arrow-dropup"
            d="M0,9,9,0l9,9Z"
            transform="translate(0 18) rotate(-90)"
            fill="#989898"
          ></path>
        </svg>
      </a>
      <a href="##">
        همه محصولات
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="18"
          viewBox="0 0 9 18"
          data-v-27930b52=""
        >
          <path
            id="Icon_ionic-md-arrow-dropup"
            data-name="Icon ionic-md-arrow-dropup"
            d="M0,9,9,0l9,9Z"
            transform="translate(0 18) rotate(-90)"
            fill="#989898"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Breadcrumb;
