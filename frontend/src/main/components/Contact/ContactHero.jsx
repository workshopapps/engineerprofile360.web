import React from "react";
import styled from "styled-components";
import HeroImage from "./assets/hero.png";
import { Container } from "../../../styles/reusableElements.styled";

const ContactHero = () => {
  // const heroImg = new URL("./assets/hero.png", import.meta.url);
  return (
    <HeroSection style={{ backgroundImage: `url(${HeroImage})` }}>
      <Container>
        <HeroText>
          <Get>Get In Touch</Get>
          <GetExplain>
            Let us help you highlight your best engineers and bring you one syep
            closer to your goal!
          </GetExplain>
        </HeroText>
      </Container>
    </HeroSection>
  );
};

export default ContactHero;

const HeroSection = styled.div`
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    height: 30vh;
    width: 100vw;
  }
`;
const HeroText = styled.div`
  /* position: relative; */
  width: 100%;
  text-align: center;
  padding: 1rem 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 0 5rem;
    gap: 0rem;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 2rem 2rem;
  }

  /* ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  } */
`;
const Get = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 50px;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-weight: Bolder;
    font-size: 20px;
    line-height: 20px;
  }
`;
const GetExplain = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 144.02%;
  letter-spacing: 0.03em;
  color: #ffffff;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
  }
`;
