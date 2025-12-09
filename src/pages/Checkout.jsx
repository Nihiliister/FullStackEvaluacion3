import { useEffect, useState } from "react";
import { getCart } from "../data/CartCon";
import { Button, Card, Container } from "react-bootstrap";

function Checkout(){
    const[cart, setCart] = useState([]);
    const[total, setTotal] = useState(0);

    useEffect(() =>{
        const c = getCart();
        setCart(c);
        setTotal(c.reduce((acc, item) => acc + item.price * item.quantity, 0));
    }, []);

    return(
        <Container className="my-5">
            <h2>Confirmar pago</h2>

            <Card className="p-3 mt-3">
                <h4>Total a pagar: ${total}</h4>

                <Button
                     variant="success" 
                     className="mt-3"
                    onClick={() => {
                        alert("!Compra realizada con éxito¡")
                        localStorage.removeItem("cart_items");
                        window.location.href = "/products";
                    }}
                >
                    Confirmar Compra
                </Button>
            </Card>
        </Container>
    )
}

export default Checkout;