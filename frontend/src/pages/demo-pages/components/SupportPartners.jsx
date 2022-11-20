import React from "react"
import deliotte from "../assets/deliotte.png"
import microsoft from "../assets/microsoft.png"
import slack from "../assets/slack.png"
import petroleum from "../assets/petroleum.png"
import google from "../assets/google.png"
import nbc from "../assets/nbc.png"
import interswitch from "../assets/interswitch.png"
import {
  PartnersContainer,
  PartnersImg,
  Wrapper,
} from "./SupportPartners.styled"
function SupportPartners() {
  return (
    <>
      <PartnersContainer>
        <Wrapper>
          <PartnersImg
            height={"71px"}
            width={"140px"}
            Height={"51px"}
            Width={"100px"}
            pl={"0px"}
            src={deliotte}
            alt="deliotte"
          />
          <PartnersImg
            height={"71px"}
            width={"140px"}
            Height={"51px"}
            Width={"100px"}
            src={microsoft}
            alt="microsoft"
          />
          <PartnersImg
            height={"71px"}
            width={"140px"}
            Height={"51px"}
            Width={"100px"}
            src={slack}
            alt="slackslack"
          />
        </Wrapper>

        <Wrapper>
          <PartnersImg
            height={"70px"}
            width={"70px"}
            Height={"40px"}
            Width={"40px"}
            src={petroleum}
            alt="petroleum"
          />
          <PartnersImg
            height={"71px"}
            width={"140px"}
            Height={"51px"}
            Width={"100px"}
            pr={"0px"}
            src={google}
            alt="google"
          />
          <PartnersImg height={"71px"} width={"140px"} src={nbc} alt="nbc" />
          <PartnersImg
            height={"71px"}
            width={"140px"}
            Height={"51px"}
            Width={"100px"}
            src={interswitch}
            alt="interswitch"
          />{" "}
        </Wrapper>
      </PartnersContainer>
    </>
  )
}

export default SupportPartners
