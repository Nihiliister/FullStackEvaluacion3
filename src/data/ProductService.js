import axios from "axios";

const API_URL = "https://kathub-xz8v.onrender.com/api/productos";

export async function getProducts() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return [];
  }
}

export async function getProductById(id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    return null;
  }
}

export async function saveProduct(product) {
  try {
    const response = await axios.post(API_URL, product);
    return response.data;
  } catch (error) {
    console.error("Error guardando producto:", error);
    return null;
  }
}

export async function updateProduct(id, product) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, product);
    return response.data;
  } catch (error) {
    console.error("Error actualizando producto:", error);
    return null;
  }
}

export async function deleteProduct(id) {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.error("Error eliminando producto:", error);
    return false;
  }
}