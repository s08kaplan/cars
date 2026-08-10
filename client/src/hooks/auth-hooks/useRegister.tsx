import { authAPI } from "../../functions/authApiCalls";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export const useRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: authAPI.register,
    onSuccess: (user) => {
      
      queryClient.setQueryData(["auth", "current-user"], user);
      
      
      navigate("/profile");
    },
    onError: (error: any) => {
      console.error("Registration failed:", error);
     
    },
  });
};