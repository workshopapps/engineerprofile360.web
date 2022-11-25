import React from 'react';
import logo from '../../../assets/icons/app/logo.svg';
import success from '../../../assets/images/img_done.png';
import './User2FA.css';

export const User2FA = () => {
  return (
    <div id='userBody'>
        <div id='logodiv'>
            <img src={logo} alt="logo" className='userlogo'/>
        </div>

        <div className='successDiv'>
            <img src={success} alt="success" id='success'/>
            <h2>Success</h2>
            <p>Your account has been verified succesfully</p>
            <button>Continue</button>
        </div>
    </div>
  )
}
