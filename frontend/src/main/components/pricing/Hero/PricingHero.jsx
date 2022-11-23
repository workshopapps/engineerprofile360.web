import React from "react";

import {
  HeroButtonClear,
  HeroButtonDiv,
  HeroButtonShade,
  HeroHeader,
  HeroText,
  Wrapper,
} from "./PricingHero.styled";

function PricingHero() {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
    </>
  );
}

export default PricingHero;
