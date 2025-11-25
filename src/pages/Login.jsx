import { useState } from "react";
import { Container, Row, Col, Form, Button, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(){
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    
    const navigate = useNavigate();
    const handleLogin =(e) => {
        e.preventDefault();

        alert("inicio de sesión correcto");
        navigate("/products");
    };

    return(
        <Container className="login-container">
            <Row className="justify-content-center">
                <Col md={4}>
                    <div className="login-card">
                        <h2>Iniciar sesion</h2>
                            <Form onSubmit={handleLogin}>
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
                            <Button variant="primary" type="submit" className="w-100">
                                Entrar
                            </Button>
                        </Form>

                         <div className="mt-3 text-center">
                            ¿No tienes cuenta?{" "}
                            <Link to="/registro">
                                Regístrate
                            </Link>
                            </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );

}
export default Login;