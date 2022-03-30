import { useEffect } from "react";
import Routing from "utils/routing";
import "./App.css";
// import "../public/assets/js/swiper-bundle.min.js";

function App() {
  useEffect(() => {
    // const externalJS = js;
    // const script = document.createElement("script");
    // script.src = externalJS;
    // document.body.appendChild(script);
  }, []);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
