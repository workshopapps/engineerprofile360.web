import React from "react";
import styled from "styled-components";

import InputField from "../../../components/InputField";

const Card = () => {
  return (
    <CardForm height="fit-content">
      <InputContainer>
        <label>Card Holder name</label>
        <div onChange={""}>
          <input id="name" type="text" />
        </div>
      </InputContainer>
      <InputContainer>
        <label htmlFor="card_no">Card Number</label>
        <div>
          <input id="card_no" type="number" />
        </div>
      </InputContainer>
      <DateCvvContainer>
        <Container>
          <label>Exp date</label>
          <div>
            <input type="text" placeholder="MM/YY" />
          </div>
        </Container>
        <Container>
          <label>CVV</label>
          <div>
            <input type="number" />
          </div>
        </Container>
      </DateCvvContainer>
    </CardForm>
  );
};

export default Card;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* height: 330px; */
  height: ${(props) => (props.height ? props.height : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
  }

  div {
    width: 80%;
    background: #ffffff;
    border: 1px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      height: 50px;
      width: 100%;
      outline: none;
      padding: 5px 10px;
    }

    @media (max-width: 495px) {
      width: 100%;

      input {
        width: 100%;
      }
    }
  }

  @media (max-width: 389px) {
    label {
      font-size: 14px;
    }
  }
`;

const DateCvvContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
  }

  div {
    width: 70%;
    background: #ffffff;
    border: 1px;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;

    input {
      width: 100%;
      outline: none;
      padding: 5px 10px;
    }

    @media (max-width: 495px) {
      width: 90%;

      input {
        width: 100%;
      }
    }
  }

  @media (max-width: 389px) {
    label {
      font-size: 14px;
    }
  }
`;
