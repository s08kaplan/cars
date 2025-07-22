import { Outlet } from "react-router";
import MyNavbar from "src/components/Navbar/Navbar";
import AuthProvider from "src/store/AuthProvider";

const MainRoute = () => {
  
  return (
    <AuthProvider>
      <MyNavbar />
      <Outlet />
    </AuthProvider>
  );
};

export default MainRoute;
