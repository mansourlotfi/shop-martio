import { routesName } from "common/configs/routesConfig";
import { Link } from "react-router-dom";

function WishlistComponent() {
  return (
    <div className="e-shopcart-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="e-shopcart-sec">
              <div className="shopcart-table-wrap mb-30">
                <form className="table-responsive">
                  <table className="shopcart-table">
                    <thead>
                      <tr>
                        <th>محصول </th>
                        <th>قیمت </th>
                        <th>وضعیت</th>
                        <th>گزینه</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="e-remove-wrap">
                        <td>
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
                        </td>
                        <td>
                          <span className="sc-product-prc">2,240</span>
                        </td>
                        <td>
                          <span className="sc-wishlist-status stock-availble">
                            در انبار
                          </span>
                        </td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            className="e-btn wishlist-ac"
                          >
                            افزودن به سبد
                          </a>
                        </td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            className="sc-produc-remove e-remove-product"
                          >
                            <img
                              src="assets/images/index1/svg/cut.svg"
                              alt="icon"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
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
                        </td>
                        <td>
                          <span className="sc-product-prc">2,240</span>
                        </td>
                        <td>
                          <span className="sc-wishlist-status stock-availble">
                            در انبار
                          </span>
                        </td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            className="e-btn wishlist-ac"
                          >
                            افزودن به سبد
                          </a>
                        </td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            className="sc-produc-remove e-remove-product"
                          >
                            <img
                              src="assets/images/index1/svg/cut.svg"
                              alt="icon"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
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
                                کت بمب افکن سیاه
                              </Link>
                              <p className="sc-product-sz">اندازه: متوسط </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="sc-product-prc">2,240</span>
                        </td>
                        <td>
                          <span className="sc-wishlist-status stock-availble">
                            در انبار
                          </span>
                        </td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            className="e-btn wishlist-ac"
                          >
                            افزودن به سبد
                          </a>
                        </td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            className="sc-produc-remove e-remove-product"
                          >
                            <img
                              src="assets/images/index1/svg/cut.svg"
                              alt="icon"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
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
                        </td>
                        <td>
                          <span className="sc-product-prc">2,240</span>
                        </td>
                        <td>
                          <span className="sc-wishlist-status stock-out">
                            تمام شده
                          </span>
                        </td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            className="e-btn wishlist-ac"
                          >
                            افزودن به سبد
                          </a>
                        </td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            className="sc-produc-remove e-remove-product"
                          >
                            <img
                              src="assets/images/index1/svg/cut.svg"
                              alt="icon"
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
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
                                کت دو یقه
                              </Link>
                              <p className="sc-product-sz">اندازه: متوسط </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="sc-product-prc">2,240</span>
                        </td>
                        <td>
                          <span className="sc-wishlist-status stock-availble">
                            در انبار
                          </span>
                        </td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            className="e-btn wishlist-ac"
                          >
                            افزودن به سبد
                          </a>
                        </td>
                        <td>
                          <a
                            href="javascript:void(0);"
                            className="sc-produc-remove e-remove-product"
                          >
                            <img
                              src="assets/images/index1/svg/cut.svg"
                              alt="icon"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistComponent;
