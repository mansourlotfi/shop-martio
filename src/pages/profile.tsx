import BreadCrumb from "components/breadCrumb";
import NewsLetter from "components/home/newsLetter";
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
