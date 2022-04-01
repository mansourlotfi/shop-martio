import { routesName } from "common/configs/routesConfig";
import React from "react";
import { Link } from "react-router-dom";

function ShoppingCard() {
  const closeCard = () => {
    document.querySelector("body")!.addEventListener("click", function (e) {
      e.stopPropagation();
      document.body.classList.remove("open-cart");
    });
  };

  return (
    <>
      <div className="sb-cartbox">
        <div className="sb-cartbox-inner">
          <div className="sb-cartbox-header text-center">
            <h4 className="sb-cb-ttl">سبد خرید ( 5 )</h4>
            <p className="sb-cb-subttl">
              5 کالای خود را در سبد خرید خود داشته باشید
            </p>
            <a href="javascript:void(0);" className="sb-cb-close close-box">
              بستن
            </a>
          </div>
          <div className="sb-cartbox-body">
            <ul className="sb-cartbox-list">
              <li>
                <div className="sc-productwrap">
                  <Link
                    to={routesName.productDetail.path}
                    className="sc-product-thumb"
                  >
                    <img
                      src="assets/images/index1/shopcart01.jpg"
                      alt="محصول"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="sc-product-details">
                    <Link
                      to={routesName.productDetail.path}
                      className="sc-product-ttl"
                    >
                      کت کلاه دار خاکستری مشکی
                    </Link>
                    <p className="sc-product-sz">اندازه: متوسط </p>
                  </div>
                </div>
                <div className="sc-quantity">
                  1X <span className="sc-price"> 120000 تومان</span>
                </div>
                <a href="javascript:void(0);" className="sc-produc-remove">
                  <img src="assets/images/index1/svg/cut.svg" alt="icon" />
                </a>
              </li>
              <li>
                <div className="sc-productwrap">
                  <Link
                    to={routesName.productDetail.path}
                    className="sc-product-thumb"
                  >
                    <img
                      src="assets/images/index1/shopcart02.jpg"
                      alt="محصول"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="sc-product-details">
                    <Link
                      to={routesName.productDetail.path}
                      className="sc-product-ttl"
                    >
                      کت بچه دار زرد
                    </Link>
                    <p className="sc-product-sz">اندازه: متوسط </p>
                  </div>
                </div>
                <div className="sc-quantity">
                  1X <span className="sc-price"> 860000 تومان</span>
                </div>
                <a href="javascript:void(0);" className="sc-produc-remove">
                  <img src="assets/images/index1/svg/cut.svg" alt="icon" />
                </a>
              </li>
              <li>
                <div className="sc-productwrap">
                  <Link
                    to={routesName.productDetail.path}
                    className="sc-product-thumb"
                  >
                    <img
                      src="assets/images/index1/shopcart03.jpg"
                      alt="محصول"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="sc-product-details">
                    <Link
                      to={routesName.productDetail.path}
                      className="sc-product-ttl"
                    >
                      کت بچه دار زرد
                    </Link>
                    <p className="sc-product-sz">اندازه: متوسط </p>
                  </div>
                </div>
                <div className="sc-quantity">
                  1X <span className="sc-price"> 190000 تومان</span>
                </div>
                <a href="javascript:void(0);" className="sc-produc-remove">
                  <img src="assets/images/index1/svg/cut.svg" alt="icon" />
                </a>
              </li>
              <li>
                <div className="sc-productwrap">
                  <Link
                    to={routesName.productDetail.path}
                    className="sc-product-thumb"
                  >
                    <img
                      src="assets/images/index1/shopcart04.jpg"
                      alt="محصول"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="sc-product-details">
                    <Link
                      to={routesName.productDetail.path}
                      className="sc-product-ttl"
                    >
                      کت بمب افکن سیاه
                    </Link>
                    <p className="sc-product-sz">اندازه: متوسط </p>
                  </div>
                </div>
                <div className="sc-quantity">
                  1X <span className="sc-price"> 29000 تومان</span>
                </div>
                <a href="javascript:void(0);" className="sc-produc-remove">
                  <img src="assets/images/index1/svg/cut.svg" alt="icon" />
                </a>
              </li>
              <li>
                <div className="sc-productwrap">
                  <Link
                    to={routesName.productDetail.path}
                    className="sc-product-thumb"
                  >
                    <img
                      src="assets/images/index1/shopcart05.jpg"
                      alt="محصول"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="sc-product-details">
                    <Link
                      to={routesName.productDetail.path}
                      className="sc-product-ttl"
                    >
                      ژاکت بادکنک آستین کامل
                    </Link>
                    <p className="sc-product-sz">اندازه: متوسط </p>
                  </div>
                </div>
                <div className="sc-quantity">
                  1X <span className="sc-price"> 320000 تومان</span>
                </div>
                <a href="javascript:void(0);" className="sc-produc-remove">
                  <img src="assets/images/index1/svg/cut.svg" alt="icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="sb-cartbox-footer">
            <div className="sb-cartbox-total">
              <strong>مجموع سبد:</strong>
              <span className="sb-cartbox-amount">859000 تومان</span>
            </div>
            <div className="sb-cartbox-btn">
              <a className="e-btn">سبد خرید</a>
              <a className="e-btn">پرداخت</a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-overlay cb-overlay cmn-cart-tgl"
        onClick={closeCard}
      ></div>
    </>
  );
}

export default ShoppingCard;
