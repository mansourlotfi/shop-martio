import BlogPostComponent from "components/blogpost";
import BreadCrumb from "components/breadCrumb";
import NewsLetter from "components/homeComponent/newsLetter";
import React from "react";

function BlogPost() {
  return (
    <>
      <BreadCrumb />
      <BlogPostComponent />
      <NewsLetter />
    </>
  );
}

export default BlogPost;
