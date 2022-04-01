import React from "react";

function BreadCrumb() {
  return (
    <div className="e-breadcumb-wrap text-center">
      <h2 className="e-breadcumb-title">دسته محصولات </h2>
      <ul className="e-breadcumb-kist">
        <li>
          <a href="index.html">خانه </a>
        </li>
        <li>
          <a href="javascript:void(0);">لباس مردانه </a>
        </li>
        <li>
          <a href="javascript:void(0);">ژاکت </a>
        </li>
      </ul>
    </div>
  );
}

export default BreadCrumb;
