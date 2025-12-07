import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../styles/pages/Carrito.css";

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

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="my-5">
      <Row>
        {/* LISTA DE PRODUCTOS */}
        <Col md={8}>
          {cart.length === 0 ? (
            <h3>Tu carrito está vacío</h3>
          ) : (
            cart.map((item) => (
              <Card key={item.id} className="cart-card">
                {/* Imagen */}
                <div className="cart-image">
                  <img src={item.image} alt={item.name} />
                </div>

                {/* Información */}
                <div className="cart-info">
                  <p className="m-0">
                    <strong>Costo:</strong> ${item.price}
                  </p>
                </div>

                {/* Cantidad */}
                <div className="cart-quantity">x{item.quantity}</div>

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
          <Card className="cart-summary">
            <h4>Total: ${total}</h4>

            <p className="mt-3">Método de pago</p>

            <div className="payment-methods">
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