import { routesName } from "common/configs/routesConfig";
import { Link } from "react-router-dom";

function BlogComponent() {
  return (
    <section className="e-blog-wrap e-blog-category-wrap">
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
                        <a href="blog_category.html">
                          <span className="blog-il-icon">
                            <img
                              src="assets/images/index1/svg/profile.svg"
                              alt="icon"
                            />
                          </span>
                          توسط -
                          <span className="cmn-blog-auther">جعفر عباسی </span>
                        </a>
                      </li>
                      <li>
                        <a href="blog_category.html">
                          <span className="blog-il-icon">
                            <img
                              src="assets/images/index1/svg/calender_c.svg"
                              alt="icon"
                            />
                          </span>
                          تیر 1400
                        </a>
                      </li>
                    </ul>
                    <Link
                      to={routesName.blogPost.path}
                      className="cmn-blog-title"
                    >
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="cmn-blog-box">
                    <div className="cmn-blog-imgwrap">
                      <img
                        src="assets/images/index1/mini_blog1.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                    <ul className="cmn-blog-infolist">
                      <li>
                        <a href="blog_category.html">
                          <span className="blog-il-icon">
                            <img
                              src="assets/images/index1/svg/profile.svg"
                              alt="icon"
                            />
                          </span>
                          توسط -
                          <span className="cmn-blog-auther">جعفر عباسی </span>
                        </a>
                      </li>
                      <li>
                        <a href="blog_category.html">
                          <span className="blog-il-icon">
                            <img
                              src="assets/images/index1/svg/calender_c.svg"
                              alt="icon"
                            />
                          </span>
                          تیر 1400
                        </a>
                      </li>
                    </ul>
                    <Link
                      to={routesName.blogPost.path}
                      className="cmn-blog-title"
                    >
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. .
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="cmn-blog-box">
                    <div className="cmn-blog-imgwrap">
                      <img
                        src="assets/images/index1/mini_blog2.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                    <ul className="cmn-blog-infolist">
                      <li>
                        <a href="blog_category.html">
                          <span className="blog-il-icon">
                            <img
                              src="assets/images/index1/svg/profile.svg"
                              alt="icon"
                            />
                          </span>
                          توسط -
                          <span className="cmn-blog-auther">جعفر عباسی </span>
                        </a>
                      </li>
                      <li>
                        <a href="blog_category.html">
                          <span className="blog-il-icon">
                            <img
                              src="assets/images/index1/svg/calender_c.svg"
                              alt="icon"
                            />
                          </span>
                          تیر 1400
                        </a>
                      </li>
                    </ul>
                    <Link
                      to={routesName.blogPost.path}
                      className="cmn-blog-title"
                    >
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. .
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-12">
                  <div className="cmn-blog-box">
                    <div className="cmn-blog-imgwrap">
                      <img
                        src="assets/images/index1/blog02.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                      <a
                        className="blog-play popup-youtube"
                        rel="external"
                        href="https://www.youtube.com/embed/wCMukPOGt1g"
                      >
                        <span>
                          <img
                            src="assets/images/index1/svg/blog_play.svg"
                            alt="icon"
                          />
                        </span>
                      </a>
                    </div>
                    <ul className="cmn-blog-infolist">
                      <li>
                        <a href="blog_category.html">
                          <span className="blog-il-icon">
                            <img
                              src="assets/images/index1/svg/profile.svg"
                              alt="icon"
                            />
                          </span>
                          توسط -
                          <span className="cmn-blog-auther">جعفر عباسی </span>
                        </a>
                      </li>
                      <li>
                        <a href="blog_category.html">
                          <span className="blog-il-icon">
                            <img
                              src="assets/images/index1/svg/calender_c.svg"
                              alt="icon"
                            />
                          </span>
                          تیر 1400
                        </a>
                      </li>
                    </ul>
                    <Link
                      to={routesName.blogPost.path}
                      className="cmn-blog-title"
                    >
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-12">
                  <div className="cmn-blog-box">
                    <div className="cmn-blog-imgwrap">
                      <img
                        src="assets/images/index1/blog03.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                    <ul className="cmn-blog-infolist">
                      <li>
                        <a href="blog_category.html">
                          <span className="blog-il-icon">
                            <img
                              src="assets/images/index1/svg/profile.svg"
                              alt="icon"
                            />
                          </span>
                          توسط -
                          <span className="cmn-blog-auther">جعفر عباسی </span>
                        </a>
                      </li>
                      <li>
                        <a href="blog_category.html">
                          <span className="blog-il-icon">
                            <img
                              src="assets/images/index1/svg/calender_c.svg"
                              alt="icon"
                            />
                          </span>
                          تیر 1400
                        </a>
                      </li>
                    </ul>
                    <Link
                      to={routesName.blogPost.path}
                      className="cmn-blog-title"
                    >
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                    </Link>
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
                  <div className="e-nl-box boreder ">
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
                <h4 className="cmn-brdr-ttle mb-20">دسته بندی</h4>
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
                <h4 className="cmn-brdr-ttle mb-20">اینستاگرام</h4>
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
        <div className="row">
          <div className="col-12">
            <div className="e-pagination-wrap mb-75">
              <ul className="e-pagination">
                <li className="e-page-item disabled">
                  <a className="e-btn light" href="javascript:void(0);">
                    قبلی
                  </a>
                </li>
                <li className="e-page-item">
                  <a className="active e-btn light" href="javascript:void(0);">
                    01
                  </a>
                </li>
                <li className="e-page-item">
                  <a className="e-btn light" href="javascript:void(0);">
                    02
                  </a>
                </li>
                <li className="e-page-item">
                  <a
                    className="e-btn light pointer-events-none"
                    href="javascript:void(0);"
                  >
                    ...
                  </a>
                </li>
                <li className="e-page-item">
                  <a className="e-btn light" href="javascript:void(0);">
                    08
                  </a>
                </li>
                <li className="e-page-item">
                  <a className="e-btn light" href="javascript:void(0);">
                    09
                  </a>
                </li>
                <li className="e-page-item">
                  <a className="e-btn light" href="javascript:void(0);">
                    بعدی
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogComponent;
