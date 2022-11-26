import React from "react";
import styled from "styled-components";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle } from "../../components";

import unlockIcon from "../../../assets/icons/unlock.svg";
import { Link } from "react-router-dom";

const EmailVerificationSuccess = () => {
  return (
    <>
      <SuccessContainer>
        <img src={unlockIcon} alt=" " />
        <AuthTitle
          title="Email Successfully Verified!"
          text="You can now log in to your account"
        />
        <Link to="/login">
          <Button $size="md" type="submit">
            Login
          </Button>
        </Link>
      </SuccessContainer>
    </>
  );
};

export default EmailVerificationSuccess;

const SuccessContainer = styled(Container)`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-direction: column;
`;
