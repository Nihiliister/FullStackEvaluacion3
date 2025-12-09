import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../data/CartCon";
import { Card, Form, Container, Button} from "react-bootstrap";

function Pago(){
    const navigate = useNavigate();
    const[cart, setCart] = useState([]);
    const[total, setTotal] = useState(0);

    const metodo = localStorage.getItem("pago_tipo");

    const [form, setForm] = useState({
        nombre: "",
        email: "",
        direccion: "",
    });

    const[tarjeta, setTarjeta] = useState({
        numero: "",
        vencimiento: "",
        cvv: "",
    });

    useEffect(() =>{
        const c = getCart();
        setCart(c);
        setTotal(c.reduce((acc, i) => acc + i.price * i.quantity, 0));
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleTarjetaChange = (e) => {
        setTarjeta({...tarjeta, [e.target.name]: e.target.value});
    };

    //validar y confirmar
    const confirmarPago = () =>{
        if(!form.nombre || !form.email || !form.direccion){
            alert("Completa tus datos.");
            return;
        }
        if(metodo === "tarjeta"){
            if(!tarjeta.numero || !tarjeta.vencimiento || !tarjeta.cvv){
                alert("Completa los datos de la tarjeta");
                return;
            }
        }

        //Numero de orden
        const nOrden = Math.floor(10000 + Math.random()* 90000);

        //mensaje para transferencia
        if (metodo === "transferencia"){
        alert(`Compra confirmada con transferencia
    
    Cliente: ${form.nombre}
    Email: ${form.email}
    Direccion: ${form.direccion}
    
    Total pagado: $${total}
    
    Número de orden: ${nOrden}
    
    Recuerda enviar el comprobante de pago a pago@kathub.cl`
            );
        }

        //mensaje para tarjeta
        if(metodo === "tarjeta"){
            const ult4 = tarjeta.numero.slice(-4);

            alert(
                `Pago con tarjeta aprobado 
                Cliente: ${form.nombre}
                Email: ${form.email}
                Dirección: ${form.direccion}
                
                Tarjeta terminada en: **** **** **** ${ult4}
                Total pagado: $${total}
                
                Número de orden: ${nOrden}`
            );
        }

        //limpiar carrito
        localStorage.removeItem("cart_items");
        localStorage.removeItem("pago_tipo");

        navigate("/products");
    };

    const anularCompra = () =>{
        alert("Compra anulada.");

        localStorage.removeItem("pago_tipo");

        navigate("/carrito");
    };

    return(
        <Container className="m-4">
            <h2>Confirmar Pago</h2>

                <Button 
                    variant="secondary"
                    className="mb-3"
                    onClick={() => {
                        localStorage.removeItem("pago_tipo");
                        navigate("/carrito");
                    }}
                >
                    ← Cambiar método de pago
                </Button>

            <Card className="p-4 mt-3">
                <h4>Total a pagar: ${total}</h4>
                <p>
                    <strong>Método de pago:</strong>{" "}
                    {metodo === "tarjeta" ? "Débito / Crédito" : "Transferencia"}
                </p>

                {/*Datos del comprador */}
                <h5 className="mt-3">Datos del comprador</h5>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control name="nombre" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control name="direccion" onChange={handleChange}/>
                </Form.Group>

                {/*Transferencia */}
                {metodo === "transferencia" &&(
                    <div className="mt-3">
                        <h5>Datos bancarios</h5>
                        <p><strong>Banco:</strong> Banco Estado</p>
                        <p><strong>Cuenta</strong>12.345.678-9</p>
                        <p><strong>Correo</strong>pago@kathub.cl</p>
                        <p><em></em></p>
                    </div>
                )}
                {/* Método: Tarjeta */}
        {metodo === "tarjeta" && (
          <div className="mt-3">
            <h5>Datos de la tarjeta (simulado)</h5>

            <Form.Group className="mb-3">
              <Form.Label>Número de tarjeta</Form.Label>
              <Form.Control 
                maxLength={16}
                name="numero"
                onChange={handleTarjetaChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Vencimiento (MM/AA)</Form.Label>
              <Form.Control 
                maxLength={5}
                name="vencimiento"
                onChange={handleTarjetaChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>CVV</Form.Label>
              <Form.Control 
                maxLength={3}
                name="cvv"
                onChange={handleTarjetaChange}
              />
            </Form.Group>
          </div>
        )}

        <Button 
          variant="success" 
          className="w-100 mt-4"
          onClick={confirmarPago}
        >
          Confirmar pago
        </Button>

        <Button 
          variant="danger" 
          className="w-100 mt-3"
          onClick={anularCompra}
        >
          Anular compra
        </Button>
            </Card>
        </Container>
    );
}
export default Pago;