import React from "react";
import styled from "styled-components";

import { Container } from "../../../styles/reusableElements.styled";

const Tracker = () => {
  return (
    <Container>
      <TrackerContainer>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
      </TrackerContainer>
    </Container>
  );
};

export default Tracker;

const TrackerContainer = styled.div`
  display: flex;
  gap: 511px;
  position: relative;
  align-items: center;
  justify-content: center;

  @media (max-width: 1245px) {
    gap: 399px;
  }

  @media (max-width: 1014px) {
    gap: 299px;
  }

  @media (max-width: 749px) {
    gap: 199px;
  }

  @media (max-width: 553px) {
    gap: 149px;
  }

  @media (max-width: 389px) {
    gap: 99px;
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  /* position: relative; */
  border: 1px solid #696969;
  border-radius: 40px;

  &::before {
    content: "Create an account/Login";
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    position: absolute;
    top: 25px;
    width: 200px;
  }

  &::after {
    content: "";
    width: 512.39px;
    height: 0px;
    border: 0.5px solid #000000;
    position: absolute;
    transform: rotate(180deg);
    left: 18px;
    top: 8px;
  }

  &:nth-child(2) {
    ::before {
      content: "Make payment";
      left: -28px;
      width: 100px;
    }
  }

  &:nth-child(3) {
    ::after {
      content: "";
      width: 0;
    }
  }

  &:nth-child(3) {
    ::before {
      content: "Review order";
      left: -58px;
      width: 100px;
    }
  }

  @media (max-width: 1245px) {
    &::after {
      content: "";
      width: 400.39px;
    }
  }

  @media (max-width: 1014px) {
    &::after {
      content: "";
      width: 300.39px;
    }
  }
  @media (max-width: 749px) {
    &::after {
      content: "";
      width: 200.39px;
    }
  }

  @media (max-width: 553px) {
    &::after {
      content: "";
      width: 150px;
    }

    ::before {
      content: "Create an account/Login";
      font-size: 12px;
      left: -50px;
    }
  }

  @media (max-width: 495px) {
    ::before {
      content: "Create an account/Login";
      font-size: 10px;
      left: -10px;
    }
  }

  @media (max-width: 389px) {
    &::after {
      content: "";
      width: 100px;
    }

    ::before {
      content: "Create an account/Login";
      font-size: 10px;
      left: -30px;
      width: 120px;
    }

    &:nth-child(2) {
      ::before {
        content: "Make payment";
        left: -15px;
        width: 70px;
      }
    }
    &:nth-child(3) {
      ::before {
        content: "Review order";
        left: -39px;
        width: 65px;
      }
    }
  }
`;
