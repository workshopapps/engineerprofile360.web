import React from "react";
import styled from "styled-components";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle, InputField } from "../../components";

import securityIcon from "../../../assets/icons/security-safe.svg";
import smsSvg from "../../../assets/icons/smsenvelope.svg";

const ResetPassword = () => {
  return (
    <>
      <FormContainer>
        <img src={securityIcon} alt=" " />
        <AuthTitle
          title="Reset your password"
          text="Enter the email associated with your account"
        />
        <ResetPasswordForm>
          <InputField
            $size="md"
            type="text"
            label="Full Name"
            id="fname"
            placeholder="Jane Doe"
            endIcon={<img src={smsSvg} alt="" />}
          />

          <Button $size="md" type="submit">
            Reset my password
          </Button>
        </ResetPasswordForm>
      </FormContainer>
    </>
  );
};

export default ResetPassword;

const FormContainer = styled(Container)`
  width: 100%;
  text-align: center;
`;

const ResetPasswordForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  text-align: left;
`;
