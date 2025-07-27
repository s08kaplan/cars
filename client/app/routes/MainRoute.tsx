import { Outlet } from "react-router";
import MyNavbar from "src/components/Navbar/Navbar";
import Footer from "src/components/UI/Footer";
import AuthProvider from "src/store/AuthProvider";

const MainRoute = () => {
  return (
    <AuthProvider>
      <MyNavbar />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
};

export default MainRoute;
