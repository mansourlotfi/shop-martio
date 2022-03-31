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
      <div
        style={{
          margin: "80px 0 10px 0",
          minHeight: "calc(100vh - 380px)",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Index;
