import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Button,
  Title,
} from "../../../styles/reusableElements.styled";

const HomeGetStarted = () => {
  const navigate = useNavigate();
  return (
    <HomeGetStartedCon>
      <BannerContainer>
        <Title as="h3" $weight="700" $size="32px" $color="#FFFFFF">
          Ready to get started?
        </Title>
        <p>
          Stay ahead of your engineering teams’ performance and skills by
          Sheduling an online demo and learn how skript can <br /> help your
          company. One of our solutions specialists will show you the platform
          and answer any questions you have.
        </p>
        <Button
          $size="lg"
          onClick={() => {
            navigate("/demo");
          }}
        >
          Request A Demo
        </Button>
      </BannerContainer>
    </HomeGetStartedCon>
  );
};

export default HomeGetStarted;

const HomeGetStartedCon = styled.div`
  width: 100%;
  background: #201f1e;
  min-height: 650px;
`;

const BannerContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 650px;
  color: #ffffff;
  gap: ${({ theme }) => theme.spacing(6)};
  text-align: center;

  p {
    line-height: 40px;
  }
`;
