// src/api/axiosInstance.ts
import axios from "axios";

const hostname = window.location.hostname;

// Utility to get subdomain (defaults to "portal")
const getSubdomain = ()=> {
  const parts = hostname.split(".");
  if (parts.length > 2) {
    return parts[0]; // e.g., subdomain.employez.ai
  }
  return "portal"; // fallback
};

const domain = hostname === "localhost" ? "portal" : "portal";
const clientId = hostname === "localhost" ? "portal" : "portal";

export const axiosInstance = axios.create({
  baseURL: `https://${domain}.employez.ai/`,
  headers: {
    "Content-Type": "application/json",
    clientId: clientId,
  },
});

// Add token interceptor
axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    localStorage.setItem("clientId", clientId);
  }
  return config;
});
