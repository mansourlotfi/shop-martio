import React from "react";

function ProductDetailComponent() {
  return (
    <>
      <section className="e-prodetails-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="pd-gallery-wrap">
                <div className="pd-thumb-box">
                  <ul className="pd-thumb-list">
                    <li className="active">
                      <img
                        src="assets/images/index1/pro-singlethumb01.jpg"
                        alt="product-img"
                        data-source="assets/images/index1/pro-single01.jpg"
                        className="pro_thumb"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/index1/pro-singlethumb02.jpg"
                        alt="product-img"
                        data-source="assets/images/index1/pro-single02.jpg"
                        className="pro_thumb"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/index1/pro-singlethumb03.jpg"
                        alt="product-img"
                        data-source="assets/images/index1/pro-single03.jpg"
                        className="pro_thumb"
                      />
                    </li>
                  </ul>
                </div>
                <div className="pd-img-wrap">
                  <div className="pd-img text-center">
                    <img
                      src="assets/images/index1/pro-single01.jpg"
                      alt="product-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="prodetails-info">
                <div className="pd-infotop">
                  <h2 className="pd-title">کت کلاه دار خاکستری مشکی</h2>
                  <div className="pd-special-price">
                    <span className="pd-price-end" id="headline">
                      قیمت ویژه در کمتر از
                    </span>
                    <div id="countdown">
                      <ul className="pd-counter-list">
                        <li>
                          <span id="days"></span> روز :{" "}
                        </li>
                        <li>
                          <span id="hours"></span> ساعت :{" "}
                        </li>
                        <li>
                          <span id="minutes"></span> دقیقه :{" "}
                        </li>
                        <li>
                          <span id="seconds"></span> ثانیه پایان می می رسد
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="pd-price-wrap">
                    <li>
                      <span className="pd-price-ttile">
                        120000 تومان <span>90000 تومان</span>
                      </span>
                    </li>
                    <li>
                      <span className="pd-price-off">10% تخفیف </span>
                    </li>
                  </ul>
                </div>
                <div className="pd-info-bottom">
                  <ul className="info-bottom-list">
                    <li>
                      <div className="ib-list-left">
                        <span>رنگ های موجود</span>
                      </div>
                      <div className="ib-list-right">
                        <ul className="na-color-skin">
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="ib-list-left">
                        <span>سایز های موجود</span>
                      </div>
                      <div className="ib-list-right">
                        <ul className="pd-info-size d-flex">
                          <li>S</li>
                          <li>M</li>
                          <li>L</li>
                          <li>XL</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="ib-list-left">
                        <span>ارائه به </span>
                      </div>
                      <div className="ib-list-right">
                        <div className="pd-info-pincode">
                          <div className="e-nl-box boreder  pd-info-pinbox">
                            <input
                              type="text"
                              placeholder="کد رمز خود را وارد کنید..."
                            />
                            <a
                              href="javascript:void(0);"
                              className="e-btn newsletter-btn"
                            >
                              بررسی{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="ib-list-left">
                        <span>تعداد </span>
                      </div>
                      <div className="ib-list-right">
                        <ul className="pd-qua-wrap">
                          <li>
                            <div className="quantity-box">
                              <input
                                type="text"
                                className="quantity"
                                value="2"
                              />
                              <span className="quantity-minus pa-sub quantity-icon">
                                {" "}
                                -{" "}
                              </span>
                              <span className="quantity-plus  pa-add quantity-icon">
                                {" "}
                                +{" "}
                              </span>
                              <div className="clearfix"></div>
                            </div>
                          </li>
                          <li>
                            <a href="cart.html" className="e-btn pd-addcart">
                              افزودن به سبد{" "}
                            </a>
                          </li>
                          <li>
                            <a
                              href="wishlist.html"
                              className="e-btn light pd-heart"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="17px"
                                height="16px"
                              >
                                <path
                                  fill-rule="evenodd"
                                  fill="rgb(90, 106, 137)"
                                  d="M15.616,1.939 C14.768,0.972 13.603,0.440 12.337,0.440 C11.387,0.440 10.516,0.755 9.751,1.377 C9.456,1.616 9.182,1.898 8.933,2.217 C8.683,1.898 8.409,1.616 8.115,1.377 C7.350,0.755 6.480,0.440 5.529,0.440 C4.262,0.440 3.098,0.972 2.249,1.939 C1.419,2.886 0.962,4.175 0.962,5.570 C0.962,7.002 1.465,8.308 2.547,9.681 C3.494,10.880 4.842,12.088 6.411,13.493 C6.940,13.967 7.540,14.504 8.163,15.077 C8.375,15.272 8.649,15.380 8.933,15.380 C9.218,15.380 9.491,15.272 9.703,15.077 C10.269,14.555 10.818,14.063 11.311,13.622 L11.458,13.490 C13.019,12.092 14.367,10.886 15.318,9.681 C16.400,8.309 16.904,7.003 16.904,5.570 C16.904,4.175 16.446,2.886 15.616,1.939 ZM5.529,1.905 C6.154,1.905 6.729,2.115 7.237,2.528 C7.702,2.906 8.028,3.387 8.219,3.724 C8.522,4.253 9.346,4.252 9.646,3.723 C9.838,3.387 10.163,2.906 10.628,2.528 C11.137,2.115 11.712,1.905 12.337,1.905 C13.198,1.905 13.989,2.266 14.566,2.923 C15.160,3.599 15.486,4.540 15.486,5.570 C15.486,6.662 15.095,7.644 14.220,8.754 C13.352,9.855 12.049,11.023 10.530,12.383 C10.045,12.817 9.501,13.304 8.932,13.823 C8.365,13.305 7.823,12.818 7.332,12.379 C5.821,11.025 4.515,9.857 3.647,8.754 C2.770,7.644 2.379,6.662 2.379,5.570 C2.379,4.540 2.706,3.599 3.300,2.923 C3.877,2.266 4.668,1.905 5.529,1.905 Z"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="e-pdtab-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="e-pdtab-inner">
                <ul className="nav nav-pills e-pdtab-tabs" role="tablist">
                  <li>
                    <a
                      className="active"
                      data-toggle="pill"
                      href="#descrtiption"
                      role="tab"
                      aria-controls="descrtiption"
                      aria-selected="true"
                    >
                      توضیحات{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle="pill"
                      href="#addi_info"
                      role="tab"
                      aria-controls="addi_info"
                      aria-selected="false"
                    >
                      توضیحات اضافی
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle="pill"
                      href="#review"
                      role="tab"
                      aria-controls="review"
                      aria-selected="false"
                    >
                      نظرات{" "}
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="descrtiption"
                    role="tabpanel"
                  >
                    <div className="tab-content-inner">
                      <p className="mb-20">
                        {" "}
                        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
                        ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        مورد نیاز و کاربردی است.{" "}
                      </p>
                      <p>
                        {" "}
                        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
                        ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        مورد نیاز و کاربردی است.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="addi_info" role="tabpanel">
                    <div className="tab-content-inner">
                      <div className="row">
                        <div className="col-md-4">
                          <ul className="pdtab-addinfo">
                            <li>
                              <p>
                                {" "}
                                <span> اندازه </span> - بزرگ ، متوسط ، کوچک
                              </p>
                            </li>
                            <li>
                              <p>
                                {" "}
                                <span> رنگ </span> - صورتی ، مشکی
                              </p>
                            </li>
                            <li>
                              <p>
                                {" "}
                                <span> شماره مدل </span> - کد 1323
                              </p>
                            </li>
                            <li>
                              <p>
                                {" "}
                                <span> نام محصول </span> - کت تابستانی
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <ul className="pdtab-addinfo ">
                            <li>
                              <p>
                                {" "}
                                <span> امتیاز سیستمی </span> - عالی{" "}
                              </p>
                            </li>
                            <li>
                              <p>
                                {" "}
                                <span> طراحی </span> - متریال
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="review" role="tabpanel">
                    <div className="tab-content-inner">
                      <h2 className="pdtab-rev-title">
                        هنوز هیچ نظری وجود ندارد.
                      </h2>
                      <h2 className="pdtab-rev-stitle">
                        اولین نفری باشید که این محصول را مورد بازنگری قرار
                        میدهد"
                      </h2>
                      <form>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="e-form-field mb-30">
                              <input
                                className="e-field-inner"
                                type="text"
                                placeholder="نام شما"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="e-form-field mb-30">
                              <input
                                className="e-field-inner"
                                type="email"
                                placeholder="ایمیل"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="e-form-field mb-30">
                              <textarea className="e-field-inner"></textarea>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="e-form-field">
                              <button type="button" className="e-btn">
                                ارسال
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetailComponent;
