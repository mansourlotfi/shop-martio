import BlogComponent from "components/blog";
import BreadCrumb from "components/breadCrumb";
import NewsLetter from "components/home/newsLetter";

function Blog() {
  return (
    <>
      <BreadCrumb />
      <BlogComponent />
      <NewsLetter />
    </>
  );
}

export default Blog;
