import React from 'react'
import {Link} from 'react-router-dom'
import styles from "./AdminLogin.module.css"
import LogoSvg from "../../../../assets/images/skriptlogo.svg"
import EyeSvg from "../../../../assets/icons/eye.svg"
import SmsSvg from "../../../../assets/icons/smsenvelope.svg"

export default function adminLogin () {
  return (
    <div className={styles.Login_container}>
        <header>
            <img src={LogoSvg} alt='LogoImg'/>
            <h1>Welcome back</h1>
            <p>Please enter your login details</p>
        </header>

        <form  className={styles.Form_container}>
            <label htmlFor="email">Email</label>
            <img className='input-icon' src={SmsSvg} alt='SmsSvg'/>
            <input required type="email" placeholder='Enter your email' className="form-control" id="email"  />

            <label htmlFor="password">Password</label>
            <img className='input-icon' src={EyeSvg} alt='EyeSvg'/>
            <input required type="password" placeholder='Enter your password' className="form-control" id="password"/>

            <div className={styles.Form_checkbox}>
                <div className='remember'>
                <label htmlFor="checkbox">
                    <input required type="checkbox" className={styles.Form_checkbox} id="checkbox" />
                    Remember me
                </label>
                </div>

                <div className='forgot'>
                    <Link to='/forgot'>Forgot password?</Link>
                </div>
                
            </div>

            <input type="submit" id="Proceed" value="Sign in"/>
        </form>

        <p>Don’t have an account? <Link to='/register'>Sign up</Link></p>
    </div>
  )
}
