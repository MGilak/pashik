import React from "react";
import Header from "./../components/header/Header";
import Main from "../components/main/Main";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main">
      <div className="popup__button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="181.446"
          height="181.446"
          viewBox="0 0 181.446 181.446"
          class="popup__button__triangle"
          data-v-2f924bf6=""
        >
          <path
            id="Path_23"
            data-name="Path 23"
            d="M0,0,128.3,128.3H0Z"
            transform="translate(90.723) rotate(45)"
            fill="#eb7400"
          ></path>
        </svg>
      </div>
      <Header />
      <Main />
    </div>
  );
};

export default MainPage;
