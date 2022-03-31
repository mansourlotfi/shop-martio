import Login from "components/layout/login";
import ShoppingCard from "components/layout/shoppingCard";
import { useEffect } from "react";
import Routing from "utils/routing";
import "./App.css";
// import "../public/assets/js/swiper-bundle.min.js";

function App() {
  const ImportMyScript = (resourceUrl: any) => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = resourceUrl;
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, [resourceUrl]);
  };

  ImportMyScript("assets/js/jquery.min.js");
  ImportMyScript("assets/js/bootstrap.bundle.min.js");
  ImportMyScript("assets/js/SmoothScroll.min.js");
  ImportMyScript("assets/js/jquery.nice-select.min.js");
  ImportMyScript("assets/js/swiper-bundle.min.js");
  ImportMyScript("assets/js/isotope.pkgd.min.js");
  ImportMyScript("assets/js/custom.js");

  return (
    <>
      <Routing />
      <ShoppingCard />
      <Login />
    </>
  );
}

export default App;
