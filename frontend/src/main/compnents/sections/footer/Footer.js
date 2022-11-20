import React from "react"
import styles from "../footer/Footer.module.css"
import Logo from "../../../../assets/icons/footerLOgo.svg"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.logoSide}>
          <img src={Logo} alt="" width="250rem" />
          <h4 className={styles.text}>
            Join our newsletter to stay up to date on features and releases.
          </h4>
          <div className={styles.input__div}>
            <input
              className={styles.input_field}
              type="text"
              name="name"
              placeholder="Enter your email"
            />
            <button className={styles.btn__subscribe}>Subscribe</button>
          </div>
          <h4 className={styles.text}>
            By subscribing you agree to our Privacy Policy and provide consent
            to receive updates from our company.
          </h4>
        </div>

        <div className={styles.link__col}>
          <h4 className={styles.link__heading}>Resources</h4>
          <a href="#/" className={styles.link}>
            Help center
          </a>
          <a href="#/" className={styles.link}>
            Blog
          </a>
          <a href="#/" className={styles.link}>
            Customer
          </a>
        </div>
        <div className={styles.link__col}>
          <h4 className={styles.link__heading}>About</h4>
          <a href="#/" className={styles.link}>
            About us
          </a>
          <a href="#/" className={styles.link}>
            Contact us
          </a>
          <a href="#/" className={styles.link}>
            Careers
          </a>
        </div>
        <div className={styles.link__col}>
          <h4 className={styles.link__heading}>Follow Us</h4>
          <a href="#/" className={styles.link}>
            <FaFacebookF />
            Facebook
          </a>
          <a href="#/" className={styles.link}>
            <FaInstagram />
            Instagram
          </a>
          <a href="#/" className={styles.link}>
            <FaTwitter />
            Twitter
          </a>
          <a href="#/" className={styles.link}>
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
      <hr className={styles.divider}></hr>
      <div className={styles.lower__part}>
        <div className={styles.right}>
          <h1>2022 Skript. All right reserved.</h1>
        </div>
        <div className={styles.lower__links}>
          <a href="#/" className={styles.link}>
            Privacy Policy
          </a>
          <a href="#/" className={styles.link}>
            Terms of Service
          </a>
          <a href="#/" className={styles.link}>
            Cookies Settings
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
