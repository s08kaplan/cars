import { Outlet } from "react-router";
import MyNavbar from "src/components/Navbar/Navbar";
import Footer from "src/components/UI/Footer";

const MainRoute = () => {
  return (
    <div className="h-dvh">
      <MyNavbar />
      <Outlet />
      {/*  <Footer /> */}
    </div>
  );
};

export default MainRoute;
