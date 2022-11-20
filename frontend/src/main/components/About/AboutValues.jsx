import React from "react";
import styled from "styled-components";

import { Container, Title } from "../../../styles/reusableElements.styled";

const AboutValues = () => {
  return (
    <AboutValuesSection>
      <AboutValuesContainer>
        <div>
          <Title as="h2" $color="#004578" $size="42px" $weight="600">
            OUR VALUES
          </Title>
        </div>

        <Reliability>
          <Text>
            <Title $color="#004578" $size="42px" $weight="600">
              Reliability
            </Title>
            <p>
              The engineer profiles we create are in line with your company’s
              objectives and are 100% based on the answers from your engineers.
              You can trust us to give you accurate insights.
            </p>
          </Text>
          <Image></Image>
        </Reliability>
        {/* 
        <Intuitiveness>

        </Intuitiveness>
        <Satisfaction>

        </Satisfaction>
        <EngineerCentric>

        </EngineerCentric> */}
      </AboutValuesContainer>
    </AboutValuesSection>
  );
};

export default AboutValues;

const AboutValuesSection = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing(6)};
  background: #ffffff;
  text-align: center;
`;

const AboutValuesContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  min-height: 300px;

  p {
    line-height: 28px;
    color: #323130;
    font-size: 20px;
    font-weight: 600;
    width: 75%;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const Image = styled.div`
  img {
    width: 100%;
  }
`;
