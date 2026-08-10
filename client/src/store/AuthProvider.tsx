import { useEffect, useRef } from "react";
import { useAuth } from "src/hooks/auth-hooks/useAuth";
import { useAuthStore } from "./useAuthStore";
import { useNavigate } from "react-router";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
 const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950 text-slate-400">
        <p className="text-sm font-medium">Checking authentication...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthProvider;
