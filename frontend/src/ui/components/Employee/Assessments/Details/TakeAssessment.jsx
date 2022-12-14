import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useOutletContext } from "react-router-dom";

import { Title } from "../../../../../styles/reusableElements.styled";

const TakeAssessment = () => {
  const [assessmentQuestions, setAssessmentsQuestions] = useState([]);
  const { questions } = useOutletContext();

  useEffect(() => {
    setAssessmentsQuestions(questions ? questions : []);
  }, [questions]);

  console.log(questions);

  const handleSubmit = async (e) => {
    e.preventDefault();


  };

  return (
    <>
      <QuestionsContainer>
        <Questions>
          <form onSubmit={handleSubmit}>
            {assessmentQuestions.map((question, index) => (
              <Question key={question.id}>
                <Title as="h2" $size="16" $color="#323130" $weight="600">
                  {index + 1}. Who am I and What do I do?
                </Title>
                <Options>
                  {/* {JSON.parse(question.options).map((option, index) => (
                    <InputWrapper key={index}>
                      <input type="radio" id={index + 1} /> <span>Louis</span>
                    </InputWrapper>
                  ))} */}
                </Options>
              </Question>
            ))}
          </form>
        </Questions>
      </QuestionsContainer>
    </>
  );
};

export default TakeAssessment;

const QuestionsContainer = styled.div`
  width: 100%;
`;

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};

  span {
    font-size: 14px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;
