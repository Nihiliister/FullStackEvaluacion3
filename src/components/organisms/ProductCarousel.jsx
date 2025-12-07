import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import api from "../../service/Api";

function ProductCarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const res = await api.get("/productos");
        setProducts(res.data.slice(0, 3)); // solo los 3 primeros 
      } catch (err) {
        console.error("Error al cargar productos:", err);
      }
    };

    cargarProductos();
  }, []);

  return (
    <div className="carousel-container">
      <Carousel>
        {products.map((prod) => (
          <Carousel.Item key={prod.id}>
            <img
              className="d-block carousel-img"
              src={prod.image || "https://via.placeholder.com/800x400"}
              alt={prod.nombre}
            />
            <div className="nl-slide-caption">
              <h2 className="tituloCarrusel">{prod.nombre}</h2>
              <p className="DescripcionProducto">{prod.descripcion}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductCarousel;