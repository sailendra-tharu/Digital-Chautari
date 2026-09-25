import axios from "axios";

const api = axios.create({
  // The API routes live in this same Next.js app, so a relative path works in every environment.
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;