import React from "react";
import logo from "../../../assets/icons/app/logo.svg";
import success from "../../../assets/images/img_done.png";
import "./User2FA.css";
import { Link, useParams } from "react-router-dom";

export const User2FA = () => {
  const { user_id, token } = useParams;
  return (
    <div id="userBody">
      <div id="logodiv">
        <img src={logo} alt="logo" className="userlogo" />
      </div>

      <div className="successDiv">
        <img src={success} alt="success" id="success" />
        <h2>Success</h2>
        <p>Your account has been verified succesfully</p>
        <button>Continue</button>
      </div>
    </div>
  );
};
