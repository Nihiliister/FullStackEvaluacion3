import { Navbar, Nav, Container, Button } from 'react-bootstrap'; 
import { useLocation, useNavigate } from 'react-router-dom';

function NavBar() { 
    const location = useLocation();
    const navigate = useNavigate();

    const showLoginButton = location.pathname === "/" || location.pathname === "/products";

    return ( 
        <Navbar bg="dark" variant="dark" expand="lg"> 
            <Container> 
                <Navbar.Brand onClick={() => navigate("/")}>KatHub</Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end"> 
                    
                    <Nav className="me-2">
                        <Button 
                            variant="outline-light" 
                            className="me-2"
                            onClick={() => navigate("/")}
                        >
                            Inicio
                        </Button>

                        <Button 
                            variant="outline-light" 
                            className="me-2"
                            onClick={() => navigate("/products")}
                        >
                            Productos
                        </Button>

                        <Button 
                            variant="outline-warning"
                            className="me-2"
                            onClick={() => navigate("/carrito")}
                        >
                            🛒 Carrito
                        </Button>
                    </Nav>

                    {showLoginButton && (
                        <Button 
                            variant="primary" 
                            onClick={() => navigate("/login")}
                        >
                            Iniciar sesión
                        </Button>
                    )}
                </Navbar.Collapse> 
            </Container> 
        </Navbar> 
    ); 
} 

export default NavBar;