import axios from "axios";

console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL); // Add this line
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance