import React from "react";
import { Outlet } from "react-router";
import Navbar from "src/components/Navbar/Navbar";
import Footer from "src/components/UI/Footer";

const PublicLayout = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
