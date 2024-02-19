import axios from "axios";

const apiClient = axios.create({
  baseURL:"https://sr-nutrifit-backend-production-c2b4.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
