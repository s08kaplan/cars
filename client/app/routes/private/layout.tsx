import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuthStore } from "src/store/useAuthStore";

const PrivateLayout = () => {
  const user = useAuthStore((state) => state.user);
  const isAuthenticate = useAuthStore((state) => state.isAuthenticate);
  /* console.log("user data:" , user) */

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticate && !user) {
      navigate("/login");
    }
  }, [user, isAuthenticate, navigate]);

  if (!isAuthenticate) {
    <div>Checking authentication...</div>;
    navigate("/");
  }

  console.log("data in private layout: ", user);
  return <Outlet />;
};

export default PrivateLayout;
