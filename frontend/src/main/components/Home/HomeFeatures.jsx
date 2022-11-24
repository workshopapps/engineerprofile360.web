import React from "react";
import styled from "styled-components";

import { Title, Container } from "../../../styles/reusableElements.styled";
import setting from "./assets/icons/setting.svg";
import arrows from "./assets/icons/arrows.svg";
import checkbox from "./assets/icons/checkbox.svg";

const features = [
  {
    icon: setting,
    heading: "Custom assessment parameters",
    desc: "Test your engineers on the things that matter the most to your company’s growth.",
  },
  {
    icon: arrows,
    heading: "Automated evaluations and scoring",
    desc: "Get clear and intuitive evelauations for every member of your team in a fully automated system that does all the work.",
  },
  {
    icon: checkbox,
    heading: "All-inclusive assessments",
    desc: "Skript tests are simple to take and can be used across a variety of engineering teams.",
  },
];

const HomeFeatures = () => {
  return (
    <HomeFeaturesCon>
      <FeatureTitle as="h3" $weight="600" $size="48px" $color="#323130" $lHeight="50px">
        Product Core <br />
        Features
      </FeatureTitle>
      <Features>
        {features.map((feature, index) => (
          <Feature
            key={index}
            style={{
              alignSelf: index === 1 ? "flex-end" : null,
            }}
          >
            <FeatureImage>
              <img src={feature.icon} alt="" />
            </FeatureImage>
            <FeatureText>
              <Title
                as="h5"
                $weight="700"
                $size="24px"
                $color="#605E5C"
                $lHeight="50px"
              >
                {feature.heading}
              </Title>
              <p>{feature.desc}</p>
            </FeatureText>
          </Feature>
        ))}
      </Features>
    </HomeFeaturesCon>
  );
};

export default HomeFeatures;

const HomeFeaturesCon = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const FeatureTitle = styled(Title)`
  ${({ theme }) => theme.breakpoints.down("xs")} {
    font-size: 32px;
  }
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  width: 90%;
  margin: auto;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100%;
  }
`;
const Feature = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(3)};
  border: 1px solid #edebe9;
  border-radius: ${({ theme }) => theme.spacing(2.5)};
  max-width: 890px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
  }
`;
const FeatureText = styled.div`
  p {
    line-height: 32px;
    color: #605e5c;
    font-size: 16px;
  }
`;
const FeatureImage = styled.div``;
