import React, { useEffect, useRef, useState } from "react";
import success from "../../../assets/images/img_done.png";
import "./User2FA.css";
import { Link, useParams } from "react-router-dom";
import axios from "../../../api/axios";
import Logo from "../../../components/Logo";

export const User2FA = () => {
  const [fetchError, setFetchError] = useState("");
  const isErrorFree = useRef();
  const { user_id, token } = useParams;

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`auth/register/${user_id}/${token}`);
        if (response?.errorState === false) isErrorFree.current = true;
        else isErrorFree.current = false;
      } catch (err) {
        if (!err?.response) {
          setFetchError("No Server Response");
        }
      }
    };

    verifyEmail();
  }, [token, user_id]);
  return (
    <div id="userBody">
      <div id="logodiv">
        <Logo size="sm" />
      </div>

      {isErrorFree ? (
        // Will display when there's no error.
        <>
          <div className="successDiv">
            <img src={success} alt="success" id="success" />
            <h2>Success</h2>
            <p>Your account has been verified succesfully</p>
            <button>Continue</button>
          </div>
        </>
      ) : (
        // Will display when there's an error.
        <>
          <div className="failedDiv"></div>
        </>
      )}
    </div>
  );
};
