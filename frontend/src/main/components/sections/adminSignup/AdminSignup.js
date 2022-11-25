import React from 'react'
import styles from "./AdminSignup.module.css"
import LogoSvg from "../../../../assets/images/skriptlogo.svg"
import EditSvg from "../../../../assets/icons/edit-2.svg"
import EyeSvg from "../../../../assets/icons/eye.svg"
import SmsSvg from "../../../../assets/icons/smsenvelope.svg"

export default function adminSignup () {
  return (
    <div className={styles.Signup_container}>
        <header>
            <img src={LogoSvg} alt='LogoImg'/>
            <h1>Sign up</h1>
            <p>Let’s get you started</p>
        </header>

        <form  className={styles.Form_container}>
            <label htmlFor="full_name">Full Name</label>
            <img className='input-icon' src={EditSvg} alt='EditSvg'/>
            <input required type="text" placeholder='Enter your first name' className="form-control" id="full_name"  />

            <label htmlFor="email">Email</label>
            <img className='input-icon' src={SmsSvg} alt='SmsSvg'/>
            <input required type="email" placeholder='Enter your email' className="form-control" id="email"  />

            <label htmlFor="password">Password</label>
            <img className='input-icon' src={EyeSvg} alt='EyeSvg'/>
            <input required type="password" placeholder='Enter your password' className="form-control" id="password"/>

            <label htmlFor="password">Confirm Password</label>
            <img className='input-icon' src={EyeSvg} alt='EyeSvg'/>
            <input required type="password" placeholder='Confirm your password' className="form-control" id="confirm_password"  />

            <div className={styles.Form_checkbox}>
                <label htmlFor="checkbox">
                    <input required type="checkbox" className={styles.Form_checkbox} id="checkbox" />
                    I agree to the <a href='terms'>Terms and Conditions</a></label>
            </div>

            <input type="submit" id="Proceed" value="Proceed to Dashboard"/>
        </form>
    </div>
  )
}
