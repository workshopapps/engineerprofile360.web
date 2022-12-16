import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Radar } from "react-chartjs-2";
import { Title } from "../../../../styles/reusableElements.styled";

const Stats = ({ stats }) => {
  const [info, setInfo] = useState([]);
  const [recent, setRecent] = useState([]);

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

    console.log(topScore);
    console.log(recent);
  }, [stats]);

  const data = {
    labels: info.assessment?.userscore?.categories
      ? JSON.parse(info.assessment?.userscore?.categories)
      : [""],
    datasets: [
      {
        label: "Categories",
        data: info.assessment?.userscore?.passed_questions
          ? info.assessment?.userscore?.passed_questions
          : [],
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
                <p>{assessment.assessment.name}</p>
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
