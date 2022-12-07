import React from "react";
import {
  AssessmentContainer,
  Button,
  PageHeader,
  StatCard,
  Stats,
  Performance,
} from "./Assessment";

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

export const data = {
  labels: ["Average", "PHP", "Laravel", "Python", "CSS", "HTML"],
  datasets: [
    {
      label: "Categories",
      data: [9, 19, 35, 9, 79, 9],
      backgroundColor: "rgba(95, 210, 85, 0.2)",
      borderColor: "#107C10",
      borderWidth: 1.5,
    },
  ],
};

export default function Assessment() {
  return (
    <>
      <PageHeader>
        <h1>Assessments</h1>
        <div>
          <Button>Create New Assessment</Button>
          <Button secondary>View Assessments</Button>
        </div>
      </PageHeader>
      <Stats>
        <StatCard>
          <p>Available for Assessment</p>
          <h3>98</h3>
        </StatCard>
        <StatCard>
          <p>Completed Assessment</p>
          <h3>12</h3>
        </StatCard>
        <StatCard>
          <p>Assessment Results</p>
          <h3>60</h3>
        </StatCard>
      </Stats>
      <AssessmentContainer>
        <Performance></Performance>
        <Performance>
          <div>
            <h4>Top Performance</h4>
            <a href="#/">View All</a>
          </div>
          <Radar data={data} />
        </Performance>
      </AssessmentContainer>
    </>
  );
}
