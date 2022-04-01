import { routesName } from "common/configs/routesConfig";
import { Link } from "react-router-dom";

function BlogPostComponent() {
  return (
    <section className="e-blog-wrap e-blog-single-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="e-blog-sec">
              <div className="row">
                <div className="col-xl-12 col-12">
                  <div className="cmn-blog-box">
                    <div className="cmn-blog-imgwrap">
                      <img
                        src="assets/images/index1/blog01.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                    <ul className="cmn-blog-infolist">
                      <li>
                        <Link to={routesName.blogPost.path}>
                          <span className="blog-il-icon">
                            <img
                              src="assets/images/index1/svg/profile.svg"
                              alt="icon"
                            />
                          </span>
                          توسط -
                          <span className="cmn-blog-auther">جعفر عباسی </span>
                        </Link>
                      </li>
                      <li>
                        <Link to={routesName.blogPost.path}>
                          <span className="blog-il-icon">
                            <img
                              src="assets/images/index1/svg/calender_c.svg"
                              alt="icon"
                            />
                          </span>
                          تیر 1400
                        </Link>
                      </li>
                    </ul>
                    <h2 className="cmn-blog-title">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                    </h2>
                    <p className="cmn-blog-des mb-30">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم
                      متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                      از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                      در ستون و سطرآنچنان که لازم است .
                    </p>
                    <p className="cmn-blog-des">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم
                      متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                      از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                      در ستون و سطرآنچنان که لازم است .
                    </p>
                    <ul className="sigl-blog-img">
                      <li className="">
                        <img
                          src="assets/images/index1/bs_list1.jpg"
                          alt="image"
                          className="img-fluid"
                        />
                      </li>
                      <li className="">
                        <img
                          src="assets/images/index1/bs_list2.jpg"
                          alt="image"
                          className="img-fluid"
                        />
                      </li>
                      <li className="">
                        <img
                          src="assets/images/index1/bs_list3.jpg"
                          alt="image"
                          className="img-fluid"
                        />
                      </li>
                    </ul>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم
                      متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                      از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                      در ستون و سطرآنچنان که لازم است .
                    </p>
                    <blockquote className="sigl-blog-qoutes">
                      <div className="qoutes-img">
                        <img
                          src="assets/images/index1/svg/quote.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="qoutes-data">
                        <h4 className="qoutes-des">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                        </h4>
                        <h2 className="qoutes-auth">جعفر عباسی </h2>
                      </div>
                    </blockquote>
                    <div className="sb-listwrap">
                      <h2 className="sb-list-ttl">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است..
                      </h2>
                      <p className="sb-list_des mt-20 mb-20">
                        <a href="javascript:void(0);" className="anchor-line">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است.
                        </a>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن
                        ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                        از طراحان گرافیک است.
                        <a href="javascript:void(0);" className="anchor-line">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است.
                        </a>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن
                        ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                        از طراحان گرافیک است..
                      </p>
                      <ul className="sb-list">
                        <li>
                          1. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                          صنعت چاپ و با استفاده از طراحان گرافیک است..
                        </li>
                        <li>
                          2. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                          صنعت چاپ و با استفاده از طراحان گرافیک است..
                        </li>
                        <li>
                          3. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                          صنعت چاپ و با استفاده از طراحان گرافیک است..
                        </li>
                      </ul>
                    </div>
                    <div className="sb-tagshare">
                      <ul className="sb-tag-list">
                        <li>
                          <p className="sb-tag-item">برچسب ها -</p>
                        </li>
                        <li>
                          <a className="sb-tag-item">کت ها</a>
                        </li>
                        <li>
                          <a className="sb-tag-item">مردانه</a>
                        </li>
                        <li>
                          <a className="sb-tag-item">زنانه</a>
                        </li>
                        <li>
                          <a className="sb-tag-item">مدل</a>
                        </li>
                        <li>
                          <a className="sb-tag-item">تخفیف</a>
                        </li>
                      </ul>
                      <ul className="sb-share-list">
                        <li>
                          <p className="sb-tag-item">اشتراک -</p>
                        </li>
                        <li>
                          <a href="javascript:void(0);" className="sb-tag-item">
                            <svg
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="7px"
                              height="14px"
                            >
                              <path
                                fill-rule="evenodd"
                                fill="rgb(125, 143, 179)"
                                d="M6.734,0.002 L5.056,-0.001 C3.170,-0.001 1.952,1.352 1.952,3.444 L1.952,5.033 L0.264,5.033 C0.119,5.033 0.000,5.161 0.000,5.318 L0.000,7.620 C0.000,7.778 0.119,7.906 0.264,7.906 L1.952,7.906 L1.952,13.714 C1.952,13.871 2.070,13.999 2.216,13.999 L4.417,13.999 C4.563,13.999 4.681,13.871 4.681,13.714 L4.681,7.906 L6.654,7.906 C6.800,7.906 6.918,7.778 6.918,7.620 L6.919,5.318 C6.919,5.243 6.891,5.171 6.841,5.116 C6.792,5.063 6.725,5.033 6.655,5.033 L4.681,5.033 L4.681,3.686 C4.681,3.039 4.824,2.711 5.603,2.711 L6.734,2.710 C6.880,2.710 6.997,2.582 6.997,2.425 L6.997,0.288 C6.997,0.130 6.880,0.003 6.734,0.002 L6.734,0.002 Z"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" className="sb-tag-item">
                            <svg
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="16px"
                              height="13px"
                            >
                              <path
                                fill-rule="evenodd"
                                fill="rgb(125, 143, 179)"
                                d="M5.969,12.031 C5.277,12.031 4.565,11.979 3.848,11.876 C2.587,11.695 1.309,11.090 0.948,10.909 L-0.000,10.434 L1.026,10.125 C2.148,9.786 2.831,9.577 3.675,9.248 C2.830,8.873 2.178,8.198 1.864,7.325 L1.625,6.661 L1.821,6.688 C1.635,6.516 1.489,6.343 1.375,6.184 C0.971,5.622 0.757,4.934 0.802,4.345 L0.847,3.765 L1.226,3.900 C1.066,3.624 0.951,3.328 0.883,3.019 C0.717,2.264 0.856,1.462 1.273,0.761 L1.603,0.206 L2.044,0.691 C3.440,2.228 5.207,3.139 7.305,3.406 C7.219,2.865 7.284,2.342 7.496,1.874 C7.744,1.329 8.184,0.866 8.769,0.537 C9.418,0.171 10.206,-0.006 10.987,0.038 C11.816,0.084 12.568,0.369 13.165,0.860 C13.457,0.791 13.672,0.717 13.962,0.617 C14.137,0.557 14.336,0.488 14.584,0.410 L15.498,0.121 L14.902,1.681 C14.941,1.678 14.981,1.675 15.024,1.674 L16.000,1.633 L15.423,2.356 C15.390,2.397 15.381,2.409 15.370,2.425 C15.323,2.490 15.265,2.569 14.473,3.539 C14.275,3.781 14.176,4.097 14.195,4.428 C14.265,5.687 14.096,6.826 13.693,7.814 C13.312,8.748 12.722,9.550 11.938,10.196 C10.969,10.997 9.732,11.544 8.264,11.824 C7.543,11.961 6.770,12.031 5.969,12.031 L5.969,12.031 Z"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" className="sb-tag-item">
                            <svg
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="10px"
                              height="14px"
                            >
                              <path
                                fill-rule="evenodd"
                                fill="rgb(125, 143, 179)"
                                d="M8.703,1.436 C7.827,0.510 6.615,-0.001 5.290,-0.001 C3.266,-0.001 2.022,0.913 1.334,1.680 C0.486,2.625 -0.000,3.880 -0.000,5.124 C-0.000,6.684 0.592,7.882 1.584,8.328 C1.651,8.358 1.718,8.373 1.784,8.373 C1.993,8.373 2.159,8.222 2.216,7.980 C2.250,7.841 2.327,7.499 2.361,7.350 C2.433,7.056 2.375,6.915 2.217,6.710 C1.931,6.336 1.797,5.894 1.797,5.318 C1.797,3.608 2.952,1.790 5.094,1.790 C6.793,1.790 7.849,2.855 7.849,4.568 C7.849,5.649 7.638,6.650 7.254,7.388 C6.987,7.900 6.518,8.510 5.798,8.510 C5.487,8.510 5.207,8.369 5.031,8.124 C4.864,7.891 4.809,7.591 4.876,7.279 C4.952,6.925 5.055,6.556 5.155,6.200 C5.337,5.549 5.510,4.935 5.510,4.444 C5.510,3.605 5.042,3.041 4.345,3.041 C3.460,3.041 2.767,4.033 2.767,5.297 C2.767,5.917 2.916,6.381 2.984,6.559 C2.873,7.080 2.210,10.175 2.084,10.758 C2.012,11.099 1.574,13.790 2.298,14.004 C3.113,14.246 3.840,11.625 3.915,11.329 C3.974,11.088 4.185,10.177 4.313,9.617 C4.706,10.035 5.339,10.316 5.955,10.316 C7.116,10.316 8.160,9.741 8.895,8.696 C9.607,7.682 10.000,6.269 10.000,4.717 C10.000,3.504 9.527,2.308 8.703,1.436 L8.703,1.436 Z"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);" className="sb-tag-item">
                            <svg
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="14px"
                              height="14px"
                            >
                              <path
                                fill-rule="evenodd"
                                fill="rgb(125, 143, 179)"
                                d="M13.472,0.528 C13.119,0.176 12.697,-0.001 12.204,-0.001 L1.795,-0.001 C1.303,-0.001 0.881,0.176 0.528,0.528 C0.176,0.880 -0.000,1.303 -0.000,1.795 L-0.000,12.204 C-0.000,12.696 0.176,13.118 0.528,13.471 C0.881,13.824 1.303,14.000 1.795,14.000 L12.204,14.000 C12.697,14.000 13.119,13.824 13.471,13.471 C13.824,13.118 14.000,12.696 14.000,12.204 L14.000,1.795 C14.000,1.303 13.824,0.880 13.472,0.528 L13.472,0.528 ZM5.026,5.044 C5.577,4.513 6.237,4.247 7.009,4.247 C7.787,4.247 8.451,4.513 9.000,5.044 C9.551,5.576 9.825,6.219 9.825,6.972 C9.825,7.726 9.551,8.368 9.000,8.899 C8.451,9.432 7.787,9.697 7.009,9.697 C6.237,9.697 5.577,9.431 5.026,8.899 C4.477,8.368 4.202,7.726 4.202,6.972 C4.202,6.219 4.477,5.576 5.026,5.044 L5.026,5.044 ZM12.414,11.830 C12.414,11.988 12.360,12.120 12.250,12.227 C12.141,12.333 12.010,12.387 11.858,12.387 L2.114,12.387 C1.956,12.387 1.824,12.333 1.718,12.227 C1.612,12.120 1.558,11.988 1.558,11.830 L1.558,5.924 L2.844,5.924 C2.722,6.307 2.661,6.705 2.661,7.118 C2.661,8.284 3.087,9.280 3.937,10.103 C4.788,10.926 5.812,11.338 7.009,11.338 C7.799,11.338 8.529,11.150 9.197,10.773 C9.865,10.396 10.394,9.885 10.783,9.237 C11.172,8.590 11.366,7.884 11.366,7.118 C11.366,6.705 11.305,6.307 11.184,5.924 L12.414,5.924 L12.414,11.830 ZM12.414,3.691 C12.414,3.867 12.354,4.016 12.232,4.137 C12.111,4.259 11.961,4.319 11.785,4.319 L10.199,4.319 C10.023,4.319 9.874,4.259 9.753,4.137 C9.631,4.016 9.570,3.867 9.570,3.691 L9.570,2.187 C9.570,2.017 9.631,1.869 9.753,1.745 C9.874,1.620 10.023,1.558 10.199,1.558 L11.785,1.558 C11.961,1.558 12.111,1.620 12.232,1.745 C12.354,1.869 12.414,2.017 12.414,2.187 L12.414,3.691 Z"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="sb-prenext-post mb-80">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="sb-prenext-post">
                            <div className="sb-prenext-img">
                              <img
                                src="assets/images/index1/blog_pre.jpg"
                                alt="image"
                                className="img-fluid"
                              />
                            </div>
                            <div className="sb-prenext-data">
                              <p className="sb-prenext-lbl">پست قبلی</p>
                              <Link
                                to={routesName.blogPost.path}
                                className="sb-prenext-ttl"
                              >
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است..
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="sb-prenext-post next">
                            <div className="sb-prenext-img">
                              <img
                                src="assets/images/index1/blog_next.jpg"
                                alt="image"
                                className="img-fluid"
                              />
                            </div>
                            <div className="sb-prenext-data">
                              <p className="sb-prenext-lbl">پست بعدی</p>
                              <Link
                                to={routesName.blogPost.path}
                                className="sb-prenext-ttl"
                              >
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است..
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="e-blog-sidebar mb-80">
              <div className="e-blog-widgetbox search-widgetbox mb-50">
                <h4 className="cmn-brdr-ttle mb-20">جستجو</h4>
                <form>
                  <div className="e-nl-box boreder">
                    <input type="text" placeholder="جستجو کنید ..." />
                    <a
                      href="javascript:void(0);"
                      className="e-btn newsletter-btn"
                    >
                      جستجو
                    </a>
                  </div>
                </form>
              </div>
              <div className="e-blog-widgetbox categories-widgetbox mb-50">
                <h4 className="cmn-brdr-ttle mb-20">دسته بندیها</h4>
                <ul className="e-blog-catgy">
                  <li>
                    <Link
                      to={routesName.productCategoryDetailed.path}
                      className="blog-ctgry-item"
                    >
                      <span className="blog-ctgry-name">
                        <img
                          src="assets/images/index1/svg/blog_caret.svg"
                          alt="icon"
                        />
                        مجموعه جدید
                      </span>
                      <span className="blog-ctgry-badge">( 512 )</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routesName.productCategoryDetailed.path}
                      className="blog-ctgry-item"
                    >
                      <span className="blog-ctgry-name">
                        <img
                          src="assets/images/index1/svg/blog_caret.svg"
                          alt="icon"
                        />
                        مدل مردانه
                      </span>
                      <span className="blog-ctgry-badge">( 45 )</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routesName.productCategoryDetailed.path}
                      className="blog-ctgry-item"
                    >
                      <span className="blog-ctgry-name">
                        <img
                          src="assets/images/index1/svg/blog_caret.svg"
                          alt="icon"
                        />
                        مدل زنانه
                      </span>
                      <span className="blog-ctgry-badge">( 63 )</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routesName.productCategoryDetailed.path}
                      className="blog-ctgry-item"
                    >
                      <span className="blog-ctgry-name">
                        <img
                          src="assets/images/index1/svg/blog_caret.svg"
                          alt="icon"
                        />
                        بچگانه
                      </span>
                      <span className="blog-ctgry-badge">( 41 )</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routesName.productCategoryDetailed.path}
                      className="blog-ctgry-item"
                    >
                      <span className="blog-ctgry-name">
                        <img
                          src="assets/images/index1/svg/blog_caret.svg"
                          alt="icon"
                        />
                        فیستوال تخفیف
                      </span>
                      <span className="blog-ctgry-badge">( 54 )</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routesName.productCategoryDetailed.path}
                      className="blog-ctgry-item"
                    >
                      <span className="blog-ctgry-name">
                        <img
                          src="assets/images/index1/svg/blog_caret.svg"
                          alt="icon"
                        />
                        جواهری
                      </span>
                      <span className="blog-ctgry-badge">( 75 )</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routesName.productCategoryDetailed.path}
                      className="blog-ctgry-item"
                    >
                      <span className="blog-ctgry-name">
                        <img
                          src="assets/images/index1/svg/blog_caret.svg"
                          alt="icon"
                        />
                        ساعت
                      </span>
                      <span className="blog-ctgry-badge">( 85 )</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="e-blog-widgetbox mb-50">
                <h4 className="cmn-brdr-ttle mb-20">ایسنتاگرام</h4>
                <ul className="e-blog-insta">
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="assets/images/index1/instaglry01.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="assets/images/index1/instaglry02.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="assets/images/index1/instaglry03.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="assets/images/index1/instaglry04.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="assets/images/index1/instaglry05.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="assets/images/index1/instaglry06.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="assets/images/index1/instaglry07.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="assets/images/index1/instaglry08.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="assets/images/index1/instaglry09.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="e-blog-widgetbox archives-widgetbox mb-50">
                <h4 className="cmn-brdr-ttle mb-20">بایگانی</h4>
                <ul className="e-blog-catgy">
                  <li>
                    <Link
                      to={routesName.productCategoryDetailed.path}
                      className="blog-ctgry-item"
                    >
                      <span className="blog-ctgry-name">
                        <img
                          src="assets/images/index1/svg/blog_caret.svg"
                          alt="icon"
                        />
                        فروردین 1400
                      </span>
                      <span className="blog-ctgry-badge">( 512 )</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routesName.productCategoryDetailed.path}
                      className="blog-ctgry-item"
                    >
                      <span className="blog-ctgry-name">
                        <img
                          src="assets/images/index1/svg/blog_caret.svg"
                          alt="icon"
                        />
                        اردیبهشت 1400
                      </span>
                      <span className="blog-ctgry-badge">( 45 )</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routesName.productCategoryDetailed.path}
                      className="blog-ctgry-item"
                    >
                      <span className="blog-ctgry-name">
                        <img
                          src="assets/images/index1/svg/blog_caret.svg"
                          alt="icon"
                        />
                        خرداد 1400
                      </span>
                      <span className="blog-ctgry-badge">( 63 )</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routesName.productCategoryDetailed.path}
                      className="blog-ctgry-item"
                    >
                      <span className="blog-ctgry-name">
                        <img
                          src="assets/images/index1/svg/blog_caret.svg"
                          alt="icon"
                        />
                        تیر 1400
                      </span>
                      <span className="blog-ctgry-badge">( 41 )</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routesName.productCategoryDetailed.path}
                      className="blog-ctgry-item"
                    >
                      <span className="blog-ctgry-name">
                        <img
                          src="assets/images/index1/svg/blog_caret.svg"
                          alt="icon"
                        />
                        اسفند 1399
                      </span>
                      <span className="blog-ctgry-badge">( 54 )</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routesName.productCategoryDetailed.path}
                      className="blog-ctgry-item"
                    >
                      <span className="blog-ctgry-name">
                        <img
                          src="assets/images/index1/svg/blog_caret.svg"
                          alt="icon"
                        />
                        بهمن 1399
                      </span>
                      <span className="blog-ctgry-badge">( 75 )</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={routesName.productCategoryDetailed.path}
                      className="blog-ctgry-item"
                    >
                      <span className="blog-ctgry-name">
                        <img
                          src="assets/images/index1/svg/blog_caret.svg"
                          alt="icon"
                        />
                        دی 1399
                      </span>
                      <span className="blog-ctgry-badge">( 85 )</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="e-blog-widgetbox text-center">
                <Link
                  to={routesName.productCategoryDetailed.path}
                  className="e-sidebar-ads hover-animation"
                >
                  <img
                    src="assets/images/index1/blogads.jpg"
                    alt="image"
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPostComponent;
