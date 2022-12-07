import React from "react";
import styled from "styled-components";

import { Title, Container } from "../../../styles/reusableElements.styled";

const stats = [
  {
    tag: "companies",
    number: "120",
    desc: "Assess Their Software Engineering Team.",
  },
  {
    tag: "users",
    number: "1k",
    desc: "Assess, monitor and develope their skills.",
  },
  {
    tag: "feedback",
    number: "200",
    desc: "Get quality automated assessment for their team.",
  },
];

const HomeStats = () => {
  return (
    <HomeStatsCon>
      <StatsContainer>
        <StatsTitle as="h3" $weight="600" $size="48px" $color="#a19f9d" $lHeight="50px">
          Product Growth <br />
          Goals
        </StatsTitle>
        <Stats>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <Tag>{stat.tag}</Tag>
              <Number>{stat.number}+</Number>
              <Description>{stat.desc}</Description>
            </Stat>
          ))}
        </Stats>
      </StatsContainer>
    </HomeStatsCon>
  );
};

export default HomeStats;

const HomeStatsCon = styled.div`
  width: 100%;
  background: #201f1e;
  min-height: 742px;
  padding: ${({ theme }) => theme.spacing(0)} 0;
`;

const StatsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 742px;
  color: #ffffff;
  gap: ${({ theme }) => theme.spacing(8)};

  p {
    line-height: 40px;
  }
`;

const StatsTitle = styled(Title)`
  ${({ theme }) => theme.breakpoints.down("xs")} {
    font-size: 32px;
  }
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(5)};
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const Tag = styled.span`
  border: 2px solid #edebe9;
  border-radius: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(0.5)};
  display: inline-flex;
  justify-content: center;
  color: #edebe9;
  max-width: 80px;
`;

const Number = styled.h3`
  font-size: 128px;
  font-weight: 700;
  color: #edebe9;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 72px;
  }

  ${({ theme }) => theme.breakpoints.down("xs")} {
    font-size: 52px;
  }
`;

const Description = styled.div``;
