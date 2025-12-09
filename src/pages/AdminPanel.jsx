import { useEffect, useState } from "react";
import { Container, Button, Table, Modal, Form } from "react-bootstrap";
import { 
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../data/ProductService";

function AdminPanel() {

    const [productos, setProductos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modo, setModo] = useState("agregar"); // agregar | editar

    const [form, setForm] = useState({
        id: null,
        nombre: "",
        descripcion: "",
        medida: "",
        precio: "",
        stock: "",
        categoria: "",
        imagenUrl: ""
    });
    useEffect(() =>{
        async function cargar(){
            const data = await getProducts();
            console.log("Productos cargados:", data);
            setProductos(data);
        }
        cargar();
    },[])

    const cargarProductos = async () => {
        try {
            const data = await getProducts();
            setProductos(data);
        } catch (error) {
            console.error("Error cargando productos:", error);
            alert("Error cargando productos desde el backend.");
        }
    };

    const abrirModalAgregar = () => {
        setModo("agregar");
        setForm({
            id: null,
            nombre: "",
            descripcion: "",
            medida: "",
            precio: "",
            stock: "",
            categoria: "",
            imagenUrl: ""
        });
        setShowModal(true);
    };

    const abrirModalEditar = (producto) => {
        setModo("editar");
        setForm({
            id: producto.id,
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            medida: producto.medida,
            precio: producto.precio,
            stock: producto.stock,
            categoria: producto.categoria,
            imagenUrl: producto.imagenUrl
        });
        setShowModal(true);
    };

    const guardarProducto = async () => {
         if (!form.nombre || !form.precio || !form.stock) {
            alert("Nombre, precio y stock son obligatorios.");
            return;
        }

        try {
            const data ={
                nombre: form.nombre,
                descripcion: form.descripcion,
                medida: form.medida,
                precio: form.precio,
                stock: form.stock,
                categoria: form.categoria,
                imagenUrl: form.imagenUrl
            };

            if (modo === "agregar") {
                await saveProduct(form);
                alert("Producto agregado.");
            } else {
                await updateProduct(form.id, form);
                alert("Producto actualizado.");
            }
            setShowModal(false);
            cargarProductos();
        } catch (error) {
            console.error(error);
            alert("Error guardando el producto.");
        }
    };

    const eliminarProducto = async (id) => {
        if (!confirm("¿Seguro que quieres eliminar este producto?")) return;

        try {
            await deleteProduct(id);
            alert("Producto eliminado.");
            cargarProductos();
        } catch (error) {
            console.error(error);
            alert("No se pudo eliminar el producto.");
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <Container className="mt-5">
            <h2>Panel de Administración</h2>

            <Button className="my-3" onClick={abrirModalAgregar}>
                + Agregar Producto
            </Button>

            <Table bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Medida</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Categoría</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {productos.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nombre}</td>
                            <td>{p.descripcion}</td>
                            <td>{p.medida}</td>
                            <td>${p.precio}</td>
                            <td>{p.stock}</td>
                            <td>{p.categoria}</td>
                            <td>
                                <img 
                                    src={p.imagenUrl} 
                                    alt={p.nombre} 
                                    style={{ width: "60px", borderRadius: "4px" }} 
                                />
                            </td>
                            <td>
                                <Button
                                    variant="warning"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => abrirModalEditar(p)}
                                >
                                    Editar
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => eliminarProducto(p.id)}
                                >
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* MODAL */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modo === "agregar" ? "Agregar Producto" : "Editar Producto"}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {[
                        { label: "Nombre", name: "nombre" },
                        { label: "Descripción", name: "descripcion" },
                        { label: "Medida", name: "medida" },
                        { label: "Precio", name: "precio", type: "number" },
                        { label: "Stock", name: "stock", type: "number" },
                        { label: "Categoría", name: "categoria" },
                        { label: "Imagen (URL)", name: "imagenUrl" }
                    ].map((field) => (
                        <Form.Group key={field.name} className="mb-3">
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control
                                name={field.name}
                                type={field.type || "text"}
                                value={form[field.name]}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    ))}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={guardarProducto}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default AdminPanel;