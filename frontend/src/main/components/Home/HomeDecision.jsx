import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Button,
  Title,
} from "../../../styles/reusableElements.styled";

import preview from "./assets/images/preview.svg";

const HomeDecision = () => {
  const navigate = useNavigate();
  return (
    <HomeDecisionCon>
      <BannerContainer>
        <img src={preview} alt="" />
        <Title $weight="700" $size="24px" $color="#323130">
          Make Desicions In A Flash
        </Title>
        <p>
          Our assessment tests give engineers and their managers a clear glimpse
          of where they are and what they need to move to the next level of
          growth. No longer do managers need to excessively make use of limited
          time to make important decisions and with a clear overview of the
          team’s abilities, engineering management decisions can be made faster.
        </p>
        <ButtonGroup>
          <Button
            onClick={() => {
              navigate("/demo");
            }}
          >
            Request A Demo
          </Button>
          <Button $variant="disabled">Let's Chat?</Button>
        </ButtonGroup>
      </BannerContainer>
    </HomeDecisionCon>
  );
};

export default HomeDecision;

const HomeDecisionCon = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.palette.grey.white};
  // min-height: 650px;
`;

const BannerContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // min-height: 650px;
  color: #605e5c;
  gap: ${({ theme }) => theme.spacing(6)};
  text-align: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    text-align: left;
    align-items: initial;
  }

  p {
    line-height: 32px;
    font-size: 16px;
  }

  img {
    max-width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;
