import React from "react"
import HomeBlog from "../compnents/sections/homeBlog/HomeBlog"
import Homedecision from "../compnents/sections/homeDecision/HomeDecision"
import HomeHero from "../compnents/sections/homeHero/HomeHero"
import HomeProduct from "../compnents/sections/homeProducts/HomeProduct"
import HomeStarted from "../compnents/sections/homeStarted/HomeStarted"
import HomeStats from "../compnents/sections/homeStats/HomeStats"
import Footer from "../compnents/sections/footer/Footer"
import HomeTestimony from "../compnents/sections/homeTestimony/HomeTestimony"

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeStats />
      <Homedecision />
      <HomeProduct />
      <HomeTestimony />
      <HomeBlog />
      <HomeStarted />
      {/* <Footer /> */}
    </div>
  )
}
