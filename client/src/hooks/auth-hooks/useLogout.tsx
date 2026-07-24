import { authAPI } from "../../functions/authApiCalls";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authAPI.logout,
    onSuccess: () => {
      
      queryClient.setQueryData(["auth", "current-user"], null);
      queryClient.removeQueries({ queryKey: ["auth"] });
      
   
      navigate("/login");
    },
    onError: (error: any) => {
      console.error("Logout failed:", error);
      
      
      queryClient.setQueryData(["auth", "current-user"], null);
      navigate("/login");
    },
  });
};