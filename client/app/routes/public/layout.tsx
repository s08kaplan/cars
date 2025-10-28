import React from "react";
import { Outlet } from "react-router";
import Navbar from "src/components/Navbar/Navbar";
import Footer from "src/components/UI/Footer";

const PublicLayout = () => {
  return (
    <>
      <Outlet />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default PublicLayout;
