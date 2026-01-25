import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface UseAuthOptions {
  enabled?: boolean;
}

const useAuth = (options?: UseAuthOptions) => {
  return useQuery({
    queryKey: ["auth", "current-user"],
    queryFn: async () => {
      console.log("Calling verify-token...");
      const response = await axios(
        `${import.meta.env.VITE_BASE_URL}auth/verify-token`,
        { withCredentials: true }
      );
      console.log("Response:", response.data);
      const user = response.data.user;
      return user;
    },
    enabled: options?.enabled ?? true,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export default useAuth;
