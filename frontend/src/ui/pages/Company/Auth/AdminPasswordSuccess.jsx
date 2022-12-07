import React from "react";
import styled from "styled-components";

import { Container, Button } from "../../../../styles/reusableElements.styled";
import AuthTitle from "../../../components/Company/Auth/molecules/AuthTitle";

import unlockIcon from "../../../../assets/icons/unlock.svg";
import { Link } from "react-router-dom";

const AdminPasswordSuccess = () => {
  return (
    <>
      <SuccessContainer>
        <img src={unlockIcon} alt=" " />
        <AuthTitle
          title="Successful password reset!"
          text="You can now use your new password to log in to your account"
        />
        <Link to="/login">
          <Button $size="md" type="button">
            Login
          </Button>
        </Link>
      </SuccessContainer>
    </>
  );
};

export default AdminPasswordSuccess;

const SuccessContainer = styled(Container)`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-direction: column;
`;
