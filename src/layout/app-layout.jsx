import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen">
        <Header/>
        <Outlet />
      </main>
      <div className="p-10 text-centre bg-gray-800 mt-10">
        Made with Lot
      </div>
    </div>
  );
};

export default AppLayout;
