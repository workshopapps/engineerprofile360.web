import React from "react"
import Homedecision from "../compnents/sections/homedecision/HomeDecision"
import HomeHero from "../compnents/sections/homeHero/HomeHero"
import HomeStats from "../compnents/sections/homeStats/HomeStats"
import styles from "../globalStyles/Global.module.css"

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeStats />
      <Homedecision />
    </div>
  )
}
