import React from "react";
import { Link } from "react-router-dom";

function MiddleAdsContainer() {
  return (
    <div className="e-midads-wrappper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="e-topads-inner e-cads-inner">
              <Link to="/product-category-detailed">
                <img
                  src="assets/images/index1/mid_ads1.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="e-topads-inner e-cads-inner">
              <Link to="/product-category-detailed">
                <img
                  src="assets/images/index1/mid_ads2.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleAdsContainer;
