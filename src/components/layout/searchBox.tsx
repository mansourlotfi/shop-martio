import React from "react";

function SearchBox() {
  return (
    <div className="search-main-wrap">
      <div className="search-inner">
        <a href="javascript:void(0);" className="c-search-close">
          <svg viewBox="0 0 413.348 413.348" xmlns="http://www.w3.org/2000/svg">
            <path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z" />
          </svg>
        </a>
        <div className="search-box">
          <form>
            <input type="text" placeholder="جستجو کنید ..." />
            <button type="submit">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="17px"
                height="17px"
              >
                <path
                  fillRule="evenodd"
                  fill="rgb(255, 255, 255)"
                  d="M16.337,15.218 C15.846,14.710 15.347,14.210 14.848,13.711 L12.326,11.190 C14.647,7.813 13.433,3.788 10.926,1.947 C8.249,-0.020 4.631,0.233 2.322,2.546 C0.010,4.862 -0.267,8.510 1.664,11.217 C2.621,12.558 4.223,13.526 5.949,13.805 C7.163,14.001 8.993,13.951 10.900,12.633 L10.981,12.724 C11.161,12.925 11.344,13.131 11.537,13.326 C12.605,14.410 13.674,15.490 14.755,16.559 C14.969,16.769 15.226,16.921 15.462,16.974 C15.534,16.991 15.604,16.999 15.674,16.999 C16.017,16.999 16.324,16.804 16.522,16.452 C16.757,16.034 16.690,15.583 16.337,15.218 ZM10.177,4.051 C11.029,4.910 11.496,6.055 11.495,7.273 C11.493,8.489 11.019,9.630 10.162,10.488 C9.308,11.344 8.173,11.815 6.967,11.815 C6.964,11.815 6.961,11.815 6.958,11.815 C5.751,11.813 4.610,11.331 3.748,10.457 C2.891,9.590 2.425,8.452 2.436,7.255 C2.457,4.709 4.449,2.717 6.972,2.717 C6.974,2.717 6.977,2.717 6.979,2.717 C8.189,2.718 9.325,3.192 10.177,4.051 Z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
