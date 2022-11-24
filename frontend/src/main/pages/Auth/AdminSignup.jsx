import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle, InputField } from "../../components";

import eyeSvg from "../../../assets/icons/eye.svg";
import smsSvg from "../../../assets/icons/smsenvelope.svg";
import editSvg from "../../../assets/icons/edit-2.svg";

const AdminSignup = () => {
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
            endIcon={<img src={editSvg} alt="" />}
          />
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
          <InputField
            $size="md"
            type="password"
            label="Confirm Password"
            id="confirm-password"
            placeholder="confirm password"
            endIcon={<img src={eyeSvg} alt="" />}
          />
          <Checkbox>
            <label>
              <input type="checkbox" /> I agree to the{" "}
              <a href="/terms"> Terms and Conditions</a>
            </label>
          </Checkbox>

          <Button $size="md" type="submit">
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
