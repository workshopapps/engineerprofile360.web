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
  min-height: 100vh;
  /* min-height: 1000px; */
  height: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, -20%);
  z-index: 2;
  overflow: hidden;

  background-color: rgba(0, 0, 0, 0.7);

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
      width: 100%;
    }
  }
`;
