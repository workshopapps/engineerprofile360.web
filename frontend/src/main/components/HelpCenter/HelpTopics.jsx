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
            $size="20px"
          >
            Getting started
          </Title>
          <p>
            You're just a step ahead to test and improve your engineers skills.
          </p>
        </Box>
        <Box>
          <img src={laptop} alt="About Eval360 SVG" />
          <Title
            as={"h3"}
            $color="#A19F9D"
            $weight="400"
            $lHeight="36px"
            $size="20px"
          >
            How it Works
          </Title>
          <p>
            <a href="a">Here</a> is a link to a comprehensive video to guide you
            on how it works
          </p>
        </Box>
        <Box>
          <img src={management} alt="Manage account SVG" />
          <Title
            as={"h3"}
            $color="#A19F9D"
            $weight="400"
            $lHeight="36px"
            $size="20px"
          >
            Account Management
          </Title>
          <p>Here you view all activities of your account </p>
        </Box>
        <Box>
          <img src={management} alt="Manage account SVG" />
          <Title
            as={"h3"}
            $color="#A19F9D"
            $weight="400"
            $lHeight="36px"
            $size="20px"
          >
            FAQs
          </Title>
          <p>Check out our custormers frequently asked questions</p>
        </Box>
        <Box>
          <img src={laptop} alt="About Eval360 SVG" />
          <Title
            as={"h3"}
            $color="#A19F9D"
            $weight="400"
            $lHeight="36px"
            $size="20px"
          >
            Privacy policy
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
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  padding: 0 40px;

  @media (max-width: 368px) {
    h2 {
      font-size: 26px;
    }
  }
`;

const TopicContainer = styled.div`
  display: flex;
  /* grid-template-columns: repeat(3, 1fr); */
  gap: 36px;
  flex-wrap: wrap;
  align-items: center;
  place-items: center;
  justify-content: center;
  max-width: 1400px;

  @media (max-width: 778px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 490px) {
    grid-template-columns: 1fr;
  }
`;

const Box = styled.div`
  width: 25%;
  height: 250px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px 14px;

  h3 {
    text-align: center;
  }

  img {
    width: 100px;
    height: 100px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    color: #000;
  }

  @media (max-width: 1046px) {
    gap: 12px;

    h3 {
      font-size: 22px;
    }

    p {
      font-size: 14px;
    }

    img {
      width: 90px;
      height: 90px;
    }
  }

  @media (max-width: 954px) {
    padding: 24px 12px;

    h3 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }

    img {
      width: 84px;
      height: 84px;
    }
  }

  @media (max-width: 778px) {
    width: 100%;
  }

  @media (max-width: 710px) {
    padding: 24px 14px;

    h3 {
      font-size: 19px;
    }

    p {
      font-size: 14px;
    }

    img {
      height: 90px;
      width: 90px;
    }
  }

  @media (max-width: 569px) {
    padding: 14px 8px;
    h3 {
      font-size: 16px;
    }

    p {
      font-size: 13px;
    }

    img {
      height: 72px;
      width: 72px;
    }
  }

  @media (max-width: 490px) {
    padding: 24px 14px;
    img {
      width: 100px;
      height: 100px;
    }

    h3 {
      font-size: 22px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 368px) {
    img {
      width: 95px;
      height: 95px;
    }

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`;
