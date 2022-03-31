import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import HeaderMenu from "./header";
import PreLoader from "./preLoader";
import SearchBox from "./searchBox";

function Index() {
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 500);
  }, []);

  return (
    <div className="main-wrapper">
      {isloading && <PreLoader />}

      <SearchBox />
      <HeaderMenu />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Index;
