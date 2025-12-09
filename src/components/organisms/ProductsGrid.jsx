import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductoService from "../../service/ProductoService"; // ajusta la ruta si es necesario

function ProductsGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await ProductoService.getAllProductos();

      console.log("BACKEND RESPONDE:", data);
      
      setProducts(data);
    };

    fetchProductos();
  }, []);

  return (
    <div className="products-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductsGrid;