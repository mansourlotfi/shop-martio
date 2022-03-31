import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Grid } from "@mui/material";

function BannerContainer() {
  return (
    <section className="e-banner-wrapper e-banner-cloth">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="e-banner-inwrap" style={{ width: "100%" }}>
            <Grid container>
              <Grid
                item
                xs={6}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <div className="e-banner-text">
                  <h4 className="e-banner-subtitle e-bg-subtitle e-animation-right">
                    فروش ویژه 1400
                  </h4>
                  <h2 className="e-banner-title e-animation-left">
                    فروش در تابستان تا ! <br />
                    <span>بالای 70 درصد تخفیف ویژه</span>
                  </h2>
                  <p className="e-banner-des e-animation-left">
                    تجربه مشاهده خود را به سطح بعدی برسانید. همه فروش فوق العاده
                    جدیدترین ورود ، پیشنهادات ویژه ما است <br />
                    به علاوه حمل و نقل رایگان در اولین سفارش خود اکنون سبک خود
                    را کشف کنید .
                  </p>
                  <div className="banner-btn-wrap e-animation-left">
                    <a
                      className="e-btn white banner-btn"
                      href="product_category.html"
                    >
                      اکنون بخرید
                      <span>
                        <svg
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="20px"
                        >
                          <path
                            fillRule="evenodd"
                            fill="rgb(122, 183, 186)"
                            d="M14.465,18.485 L13.480,5.998 C13.441,5.519 13.082,5.159 12.643,5.159 L10.869,5.159 L10.869,4.371 C10.869,2.285 9.363,0.588 7.512,0.588 C5.663,0.588 4.157,2.285 4.157,4.371 L4.157,5.159 L2.381,5.159 C1.942,5.159 1.582,5.519 1.545,5.998 L0.555,18.542 C0.536,18.791 0.611,19.040 0.761,19.228 C0.920,19.426 1.150,19.539 1.391,19.539 L13.634,19.539 C14.097,19.539 14.474,19.128 14.474,18.622 C14.474,18.574 14.471,18.529 14.465,18.485 ZM2.306,17.703 L3.151,6.994 L4.157,6.994 L4.157,7.922 C4.157,8.428 4.534,8.840 4.996,8.840 C5.458,8.840 5.835,8.428 5.835,7.922 L5.835,6.994 L9.190,6.994 L9.190,7.922 C9.190,8.428 9.567,8.840 10.030,8.840 C10.492,8.840 10.869,8.428 10.869,7.922 L10.869,6.994 L11.874,6.994 L12.718,17.703 L2.306,17.703 ZM5.835,5.159 L5.835,4.371 C5.835,3.297 6.587,2.424 7.512,2.424 C8.438,2.424 9.190,3.297 9.190,4.371 L9.190,5.159 L5.835,5.159 Z"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="center">
                <img
                  src="assets/images/index1/baner01.png"
                  alt="baner01"
                  className="img-fluid"
                />
              </Grid>
            </Grid>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="e-banner-inwrap" style={{ width: "100%" }}>
            <Grid container>
              <Grid
                item
                xs={6}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <div className="e-banner-text">
                  <h4 className="e-banner-subtitle e-bg-subtitle e-animation-right">
                    فروش ویژه 1400
                  </h4>
                  <h2 className="e-banner-title e-animation-left">
                    فروش در تابستان تا ! <br />
                    <span>بالای 70 درصد تخفیف ویژه</span>
                  </h2>
                  <p className="e-banner-des e-animation-left">
                    تجربه مشاهده خود را به سطح بعدی برسانید. همه فروش فوق العاده
                    جدیدترین ورود ، پیشنهادات ویژه ما است <br />
                    به علاوه حمل و نقل رایگان در اولین سفارش خود اکنون سبک خود
                    را کشف کنید .
                  </p>
                  <div className="banner-btn-wrap e-animation-left">
                    <a
                      className="e-btn white banner-btn"
                      href="product_category.html"
                    >
                      اکنون بخرید
                      <span>
                        <svg
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="20px"
                        >
                          <path
                            fillRule="evenodd"
                            fill="rgb(122, 183, 186)"
                            d="M14.465,18.485 L13.480,5.998 C13.441,5.519 13.082,5.159 12.643,5.159 L10.869,5.159 L10.869,4.371 C10.869,2.285 9.363,0.588 7.512,0.588 C5.663,0.588 4.157,2.285 4.157,4.371 L4.157,5.159 L2.381,5.159 C1.942,5.159 1.582,5.519 1.545,5.998 L0.555,18.542 C0.536,18.791 0.611,19.040 0.761,19.228 C0.920,19.426 1.150,19.539 1.391,19.539 L13.634,19.539 C14.097,19.539 14.474,19.128 14.474,18.622 C14.474,18.574 14.471,18.529 14.465,18.485 ZM2.306,17.703 L3.151,6.994 L4.157,6.994 L4.157,7.922 C4.157,8.428 4.534,8.840 4.996,8.840 C5.458,8.840 5.835,8.428 5.835,7.922 L5.835,6.994 L9.190,6.994 L9.190,7.922 C9.190,8.428 9.567,8.840 10.030,8.840 C10.492,8.840 10.869,8.428 10.869,7.922 L10.869,6.994 L11.874,6.994 L12.718,17.703 L2.306,17.703 ZM5.835,5.159 L5.835,4.371 C5.835,3.297 6.587,2.424 7.512,2.424 C8.438,2.424 9.190,3.297 9.190,4.371 L9.190,5.159 L5.835,5.159 Z"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="center">
                <img
                  src="assets/images/index1/baner01.png"
                  alt="baner01"
                  className="img-fluid"
                />
              </Grid>
            </Grid>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="e-banner-inwrap" style={{ width: "100%" }}>
            <Grid container>
              <Grid
                item
                xs={6}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <div className="e-banner-text">
                  <h4 className="e-banner-subtitle e-bg-subtitle e-animation-right">
                    فروش ویژه 1400
                  </h4>
                  <h2 className="e-banner-title e-animation-left">
                    از روندهای زمستانی لذت ببرید
                    <br />
                    <span>بالای 70 درصد تخفیف ویژه</span>
                  </h2>
                  <p className="e-banner-des e-animation-left">
                    تجربه مشاهده خود را به سطح بعدی برسانید. همه فروش فوق العاده
                    جدیدترین ورود ، پیشنهادات ویژه ما است <br />
                    به علاوه حمل و نقل رایگان در اولین سفارش خود اکنون سبک خود
                    را کشف کنید .
                  </p>
                  <div className="banner-btn-wrap e-animation-left">
                    <a
                      className="e-btn white banner-btn"
                      href="product_category.html"
                    >
                      اکنون بخرید
                      <span>
                        <svg
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="15px"
                          height="20px"
                        >
                          <path
                            fillRule="evenodd"
                            fill="rgb(122, 183, 186)"
                            d="M14.465,18.485 L13.480,5.998 C13.441,5.519 13.082,5.159 12.643,5.159 L10.869,5.159 L10.869,4.371 C10.869,2.285 9.363,0.588 7.512,0.588 C5.663,0.588 4.157,2.285 4.157,4.371 L4.157,5.159 L2.381,5.159 C1.942,5.159 1.582,5.519 1.545,5.998 L0.555,18.542 C0.536,18.791 0.611,19.040 0.761,19.228 C0.920,19.426 1.150,19.539 1.391,19.539 L13.634,19.539 C14.097,19.539 14.474,19.128 14.474,18.622 C14.474,18.574 14.471,18.529 14.465,18.485 ZM2.306,17.703 L3.151,6.994 L4.157,6.994 L4.157,7.922 C4.157,8.428 4.534,8.840 4.996,8.840 C5.458,8.840 5.835,8.428 5.835,7.922 L5.835,6.994 L9.190,6.994 L9.190,7.922 C9.190,8.428 9.567,8.840 10.030,8.840 C10.492,8.840 10.869,8.428 10.869,7.922 L10.869,6.994 L11.874,6.994 L12.718,17.703 L2.306,17.703 ZM5.835,5.159 L5.835,4.371 C5.835,3.297 6.587,2.424 7.512,2.424 C8.438,2.424 9.190,3.297 9.190,4.371 L9.190,5.159 L5.835,5.159 Z"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent="center">
                <img
                  src="assets/images/index1/baner02.png"
                  alt="baner01"
                  className="img-fluid"
                />
              </Grid>
            </Grid>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default BannerContainer;
