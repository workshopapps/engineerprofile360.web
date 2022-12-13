import React from "react";
import styled from "styled-components";

import QuestionTemplate from "./QuestionTemplate";

const CreateManual = ({ assessment_id }) => {
  console.log(assessment_id);

  return (
    <CreateManualContainer>
      <p>Input assessment and select response type below:</p>
      <QuestionTemplate assessment_id={assessment_id} />
    </CreateManualContainer>
  );
};

export default CreateManual;

const CreateManualContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 30px auto;
  gap: 15px;

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #323130;
    opacity: 0.6;
  }
`;
