import React from "react";
import styled from "styled-components";

import checkmark from "../../../assets/icons/checkmark.svg";
import { Title } from "../../../styles/reusableElements.styled";

// import close from "./Assets/close.svg";

const Modal = ({ setIsModalOpen }) => {
  return (
    <ModalOuterContainer
      onClick={(e) => {
        setIsModalOpen(false);
      }}
    >
      <Centered>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ContentContainer>
            <img src={checkmark} alt="" />
            <Text>
              <Title
                as={"h2"}
                $size="42px"
                $color="#323130"
                $lHeight="50px"
                $weight="800"
              >
                Successfully Booked
              </Title>
              <p>Please check your email for confirmation</p>
            </Text>

            <button onClick={() => setIsModalOpen(false)} type="button">
              Close
            </button>
          </ContentContainer>
        </ModalContainer>
      </Centered>
    </ModalOuterContainer>
  );
};

export default Modal;

const ModalOuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(64, 64, 64, 0.3);
  position: fixed;
  overflow: hidden;
  z-index: 1000;
`;

const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContainer = styled.div`
  height: 580px;
  width: 450px;
  border: 1px solid #0e0e52;
  border-radius: 16px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* @media (max-width: 34.6em) {
    width: 38rem;
  } */
`;

const ContentContainer = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  gap: 45px;

  img {
    width: 120px;
    height: 120px;
  }

  button {
    padding: 10px 80px;
    background-color: #141ae9;
    border: none;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
  }
`;

const Text = styled.div`
  text-align: center;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #605e5c;
  }
`;
