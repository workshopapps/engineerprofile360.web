import React from "react";
import styled from "styled-components";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle } from "../../components";

import unlockIcon from "../../../assets/icons/unlock.svg";

const ResetPasswordSuccess = () => {
  return (
    <>
      <SuccessContainer>
        <img src={unlockIcon} alt=" " />
        <AuthTitle
          title="Successful password reset!"
          text="You can now use your new password to log in to your account"
        />
        <Button $size="md" type="submit">
          Login
        </Button>
      </SuccessContainer>
    </>
  );
};

export default ResetPasswordSuccess;

const SuccessContainer = styled(Container)`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-direction: column;
`;
