import BreadCrumb from "components/breadCrumb";
import NewsLetter from "components/homeComponent/newsLetter";
import ProductCategoryDetailedComponent from "components/productCategoryDetailed";

function ProductCategoryDetailed() {
  return (
    <>
      <BreadCrumb />
      <ProductCategoryDetailedComponent />
      <NewsLetter />
    </>
  );
}

export default ProductCategoryDetailed;
