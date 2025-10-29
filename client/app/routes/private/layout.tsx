import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuthStore } from "src/store/useAuthStore";

const PrivateLayout = () => {
  const user = useAuthStore((state) => state.user);
  const isAuthenticate = useAuthStore((state) => state.isAuthenticate);
  console.log("data in private layout: ", user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticate && !user) {
      navigate("/login");
    }
  }, [user, isAuthenticate, navigate]);

  useEffect(() => {
   if(!isAuthenticate)  {
    navigate("/dashboard")
  };
  }, [isAuthenticate])
  

 /*  if (!isAuthenticate) {
     <div>Checking authentication...</div>; 
  } */

  return <Outlet />;
};

export default PrivateLayout;
