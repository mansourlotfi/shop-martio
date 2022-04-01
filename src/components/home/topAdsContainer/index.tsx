import { Link } from "react-router-dom";

function TopAdsContainer() {
  return (
    <div className="e-topads-wrappper e-topads-cloth">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 col-12">
            <div className="e-topads-inner e-cads-inner">
              <Link to="/product-category-detailed">
                <img
                  src="assets/images/index1/index_ads1.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
          <div className="col-sm-6 col-12">
            <div className="e-topads-inner e-cads-inner">
              <Link to="/product-category-detailed">
                <img
                  src="assets/images/index1/index_ads2.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
          <div className="col-sm-3 col-12">
            <div className="e-topads-inner e-cads-inner">
              <Link to="/product-category-detailed">
                <img
                  src="assets/images/index1/index_ads3.jpg"
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

export default TopAdsContainer;
