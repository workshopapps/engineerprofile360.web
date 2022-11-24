import React from "react";
import styled from "styled-components";

import { Container, Title } from "../../../styles/reusableElements.styled";
import reliability from "./assets/images/reliability.png";
import intuitiveness from "./assets/images/intuitiveness.png";
import satisfaction from "./assets/images/satisfaction.png";
import engineerCentric from "./assets/images/engineer-centric.png";

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
          <Image>
            <img src={reliability} alt="" />
          </Image>
        </Reliability>

        <Intuitiveness>
          <Text>
            <Title $color="#004578" $size="42px" $weight="600">
              Intuitiveness
            </Title>
            <p>Our software interface is easy to understand and use.</p>
          </Text>
          <Image>
            <img src={intuitiveness} alt="" />
          </Image>
        </Intuitiveness>
        <Satisfaction>
          <Text>
            <Title $color="#004578" $size="42px" $weight="600">
              Satisfaction
            </Title>
            <p>
              We want you to have a seamless experience and gain maximum
              satisfaction from using this tool.
            </p>
          </Text>
          <Image>
            <img src={satisfaction} alt="" />
          </Image>
        </Satisfaction>
        <EngineerCentric>
          <Text>
            <Title $color="#004578" $size="42px" $weight="600">
              Engineer Centric
            </Title>
            <p>
              They are an integral part of your organisation. We help you
              analyse their strengths and weaknesses, and leave you with every
              information you need to assign tasks and ensure efficiency.
            </p>
          </Text>
          <Image>
            <img src={satisfaction} alt="" />
          </Image>
        </EngineerCentric>
      </AboutValuesContainer>
    </AboutValuesSection>
  );
};

export default AboutValues;

const AboutValuesSection = styled.div`
  width: 100%;
  background: #ffffff;
  text-align: center;
`;

const AboutValuesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  min-height: 300px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  flex: 0 0 45%;

  p {
    color: #605e5c;
  }
`;

const Image = styled.div`
  flex: 0 0 50%;

  img {
    width: 100%;
  }
`;

const Reliability = styled(Flex)``;
const Intuitiveness = styled(Flex)`
  flex-direction: row-reverse;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
  }
`;
const Satisfaction = styled(Flex)``;
const EngineerCentric = styled(Flex)`
  flex-direction: row-reverse;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
  }
`;
