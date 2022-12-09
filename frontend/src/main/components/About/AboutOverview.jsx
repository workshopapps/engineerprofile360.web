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
          <Title $color="#004578" $size="42px" $weight="600">
            OVERVIEW <img src={overviewWing} alt="" />
          </Title>
          <p>
            Eval360 is a skill evaluator tool that is used for assessing
            engineers in an organisation.
            <br />
            <br />
            This enables managers, supervisors, Human Resources (HR) Managers
            and other managerial positions to evaluate their skills and talent
            at any stage.
            <br />
            <br />
            Eval360 helps companies to retain quality talent and advance the
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
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};
`;

const OverviewText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  flex: 0 0 calc(50% - ${({ theme }) => theme.spacing(3)});
  padding: ${({ theme }) => theme.spacing(10)} 0;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex: initial;
  }

  p {
    color: #605e5c;
  }
`;

const OverviewImage = styled.div`
  flex: 0 0 calc(50% - ${({ theme }) => theme.spacing(3)});

  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }

  img {
    max-width: 100%;
  }
`;
