import React from "react";
import styled from "styled-components";
import { Container, Title } from "../../../styles/reusableElements.styled";
import Feature1 from "./assets/feature1.svg";
import Feature2 from "./assets/feature2.svg";
import Feature3 from "./assets/feature3.svg";
import Feature4 from "./assets/feature4.svg";

const FeatureLists = [
  {
    image: Feature1,
    name: "Use Eval360 to improve your engineers",
    description:
      "Eval360 takes the load of evaluating your engineers skills off your neck, and lets you know if your engineers have the skills to work on your next big engineering product.",
  },
  {
    image: Feature2,
    name: "Save time with Eval360",
    description:
      "We save you time evaluating your engineers, by giving you prepared questions to evaluate your engineers at different levels.",
  },
  {
    image: Feature3,
    name: "Spend your upskilling budget accurately",
    description:
      "Never waste a dollar on upskilling your engineers, only get materials appropriate for them.",
  },
  {
    image: Feature4,
    name: "Reduce engineering errors",
    description:
      "Avoid technical errors on new medical products by evaluating your engineers capacity to deliver the project even before they start working.",
  },
];

const BioMedicalFeatures = () => {
  return (
    <BioMedicalFeaturesContainer>
      <CardsContainer>
        {FeatureLists
          ? FeatureLists.map((item, key) => (
              <FeatureCard key={key}>
                <FeatureImage src={item.image} alt={item.name} />
                <Title
                  as="h4"
                  $weight="600"
                  $size="18px"
                  $color="#323130"
                  $lHeight="24px"
                >
                  {item.name}
                </Title>
                <p>{item.description}</p>
              </FeatureCard>
            ))
          : ""}
      </CardsContainer>
    </BioMedicalFeaturesContainer>
  );
};

export default BioMedicalFeatures;

const BioMedicalFeaturesContainer = styled(Container)`
  margin-top: -28px;
  background-color: #106ebe;
  padding-top: 161px;
  padding-bottom: 161px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-content: space-evenly;
  align-items: center;
  gap: 24px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  min-height: 459px;

  h4 {
    padding-left: 17px;
    padding-right: 17px;
    min-height: 72px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #605e5c;
    padding-left: 17px;
    padding-right: 17px;
    min-height: 120px;
  }
`;

const FeatureImage = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 29px;
`;
