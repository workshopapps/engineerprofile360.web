import React from 'react'
import styles from "./AdminForgot.module.css"
import LogoSvg from "../../../../assets/images/skriptlogo.svg"
import SecuritySvg from "../../../../assets/icons/security-safe.svg"
import SmsSvg from "../../../../assets/icons/smsenvelope.svg"

export default function adminForgot () {
  return (
    <div className={styles.Forgot_container}>
        <header>
            <img src={LogoSvg} alt='LogoImg'/> 
            <br/>
            <img className={styles.Header_second_img} src={SecuritySvg} alt='SecuritySvg'/>
            <h1>Forgot your password</h1>
            <p>Enter the email associated with your account </p>
        </header>

        <form  className={styles.Form_container}>
            <label htmlFor="email">Email</label>
            <img className='input-icon' src={SmsSvg} alt='SmsSvg'/>
            <input required type="email" placeholder='Enter your email' className="form-control" id="email"  />
            <input type="submit" id="Proceed" value="Proceed"/>
        </form>
    </div>
  )
}
