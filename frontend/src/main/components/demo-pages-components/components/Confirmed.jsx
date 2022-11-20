import React from "react"
import resourceOne from "../assets/resourceOne.png"
import resourceTwo from "../assets/resourceTwo.png"
import resourceThree from "../assets/resourceThree.png"

import {
  ConfirmedContainer,
  ConfirmedHeading,
  ConfirmedHero,
  ConfirmedPara,
  Resources,
  ConfirmedText,
  ResourcesImg,
  Body,
} from "./Confirmed.styled"
import SupportPartners from "./SupportPartners"

function Confirmed() {
  return (
    <ConfirmedContainer>
      <ConfirmedHero>
        <ConfirmedHeading>Thank you for requesting a Demo!</ConfirmedHeading>
        <ConfirmedText>
          A representative of our team will be in touch shortly to schedule your
          customized demonstration
        </ConfirmedText>
        <ConfirmedPara>
          In the meantime,check out a few helpful resources below!
        </ConfirmedPara>
      </ConfirmedHero>
      <Resources>
        <ResourcesImg src={resourceOne} alt="resources" />
        <ResourcesImg src={resourceTwo} alt="resources" />
        <ResourcesImg src={resourceThree} alt="resources" />
      </Resources>
      <Body>
        <SupportPartners />
      </Body>
    </ConfirmedContainer>
  )
}

export default Confirmed
