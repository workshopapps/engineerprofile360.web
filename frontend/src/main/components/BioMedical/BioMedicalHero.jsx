import React from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  Title,
} from "../../../styles/reusableElements.styled";
import HeroImage from "./assets/biomedical-hero-bg.svg";

const BioMedicalHero = () => {
  return (
    <BioMedicalHeroContainer>
      <HeroText>
        <HeroTitle $color="#323120" $weight="900" $size="72px" $lHeight="76px">
          A better way to know and build your engineers.
        </HeroTitle>
        <p>
          Get started with Eval360 innovative <br /> performance solutions for
          engineering teams
        </p>
        <Button $size="lg">Request A Demo</Button>
      </HeroText>
    </BioMedicalHeroContainer>
  );
};

export default BioMedicalHero;

const BioMedicalHeroContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: -50;
  margin-top: -100px;
  min-height: 750px;
  background-image: url(${HeroImage});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: contain;
  padding-bottom: 0;

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-top: 0px;
    background-size: cover;
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    background-image: none;
  }
`;

const HeroText = styled.div`
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 219px;
  p {
    color: #605e5c;
    line-height: 34.57px;
    letter-spacing: 3%;
    margin-bottom: 48px;
  }
`;

const HeroTitle = styled(Title)`
  margin-top: 184px;
  margin-bottom: 48px;
  width: 662px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 52px;
    margin-top: 48px;
    width: auto;
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    margin-top: 28px;
    font-size: 48px;
  }
`;
