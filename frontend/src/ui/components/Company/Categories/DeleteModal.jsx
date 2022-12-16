import React, { useEffect } from "react";
import styled from "styled-components";

import { Title } from "../../../../styles/reusableElements.styled";
import { Button, Loader } from "../../../../styles/reusableElements.styled";

const DeleteModal = ({
  setToggleDelete,
  handleDelete,
  isLoading,
  setIsLoading,
  text,
}) => {
  useEffect(() => {
    isLoading && setIsLoading(false);
  }, []);
  return (
    <OuterContainer>
      <InnerContainer>
        <Title
          as={"h3"}
          $color="#323130"
          $size="20px"
          $weight="600"
          $height="18px"
        >
          {text}
        </Title>
        <ButtonContainer>
          {!isLoading ? (
            <>
              <Button
                $variant="outlined"
                $color="#106ebe"
                onClick={() => setToggleDelete(false)}
              >
                No
              </Button>
              <Button onClick={handleDelete}>Yes</Button>
            </>
          ) : (
            <Loader />
          )}
        </ButtonContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default DeleteModal;

const OuterContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  top: 0;
  left: 50%;
  transform: translate(-50%, -20%);
  z-index: 2;
  overflow: hidden;

  background-color: rgba(255, 255, 255, 0.8);
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 18px;
  text-align: center;

  align-items: center;
  width: 50%;
  height: 250px;
  border-radius: 4px;
  background-color: #f8fbfd;
  border: 1px solid #c7e0f4;

  h3 {
    span {
      color: #797775;
      font-size: 18px;
    }
  }

  @media (max-width: 749px) {
    width: 80%;
  }

  @media (max-width: 749px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-top: 24px;
  justify-content: center;

  /* button {
    font-weight: 500;
  } */

  /* button:first-child {
    background-color: #2667ff;
  } */

  button:last-child {
    background-color: transparent;
    /* font-weight: 500; */
    color: #b71f1f;
    border: 1px solid #b71f1f;
  }

  button:last-child:hover {
    background-color: #b71f1f;
    color: #fff;
  }
`;
