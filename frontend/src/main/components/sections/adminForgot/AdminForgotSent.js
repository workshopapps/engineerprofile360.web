import React from 'react'
import styles from "./AdminForgot.module.css"
import LogoSvg from "../../../../assets/images/skriptlogo.svg"
import VerifySvg from "../../../../assets/icons/verify-email.svg"

export default function adminForgotSent () {
  return (
    <div className={styles.Forgot_container}>
        <header>
            <img src={LogoSvg} alt='LogoImg'/> 
            <br/>
            <img className={styles.Header_second_img} src={VerifySvg} alt='VerifySvg'/>
            <h1>Check your email address</h1>
            <p>A password reset link has been sent to the email account you provided.</p>
            <p>Please check your email inbox and spam folders respectively  </p>
        </header>
    </div>
  )
}
