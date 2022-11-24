import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle, InputField } from "../../components";

import eyeSvg from "../../../assets/icons/eye.svg";
import smsSvg from "../../../assets/icons/smsenvelope.svg";

const AdminLogin = () => {
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
            endIcon={<img src={smsSvg} alt="" />}
          />
          <InputField
            $size="md"
            type="password"
            label="Password"
            id="password"
            placeholder="enter password"
            endIcon={<img src={eyeSvg} alt="" />}
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
