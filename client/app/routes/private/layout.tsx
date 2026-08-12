import { Navigate, Outlet, useNavigate } from "react-router";
import { useAuth } from "src/hooks/auth-hooks/useAuth";

const PrivateLayout = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
 /*  console.log("data in private layout: ", user); */
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-gray-500">Checking authentication...</p>
      </div>
    );
  }

  if (!isLoading && (!isAuthenticated || !user)) {
    return <Navigate to="/dashboard" replace />;
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/dashboard" replace />;
  }

  const roleAsNumber = typeof user.role === "string" ? parseInt(user.role, 10) : user.role;
  if (roleAsNumber !== 1) {
    return <Navigate to="/dashboard" replace />;
  }


  return <Outlet />;
};

export default PrivateLayout;
