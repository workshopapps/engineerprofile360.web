import React from "react";
import GetToKnow from "../components/pricing/GetToKnow/GetToKnow";
import PriceCards from "../components/pricing/Pricecards/PriceCards";
import PricingHero from "../components/pricing/Hero/PricingHero";
import Accordion from "../components/pricing/Accordion/Accordion";
import { PricingWrapper } from "../components/pricing/PricingPage.style";

function PricingPage() {
  return (
    <PricingWrapper>
      <PricingHero />
      <PriceCards />
      <GetToKnow />
      <Accordion />
    </PricingWrapper>
  );
}

export default PricingPage;
