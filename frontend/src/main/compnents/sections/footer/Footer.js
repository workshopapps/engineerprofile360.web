import React from "react"
import styles from "../footer/Footer.module.css"
import Logo from "../../../../assets/icons/footerLOgo.svg"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div>
          <img src={Logo} alt="" />
          <h4 className={styles.text}>
            Join our newsletter to stay up to date on features and releases.
          </h4>
        </div>
        <div className={styles.link__heading}>Resources</div>
        <div className={styles.link__heading}>About </div>
        <div className={styles.link__heading}>Follow Us</div>
      </div>
    </div>
  )
}

export default Footer
