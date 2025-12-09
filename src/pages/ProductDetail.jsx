import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import Image from '../components/atoms/Image';
import Text from '../components/atoms/Text';
import { addToCart } from "../data/CartCon";
import { useEffect, useState } from 'react';
import api from '../service/Api';

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [otherProducts, setOtherProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                //obtener productos por id
                const detalleRes = await api.get(`/productos/${id}`);
                const productBack = detalleRes.data;
                setProduct(productBack);

                //obtener otros productos
                const listRes = await api.get("/productos");
                const otros = listRes.data.filter((p) => p.id !== productBack.id);
                setOtherProducts(otros);
            } catch (err) {
                console.error("Error al cargar el producto", err);
                setError("Error al cargar el producto");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return (
            <Container className="my-5">
                <h1>Cargando productos...</h1>
            </Container>
        );
    }

    if (error || !product) {
        return (
            <Container className="my-5">
                <h1>{error || "producto no encontrado"}</h1>
            </Container>
        );
    }

    const handleAddToCart = () => {
        addToCart(product);
        alert("Producto agregado al carrito");
    };

    const imageSrc = product.imagenUrl || "/placeholder.webp";

    return (
        <Container className="my-5">
            <Row>
                <Col md={8}>
                    <Card className="mb-4">
                        <img
                            src={imageSrc}
                            alt={product.nombre}
                            className="w-100"
                        />
                    </Card>

                    <Card className="p-4">
                        <Text variant="h2">{product.nombre}</Text>
                        <Text variant="p">{product.descripcion}</Text>
                        <Text variant='p'>Medida: {product.medida} </Text>
                        <Text variant='p'>Stoc:{product.stock} </Text>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="p-4 mb-4">
                        <Text variant="h4">Precio ${product.precio}</Text>

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

            <h3 className="mt-5 mb-3">Otros productos</h3>

            <Row>
                {otherProducts.map((item) => {
                    const otherImageSrc = item.imagenUrl || "placeholder.webp";

                    return (
                        <Col md={3} sm={6} xs={12} key={item.id}>
                            <Card className="mb-3">
                                <img
                                    src={otherImageSrc}
                                    alt={item.nombre}
                                    className="w-100"
                                />

                                <Card.Body>
                                    <Text variant="h5">{item.nombre}</Text>

                                    <button
                                        className="btn-product"
                                        onClick={() => navigate(`/products/${item.id}`)} 
                                    >
                                        Ver más
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default ProductDetail;