import ProductCarousel from "../organisms/ProductCarousel.jsx";
import ProductsGrid from "../organisms/ProductsGrid.jsx";
import "../../styles/pages/Products.css";

function Products() {
  return (
    <div className="products-page">
      <ProductCarousel />
      <ProductsGrid />
    </div>
  );
}

export default Products;