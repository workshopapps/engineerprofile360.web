import React from "react";
import styled from "styled-components";
import { Button, Title } from "../../../styles/reusableElements.styled";

const EmailNewsletter = () => {
  return (
    <EmailNewsLetterContainer>
      <Title
        as="h3"
        $size="32px"
        $lHeight="40px"
        $weigth="600"
        $color="#2667FF"
      >
        Subscribe to our newsletter
      </Title>
      <Form>
        <InputField placeholder="Enter your email" />
        <Button>Subscribe</Button>
      </Form>
      <p>
        By clicking Sign Up, you are confirming that you agree with our terms
        and conditions
      </p>
    </EmailNewsLetterContainer>
  );
};

export default EmailNewsletter;

const EmailNewsLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 56px;

  p {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Form = styled.form`
  margin-top: 33.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-bottom: 25.5px;

  button {
    min-height: 51px;
    padding: 12px 24px;
  }
`;

const InputField = styled.input`
  min-height: 48px;
  background: #f2f3f7;
  border: 1px solid #8a8886;
  border-radius: 4px;
  width: 100%;
  max-width: 345px;
  padding: 12px;
`;
