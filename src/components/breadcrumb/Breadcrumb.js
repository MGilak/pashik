import React from "react";
import "./breadcrumb.css";
import { Link } from "react-router-dom";

const Breadcrumb = ({ links }) => {
  return (
    <div className="breadcrumb">
      {links.map((link) => (
        <Link to={link.to} key={link.id}>
          {link.title}
          {link.id !== links.length ? (
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
          ) : null}
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumb;
