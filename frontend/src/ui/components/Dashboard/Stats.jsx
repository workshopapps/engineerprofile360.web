import React from "react";
import styled from "styled-components";

import { TaskSquare, TickCircle, Star, Messages3 } from "iconsax-react";
import { Title } from "../../../styles/reusableElements.styled";

const Stats = () => {
  return (
    <StatsContainer>
      <IndividualStats>
        <Assessment>
          <TaskSquare color="#141ae9" />
          <Type>Assessments</Type>
          <Number>102</Number>
        </Assessment>
        <Rate>
          <Star color="#107c10" />
          <Type>Success Rate</Type>
          <Number>102</Number>
        </Rate>
        <VerifiedUsers>
          <TickCircle color="#141ae9" />
          <Type>Verified Staffs</Type>
          <Number>102</Number>
        </VerifiedUsers>
        <Feedbacks>
          <Messages3 color="#141ae9" />
          <Type>Feedbacks</Type>
          <Number>102</Number>
        </Feedbacks>
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
        <span>View all</span>
      </Header>
      <PerformancesChart></PerformancesChart>
    </Performances>
  );
};

export default Stats;

const StatsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  gap: ${({ theme }) => theme.spacing(4)};

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
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(2)};
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

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100%;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
    color: #2667ff;
    border-bottom: 2px solid #2667ff;
    font-weight: 600;
    font-size: 20px;
  }
`;
const PerformancesChart = styled.div`
  background: #f8fbfd;
  width: 100%;
  height: 85%;
  min-height: 300px;
`;

const Assessment = styled(Stat)`
  ${Type} {
    color: #141ae9;
  }
`;

const Rate = styled(Stat)`
  ${Type} {
    color: #107c10;
  }

  ${Number} {
    color: #1e1e1e1;
  }
`;

const VerifiedUsers = styled(Stat)`
  ${Type} {
    color: #141ae9;
  }

  ${Number} {
    color: #1e1e1e1;
  }
`;

const Feedbacks = styled(Stat)`
  ${Type} {
    color: #141ae9;
  }

  ${Number} {
    color: #1e1e1e1;
  }
`;
