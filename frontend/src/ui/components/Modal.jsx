import React from "react";
import styled from "styled-components";

const Modal = ({ setToggleCreateCat, Form }) => {
  return (
    <>
      <InputWrapper onClick={(e) => setToggleCreateCat(false)}>
        {Form}
      </InputWrapper>
    </>
  );
};

export default Modal;

const InputWrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 75vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  background-color: rgba(255, 255, 255, 0.8);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    width: 60%;
    height: 338px;
    border-radius: 4px;
    background-color: #f8fbfd;
    border: 1px solid #c7e0f4;

    @media (max-width: 749px) {
      width: 80%;
    }

    @media (max-width: 749px) {
      width: 100%;
    }
  }
`;
