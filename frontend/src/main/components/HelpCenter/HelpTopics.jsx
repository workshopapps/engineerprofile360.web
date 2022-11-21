import React from "react";
import styled from "styled-components";

import { Title } from "../../../styles/reusableElements.styled";
import rocket from "../../../assets/icons/rocket.svg";
import laptop from "../../../assets/icons/laptop.svg";
import management from "../../../assets/icons/management.svg";

const HelpTopics = () => {
  return (
    <HelpTopicsContainer>
      <Title as={"h2"} $color="#605E5C" $weight="400" $size="32px">
        Browse help topics
      </Title>
      <TopicContainer>
        <Box>
          <img src={rocket} alt="Getting Started SVG" />
          <Title
            as={"h3"}
            $color="#A19F9D"
            $weight="400"
            $lHeight="36px"
            $size="28px"
          >
            Getting started
          </Title>
          <p>All you need to know to make you prepared and get started</p>
        </Box>
        <Box>
          <img src={laptop} alt="About Skript SVG" />
          <Title
            as={"h3"}
            $color="#A19F9D"
            $weight="400"
            $lHeight="36px"
            $size="28px"
          >
            Using Skript
          </Title>
          <p>All you need to know to make you prepared and get started</p>
        </Box>
        <Box>
          <img src={management} alt="Manage account SVG" />
          <Title
            as={"h3"}
            $color="#A19F9D"
            $weight="400"
            $lHeight="36px"
            $size="28px"
          >
            Account Management
          </Title>
          <p>All you need to know to make you prepared and get started</p>
        </Box>
        <Box>
          <img src={rocket} alt="Getting Started SVG" />
          <Title
            as={"h3"}
            $color="#A19F9D"
            $weight="400"
            $lHeight="36px"
            $size="28px"
          >
            Getting started
          </Title>
          <p>All you need to know to make you prepared and get started</p>
        </Box>
        <Box>
          <img src={laptop} alt="About Skript SVG" />
          <Title
            as={"h3"}
            $color="#A19F9D"
            $weight="400"
            $lHeight="36px"
            $size="28px"
          >
            Using Skript
          </Title>
          <p>All you need to know to make you prepared and get started</p>
        </Box>
        <Box>
          <img src={management} alt="Manage account SVG" />
          <Title
            as={"h3"}
            $color="#A19F9D"
            $weight="400"
            $lHeight="36px"
            $size="28px"
          >
            Account Management
          </Title>
          <p>All you need to know to make you prepared and get started</p>
        </Box>
      </TopicContainer>
    </HelpTopicsContainer>
  );
};

export default HelpTopics;

const HelpTopicsContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

const TopicContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 36px;
`;

const Box = styled.div`
  width: 404px;
  height: 280px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 24px;

  img {
    width: 120px;
    height: 120px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #323130;
  }
`;
