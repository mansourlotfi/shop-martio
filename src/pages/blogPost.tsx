import BlogPostComponent from "components/blogpost";
import BreadCrumb from "components/breadCrumb";
import NewsLetter from "components/home/newsLetter";

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
