import { Container, Row, Col } from "react-bootstrap";
import "../styles/pages/Home.css";
import KatHubIcon from "../assets/img/background/KatHubOfficial.webp";

function Home() {
  return (
    <Container className="home-container mt-4">
      <Row>
        <Col md={4}>
          <div className="card-section big-card">
            <img
              src={KatHubIcon}
              alt="profile"
              className="profile-img"
            />
            <h2>KatHub</h2>
            <p>Lo imaginas, lo creamos</p>
          </div>
        </Col>

        <Col md={8}>
          <div className="card-section">
            <h3>¿Quiénes somos?</h3>
            <p>Somos una compania que se dedica a crear en lana todo lo que tú quieras.</p>
          </div>

          <div className="card-section mt-4">
            <h3>Contáctanos</h3>
            <p>Puedes contactarnos por los siguientes medios:</p>
            <p>
              Email: KatHub@gmail.com <br />
              Número: +569 0101 1010
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;