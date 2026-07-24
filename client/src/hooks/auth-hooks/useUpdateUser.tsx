import { authAPI } from "../../functions/authApiCalls";
import type { UpdateUserData } from "../../functions/authApiCalls"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data:UpdateUserData) => {
   /*  console.log("mutation received:", data); */

    const user = await authAPI.update(data);

   /*  console.log("mutation returns:", user); */

    return user;
  },
    onSuccess: (user) => {
      
      queryClient.setQueryData(["auth", "current-user"], user);
      
      
      navigate("/profile");
    },
    onError: (error: any) => {
      console.error("Update failed:", error);
     
    },
  });
};