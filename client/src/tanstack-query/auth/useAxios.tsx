import axios from "axios";
import { useAuthStore } from "src/store/useAuthStore";

const useAxios = () => {
  const user = useAuthStore(state => state.setUser)
  const authWithAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { authWithAxios };
};

export default useAxios;
