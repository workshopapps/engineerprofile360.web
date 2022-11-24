import React from "react";
import styled from "styled-components";

import {
  Button,
  Container,
  Title,
} from "../../../styles/reusableElements.styled";
import heroImg from "./assets/images/hero-img.svg";
import heroSubImg from "./assets/images/hero-subimg.svg";

const HomeHero = () => {
  return (
    <HomeHeroContainer>
      <HeroText>
        <HeroTitle $color="#323130" $weight="900" $size="72px" $lHeight="76px">
          Assess Your Engineering Teams’ Strength
        </HeroTitle>
        <p>
          Get Started With Skript <br /> Innovative Performance Solutions For
          Engineering Teams
        </p>
        <Button $size="lg">Request A Demo</Button>
      </HeroText>
      <HeroImage>
        <img src={heroImg} alt="" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <img src={heroSubImg} alt="" />
      </HeroImage>
    </HomeHeroContainer>
  );
};

export default HomeHero;

const HomeHeroContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 750px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(6)};
  }
`;
const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  justify-content: space-between;
  // flex: 0 0 50%;

  p {
    color: #605e5c;
  }
`;

const HeroTitle = styled(Title)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 52px;
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    font-size: 48px;
  }
`;

const HeroImage = styled.div`
  flex: 0 0 40%;
  text-align: right;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    text-align: center;
  }

  img:nth-of-type(1) {
    max-width: 90%;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      max-width: 90%;
    }
  }
`;
