import React, { useState } from "react";
import "./childCategory.css";

const ChildCategory = ({ title, category }) => {
  const [openSunMenu, setOpenSunMenu] = useState(false);

  const ChildCategoryHandler = () => {
    setOpenSunMenu(!openSunMenu);
  };
  const openSubMenuClass = openSunMenu && "open";
  const rotateSvgClass = openSunMenu && "rotate";

  return (
    <div
      className="products__list__side__categories__item"
      onClick={ChildCategoryHandler}
    >
      <div className="products__list__side__categories__item__header">
        <div className="checkbox">
          <svg
            id="Component_51_8"
            data-name="Component 51 – 8"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            data-v-6a24a3ba=""
          >
            <g
              id="Rectangle_121"
              data-name="Rectangle 121"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              data-v-6a24a3ba=""
            >
              <rect
                width="20"
                height="20"
                rx="5"
                stroke="none"
                data-v-6a24a3ba=""
              ></rect>
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="19"
                rx="4.5"
                fill="none"
                data-v-6a24a3ba=""
              ></rect>
            </g>
          </svg>
        </div>
        <span>{title}</span>
        <button
          className={`products__list__side__categories__item__button ${rotateSvgClass}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="9"
            viewBox="0 0 18 9"
            data-v-3182299c=""
          >
            <path
              id="Icon_ionic-md-arrow-dropup"
              data-name="Icon ionic-md-arrow-dropup"
              d="M0,9,9,0l9,9Z"
              transform="translate(18 9) rotate(-180)"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <div
        id="child-cat-2"
        className={`${openSubMenuClass} products__list__side__categories__children`}
      >
        {category.map((item) => (
          <div className="products__list__side__categories__children__item">
            <div className="checkbox">
              <svg
                id="Component_51_8"
                data-name="Component 51 – 8"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                data-v-6a24a3ba=""
              >
                <g
                  id="Rectangle_121"
                  data-name="Rectangle 121"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  data-v-6a24a3ba=""
                >
                  <rect
                    width="20"
                    height="20"
                    rx="5"
                    stroke="none"
                    data-v-6a24a3ba=""
                  ></rect>
                  <rect
                    x="0.5"
                    y="0.5"
                    width="19"
                    height="19"
                    rx="4.5"
                    fill="none"
                    data-v-6a24a3ba=""
                  ></rect>
                </g>
              </svg>
            </div>
            <span>{item.type}</span>
            <span>{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildCategory;
