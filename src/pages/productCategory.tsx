import BreadCrumb from "components/breadCrumb";
import NewsLetter from "components/home/newsLetter";
import ProductCategoryComponent from "components/productCategory";

function ProductCategory() {
  return (
    <>
      <BreadCrumb />
      <ProductCategoryComponent />
      <NewsLetter />
    </>
  );
}

export default ProductCategory;
