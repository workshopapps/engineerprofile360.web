import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container, Button } from "../../../../styles/reusableElements.styled";
import AuthTitle from "../../../components/molecules/Auth/AuthTitle";

import verifyEmailIcon from "../../../../assets/icons/verify-email.svg";
import { useLocation } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <>
      <VerifyEmailContainer>
        <img src={verifyEmailIcon} alt=" " />
        <AuthTitle title="Verify your email address" text={<Message />} />
        <Link to="/login">
          <Button $size="md" type="button">
            Login
          </Button>
        </Link>

        <span>
          {" "}
          Once your email is verified, you don’t need to repeat this again{" "}
        </span>
      </VerifyEmailContainer>
    </>
  );
};

const Message = () => {
  const location = useLocation();
  return (
    <>
      You’ve entered{" "}
      <Email style={{ color: "blue", display: "inline" }}>
        {location.state?.email}
      </Email>{" "}
      as the email for your account. <br />
      Please verify this email by visiting the link sent to your email address.{" "}
      <br />
      If you have done so, click the button below to login.
    </>
  );
};

export default VerifyEmail;

const VerifyEmailContainer = styled(Container)`
  min-width: 960px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down("md")} {
    min-width: 100%;
  }
`;

const Email = styled.span`
  color: #323130;
  font-size: 20px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 20px;
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    font-size: 18px;
  }
`;
