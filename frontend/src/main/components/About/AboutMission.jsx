import React from "react";
import styled from "styled-components";

import { Container, Title } from "../../../styles/reusableElements.styled";

const AboutMission = () => {
  return (
    <AboutMissionSection>
      <AboutMissionContainer>
        <div>
          <Title as="h2" $color="#FAF9F8" $size="42px" $weight="600">
            MISSION
          </Title>
          <p>Thriving Engineering Teams</p>
        </div>
        <ul>
          <li>
            To help every organisation optimise the quality of their engineering
            talent.{" "}
          </li>
          <li>
            {" "}
            With the Skript tool, we provide an efficient way to evaluate your
            engineering talents and propel their development.
          </li>
          <li>
            {" "}
            Through access to the right information about your engineers, every
            team can achieve their goals and grant satisfaction across the
            board.
          </li>
        </ul>
        <p>
          <b>No to lazy work, yes to high efforts and results!</b>
        </p>
      </AboutMissionContainer>
    </AboutMissionSection>
  );
};

export default AboutMission;

const AboutMissionSection = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing(6)};
  background: #004578;
  text-align: center;

  @media (max-width: 480px) {
    padding: 0 ${({ theme }) => theme.spacing(3)};
  }
`;

const AboutMissionContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  min-height: 650px;
  padding: ${({ theme }) => theme.spacing(10)} 0;

  div:nth-of-type(1) {
    p {
      color: #f3f2f1;
      font-weight: 600;
      width: initial;
      font-size: 20px;
    }
  }

  ul {
    color: #c8c6c4;
    text-align: left;
    list-style-type: initial;
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};

    @media (max-width: 767px) {
      width: initial;
    }

    li {
      font-size: 20px;
      line-height: 28px;
    }
  }

  p {
    line-height: 28px;
    color: #f3f2f1;
    font-size: 20px;
  }
`;
