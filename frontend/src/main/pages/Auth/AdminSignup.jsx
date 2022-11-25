import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle, InputField } from "../../components";

import useInputValidation from "../../../hooks/useInputValidation";

import eyeSvg from "../../../assets/icons/eye.svg";
import smsSvg from "../../../assets/icons/smsenvelope.svg";
import editSvg from "../../../assets/icons/edit-2.svg";

const AdminSignup = () => {
  const { formData, changeInputValue, onBlur, errors, touched } =
    useInputValidation({
      fname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const onChange = (e) => {
    changeInputValue(e);
  };

  // console.log(errors);
  // console.log(touched);

  const { fname, email, password, confirmPassword } = formData;

  async function handleSubmit(){
    const res = await fetch("http://api.skript.hng.tech/api/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
      "full_name": "ben"
      })
    })

    const data =await res.json();

    console.log(data)
  }

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
          <InputField
            $size="md"
            type="password"
            label="Confirm Password"
            id="confirmPassword"
            placeholder="confirm password"
            value={confirmPassword}
            handleChange={onChange}
            handleBlur={onBlur}
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
