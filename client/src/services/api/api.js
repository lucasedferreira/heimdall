import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:2424",
});

export default api;