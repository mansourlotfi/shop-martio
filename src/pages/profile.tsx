import BreadCrumb from "components/breadCrumb";
import NewsLetter from "components/homeComponent/newsLetter";
import ProfileComponent from "components/profile";

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
