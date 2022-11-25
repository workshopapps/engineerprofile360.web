import React from "react";
import { Button, PageHeader, StatCard, Stats } from "./Assessment";

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
    </>
  );
}
