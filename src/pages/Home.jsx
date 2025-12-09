import { Container, Row, Col } from "react-bootstrap";
import "../styles/pages/Home.css";
import KatHubIcon from "../assets/img/background/KatHubOfficial.webp";
import Portada from "../assets/img/background/portada.webp"

function Home() {
  return (
    <Container className="home-container text-center mt-4">
      
      <h1 className="home-title">KatHub</h1>
      <div className="logo-section">
        <img
          src={KatHubIcon}
          alt="kathub logo"
          className="home-logo"
        />
      </div>
      <h2 className="home-subtitle">Lo imaginas, lo creamos</h2>

      <div style={{height: "30px"}}></div>

      <div className="cover-section">
        <img
          src={Portada}
          alt="Portada kathub"
          className="home-cover"
        />
      </div>
    </Container>
  );
}


export default Home;
