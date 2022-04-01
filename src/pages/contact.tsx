import BreadCrumb from "components/breadCrumb";
import ContactComponent from "components/contact";
import NewsLetter from "components/home/newsLetter";
import React from "react";

function Contact() {
  return (
    <>
      <BreadCrumb />
      <ContactComponent />
      <NewsLetter />
    </>
  );
}

export default Contact;
