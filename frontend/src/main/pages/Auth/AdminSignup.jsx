import React, { useState } from "react";
import styled from "styled-components";
import { json, Link } from "react-router-dom";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle, InputField } from "../../components";

import useInputValidation from "../../../hooks/useInputValidation";
import axios from "../../../api/axios";

import eyeSvg from "../../../assets/icons/eye.svg";
import smsSvg from "../../../assets/icons/smsenvelope.svg";
import editSvg from "../../../assets/icons/edit-2.svg";

const AdminSignup = () => {
  const {
    formData,
    changeInputValue,
    onBlur,
    errors,
    touched,
    setTouched,
    validation,
    setFormData,
  } = useInputValidation({
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    changeInputValue(e);
  };

  //TODO: MOVE TO UTILS

  async function Fetch(url, config = {}) {
    config["headers"] = {
      "content-type": "application/json",
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        validation(formData);
        if (Object.keys(errors).length > 0) {
          setTouched({
            fname: true,
            uname: true,
            email: true,
            password: true,
            confirmPassword: true,
          });
        }

        if (Object.keys(errors).length === 0) {
          setTouched({
            fname: false,
            uname: false,
            email: false,
            password: false,
            confirmPassword: false,
          });

          const {
            email,
            fname: full_name,
            uname: username,
            password,
          } = formData;
          const response = await axios.post(
            "auth/register",
            JSON.stringify({ email, full_name, username, password }),
            {
              headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              withCredentials: true,
            }
          );

          // Clear input fields
          setFormData({
            fname: "",
            uname: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        } else if (errors) throw new Error();
      } catch (err) {
        // isFormSubmitted.current = false;

        if (!err?.response) {
        }
      }
    };

    const { fname, uname, email, password, confirmPassword } = formData;

    return (
      <>
        <FormContainer>
          <AuthTitle title="Sign up" text="Let's get started" />
          <SignupForm>
            <InputField
              $size="md"
              type="text"
              label="Full Name"
              id="fname"
              placeholder="Jane Doe"
              value={fname}
              handleChange={changeInputValue}
              handleBlur={onBlur}
              endIcon={<img src={editSvg} alt="" />}
              helperText={
                errors && errors.fname && touched.fname ? errors.fname : ""
              }
            />
            <InputField
              $size="md"
              type="email"
              label="Email Address"
              id="email"
              placeholder="janedoe@gmail.com"
              value={email}
              handleChange={onChange}
              handleBlur={onBlur}
              endIcon={<img src={smsSvg} alt="" />}
              helperText={
                errors && errors.email && touched.email ? errors.email : ""
              }
            />
            <InputField
              $size="md"
              // type={showPassword ? "password" : "text"}
              label="Password"
              id="password"
              placeholder="enter password"
              value={password}
              handleChange={onChange}
              handleBlur={onBlur}
              endIcon={
                <img
                  // onClick={() => setShowPassword((prevState) => !prevState)}
                  src={eyeSvg}
                  alt=""
                />
              }
              helperText={
                errors && errors.password && touched.password
                  ? errors.password
                  : ""
              }
            />
            {/* <Spans color={error}>
            <p>Your Password should have:</p>
            <span>At least 8 characters</span>
            <span>At least one capital letter</span>
            <span>At least one number</span>
            <span>At least one special character</span>
          </Spans> */}
            <InputField
              $size="md"
              type="password"
              label="Confirm Password"
              id="confirmPassword"
              placeholder="confirm password"
              value={confirmPassword}
              handleChange={onChange}
              handleBlur={onBlur}
              error={
                errors &&
                touched.confirmPassword &&
                errors.confirmPassword?.length > 0
              }
              endIcon={<img src={eyeSvg} alt="" />}
              helperText={
                errors && errors.confirmPassword && touched.confirmPassword
                  ? errors.confirmPassword
                  : ""
              }
            />
            <Checkbox>
              <label>
                <input type="checkbox" /> I agree to the{" "}
                <a href="/terms"> Terms and Conditions</a>
              </label>
            </Checkbox>

            <Button $size="md" type="submit" onClick={handleSubmit}>
              Proceed to Signup
            </Button>

            <div>
              <span>
                Already have an account? <Link to="/login">Login</Link>
              </span>
            </div>
          </SignupForm>
        </FormContainer>
      </>
    );
  }
};

export default AdminSignup;

const FormContainer = styled(Container)`
  width: 100%;
`;

const SignupForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  div:last-of-type {
    span {
      font-size: 14px;
    }
  }
`;

const Checkbox = styled.div`
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
`;

const Spans = styled.div`
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  p {
    font-family: inherit;
    font-size: 12px;
  }

  span {
    font-size: 10px;
    font-family: inherit;
  }
`;
