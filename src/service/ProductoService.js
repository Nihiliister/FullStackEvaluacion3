import axios from "axios";

const apiProd = 'http://localhost:8080/api/productos' 


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

    async getProductById(id){
        try{
            const response = await api.get(`/productos/${id}`);
            return response.data;
        }catch (error){
            console.error("Error al obtener producto", error);
            return null;
        }
    }
}

export default new ProductoService();