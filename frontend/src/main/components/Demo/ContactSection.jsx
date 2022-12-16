// import { validate } from "css-minimizer-webpack-plugin/node_modules/schema-utils/declarations/validate";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "../../../api/axios";
import { showErrorToast } from "../../../helpers/helper";

import {
  Container,
  OverlayLoader,
} from "../../../styles/reusableElements.styled";
import { Title } from "../../../styles/reusableElements.styled";
import Flex from "../../../ui/components/layout/Flex";
import { InputField } from "../../components";
import Modal from "./Modal";

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fetchError, setFetchError] = useState();
  const [errors, setErrors] = useState({
    name: [],
    companyName: [],
    email: [],
    phone: [],
  });

  const handleNameChange = (e) => {
    const name = e.target.value;
    if (!name) {
      setName(name);
      setErrors({
        ...errors,
        name: ["Name is required", ...errors.name],
      });
      return;
    }

    setName(name);
    setErrors({
      ...errors,
      name: [],
    });
  };
  const handleCompanyNameChange = (e) => {
    const companyName = e.target.value;
    if (!companyName) {
      setCompanyName("");
      setErrors({
        ...errors,
        companyName: ["Company Name is required", ...errors.companyName],
      });
      return;
    }

    setCompanyName(companyName);
    setErrors({
      ...errors,
      companyName: [],
    });
  };
  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!email) {
      setEmail("");
      setErrors({
        ...errors,
        email: ["Company Email is required", ...errors.email],
      });
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmail(email);
      setErrors({
        ...errors,
        email: ["Enter a valid email", ...errors.email],
      });
      return;
    }

    setEmail(email);
    setErrors({
      ...errors,
      email: [],
    });
  };
  const handlePhoneChange = (e) => {
    const phone = e.target.value.trim();
    if (!phone) {
      setPhone("");
      setErrors({
        ...errors,
        phone: ["Company Phone is required", ...errors.phone],
      });
      return;
    }

    if (phone.length !== 10) {
      setPhone(phone);
      setErrors({
        ...errors,
        phone: ["Phone number should be 10 digits", ...errors.phone],
      });
      return;
    }
    setPhone(phone);
    setErrors({
      ...errors,
      phone: [],
    });
  };

  const isDisabled = Object.keys(errors).some((key) => errors[key].length > 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([name, companyName, email, phone].some((val) => !val)) return;

    try {
      if (
        errors.name.length === 0 &&
        errors.companyName.length === 0 &&
        errors.email.length === 0 &&
        errors.phone.length === 0
      ) {
        setIsSubmitted(true);
        const response = await axios.post(
          "request-demo",
          JSON.stringify({
            username: name,
            companyName: companyName,
            companyEmail: email,
            companyPhone: phone,
          })
        );

        if (response.data.errorState === false) {
          setIsModalOpen(true);
        }

        setName("");
        setCompanyName("");
        setEmail("");
        setPhone("");
      }
    } catch (err) {
      if (!err?.response) {
        setFetchError("No Server Response");
      } else if (err.response?.data.errorState === true)
        showErrorToast(err.response.data.message);
    } finally {
      setIsSubmitted(false);
    }
  };

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
              name="name"
              id="name"
              placeholder="Enter Name"
              value={name}
              handleChange={handleNameChange}
              error={errors.name?.[0]}
              helperText={errors && errors.name?.[0] ? errors.name?.[0] : ""}
            />
            <InputField
              $size="md"
              type="text"
              label="Company Name"
              id="company_name"
              placeholder="Enter Your Company Name"
              value={companyName}
              handleChange={handleCompanyNameChange}
              error={errors.companyName?.[0]}
              helperText={errors.companyName?.[0]}
            />
            <InputField
              $size="md"
              type="email"
              label="Company Email"
              id="email"
              placeholder="Enter Your Company Email"
              value={email}
              handleChange={handleEmailChange}
              error={errors.email?.[0]}
              helperText={errors.email?.[0]}
            />
            <InputField
              $size="md"
              type="number"
              label="Company Phone"
              id="comapany_phone"
              placeholder="Enter Your Company Phone"
              value={phone}
              handleChange={handlePhoneChange}
              error={errors.phone?.[0]}
              helperText={errors.phone?.[0]}
            />
          </InputContainer>
          <button type="submit" disabled={isDisabled}>
            Submit
          </button>
        </Form>
      </ContactContainer>

      {isModalOpen ? <Modal setIsModalOpen={setIsModalOpen} /> : ""}
      {isSubmitted ? (
        <OverlayLoader>
          <div></div>
          <span>Sending info</span>
        </OverlayLoader>
      ) : (
        ""
      )}
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
