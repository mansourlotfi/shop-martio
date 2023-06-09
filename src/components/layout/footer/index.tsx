import { routesName } from "common/configs/routesConfig";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <footer className="e-footer-wrap e-footer-cloth">
        <div className="container">
          <div className="e-footer-box">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="e-footer-inner">
                  <a href="index.html">
                    <img
                      src="assets/images/index1/logo.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </a>
                  <p className="efoot-about">
                    ون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                    نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                    باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
                    شناخت فراوان جامعه و متخص می باشد. این سایت توسط جعفر عباسی
                    طراحی شده است.
                  </p>
                  <h2 className="efoot-heading">گزینه های پرداخت </h2>
                  <ul className="efoot-payment">
                    <li>
                      <a href="shipping_cart.html">
                        <img
                          src="assets/images/index1/payment1.png"
                          alt="payment"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="shipping_cart.html">
                        <img
                          src="assets/images/index1/payment2.png"
                          alt="payment"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="shipping_cart.html">
                        <img
                          src="assets/images/index1/payment3.png"
                          alt="payment"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="shipping_cart.html">
                        <img
                          src="assets/images/index1/payment4.png"
                          alt="payment"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="e-footer-inner">
                  <h2 className="efoot-heading">دسترسی سریع </h2>
                  <ul className="efoot-list">
                    <li>
                      <Link to={routesName.productCategory.path}>
                        محصولات ما
                      </Link>
                    </li>
                    <li>
                      <Link to={routesName.ContactUs.path}>
                        موقعیت های فروشگاه
                      </Link>
                    </li>
                    <li>
                      <Link to={routesName.blogPost.path}>آخرین اخبار </Link>
                    </li>
                    <li>
                      <Link to="/product-category-detailed">فروشگاه </Link>
                    </li>
                    <li>
                      <Link to={routesName.ContactUs.path}>تماس با ما </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="e-footer-inner">
                  <h2 className="efoot-heading">لینک های کمکی </h2>
                  <ul className="efoot-list">
                    <li>
                      <Link to={routesName.default.path}>صفحه اصلی </Link>
                    </li>
                    <li>
                      <Link to={routesName.privacy.path}>حریم خصوصی </Link>
                    </li>
                    <li>
                      <Link to={routesName.terms.path}>شرایط و ضوابط </Link>
                    </li>
                    <li>
                      <Link to={routesName.ContactUs.path}>تماس با ما </Link>
                    </li>
                    <li>
                      <Link to={routesName.blog.path}>دسته وبلاگ </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="e-footer-inner">
                  <h2 className="efoot-heading">داستان ما </h2>
                  <ul className="efoot-list">
                    <li>
                      <Link to="/product-category-detailed">زنانه </Link>
                    </li>
                    <li>
                      <Link to="/product-category-detailed">مردانه </Link>
                    </li>
                    <li>
                      <Link to="/product-category-detailed">
                        نوزاد و کودکانه
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-category-detailed">شلوار جین </Link>
                    </li>
                    <li>
                      <Link to="/product-category-detailed">تی شرت </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          id="scroll"
        >
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="15px"
            height="24px"
          >
            <path
              fillRule="evenodd"
              fill="rgb(255, 255, 255)"
              d="M6.638,0.361 C6.638,0.361 6.637,0.361 6.637,0.362 L0.357,6.757 C-0.114,7.237 -0.112,8.012 0.361,8.489 C0.834,8.966 1.599,8.964 2.069,8.485 L6.285,4.191 L6.285,22.770 C6.285,23.446 6.826,23.994 7.493,23.994 C8.160,23.994 8.701,23.446 8.701,22.770 L8.701,4.191 L12.917,8.485 C13.387,8.964 14.152,8.966 14.625,8.489 C15.098,8.012 15.099,7.237 14.629,6.757 L8.349,0.362 C8.349,0.361 8.348,0.361 8.348,0.361 C7.876,-0.119 7.109,-0.117 6.638,0.361 L6.638,0.361 Z"
            />
          </svg>
        </div>
      </footer>

      <div className="e-bfooter-wrap e-bfooter-cloth">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p className="e-footer-text text-center text-lg-left">
                کپی رایت © 2021
              </p>
            </div>
            <div className="col-lg-6">
              <ul className="e-bfooter-list">
                <li>
                  <Link to={routesName.terms.path}>قوانین سایت </Link>
                </li>
                <li>
                  <Link to={routesName.privacy.path}>حریم خصوصی </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
