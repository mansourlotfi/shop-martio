import BreadCrumb from "components/breadCrumb";
import NewsLetter from "components/homeComponent/newsLetter";
import ProductCategoryComponent from "components/productCategoryComponent";

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
