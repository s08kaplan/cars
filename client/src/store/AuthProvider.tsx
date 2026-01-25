import { useEffect, useRef } from "react";
import useAuth from "src/tanstack-query/auth/useAuth";
import { useAuthStore } from "./useAuthStore";
import { useNavigate } from "react-router";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading, isError } = useAuth();
  const { user: storedUser, setUser, setIsAuthenticate } = useAuthStore();
  const navigate = useNavigate();

  const isInitialized = useRef(false);

  useEffect(() => {
    if (isError) {navigate("/dashboard")};

    if(!user || !storedUser) return

    if (isInitialized.current && user?.id === storedUser?.id) return;

    if (!isError && user) {
      const roleAsNumber =
        typeof user.role === "string" ? parseInt(user.role) : user.role;

      if (roleAsNumber === 1 && user.id !== storedUser?.id) {
        console.log("Setting authenticated user:", user.id);
        setUser(user);
        setIsAuthenticate(true);
        isInitialized.current = true;
      }
    } else if ((isError || !user) && storedUser) {
      console.log("Clearing authentication");
      setUser(null);
      setIsAuthenticate(false);
      isInitialized.current = false;
    } else if (!user && !storedUser) {
      isInitialized.current = true;
    }
  }, [isLoading, isError, user, storedUser, setUser, setIsAuthenticate]);

  if (isLoading) {
    return <div className="text-center text-gray-500">Checking auth...</div>;
  }

  return <>{children}</>;
};

export default AuthProvider;
