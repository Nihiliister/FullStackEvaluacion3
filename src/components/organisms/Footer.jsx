import { Col, Container, Row } from "react-bootstrap";


function Footer(){
    return(
        <footer className="kathub-footer"
        style={{
            backgroundColor:"#1a1a1a",
            color: "white",
            padding: "12px 0",
            marginTop: "30px"
        }}>
            <Container className="home-container mt-4">
                <Row className="text-center text-md-start footer-top">
                    <Col md={6}>
                        <h6>¿Quiénes somos?</h6>
                        <p>
                            KatHub es un pequeño emprendimiento dedicado a la venta de regalos,
                            manualidades y productos artesanales hechos con cariño.
                        </p>
                    </Col>

                    <Col md={6}>
                        <h6>Contáctanos</h6>
                        <p>
                            📧 Email: contacto@kathub.cl <br />
                            📱 WhatsApp: +56 9 1234 5678
                        </p>
                    </Col>
                </Row>

                <Row className="text-center mt-1">
                    <Col>
                        <p style={{marginTop: "30px", textAlign: "center", opacity: 0.7}}>
                            © 2025 KatHub — Todos los derechos reservados.
                        </p>
                    </Col>
                </Row>
            </Container>

        </footer>
    );
}

export default Footer;