import React from "react";

import {
  HomeHero,
  HomeStats,
  HomeDecision,
  HomeFeatures,
  HomeTestimonials,
  HomeBlog,
  HomeGetStarted,
} from "../components";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeDecision />
      <HomeFeatures />
      <HomeTestimonials />
      <HomeBlog />
      <HomeGetStarted />
    </>
  );
};

export default Home;
