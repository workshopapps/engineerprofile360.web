import React from "react";
import { Container } from "../../../styles/reusableElements.styled";

import styled from "styled-components";

function PricingHero() {
  return (
    <>
      <Container>
        <HeroHeader>
          Find the right assessment plan that works for you
        </HeroHeader>
        <HeroText>
          Skript plans start as low as $19 per month for basic plan, $29 per
          month for business plan and $49
        </HeroText>
        <HeroText>per month for enterprise plan.</HeroText>
        <HeroButtonDiv>
          <HeroButtonShade>Monthly billing</HeroButtonShade>
          <HeroButtonClear>Annual billing</HeroButtonClear>
        </HeroButtonDiv>
      </Container>
    </>
  );
}

export default PricingHero;

export const HeroHeader = styled.h2`
  font-size: 40px;
  text-align: center;
  font-weight: 600;
  line-height: 52px;
`;
export const HeroText = styled.p`
  font-size: 18px;
  margin-top: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;
export const HeroButtonDiv = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding-bottom: 50px;
`;
export const HeroButtonShade = styled.button`
  font-size: 18px;
  width: 177px;
  height: 48px;
  background: #2667ff;
  border-radius: 4px;
  border: 0px;
  margin-right: 6px;
  color: #fff;

  font-weight: 600;
  line-height: 24px;
  transition: all 0.3s ease;

  &:hover {
    color: #2667ff;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #2667ff;
    cursor: pointer;
  }
`;
export const HeroButtonClear = styled.button`
  font-size: 18px;
  width: 177px;
  height: 48px;
  color: #2667ff;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #2667ff;
  margin-left: 6px;

  font-weight: 600;
  line-height: 24px;

  transition: all 0.3s ease;

  &:hover {
    background: #2667ff;
    border-radius: 4px;
    border: 0px;

    color: #fff;
    cursor: pointer;
  }
`;
