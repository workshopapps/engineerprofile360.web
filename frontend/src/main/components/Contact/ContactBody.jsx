// import { Card } from "iconsax-react";
import React from "react";
import styled from "styled-components";
import { Container, Button } from "../../../styles/reusableElements.styled";
import InputField from "../../../../src/components/InputField";

const ContactBody = () => {
  return (
    <>
      <CardBody>
        <Box>
          <FormBox>
            <FormHeading>Send Us A Message</FormHeading>
            <FormText>You can reach us at anytime via</FormText>
            <FormEmail>Hi@Eval360hq.com</FormEmail>

            <Form>
              <LoginForm>
                <InputField
                  $size="md"
                  type="text"
                  label="Full Name"
                  id="email"
                  placeholder="Sam John"
                  // value={email}
                />
                <InputField
                  $size="md"
                  type="email"
                  label="Email Address"
                  id="email"
                  placeholder="janedoe@gmail.com"
                  // value={email}
                />
              </LoginForm>
              <TextArea>
                <Label>How Can we help?</Label>
                <TextAreaField
                  $size="md"
                  type="email"
                  label="Email Address"
                  id="email"
                  placeholder=""
                  // value={email}
                />
              </TextArea>
              <SubmitBtn>
                <Button $size="md">Send Message</Button>
              </SubmitBtn>
            </Form>
          </FormBox>
          <Bottom>
            <BottomText>
              We also gave customer care representatives who are ready to help
              you in any capacity. Click on the button below to get in touch
              with a representative
            </BottomText>
          </Bottom>
          <CardButton>
            <Button $size="md" $background="White">
              Get In Touch
            </Button>
          </CardButton>
        </Box>
      </CardBody>
    </>
  );
};

export default ContactBody;

const SubmitBtn = styled.div`
  width: 100%;
  align: right;
  padding-left: 64rem;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0 10px;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 0 1px;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Label = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #222222;
`;

const Form = styled.div`
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    gap: 1rem;
  }
`;

const LoginForm = styled.form`
  /* padding: 50px 25px; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
  }
`;

const TextAreaField = styled.textarea`
  height: 30rem;
  border-radius: 10px;
  padding: 23px;
  font-size: 16px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: 10rem;
  }
`;

const CardButton = styled.div`
  width: 100%;
  padding: 0 35rem;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
const Bottom = styled.div`
  padding: 5rem 0;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
`;

const BottomText = styled.h1`
  text-align: center;
  width: 80%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 144.02%;
  letter-spacing: 0.03em;
  color: #ffffff;
`;

const Box = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -10rem;
  /* padding: 0 1rem; */
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    /* display: none;  */
    top: -3rem;
    width: 100%;
    margin-left: -7rem;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    /* display: none;  */
    top: -3rem;
    width: 100%;
    margin-left: -4rem;
  }
`;

const CardBody = styled.div`
  position: relative;
  width: 100%;
  height: 85rem;
  padding: 0 10rem;
  top: -15rem;
  background: #2667ff;
  border-radius: 4px;
  /* overflow-y: hidden; */

  ${({ theme }) => theme.breakpoints.down("sm")} {
    /* display: none; */
    height: 50rem;
    top: -5rem;
  }
`;

const FormBox = styled.div`
  position: relative;
  padding: 3rem 0;
  width: 80%;
  height: 823px;
  background: #ffffff;
  border-radius: 4px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    /* display: none; */
    height: 47rem;
    width: 90%;
    margin: 0 -4.5rem;
  }
`;

const FormHeading = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  text-transform: capitalize;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-weight: 300;
    font-size: 16px;
    line-height: 15px;
  }
`;
const FormText = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 144.02%;
  text-align: center;
  letter-spacing: 0.03em;
  color: #222222;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
  }
`;
const FormEmail = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 144.02%;
  text-align: center;
  letter-spacing: 0.03em;
  color: #2667ff;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-weight: 300;
    font-size: 10px;
    line-height: 15px;
  }
`;
