import axios from "axios";

const useAxios = () => {
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
