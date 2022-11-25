import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle, InputField } from "../../components";

import useInputValidation from "../../../hooks/useInputValidation";

import eyeSvg from "../../../assets/icons/eye.svg";
import smsSvg from "../../../assets/icons/smsenvelope.svg";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(true);
  const { formData, changeInputValue, onBlur, errors, touched } =
    useInputValidation({
      email: "",
      password: "",
    });

  const { email, password } = formData;

  return (
    <>
      <FormContainer>
        <AuthTitle title="Sign up" text="Let's get started" />
        <LoginForm>
          <InputField
            $size="md"
            type="email"
            label="Email Address"
            id="email"
            placeholder="janedoe@gmail.com"
            value={email}
            handleChange={(e) => changeInputValue(e)}
            handleBlur={onBlur}
            error={errors && touched.email && errors.email?.length > 0}
            endIcon={<img src={smsSvg} alt="" />}
            helperText={
              errors && errors.email && touched.email ? errors.email : ""
            }
          />
          <InputField
            $size="md"
            type={showPassword ? "password" : "text"}
            label="Password"
            id="password"
            placeholder="enter password"
            value={password}
            handleChange={(e) => changeInputValue(e)}
            error={errors && touched.password && errors.password?.length > 0}
            handleBlur={onBlur}
            endIcon={
              <img
                onClick={() => setShowPassword((prevState) => !prevState)}
                src={eyeSvg}
                alt=""
                style={{ cursor: "pointer" }}
              />
            }
            helperText={
              errors && errors.password && touched.password
                ? errors.password
                : ""
            }
          />
          <Checkbox>
            <label>
              <input type="checkbox" /> Remember me
            </label>

            <Link to="/">Forgot password?</Link>
          </Checkbox>

          <Button $size="md" type="submit">
            Sign In
          </Button>

          <div>
            <span>
              Don't have an account? <Link to="/register">Sign up</Link>
            </span>
          </div>
        </LoginForm>
      </FormContainer>
    </>
  );
};

export default AdminLogin;

const FormContainer = styled(Container)`
  width: 100%;
`;

const LoginForm = styled.form`
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
