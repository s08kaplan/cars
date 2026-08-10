import { authAPI } from "../../functions/authApiCalls";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["auth", "current-user"],
    queryFn: authAPI.getCurrentUser,
    staleTime: 15 * 60 * 1000, // 15 minutes
    retry: false,
  });
};