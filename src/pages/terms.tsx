import { routesName } from "common/configs/routesConfig";
import NewsLetter from "components/home/newsLetter";
import TermsComponent from "components/terms";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <>
      <div className="e-breadcumb-wrap text-center">
        <h2 className="e-breadcumb-title">شرایط و ضوابط</h2>
        <ul className="e-breadcumb-kist">
          <li>
            <Link to={routesName.default.path}>خانه </Link>
          </li>
          <li>
            <Link to={routesName.terms.path}>شرایط و ضوابط</Link>
          </li>
        </ul>
      </div>
      <TermsComponent />
      <NewsLetter />
    </>
  );
}

export default Terms;
