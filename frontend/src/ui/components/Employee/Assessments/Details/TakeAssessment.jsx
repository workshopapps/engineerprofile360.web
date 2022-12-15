import React, { useState, useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import styled from "styled-components";

import useAuth from "../../../../../hooks/useAuth";
import axios from "../../../../../api/axios";
import { Title, Button } from "../../../../../styles/reusableElements.styled";
import {
  showErrorToast,
  showSuccessToast,
} from "../../../../../helpers/helper";

const TakeAssessment = () => {
  const { auth } = useAuth();
  const { assessment_id } = useParams();

  const [assessmentQuestions, setAssessmentsQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const { questions, setIsLoading, setIsSubmitted, response, info } =
    useOutletContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (info?.completed === 1) {
      showErrorToast("Invalid Request");
      navigate(-1);
    }
  }, []);

  useEffect(() => {
    if (info?.completed === 1) {
      showErrorToast("Invalid Request");
      navigate(-1);
    }
    setAssessmentsQuestions(questions ? questions : []);
    setAnswers(response ? response : []);
  }, [questions, response]);

  console.log(questions);

  const handleAnswer = (e, question_id) => {
    setAnswers((answers) =>
      answers.map((question, i) =>
        question.question_id === question_id
          ? {
              ...question,
              answer: [+e.target.value],
            }
          : question
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setIsSubmitted(true);
      await axios
        .post(
          "userscore/create",
          JSON.stringify({
            assessment_id: assessment_id,
            employee_id: auth.id,
            answers: answers,
          })
        )
        .then((data) => {
          showSuccessToast(data?.data?.message);
          setTimeout(() => {
            navigate("/employee/assessment", { replace: true });
          }, 2000);
        });
    } catch (err) {
      setIsLoading(false);
      setIsSubmitted(false);
      if (!err.response) {
        showErrorToast("No Server Response");
      } else {
        showErrorToast(err.response.data.message);
      }
    }
  };

  return (
    <>
      <QuestionsContainer>
        <form onSubmit={handleSubmit}>
          <Questions>
            {assessmentQuestions.map((question, index) => (
              <Question key={question.id}>
                <Title
                  as="h2"
                  $size="16px"
                  $color="#323130"
                  $weight="600"
                  $lHeight="35px"
                >
                  {index + 1}. {question.question}
                </Title>
                <Options
                  id={question.id}
                  onChange={(e) => handleAnswer(e, question.id)}
                >
                  {Array.from(JSON.parse(question.options)).map(
                    (option, index) => (
                      <InputWrapper key={index}>
                        <input
                          type="radio"
                          id={`${index}-${question.id}`}
                          value={index}
                          name={question.id}
                        />
                        <label htmlFor={`${index}-${question.id}`}>
                          {option.optionText}
                        </label>
                      </InputWrapper>
                    )
                  )}
                </Options>
              </Question>
            ))}
          </Questions>
          <Button type="submit">Submit Assessment</Button>
        </form>
      </QuestionsContainer>
    </>
  );
};

export default TakeAssessment;

const QuestionsContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)} 0;

  form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(6)};

    button {
      align-self: flex-end;
    }
  }
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
