import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Registro(){
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleRegistro = (e) => {
        e.preventDefault();

        if (password !== confirm){
            alert("La contraseña no coincide");
            return;
        }

        alert("Usuario registrado: ${email}");
        navigate("/login");
    };

    return(
        <Container className="login-container mt-5">
            <Row className="justify-content-center">
                <Col md={4}>
                <div className="login-card p-4">
                    <h2>Registro de usuario</h2>
                    <Form onSubmit={handleRegistro}>
                        <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirma tu contraseña"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Registrar
              </Button>
                    </Form>
                </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Registro;