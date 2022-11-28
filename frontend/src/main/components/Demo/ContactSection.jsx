import React from "react";
import styled from "styled-components";

import { Container } from "../../../styles/reusableElements.styled";
import { Title } from "../../../styles/reusableElements.styled";
import { InputField } from "../../components";

const ContactSection = () => {
  return (
    <Container>
      <ContactContainer>
        <DemoList>
          <p>With our demo, you can do the following:</p>
          <ul>
            <li>Customize Assessments to fit your request</li>
            <li>Automatically track engineers performance</li>
            <li>Uncover blindspots easily and gives recommendations</li>
            <li>Increases company yield</li>
          </ul>
        </DemoList>
        <Form>
          <Heading>
            <Title
              as={"h2"}
              $size="28px"
              $color="#323130"
              $lHeight="36px"
              $weight="600"
            >
              Book Your Demo Here
            </Title>
            <p>Fill out the form below and we will contact you shortly</p>
          </Heading>
          <InputContainer>
            <InputField
              $size="md"
              type="text"
              label="Name"
              id="name"
              placeholder="Enter Name"
              // value={email}
              //   handleChange={(e) => changeInputValue(e)}
              //   handleBlur={onBlur}
              //   error={errors && touched.email && errors.email?.length > 0}
              //   endIcon={<img src={smsSvg} alt="" />}
              //   helperText={
              //     errors && errors.email && touched.email ? errors.email : ""
              //   }
            />
            <InputField
              $size="md"
              type="text"
              label="Company Name"
              id="company_name"
              placeholder="Enter Your Company Name"
              // value={email}
              //   handleChange={(e) => changeInputValue(e)}
              //   handleBlur={onBlur}
              //   error={errors && touched.email && errors.email?.length > 0}
              //   endIcon={<img src={smsSvg} alt="" />}
              //   helperText={
              //     errors && errors.email && touched.email ? errors.email : ""
              //   }
            />
            <InputField
              $size="md"
              type="email"
              label="Company Email"
              id="email"
              placeholder="Enter Your Company Email"
              // value={email}
              //   handleChange={(e) => changeInputValue(e)}
              //   handleBlur={onBlur}
              //   error={errors && touched.email && errors.email?.length > 0}
              //   endIcon={<img src={smsSvg} alt="" />}
              //   helperText={
              //     errors && errors.email && touched.email ? errors.email : ""
              //   }
            />
            <InputField
              $size="md"
              type="tel"
              label="Company Phone"
              id="comapany_phone"
              placeholder="Enter Your Company Phone"
              // value={email}
              //   handleChange={(e) => changeInputValue(e)}
              //   handleBlur={onBlur}
              //   error={errors && touched.email && errors.email?.length > 0}
              //   endIcon={<img src={smsSvg} alt="" />}
              //   helperText={
              //     errors && errors.email && touched.email ? errors.email : ""
              //   }
            />
            <InputField
              $size="md"
              type="tel"
              label="Company Phone"
              id="comapany_phone"
              placeholder="Enter Your Company Email"
              // value={email}
              //   handleChange={(e) => changeInputValue(e)}
              //   handleBlur={onBlur}
              //   error={errors && touched.email && errors.email?.length > 0}
              //   endIcon={<img src={smsSvg} alt="" />}
              //   helperText={
              //     errors && errors.email && touched.email ? errors.email : ""
              //   }
            />
          </InputContainer>
        </Form>
      </ContactContainer>
    </Container>
  );
};

export default ContactSection;

const ContactContainer = styled.div`
  width: 100%;
  margin: 70px auto;
  display: flex;
  justify-content: space-between;
`;

const DemoList = styled.div`
  width: 40%;

  p {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    color: #323130;
    width: 80%;
  }

  ul {
    margin-top: 30px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #201f1e;

    li {
      list-style: inside;
    }
  }
`;

const Form = styled.form`
  width: 55%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 24px;
  margin-top: -300px;
  width: 752px;
  height: 925px;

  background: #ffffff;

  border: 1px solid #0e0e52;
  border-radius: 16px;
`;

const Heading = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #605e5c;
  }
`;

const InputContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
