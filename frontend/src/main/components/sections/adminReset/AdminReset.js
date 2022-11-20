import React from 'react'
import styles from "./AdminReset.module.css"
import LogoSvg from "../../../../assets/images/skriptlogo.svg"
import SecuritySvg from "../../../../assets/icons/security-safe.svg"
import EyeSvg from "../../../../assets/icons/eye.svg"
import SmsSvg from "../../../../assets/icons/smsenvelope.svg"

export default function adminReset () {
  return (
    <div className={styles.Reset_container}>
        <header>
            <img src={LogoSvg} alt='LogoImg'/> 
            <br/>
            <img className={styles.Header_second_img} src={SecuritySvg} alt='SecuritySvg'/>
            <h1>Reset your password</h1>
        </header>

        <form  className={styles.Form_container}>

            <label htmlFor="password">New Password</label>
            <img className='input-icon password-show' src={EyeSvg} alt='EyeSvg'/>
            <input required type="password" placeholder='Enter a new password' className="form-control" id="password"/>

            <label htmlFor="password">Confirm Password</label>
            <img className='input-icon password-show' src={EyeSvg} alt='EyeSvg'/>
            <input required type="password" placeholder='Confirm your password' className="form-control" id="confirm_password"/>

            <input type="submit" id="reset" value="Reset my password"/>
        </form>
    </div>
  )
}
