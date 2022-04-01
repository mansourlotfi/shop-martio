import BreadCrumb from "components/breadCrumb";
import NewsLetter from "components/homeComponent/newsLetter";
import WishlistComponent from "components/wishlist";
import React from "react";

function Wishlist() {
  return (
    <>
      <BreadCrumb />
      <WishlistComponent />
      <NewsLetter />
    </>
  );
}

export default Wishlist;
