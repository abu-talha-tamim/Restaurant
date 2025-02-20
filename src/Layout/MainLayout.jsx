import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {
  return (
    // Outer container prevents any horizontal overflow
    <div className="w-full overflow-x-hidden">
      {/* Inner container sets a responsive fixed width */}
      <div className="mx-auto max-w-[480px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-7xl">
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;
