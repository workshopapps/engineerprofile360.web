import React from "react"
import styles from "./HomeDecision.module.css"
import Preview from "../../../../assets/images/preview.svg"

export default function Homedecision() {
  return (
    <div className={styles.decision_container}>
      <img src={Preview} alt="" />
      <h1>Make decisions in a flash</h1>
      <p>
        Our assessment tests give engineers and their managers a clear glimpse
        of where they are and what they need to move to the next level of
        growth. No <br /> longer do managers need to excessively make use of
        limited time to make important decisions and with a clear overview of
        the team’s abilities, <br /> engineering management decisions can be
        made faster.
      </p>
      <div className={styles.cta_container}>
        <button className={styles.button}>Request a demo</button>
        <a href="#/">Let's chat?</a>
      </div>
    </div>
  )
}
