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
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
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
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
const Bottom = styled.div`
  padding: 2rem 0;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    /* display: none; */
    padding: 1rem 0;
  }
`;

const BottomText = styled.h1`
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 144.02%;
  letter-spacing: 0.03em;
  color: #ffffff;
  padding: 0 5rem;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 10px;
    padding: 1rem 2rem;
  }
`;

const Box = styled.div`
  position: absolute;
  width: 71rem;
  height: 100%;
  top: -7rem;
  /* padding: 0 1rem; */
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    /* display: none; */
    width: 10rem;
    top: -3rem;
    left: 5.2rem;
    /* margin-left: -7rem; */
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
  width: 85rem;
  height: 75rem;
  padding: 0 7rem;
  top: -15rem;
  left: 10rem;
  background: #2667ff;
  border-radius: 4px;
  /* overflow-y: hidden; */

  ${({ theme }) => theme.breakpoints.down("sm")} {
    /* display: none; */
    width: 28rem;
    height: 54rem;
    top: -5rem;
    left: 1rem;
    padding: 0 1rem;
  }
`;

const FormBox = styled.div`
  position: relative;
  padding: 4rem 2rem;
  /* width: 80%; */
  height: 823px;
  background: #ffffff;
  border-radius: 4px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    /* display: none; */
    height: 50rem;
    width: 310px;
    padding: 4rem 0rem;
  }
`;

const FormHeading = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
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
  font-size: 18px;
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
  font-size: 12px;
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
