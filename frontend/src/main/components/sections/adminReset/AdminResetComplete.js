import React from 'react'
import styles from "./AdminReset.module.css"
import LogoSvg from "../../../../assets/images/skriptlogo.svg"
import LockSvg from "../../../../assets/icons/reset.svg"
import EyeSvg from "../../../../assets/icons/eye.svg"
import SmsSvg from "../../../../assets/icons/smsenvelope.svg"

export default function adminReset () {
  return (
    <div className={styles.Reset_container}>
        <header>
            <img src={LogoSvg} alt='LogoImg'/> 
            <br/>
            <img className={styles.Header_second_img} src={LockSvg} alt='LockSvg'/>
            <h1>Successful password reset!</h1>
            <p>You can now use your new password to log in to your account</p>
        </header>

        <form  className={styles.Form_container}>
        <a href='login' className={styles.Reset_Button}>Login</a>
        </form>
    </div>
  )
}
