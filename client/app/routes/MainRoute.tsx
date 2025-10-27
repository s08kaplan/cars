import { Outlet } from "react-router";
import MyNavbar from "src/components/Navbar/Navbar";
import Footer from "src/components/UI/Footer";
import AuthProvider from "src/store/AuthProvider";

const MainRoute = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-between h-dvh">
        <MyNavbar />
        <Outlet />
       {/*  <Footer /> */}
      </div>
    </AuthProvider>
  );
};

export default MainRoute;
