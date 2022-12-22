import {useState,useEffect,React} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { TaskSquare, TickCircle, Note, Profile2User } from "iconsax-react";
import { Title } from "../../../../styles/reusableElements.styled";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Stats = ({ stats, topPerformance }) => {
  console.log(topPerformance);
  console.log(stats);

  return (
    <>
      <StatsContainer>
        <IndividualStats>
          <Link to="/employees">
            <Stat>
              <Profile2User color="#141ae9" />
              <Type>
                Total No. of <br /> Employees
              </Type>
              <Number>{stats.employees}</Number>
            </Stat>
          </Link>
          <Link to="/assessment">
            <Stat>
              <Note color="#141ae9" />
              <Type>
                Total <br />
                Assessments
              </Type>
              <Number>{stats.assessments}</Number>
            </Stat>
          </Link>
          <Link to="/assessment/assessment-list">
            <Stat>
              <TickCircle color="#141ae9" />
              <Type>
                Approved <br />
                Assessments
              </Type>
              <Number>{stats.availableAssessments}</Number>
            </Stat>
          </Link>
          <Link to="/assessment/assessment-list/completed">
            <Stat>
              <TaskSquare color="#141ae9" />
              <Type>
                Completed
                <br /> Assessments
              </Type>
              <Number>{stats.completedAssessments}</Number>
            </Stat>
          </Link>
        </IndividualStats>
        <Chart topPerformance={topPerformance} />
      </StatsContainer>
    </>
  );
};

export const Chart = ({ topPerformance }) => {
  const [newarr, setNewarr] = useState([]);
  const [newarrscore, setNewarrscore] = useState([]);
  let arr = [];
  let arrscore = [];
  
  const dataa = topPerformance;
  const dataaLength = dataa.length
  console.log(dataaLength);
  useEffect(() => {
    for (let i = 0; i < dataaLength; i++) {
      arr.push(JSON.parse(dataa[i].categories).toString());
    }
    setNewarr(arr);

    for (let j = 0; j < dataaLength; j++) {
      arrscore.push(JSON.parse(dataa[j].passed_questions).toString());      
    }
    setNewarrscore(arrscore);
  }, []);

  const data = {
    labels: newarr?newarr
      : ["", "", "", "", "", ""],
    datasets: [
      {
        label:"Categories",
        data: newarrscore || [0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(95, 210, 85, 0.2)",
        borderColor: "#107C10",
        borderWidth: 2,
      },
    ],
  };

  return (
    <Performances>
      <Header>
        <Title as="h2" $size="24px" $color="#6E6E6E" $weight="400">
          Top Performance
        </Title>
        <Link to="/employees">
          <span>View all</span>
        </Link>
      </Header>
      <PerformancesChart>
        <Radar data={data} />
      </PerformancesChart>
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
  font-size: 18px;
  color: #141ae9;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 16px;
  }
`;

const Number = styled.div`
  font-size: 18px;
  color: #323130;
  &:hover,
  &:active,
  &:visited {
    color: #323130;
    text-decoration: none;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 16px;
  }
`;

const Performances = styled.div`
  flex: 0 0 45%;
  padding-right: 2.5%;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100%;
    padding-right: 0;
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
  height: 90%;
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`;
