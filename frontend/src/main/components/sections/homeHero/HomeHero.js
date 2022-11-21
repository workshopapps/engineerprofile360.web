import React from "react"
import styles from "../homeHero/HomeHero.module.css"
import HeroImg from "../../../../assets/images/hero-img.svg"
import FloatingImg from "../../../../assets/images/hero-subimg.svg"
import HomeHeroButton from "../../molecules/homeHero/HomeHeroButton"
import { Link } from "react-router-dom"

export default function HomeHero() {
  return (
    <div className={styles.Hero_container}>
      <div className={styles.hero_info}>
        <h1 className={styles.hero_heading}>
          Assess <br /> Your Engineering Teams’ Strength
        </h1>
        <p className={styles.hero_description}>
          Get started with Skript <br /> innovative performance solutions for
          engineering teams
        </p>
        <Link to="/demo">
          <HomeHeroButton />
        </Link>
      </div>
      <div className={styles.hero_img}>
        <img src={HeroImg} alt="hero-img" />
        <div className={styles.floating_img}>
          <img src={FloatingImg} alt="" />
        </div>
      </div>
    </div>
  )
}
