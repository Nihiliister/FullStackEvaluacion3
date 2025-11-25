import { Carousel } from "react-bootstrap";
import img1 from "../../assets/img/productsIMG/TurboAbuela.webp";
import img2 from "../../assets/img/productsIMG/Souvenir.webp";
import img3 from "../../assets/img/productsIMG/Boina.webp";

function ProductCarousel() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block carousel-img" src={img1} alt="Slide 1" />
          <div className="nl-slide-caption">
            <h2 className="tituloCarrusel">Turbo Abuela</h2>
            <p className="DescripcionProducto">mucha plata</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block carousel-img" src={img2} alt="Slide 2" />
          <div className="nl-slide-caption">
            <h2 className="tituloCarrusel">Souvenir</h2>
            <p className="DescripcionProducto">mucha plata</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block carousel-img" src={img3} alt="Slide 3" />
          <div className="nl-slide-caption">
            <h2 className="tituloCarrusel">Boina</h2>
            <p className="DescripcionProducto">mucha plata</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ProductCarousel;