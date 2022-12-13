// import { Card } from "iconsax-react";
import React from "react";
import styled from "styled-components";
import { Container, Button } from "../../../styles/reusableElements.styled";
import InputField from "../../../../src/components/InputField";

const ContactBody = () => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};

export default ContactBody;

const SubmitBtn = styled.div`
  width: 100%;
  align: right;
  padding-left: 64rem;
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
`;

const LoginForm = styled.form`
  /* padding: 50px 25px; */
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.spacing(3)};
`;

const TextAreaField = styled.textarea`
  height: 30rem;
  border-radius: 10px;
  padding: 23px;
  font-size: 16px;
`;

const CardButton = styled.div`
  width: 100%;
  padding: 0 35rem;
`;
const Bottom = styled.div`
  padding: 5rem 0;
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
  top: -10rem;
  /* padding: 0 1rem; */
  display: flex;
  flex-direction: column;
`;

const CardBody = styled.div`
  position: relative;
  width: 100%;
  height: 85rem;
  padding: 0 10rem;
  top: -25rem;
  background: #2667ff;
  border-radius: 4px;
`;

const FormBox = styled.div`
  padding: 3rem 0;
  width: 80%;
  height: 823px;
  background: #ffffff;
  border-radius: 4px;
`;

const FormHeading = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  text-transform: capitalize;
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
`;
