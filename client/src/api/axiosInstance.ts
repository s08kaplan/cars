import axios from "axios";

export const api = axios.create({
 /*  baseURL: import.meta.env.DEV ? "/api/" : import.meta.env.VITE_BASE_URL, */
 baseURL: "/api/", 
  withCredentials: true,
});
console.log("test api in client",import.meta.env.DEV)
console.log("test api base url in client",import.meta.env.VITE_BASE_URL)
let isRefreshing = false;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const isRefreshEndpoint = originalRequest.url?.includes("/auth/refresh");
    const isAuthMeEndpoint = originalRequest.url?.includes("/auth/me");

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isRefreshEndpoint
    ) {
    
      if (isAuthMeEndpoint) {
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        await api.post("auth/refresh");
        isRefreshing = false;
        return api(originalRequest);
      } catch {
        isRefreshing = false;
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);