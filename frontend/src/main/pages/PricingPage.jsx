import React from "react";
import GetToKnow from "../components/Pricing/GetToKnow";
import PriceCards from "../components/Pricing/PriceCards";
import PricingHero from "../components/Pricing/PricingHero";
import Accordion from "../components/Pricing/Accordion/Accordion";
import { Container } from "../../styles/reusableElements.styled";

function PricingPage() {
  return (
    <Container>
      <PricingHero />
      {/* <PricingWrapper> */}
      <PriceCards />
      <GetToKnow />
      <Accordion />
    </Container>
  );
}

export default PricingPage;
