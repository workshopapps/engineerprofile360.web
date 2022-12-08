import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
