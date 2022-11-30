import React, { useState } from "react";
import styled from "styled-components";

import { Container } from "../../../styles/reusableElements.styled";
import { Title } from "../../../styles/reusableElements.styled";
import { InputField } from "../../components";
import Modal from "./Modal";

const ContactSection = () => {
  const [formData, setFormData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    console.log("is this working");
    e.preventDefault();
    setIsModalOpen(true);
  };

  const { name, cname, cemail, phonenumber } = formData;

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
        <Form onSubmit={handleSubmit}>
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
            {/* <InputField
              $size="md"
              type="tel"
              label="Company Phone"
              id="comapany_phone"
              placeholder="Enter Your Company Email"
              value={phone}
              handleChange={(e) => changeInputValue(e)} 
              //   handleBlur={onBlur}
              //   error={errors && touched.email && errors.email?.length > 0}
              //   endIcon={<img src={smsSvg} alt="" />}
              //   helperText={
                  //     errors && errors.email && touched.email ? errors.email : ""
              //   }
            // />
            */}
          </InputContainer>
          <button type="submit">Submit</button>
        </Form>
      </ContactContainer>
      {isModalOpen ? <Modal setIsModalOpen={setIsModalOpen} /> : ""}
    </Container>
  );
};

export default ContactSection;

const ContactContainer = styled.div`
  width: 100%;
  margin: 70px auto;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 898px) {
    flex-direction: column;
    gap: 30px;
    margin-top: 40px;
  }

  @media (max-width: 415px) {
    margin-top: 0px;
  }
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

  @media (max-width: 1325px) {
    width: 58%;
  }

  @media (max-width: 1029px) {
    p {
      font-size: 24px;
    }

    ul {
      font-size: 12px;
    }
  }

  @media (max-width: 898px) {
    width: 100%;

    p {
      font-size: 28px;
    }

    ul {
      gap: 4px;
    }
  }
  @media (max-width: 504px) {
    p {
      font-size: 24px;
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
  height: 860px;

  background: #ffffff;

  border: 1px solid #0e0e52;
  border-radius: 16px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 80px;
    background: #141ae9;
    border-radius: 4px;
    font-weight: 700;
    font-size: 24px;
    line-height: 20px;
    color: #fff;
    margin-bottom: 35px;
    cursor: pointer;

    @media (max-width: 682px) {
      height: 50px;
    }
  }

  @media (max-width: 898px) {
    margin-top: 0;
    width: 100%;
  }

  @media (max-width: 750px) {
    height: 800px;
  }

  @media (max-width: 396px) {
    height: 750px;
  }
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

  @media (max-width: 898px) {
    margin-top: 30px;
  }

  @media (max-width: 541px) {
    margin-top: 15px;

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 396px) {
    h2 {
      font-size: 22px;
    }

    p {
      font-size: 12px;
    }
  }
`;

const InputContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 396px) {
    width: 95%;
  }
`;
