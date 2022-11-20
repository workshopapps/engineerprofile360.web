import React from "react"
import styles from "../homeStats/HomeStats.module.css"

const Tag = ({ tagTitle }) => {
  return (
    <div className={styles.Stat_tag}>
      <p>{tagTitle}</p>
    </div>
  )
}

export default function HomeStats() {
  return (
    <div className={styles.Stats_container}>
      <div className={styles.Stats_details}>
        <h3>
          Product <br /> Growth Goals
        </h3>
        <div className={styles.Stats_body}>
          <div className={styles.Stat}>
            <Tag tagTitle={"Companies"} />
            <h1>120+</h1>
            <p className={styles.Stat_description}>
              assess their software engineering team.
            </p>
          </div>
          <div className={styles.Stat}>
            <Tag tagTitle={"Users"} />
            <h1>1k+</h1>
            <p className={styles.Stat_description}>
              assess, monitor and develope their skills.
            </p>
          </div>
          <div className={styles.Stat}>
            <Tag tagTitle={"Feedback"} />
            <h1>200+</h1>
            <p className={styles.Stat_description}>
              Get quality automated assessment for their team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
