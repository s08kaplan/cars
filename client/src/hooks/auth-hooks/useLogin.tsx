import { authAPI } from "../../functions/authApiCalls";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authAPI.login,
    onSuccess: (user) => {
      
      queryClient.setQueryData(["auth", "current-user"], user);
      
     
      navigate("/private/media-files");
    },
    onError: (error: any) => {
      console.error("Login failed:", error);
      
    },
  });
};