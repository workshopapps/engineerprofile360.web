import React from "react";
import styled from "styled-components";

import assessment from "../../../assets/icons/app/assessment.svg";
import { Title } from "../../../styles/reusableElements.styled";

const Stats = () => {
  return (
    <StatsContainer>
      <IndividualStats>
        <Stat>
          <img src={assessment} alt="" />
          <Type>Assessments</Type>
          <Number>102</Number>
        </Stat>
        <Stat>
          <Type>Success Rate</Type>
          <Number>102</Number>
        </Stat>
        <Stat>
          <Type>Verified Users</Type>
          <Number>102</Number>
        </Stat>
        <Stat>
          <Type>Feedbacks</Type>
          <Number>102</Number>
        </Stat>
      </IndividualStats>
      <Chart />
    </StatsContainer>
  );
};

const Chart = () => {
  return (
    <Performances>
      <Header>
        <Title as="h2" $size="24px" $color="#6E6E6E" $weight="400">
          Top Performance
        </Title>
        <p>View all</p>
      </Header>
      <PerformancesChart></PerformancesChart>
    </Performances>
  );
};

export default Stats;

const StatsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
  }
`;

const IndividualStats = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: calc(50% - ${({ theme }) => theme.spacing(2)}) calc(
      50% - ${({ theme }) => theme.spacing(2)}
    );
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(2)};
  flex: 0 0 50%;
  border: 1px solid #f8fbfd;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex: 0 0 100%;
    grid-template-columns: 50% 50%;
    margin: auto;
    align-items: ;
  }
`;

const Stat = styled.div`
  background: #f8fbfd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(1)};
  gap: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(1.2)};
  text-align: center;
`;

const Type = styled.div`
  font-size: 16px;
`;

const Number = styled.div`
  font-size: 16px;
`;

const Performances = styled.div`
  flex: 0 0 40%;
  // margin-right: auto;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100%;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const PerformancesChart = styled.div``;
