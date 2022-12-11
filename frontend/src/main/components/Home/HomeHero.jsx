import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Container,
  Title,
} from "../../../styles/reusableElements.styled";
import heroImg from "./assets/images/hero-img.svg";
import heroSubImg from "./assets/images/hero-subimg.svg";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <HomeHeroContainer>
      <HeroText>
        <HeroTitle $color="#323130" $weight="900" $lHeight="76px">
          Assess Your Engineering Teams’ Strength
        </HeroTitle>
        <p>
          Get Started With Skript <br /> Innovative Performance Solutions For
          Engineering Teams
        </p>
        <Button
          $size="lg"
          onClick={() => {
            navigate("/demo");
          }}
        >
          Request A Demo
        </Button>
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
  gap: ${({ theme }) => theme.spacing(6)};

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
  flex: 0 0 50%;

  p {
    color: #605e5c;
  }
`;

const HeroTitle = styled(Title)`
  font-size: 72px;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    font-size: 52px;
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    font-size: 48px;
  }
`;

const HeroImage = styled.div`
  flex: 0 0 40%;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    text-align: center;
    flex: initial;
    justify-content: center;
    align-items: center;
  }

  img:nth-of-type(1) {
    max-width: 100%;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      max-width: 100%;
    }
  }

  img:nth-of-type(2) {
    float: right;
  }
`;
