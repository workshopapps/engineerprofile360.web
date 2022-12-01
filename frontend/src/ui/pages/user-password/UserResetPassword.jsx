import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle, InputField } from "../../../main/components";

import useInputValidation from "../../../hooks/useInputValidation";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";

import eyeSvg from "../../../assets/icons/eye.svg";
import smsSvg from "../../../assets/icons/smsenvelope.svg";
import { Loader } from "../../../styles/reusableElements.styled";

const UserResetPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
      <FormContainer>
        <AuthTitle title="Password" text="set up a password for your account" />

        <InputField
          $size="md"
          type="password"
          label="Password"
          id="password"
          placeholder="enter password"
          // handleChange={(e) => changeInputValue(e)}
          // error={errors && touched.password && errors.password?.length > 0}
          // handleBlur={onBlur}
          endIcon={
            <img
              onClick={() => setShowPassword((prevState) => !prevState)}
              src={eyeSvg}
              alt=""
              style={{ cursor: "pointer" }}
            />
          }
        />

        <InputField
          $size="md"
          type="password"
          label="Re-Enter Password"
          id="confirmPassword"
          placeholder="enter password"
          // handleChange={(e) => changeInputValue(e)}
          // error={errors && touched.password && errors.password?.length > 0}
          // handleBlur={onBlur}
          endIcon={
            <img
              onClick={() => setShowPassword((prevState) => !prevState)}
              src={eyeSvg}
              alt=""
              style={{ cursor: "pointer" }}
            />
          }
          // helperText={
          //   errors && errors.password && touched.password ? errors.password : ""
          // }
        />

        <FormButton
          type={isSubmitted ? "button" : "submit"}
          $variant={isSubmitted ? "disabled" : null}
        >
          Continue
        </FormButton>

        {/* </LoginForm> */}
      </FormContainer>
    </>
  );
};

export default UserResetPassword;

const FormContainer = styled(Container)`
  width: 100%;
`;
const FormButton = styled(Button)`
  min-width: 100%;
  margin: 0;
`;
