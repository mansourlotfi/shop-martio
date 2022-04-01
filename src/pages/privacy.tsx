import { routesName } from "common/configs/routesConfig";
import NewsLetter from "components/homeComponent/newsLetter";
import PrivacyComponent from "components/privacy";
import TermsComponent from "components/terms";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <>
      <div className="e-breadcumb-wrap text-center">
        <h2 className="e-breadcumb-title">حریم خصوصی</h2>
        <ul className="e-breadcumb-kist">
          <li>
            <Link to={routesName.default.path}>خانه </Link>
          </li>
          <li>
            <Link to={routesName.privacy.path}>حریم خصوصی</Link>
          </li>
        </ul>
      </div>
      <PrivacyComponent />
      <NewsLetter />
    </>
  );
}

export default Privacy;
