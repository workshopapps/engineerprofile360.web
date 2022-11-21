import React from "react";

import Header from "./Partials/Header";
import Footer from "./Partials/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
