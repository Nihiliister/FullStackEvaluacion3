import axios from "axios";

const apiProd = 'https://kathub-xz8v.onrender.com/api/productos' 

class ProductoService {
    async getAllProductos() {
        try {
            const response = await axios.get(apiProd);
            return response.data;
        } catch (error) {
            console.error("Error obteniendo productos:", error);
            return [];
        }
    }
}

export default new ProductoService();