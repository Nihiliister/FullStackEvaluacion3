import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {

  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="card-img" />

      <div className="card-info">
        <h4>{product.name}</h4>
        <p>{product.description}</p>

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