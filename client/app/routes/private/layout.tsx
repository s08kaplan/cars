import { Outlet, useNavigate } from "react-router";
import { Suspense, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "src/store/useAuthStore";

const PrivateLayout = () => {
  const user = useAuthStore((state) => state.user);
  const isAuthenticate = useAuthStore(state => state.isAuthenticate)
/* console.log("user data:" , user) */

  const navigate = useNavigate();
  
   useEffect(() => {
      if (isAuthenticate && !user) {
      navigate("/login");
    }
  }, [user, isAuthenticate, navigate]);

   if (!isAuthenticate) {
    return <div>Checking authentication...</div>;
  }

/*    if (!user) {
    return <div>Checking auth...</div>; 
  } */

  return (
    <>
      PrivateLayout
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default PrivateLayout;
