import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      {/*IMAGEN*/}
      <img
        src={product.imagenUrl || "/placeholder.webp"}
        alt={product.nombre}
        className="card-img"
      />

      <div className="card-info">
        {/* NOMBRE */}
        <h4>{product.nombre}</h4>

        {/* DESCRIPCIÓN */}
        <p>{product.descripcion}</p>

        <button
          className="btn-product"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          Ver más
        </button>
      </div>
    </div>
  );
}

export default ProductCard;