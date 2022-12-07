import React from "react";
import GetToKnow from "../components/Pricing/GetToKnow/GetToKnow";
import PriceCards from "../components/Pricing/Pricecards/PriceCards";
import PricingHero from "../components/Pricing/Hero/PricingHero";
import Accordion from "../components/Pricing/Accordion/Accordion";
import { PricingWrapper } from "../components/Pricing/PricingPage.style";

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
