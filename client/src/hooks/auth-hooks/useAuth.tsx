import { useCurrentUser } from "./useCurrentUser";

export const useAuth = () => {
  const { data: user, isLoading, isError } = useCurrentUser();
  
  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    isError,
  };
};
