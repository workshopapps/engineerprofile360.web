import React from "react";
import { Container } from "../../../styles/reusableElements.styled";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

function PricingHero() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <HeroHeader>
          Find the right assessment plan that works for you
        </HeroHeader>
        <HeroText>
          Eval360 plans start as low as $19 per month for basic plan, $29 per
          month for business plan and $49
        </HeroText>
        <HeroText>per month for enterprise plan.</HeroText>

        <HeroButtonDiv>
          <HeroButtonShade
            onClick={() => {
              navigate("/payment");
            }}
          >
            Monthly billing
          </HeroButtonShade>
          <HeroButtonClear
            onClick={() => {
              navigate("/payment");
            }}
          >
            Annual billing
          </HeroButtonClear>
        </HeroButtonDiv>
      </Container>
    </>
  );
}

export default PricingHero;

export const HeroHeader = styled.h2`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  line-height: 52px;
  margin-top: -5rem;
`;
export const HeroText = styled.p`
  font-size: 12px;
  margin-top: 5px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;

export const HeroButtonDiv = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 30px;
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
