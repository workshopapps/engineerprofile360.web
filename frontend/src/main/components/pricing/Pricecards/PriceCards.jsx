import React from "react";
import { CardWrapper, Cards } from "./PriceCards.style";
import cardOne from "../assets/cardOne.png";
import cardTwo from "../assets/cardTwo.png";
import cardThree from "../assets/cardThree.png";

function PriceCards() {
  return (
    <>
      <CardWrapper>
        <Cards src={cardOne} alt="cardOne" />
        <Cards src={cardTwo} alt="cardTwo" />
        <Cards src={cardThree} alt="cardThree" />
      </CardWrapper>
    </>
  );
}

export default PriceCards;
