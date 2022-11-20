import React from 'react'
import styles from "./AdminSignup.module.css"
import LogoSvg from "../../../../assets/images/skriptlogo.svg"
import VerifySvg from "../../../../assets/icons/verify-email.svg"
import SmsSvg from "../../../../assets/icons/smsenvelope.svg"

export default function adminSignupSent () {
  return (
    <div className={styles.Signup_container}>
        <header>
            <img src={LogoSvg} alt='LogoImg'/> 
            <br/>
            <img className={styles.Header_second_img} src={VerifySvg} alt='VerifySvg'/>
            <h1>Verify your email address</h1>
            <p>You’ve entered Janedoe@gmail.com as the email for your account. </p>
            <p>Please verify this email by clicking on the button below  </p>
        </header>

        <form  className={styles.Form_container}>
        <a href='verify' className={styles.Signup_Button}>Verify Email</a>
        <p>  Once your email is verified, you don’t need to repeat this again </p>
        </form>
    </div>
  )
}
