
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAuth = () => {
  const { authWithAxios } = useAxios();

  return useQuery({
    queryKey: ["auth", "current-user"],
    queryFn: async () => {
      console.log("Calling verify-token...");
      const response = await authWithAxios.post(
        `${import.meta.env.VITE_BASE_URL}auth/verify-token`
      );
      console.log("Response:", response.data);
      const user = response.data.user;
      return user;
    },
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    gcTime: 10 * 60 * 1000,
  });
};

export default useAuth;