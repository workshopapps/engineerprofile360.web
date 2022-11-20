import React from "react";
import styled from "styled-components";

import { Title, Container } from "../../../styles/reusableElements.styled";
import overview from "./assets/images/overview-image.png";
import overviewWing from "./assets/icons/overview-wing.svg";

const AccountOverview = () => {
  return (
    <>
      <OverviewContainer>
        <OverviewText>
          <Title $color="#004578" $size="42px" $weight="600">OVERVIEW <img src={overviewWing} alt="" /></Title>
          <p>
            Skript is a skill evaluator tool that is used for assessing
            engineers in an organisation.
            <br />
            <br />
            This enables managers, supervisors, Human Resources (HR) Managers
            and other managerial positions to evaluate their skills and talent
            at any stage.
            <br />
            <br />
            Skript helps companies to retain quality talent and advance the
            skills of their engineers, which will foster efficiency and
            innovation.
          </p>
        </OverviewText>
        <OverviewImage>
          <img src={overview} alt="" />
        </OverviewImage>
      </OverviewContainer>
    </>
  );
};

export default AccountOverview;

const OverviewContainer = styled(Container)`
  padding: 0 ${({ theme }) => theme.spacing(6)};
  display: flex;
  align-items: center;
  min-height: 100vh;
  gap: ${({ theme }) => theme.spacing(8)};
`;

const OverviewText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  flex: 0 0 calc(50% - ${({ theme }) => theme.spacing(3)});

  p {
    line-height: 28px;
    color: #605E5C;
    font-size: 20px;
  }
`;

const OverviewImage = styled.div`
  height: 100%;
  flex: 0 0 calc(50% - ${({ theme }) => theme.spacing(3)});
  img {
    max-width: 100%;
    height: 100%;
  }
`;
