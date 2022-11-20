import React from "react"
import styles from "../homeTestimony/HomeTestimony.module.css"
import Testimony from "../../../../assets/images/testimony.svg"
import Quotes from "../../../../assets/icons/quotes.svg"

export default function HomeTestimony() {
  return (
    <div className={styles.testimony_container}>
      <div>
        <h2>
          What They Say <br /> About us.
        </h2>
        <img src={Quotes} alt="" />
      </div>

      <div>
        <div className={styles.testimony}>
          <div className={styles.image}>
            <img src={Testimony} alt="" />
          </div>
          <h4>
            “ Our engineering team saw a faster completion rate on tasks after
            we did a reshuffling responsibilities based on <br /> the evaluation
            results from Skript, Now we successfully ship over 90% of projects
            within deadline, an improvement <br /> on our 47% completion rate. “
          </h4>
          <div className={styles.name}>Mark Ezele - HNG Solutions</div>
        </div>
      </div>
    </div>
  )
}
