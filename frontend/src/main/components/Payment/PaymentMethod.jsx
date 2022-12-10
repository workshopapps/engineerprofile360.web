import React, { useState } from "react";
import styled from "styled-components";

import Card from "./Card";

import { Button } from "../../../styles/reusableElements.styled";
import Dropdown from "./Dropdown";
import Options from "./Options";

const PaymentMethod = () => {
  const [optionValue, setOptionValue] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  const handleSelect = (e) => {
    setOptionValue(e.target.value);
  };
  return (
    <PaymentContainer>
      <SelectPayment>
        <p>Select Payment Method</p>
        <Selection>
          <PaymentTypeContainer
            gap={isOpened ? "30px" : ""}
            height={isOpened ? "auto" : "72px"}
            // isOpened={isOpened}
          >
            <PaymentType>
              <CheckBox
                bg={isOpened ? true : false}
                onClick={() => setIsOpened((prevState) => !prevState)}
              />
              Credit or Debit card
            </PaymentType>
            {isOpened ? <Card /> : null}
          </PaymentTypeContainer>
          <PaymentTypeContainer>
            <PaymentType>
              <CheckBox></CheckBox>
              Paypal
            </PaymentType>
          </PaymentTypeContainer>
          <PaymentTypeContainer>
            <PaymentType>
              <CheckBox></CheckBox>
              Bank Transfer
            </PaymentType>
          </PaymentTypeContainer>
        </Selection>
        <Button $size="">Review order</Button>
      </SelectPayment>
      <Summary>
        <p>Summary</p>
        <Dropdown onChange={handleSelect}>
          <Options selected value="Basic plan" />
          <Options value="Option 2" />
          <Options value="Option 3" />
        </Dropdown>
        <Products>
          <Product>
            <p>$19 USD/month</p>
            <p>$19 USD</p>
          </Product>
          <Product>
            <p>Sales tax</p>
            <p>$0 USD</p>
          </Product>
        </Products>
        <Total>
          <p>Total</p>
          <p>$19 USD</p>
        </Total>
      </Summary>
    </PaymentContainer>
  );
};

export default PaymentMethod;

const PaymentContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 80px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;

  @media (max-width: 955px) {
    flex-direction: column-reverse;
    gap: 74px;
    padding: 18px 40px;
  }
  @media (max-width: 955px) {
    padding: 18px 20px;
  }
`;

const SelectPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  width: 50%;

  p {
    font-weight: 100;
    font-size: 30px;
    line-height: 40px;
    color: #000000;
  }

  @media (max-width: 955px) {
    width: 100%;
    gap: 42px;
  }

  @media (max-width: 553px) {
    p {
      font-size: 20px;
    }

    gap: 28px;
  }
`;

const Selection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  transition: display 0.5s ease-in-out;
`;

const PaymentTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 24px 16px;
  cursor: pointer;
  gap: ${(props) => (props.gap ? props.gap : "0px")};
  height: ${(props) => (props.height ? props.height : "auto")};

  @media (max-width: 389px) {
    padding: 12px 8px;
    height: ${(props) => (props.isOpened ? "auto" : "50px")};
    font-size: 14px;
  }
`;

const PaymentType = styled.div`
  display: flex;
  gap: 32px;
  transition: all 0.3s ease-in-out;
`;

const CheckBox = styled.div`
  height: 24px;
  width: 24px;
  background: #d9d9d9;
  background: ${(props) => (props.bg === true ? "#328CC1" : "#D9D9D9")};
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
`;

const Summary = styled.div`
  padding: 24px 20px;
  width: 30%;
  height: 340px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  p {
    font-weight: 400;
    font-size: 26px;
    line-height: 36px;
    color: #000000;
  }

  @media (max-width: 955px) {
    width: 100%;
  }

  @media (max-width: 553px) {
    p {
      font-size: 20px;
    }
  }
`;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  position: relative;

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }

  &::after {
    content: "";
    width: 95%;
    position: absolute;
    border: 0.5px solid #000000;
    transform: rotate(180deg);
    bottom: -15px;
  }

  @media (max-width: 495px) {
    p {
      font-size: 14px;
    }
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  p {
    font-weight: 100;
    font-size: 18px;
    line-height: 28px;

    color: #000000;
  }
`;
