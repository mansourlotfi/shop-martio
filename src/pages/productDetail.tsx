import ProductDetailComponent from "components/productDetail";
import BestSellerContainer from "components/home/bestSellerContainer";

function ProductDetail() {
  return (
    <>
      <div className="e-breadcumb-wrap text-center">
        <h2 className="e-breadcumb-title">تک محصول</h2>
      </div>

      <ProductDetailComponent />
      <BestSellerContainer />
    </>
  );
}

export default ProductDetail;
