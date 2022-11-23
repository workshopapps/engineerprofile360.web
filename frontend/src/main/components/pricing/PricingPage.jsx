import React from "react";
import GetToKnow from "./GetToKnow/GetToKnow";
import PriceCards from "./Pricecards/PriceCards";
import PricingHero from "./Hero/PricingHero";
import Accordion from "./Accordion/Accordion";
import { PricingWrapper } from "./PricingPage.style";

function PricingPage() {
  return (
    <PricingWrapper>
      <PricingHero />;
      <PriceCards />
      <GetToKnow />
      <Accordion />
    </PricingWrapper>
  );
}

export default PricingPage;
