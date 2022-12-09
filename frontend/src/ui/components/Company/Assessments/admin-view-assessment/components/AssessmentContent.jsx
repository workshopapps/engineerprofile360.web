import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { toast } from "react-toastify";
import { Loader } from "../../../../../../styles/reusableElements.styled";

import ViewAssessmentHeader, {
  Container,
  WrapperDiv,
} from "./ViewAssessmentHeader";
import axios from "../../../../../../api/axios";

function AssessmentContent() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const { id } = useParams();
  const assessment_id = id;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `question/assessment/${assessment_id}`
        );
        setQuestions(response.data.data);

        setLoading(false);
      } catch (error) {
        toast.error("could not preview questions ");
        navigate("/employee-assessment-list");
      }
    };

    fetchQuestions();
  }, []);
  const navigate = useNavigate();
  return loading ? (
    <ButtonWrapper>
      <Loader />
    </ButtonWrapper>
  ) : (
    <>
      <ViewAssessmentHeader />
      <ButtonWrapper>
        <WrapperDiv>
          {questions.length > 0 &&
            questions?.map((assessment) => {
              const { question, options, id } = assessment;

              return (
                <QuestionContainer key={id}>
                  <Question>{question}</Question>
                  <div>
                    {options.map((option, i) => {
                      return (
                        <Answer key={i}>
                          <input type="radio" name={question} />
                          <p> {option}</p>;
                        </Answer>
                      );
                    })}
                  </div>
                </QuestionContainer>
              );
            })}

          <ButtonWrapper>
            <ButtonClearNext
              onClick={() => {
                navigate("/employee-assessment-list");
              }}
            >
              Next
            </ButtonClearNext>
            <ButtonShade>Edit</ButtonShade>
          </ButtonWrapper>
        </WrapperDiv>
      </ButtonWrapper>
    </>
  );
}

export default AssessmentContent;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px 0;
`;

export const Question = styled.h4`
  color: #323130;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 7px;
`;
export const Answer = styled.div`
  display: flex;
  align-items: center;
  margin: 3px 0;

  input {
    border: 1px solid #323130;
    height: 20px;
    width: 20px;
    color: blue;
    border-radius: 50%;
    cursor: pointer;
    padding-right: 7px;
  }
  p {
    color: #201f1e;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    padding-left: 5px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonClear = styled.button`
  color: #323130;
  background-color: white;
  border: 1px solid #2667ff;
  cursor: pointer;
  width: 75px;
  height: 60px;
  margin: 0 15px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;

  &:hover {
    color: #fff;
    background-color: #2667ff;
    border: none;
    border: none;
  }
`;
export const ButtonClearNext = styled.button`
  color: #323130;
  background-color: white;
  border: 1px solid #2667ff;
  cursor: pointer;
  width: 139px;
  height: 60px;

  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;
  @media (min-width: 748px) {
  }

  &:hover {
    color: #fff;
    background-color: #2667ff;
    border: none;
    border: none;
  }
`;
export const ButtonShade = styled.button`
  color: #fff;
  background-color: #2667ff;
  border: none;
  width: 139px;
  height: 60px;

  border-radius: 4px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  transition: all 0.3s ease-in;

  @media (min-width: 748px) {
    margin: 50px;
  }

  &:hover {
    color: #323130;
    background-color: white;
    border: 1px solid #2667ff;
  }
`;
