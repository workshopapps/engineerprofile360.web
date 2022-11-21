import React from "react";
import HomeBlog from "../components/sections/homeBlog/HomeBlog";
import Homedecision from "../components/sections/homeDecision/HomeDecision";
import HomeHero from "../components/sections/homeHero/HomeHero";
import HomeProduct from "../components/sections/homeProducts/HomeProduct";
import HomeStarted from "../components/sections/homeStarted/HomeStarted";
import HomeStats from "../components/sections/homeStats/HomeStats";
import HomeTestimony from "../components/sections/homeTestimony/HomeTestimony";
import Testimonial from "../components/Testimonials/Testimonial";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <Homedecision />
      <HomeProduct />
      <HomeTestimony />
      <HomeBlog />
      <HomeStarted />
      < Testimonial/>
    </>
  );
}