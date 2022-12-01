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
import smsSvg from "../../../assets/icons/smsenvelope.svg";
import { Loader } from "../../../styles/reusableElements.styled";

const UserForgotPassword = () => {
  return (
    <>
      <FormContainer>
        <ToastContainer />
        <AuthTitle title="Forgot Password" />

        <InputField
          $size="md"
          type="email"
          label="Email Address"
          id="email"
          placeholder="Enter Email Address"
          value=""
        />

        <FormButton $size="md" type="button">
          Continue
        </FormButton>

        {/* </LoginForm> */}
      </FormContainer>
    </>
  );
};

export default UserForgotPassword;

const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
`;

const FormButton = styled(Button)`
  min-width: 100%;
  margin: 0;
`;
