import axios from "axios";

const api = axios.create({
    baseURL: "https://kathub-xz8v.onrender.com/api",
});

export default api;