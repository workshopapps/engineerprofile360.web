import React from "react"
import styles from "./HomeDecision.module.css"
import Preview from "../../../../assets/images/preview.svg"

export default function Homedecision() {
  return (
    <div className={styles.decision_container}>
      <img src={Preview} alt="" />
      <h1>Make decisions in a flash</h1>
      <p>
        Our assessments gives engineers and their managers a clear glimpse of
        where they are and <br /> what they need to move to the next level of
        growth. <br />
        No longer do managers need to excessively make use of limited time to
        make important decisions <br />
        and with a clear overview of the teams abilities, engineering descions
        can be faster!
      </p>
      <div className={styles.cta_container}>
        <button className={styles.button}>Request a demo</button>
        <a href="#/">Let's chat?</a>
      </div>
    </div>
  )
}
