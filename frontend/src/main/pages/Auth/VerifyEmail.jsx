import React from "react";
import styled from "styled-components";

import { Container, Button } from "../../../styles/reusableElements.styled";
import { AuthTitle } from "../../components";

import verifyEmailIcon from "../../../assets/icons/verify-email.svg";

const VerifyEmail = () => {
  return (
    <>
      <VerifyEmailContainer>
        <img src={verifyEmailIcon} alt=" " />
        <AuthTitle title="Verify your email address" text={<Message />} />
        <Button $size="md" type="submit">
          Login
        </Button>

        <span>
          {" "}
          Once your email is verified, you don’t need to repeat this again{" "}
        </span>
      </VerifyEmailContainer>
    </>
  );
};

const Message = () => {
  return (
    <>
      You’ve entered{" "}
      <Email style={{ color: "blue", display: "inline" }}>
        Janedoe@gmail.com
      </Email>{" "}
      as the email for your account. <br />
      Please verify this email by clicking on the button below
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
