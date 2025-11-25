import products from '../../data/products';
import ProductCard from './ProductCard';

function ProductsGrid() {
  return (
    <div className="products-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductsGrid;