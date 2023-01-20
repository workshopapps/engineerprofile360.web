import React from "react";
import { Container } from "../../../styles/reusableElements.styled";
import { Messages3 } from "iconsax-react";
import styled from "styled-components";

const FooterProps = (props) => {
  return (
    <>
      <InnerText>
        <HeadingText>{props.head}</HeadingText>
        <MiddleText>Our Friendly Team Is Here To Help</MiddleText>
        <LastText>{props.lastText}</LastText>
      </InnerText>
    </>
  );
};

export default FooterProps;

const InnerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;
const HeadingText = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  color: #222222;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-weight: 500;
    font-size: 13px;
    line-height: 10px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-weight: 500;
    font-size: 13px;
    line-height: 10px;
  }
`;
const MiddleText = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  text-transform: capitalize;
  color: #2667ff;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-weight: 300;
    font-size: 10px;
    line-height: 10px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-weight: 300;
    font-size: 10px;
    line-height: 10px;
  }
`;
const LastText = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 24px;
  color: #222222;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-weight: 300;
    font-size: 10px;
    line-height: 10px;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-weight: 300;
    font-size: 10px;
    line-height: 10px;
  }
`;
