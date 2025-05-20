import React from "react";
import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <div>
      <h3>PublicLayout</h3>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
