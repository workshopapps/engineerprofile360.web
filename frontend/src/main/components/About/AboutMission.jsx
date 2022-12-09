import React from "react";
import styled from "styled-components";

import { Container, Title } from "../../../styles/reusableElements.styled";
import missionBg from "./assets/images/mission-section.svg";

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
            With the Eval360 tool, we provide an efficient way to evaluate your
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
  background: #004578;
  text-align: center;
  background-image: url(${missionBg});
  background-position: center;
  background-repeat: no-repeat;
`;

const AboutMissionContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  min-height: 650px;

  div:nth-of-type(1) {
    p {
      color: #f3f2f1;
      font-weight: 600;
      width: initial;
    }
  }

  ul {
    color: #c8c6c4;
    text-align: left;
    list-style-type: initial;
    width: 75%;
    display: flex;
    padding-left: ${({ theme }) => theme.spacing(2)};
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};

    ${({ theme }) => theme.breakpoints.down("sm")} {
      width: initial;
    }

    li {
      font-size: 20px;
      line-height: 28px;

      ${({ theme }) => theme.breakpoints.down("sm")} {
        font-size: 18px;
      }

      ${({ theme }) => theme.breakpoints.down("xs")} {
        font-size: 16px;
      }
    }
  }

  p {
    color: #f3f2f1;
  }
`;
