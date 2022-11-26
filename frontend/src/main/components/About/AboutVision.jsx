import React from "react";
import styled from "styled-components";

import { Container, Title } from "../../../styles/reusableElements.styled";
import visionBg from "./assets/images/vision-section.svg";

const AboutVision = () => {
  return (
    <AboutVisionSection>
      <AboutVisionContainer>
        <div>
          <Title as="h2" $color="#323130" $size="42px" $weight="600">
            VISION
          </Title>
        </div>
        <p>
          Our vision is to boost growth and efficiency in 100+ engineering teams
          through standardised, and customizable evaluation within the next 12
          months.
        </p>
      </AboutVisionContainer>
    </AboutVisionSection>
  );
};

export default AboutVision;

const AboutVisionSection = styled.div`
  width: 100%;
  background: #c7e0f4;
  text-align: center;
  background-image: url(${visionBg});
  background-position: right;
  background-repeat: no-repeat;
`;

const AboutVisionContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  min-height: 300px;

  p {
    color: #323130;
    font-weight: 600;
    width: 75%;

    ${({ theme }) => theme.breakpoints.down("sm")} {
      width: initial;
    }
  }
`;
