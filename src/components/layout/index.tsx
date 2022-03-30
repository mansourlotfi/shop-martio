import React from "react";
import { Outlet } from "react-router-dom";
import BannerContainer from "./bannerContainer";
import HeaderMenu from "./header";
import PreLoader from "./preLoader";
import SearchBox from "./searchBox";

function Index() {
  return (
    <div className="main-wrapper">
      <PreLoader />
      <SearchBox />
      <HeaderMenu />
      <BannerContainer />
      <div
        style={{
          margin: "80px 0 10px 0",
          minHeight: "calc(100vh - 380px)",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Index;