import React from "react";
import BannerContainer from "./bannerContainer";
import BestSellerContainer from "./bestSellerContainer";
import MiddleAdsContainer from "./middleAdsContainer";
import NewProducts from "./newProducts";
import NewsLetter from "./newsLetter";
import TopAdsContainer from "./topAdsContainer";

function HomeComponent() {
  return (
    <>
      <BannerContainer />
      <TopAdsContainer />
      <NewProducts />
      <MiddleAdsContainer />
      <BestSellerContainer />
      <NewsLetter />
    </>
  );
}

export default HomeComponent;
