import React from "react"
import styles from "../homeStarted/HomeStarted.module.css"

export default function HomeStarted() {
  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <h1>Ready to get started?</h1>
        <p>
          Stay ahead of your engineering teams’ performance and skills by
          Sheduling an online demo and learn how skript can <br /> help your
          company. One of our solutions specialists will show you the platform
          and answer any questions you have.
        </p>
        <button>Request A Demo</button>
      </div>
    </div>
  )
}
