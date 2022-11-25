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
import ResetSuccessful from "../components/sections/passwordResetSuccessful/ResetSuccessful"

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
      <ResetSuccessful />
    </>
  );
};

export default Home;
