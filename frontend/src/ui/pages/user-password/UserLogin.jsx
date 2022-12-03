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
const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
      <FormContainer>
        <ToastContainer />
        <AuthTitle title="Log In" text="Hey There, Welcome Back" />
        <InputField
          $size="md"
          type="password"
          label="Password"
          id="password"
          placeholder="enter password"
          value=""
          endIcon={
            <img
              onClick={() => setShowPassword((prevState) => !prevState)}
              src={eyeSvg}
              alt=""
              style={{ cursor: "pointer" }}
            />
          }
        />

        <FormButton $size="md" type="button">
          Sign In
        </FormButton>
        <Checkbox>
          <label>
            <input type="checkbox" id="persist" onChange={"/"} checked={"/"} />{" "}
            Remember me
          </label>

          <Link to="/reset-password">Forgot password?</Link>
        </Checkbox>
        {/* </LoginForm> */}
      </FormContainer>
    </>
  );
};

export default UserLogin;

const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

const Checkbox = styled.div`
  width: 100%;
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(5)};
  font-size: 14px;

  label {
    align-self: center;
    display: flex;
    gap: ${({ theme }) => theme.spacing(1)};
  }

  a:active,
  a:visited {
    color: #2667ff;
  }
`;

const FormButton = styled(Button)`
  min-width: 100%;
  margin: 0;
`;
