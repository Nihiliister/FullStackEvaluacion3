import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

// Import correcto del carrito
import { getCart, removeFromCart } from "../data/CartCon";

function Carrito() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setCart(getCart());
    }, []);

    const handleRemove = (id) => {
        removeFromCart(id);
        setCart(getCart());
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Container className="my-5">
            <Row>

                {/* LISTA DE PRODUCTOS */}
                <Col md={8}>
                    {cart.length === 0 ? (
                        <h3>Tu carrito está vacío</h3>
                    ) : (
                        cart.map((item) => (
                            <Card
                                key={item.id}
                                className="p-2 mb-3 d-flex flex-row align-items-center"
                                style={{
                                    border: "1px solid #ccc",
                                    boxShadow: "0 0 4px rgba(0,0,0,0.1)"
                                }}
                            >
                                {/* Imagen */}
                                <div
                                    style={{
                                        width: "120px",
                                        height: "80px",
                                        backgroundColor: "#ddd",
                                        borderRadius: "5px",
                                        marginRight: "15px",
                                        overflow: "hidden"
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }}
                                    />
                                </div>

                                {/* Información */}
                                <div className="flex-grow-1">
                                    <p className="m-0">
                                        <strong>Costo: </strong>
                                        {item.price}
                                    </p>
                                </div>

                                {/* Cantidad */}
                                <div className="mx-3">x{item.quantity}</div>

                                {/* Botón eliminar */}
                                <Button
                                    variant="outline-danger"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    ✖
                                </Button>
                            </Card>
                        ))
                    )}
                </Col>

                {/* RESUMEN DE COMPRA */}
                <Col md={4}>
                    <Card className="p-4" style={{ border: "1px solid #ccc" }}>
                        <h4>Total : {total}</h4>

                        <p className="mt-3">Método de pago</p>

                        <div className="d-flex gap-2 mb-4">
                            <Button variant="outline-secondary">Transferencia</Button>
                            <Button variant="outline-secondary">Débito/Crédito</Button>
                        </div>

                        <Button variant="primary" className="w-100">
                            Pagar
                        </Button>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}

export default Carrito;