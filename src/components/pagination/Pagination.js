import React, { useEffect, useState } from "react";
import "./pagination.css";
import { useParams, Link } from "react-router-dom";

const Pagination = ({ items, itemsCount, pathname, setShownCourses }) => {
  const [pagesCount, setpagesCount] = useState(null); // به چند صفحه نیاز داریم
  const { page } = useParams();

  useEffect(() => {
    let endIndex = itemsCount * page;
    let startIndex = endIndex - itemsCount;
    let paginatedItems = items.slice(startIndex, endIndex);

    setShownCourses(paginatedItems);
    let pageNumbers = Math.ceil(items.length / itemsCount);
    setpagesCount(pageNumbers);
  }, [page, items]);

  return (
    <ul className="pagination">
      {Array(pagesCount)
        .fill(0)
        .map((item, index) => (
          <>
            {index + 1 === Number(page) ? (
              <li className="page-item pagination-page-nav active">
                <Link to={`${pathname}/${index + 1}`} className="page-link">
                  {index + 1}
                </Link>
              </li>
            ) : (
              <li className="page-item pagination-page-nav">
                <Link to={`${pathname}/${index + 1}`} className="page-link">
                  {index + 1}
                </Link>
              </li>
            )}
          </>
        ))}
    </ul>
  );
};

export default Pagination;
