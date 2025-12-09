import { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'; 
import { useLocation, useNavigate } from 'react-router-dom';

function NavBar() { 
    const location = useLocation();
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState(null);
    const [carritoCount, setCarritoCount] = useState(0);

    //vemos si hay un usuario con sesion guardada
    useEffect (() => {
        const loadUser = () =>{
        const storedUser = localStorage.getItem("usuario");
        setUsuario(storedUser ? JSON.parse(storedUser): null);
        
        };
        loadUser();

        window.addEventListener("usuario-login", loadUser);

        return ()=>{
            window.removeEventListener("usuario-login", loadUser);
        };
    }, []);

    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem("cart_items")) || [];
        setCarritoCount(carrito.length);
    }, [location]);

    const handleLegout = () => {
        localStorage.removeItem("usuario");
        setUsuario(null);
        navigate("/");
    };

    return ( 
        <Navbar bg="dark" variant="dark" expand="lg"> 
            <Container> 
                <Navbar.Brand>KatHub</Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end"> 
                    
                    <Nav className="me-2">

                        {/*{usuario && (
                            
                              <Button
                                    variant='outline-light'
                                    className='me-2'
                                    onClick={() => navigate("/productos")}
                              >
                                Productos
                              </Button>
                        )}*/}

                        {/*carrito para el log */}
                        {usuario && (
                            <Button
                            variant='outline-warning'
                            className='me-2'
                            onClick={() => navigate("/carrito")}
                            style={{position: "relative"}}
                            >
                                🛒Carrito
                                {carritoCount > 0 &&(
                                    <span
                                        style={{
                                        position: "absolute",
                                        top: "-5px",
                                        right: "-5px",
                                        background: "red",
                                        borderRadius: "50%",
                                        padding: "2px 6px",
                                        fontSize: "12px",
                                        color: "white",
                                        fontWeight: "bold"
                                    }}
                                >
                                    {carritoCount}
                                </span>
                                )}
                            </Button>
                        )}
                        {usuario?.rol === "admin" && (
                                <Button
                                    variant="outline-info"
                                    className="me-2"
                                    onClick={() => navigate("/admin")}
                                >
                                    Admin
                                </Button>
                            )}
                    </Nav>

                    {!usuario && (
                        <Button 
                            variant="primary" 
                            onClick={() => navigate("/login")}
                        >
                            Iniciar sesión
                        </Button>
                    )}

                    {/*cerrar sesion */}
                    {usuario &&(
                        <Button
                        variant='danger'
                        onClick={handleLegout}
                        >
                            Cerrar sesión
                        </Button>
                    )}
                </Navbar.Collapse> 
            </Container> 
        </Navbar> 
    ); 
} 

export default NavBar;