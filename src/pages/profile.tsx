import BreadCrumb from "components/breadCrumb";
import NewsLetter from "components/homeComponent/newsLetter";
import ProfileComponent from "components/profile";
import React from "react";

function Profile() {
  return (
    <>
      <BreadCrumb />
      <ProfileComponent />
      <NewsLetter />
    </>
  );
}

export default Profile;
