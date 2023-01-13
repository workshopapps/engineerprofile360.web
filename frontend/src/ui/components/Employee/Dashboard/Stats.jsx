import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

const Stats = ({ stats }) => {
  const [info, setInfo] = useState([]);
  const [recent, setRecent] = useState([]);

  const [newarr, setNewarr] = useState([]);
  const [newarrscore, setNewarrscore] = useState([]);
  const completed = stats?.completed_assessment ? stats.completed_assessment : []
  let arr = [];
  let arrscore = [];

  useEffect(() => {
    const topScore =
      stats?.completed_assessment?.length > 0
        ? stats.completed_assessment.reduce((max, assessment) =>
            ((max.result / max.total_questions) * 100).toFixed(2) >
            ((assessment.result / assessment.total_questions) * 100).toFixed(2)
              ? max
              : assessment
          )
        : [];

    setInfo(topScore);
    setRecent(stats?.completed_assessment ? stats.completed_assessment : []);

    for (let i = 0; i < completed.length; i++) {
      arr.push(JSON.parse(completed[i].userscore.categories).toString());
    }
   setNewarr(arr);

    for (let j = 0; j < completed.length; j++) {
      arrscore.push(JSON.parse(completed[j].userscore.passed_questions).toString());      
    }
    setNewarrscore(arrscore);

    console.log(topScore);
    console.log(recent);
    console.log(completed);
    console.log(arr);

  }, [stats]);

  

   const data = {
    labels: newarr?newarr
      : ["", "", "", "", "", ""],
    datasets: [
      {
        label: "Categories",
        data: 
          newarrscore?newarrscore
          : [0, 0, 0, 0, 0, 0],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#2667FF",
        pointHoverBackgroundColor: "#2667FF",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

 const Chart = ({ topScore }) => {
    const [newarr, setNewarr] = useState([]);
    const [newarrscore, setNewarrscore] = useState([]);
    let arr = [];
    let arrscore = [];
    
    const dataa = topScore;
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
  };

  return (
    <>
      <StatsContainer>
        <SkillSection>
          <Title
            as="h5"
            $size="20px"
            $weight="100"
            $lHeight="28px"
            $color="#142245"
          >
            Your Recent Assessments Score
          </Title>

          <SkillRatingSection>
            {recent.map((assessment, index) => (
              <div key={assessment.id}>
                <p>{assessment.userscore.assessment.name}</p>
                <span
                  style={{
                    color:
                      assessment &&
                      (
                        (assessment.result / assessment.total_questions) *
                        100
                      ).toFixed(2) > 50
                        ? "green"
                        : "red",
                  }}
                >
                  {(
                    (assessment.result / assessment.total_questions) *
                    100
                  ).toFixed(2)}
                  %
                </span>
              </div>
            ))}
          </SkillRatingSection>
        </SkillSection>
        <ChartSection>
          <Radar data={data} />
        </ChartSection>
      </StatsContainer>
    </>
  );
};


 



export default Stats;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8fcfe;
  border: 1px solid #c7e0f4;
  border-radius: 12px;
  padding: 24px 66px;
  width: 100%;
  gap: 80px;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 30px;
    padding: 10px 22px;
  }
`;

const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ebf4f9;
  border-radius: 12px;
  background-color: #fff;
  padding: 49px 32px;
  gap: 24px;
  min-height: 336px;

  ${({ theme }) => theme.breakpoints.down("xs")} {
    padding: 49px 16px;
  }
`;

const SkillRatingSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 16px;
      color: #323130;
      font-weight: 600;
    }

    span {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;
const ChartSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebf4f9;
  width: 80%;
  border: 1px solid #ebf4f9;
  border-radius: 12px;
  padding: 5px 10px;
  min-height: 336px;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 100%;
  }
`;
