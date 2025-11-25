import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import Image from '../components/atoms/Image';
import Text from '../components/atoms/Text';

// IMPORTACIÓN CORRECTA DEL CARRITO
import { getCart, addToCart, removeFromCart, clearCart } from "../data/CartCon";

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return (
            <Container className="my-5">
                <h1>Producto no encontrado</h1>
            </Container>
        );
    }

    const otherProducts = products.filter((p) => p.id !== product.id);

    const handleAddToCart = () => {
        addToCart(product);
        alert("Producto agregado al carrito");
    };

    return (
        <Container className="my-5">
            <Row>

                {/* IMAGEN + DESCRIPCIÓN */}
                <Col md={8}>
                    <Card className="mb-4">
                        <Image
                            src={product.image}
                            alt={product.name}
                            className="w-100"
                        />
                    </Card>

                    <Card className="p-4">
                        <Text variant="h2">{product.name}</Text>
                        <Text variant="p">{product.description}</Text>
                    </Card>
                </Col>

                {/* PRECIO + BOTÓN */}
                <Col md={4}>
                    <Card className="p-4 mb-4">
                        <Text variant="h4">Precio: ${product.price}</Text>
                        <button
                            className="btn-product mt-3"
                            onClick={handleAddToCart}
                        >
                            Agregar al carrito
                        </button>

                        <button
                            className="btn-product mt-3"
                            onClick={() => navigate("/carrito")}
                        >
                            Ir al carrito
                        </button>
                    </Card>
                </Col>

            </Row>

            {/* PRODUCTOS RELACIONADOS */}
            <h3 className="mt-5 mb-3">Otros productos</h3>
            <Row>
                {otherProducts.map((item) => (
                    <Col md={3} sm={6} xs={12} key={item.id}>
                        <Card className="mb-3">
                            <Image
                                src={item.image}
                                alt={item.name}
                                className="w-100"
                            />
                            <Card.Body>
                                <Text variant="h5">{item.name}</Text>
                                <button
                                    className="btn-product"
                                    onClick={() => navigate(`/products/${item.id}`)}
                                >
                                    Ver más
                                </button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default ProductDetail;