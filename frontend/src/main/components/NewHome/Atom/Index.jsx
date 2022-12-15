import React from "react";
import About from "../Molecules/About/About";
import Blog from "../Molecules/Blog/Blog";
import Decision from "../Molecules/Decision/Decision";
import Feature from "../Molecules/Features/Feature";
import GetStarted from "../Molecules/Get-Started/GetStarted";
import Hero from "../Molecules/Hero/Hero";
import Product from "../Molecules/Product/Product";

const Index = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Decision />
      <Feature />
      <About />
      <Blog />
      <GetStarted />
    </div>
  );
};

export default Index;
