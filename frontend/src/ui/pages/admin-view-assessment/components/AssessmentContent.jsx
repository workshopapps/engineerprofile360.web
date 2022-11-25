import React, { useState } from "react";
import styled from "styled-components";

import { AssessmentData } from "./AssessmentData";
import Pagination from "./Pagination";
import { Container, WrapperDiv } from "./ViewAssessmentHeader";

function AssessmentContent() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [questionsPerPage] = useState(5);
  const [inputValue, setInputValue] = useState([
    {
      answer: "",
    },
  ]);
  const answer = inputValue;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const indexOfLastPost = currentPage * questionsPerPage;
  const indexOfFirstPost = indexOfLastPost - questionsPerPage;
  const currentPost = AssessmentData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNums) => setCurrentPage(pageNums);
  return (
    <>
      <Container>
        <WrapperDiv>
          {currentPost.map((assessment, i) => {
            const { question, options } = assessment;
            return (
              <QuestionContainer key={i}>
                <Question contentEditable={isEditing}>{question}</Question>
                <div>
                  {options.map((query, i) => {
                    const { option } = query;
                    return (
                      <Answer key={i}>
                        <input
                          type="radio"
                          value={answer}
                          name={question}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                        <p contentEditable={isEditing}> {option}</p>;
                      </Answer>
                    );
                  })}
                </div>
              </QuestionContainer>
            );
          })}

          <Pagination
            questionsPerPage={questionsPerPage}
            totalPage={AssessmentData.length}
            paginate={paginate}
          />

          <ButtonWrapper>
            <ButtonShade
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              {isEditing ? "Apply Change" : "Edit"}
            </ButtonShade>
          </ButtonWrapper>
        </WrapperDiv>
      </Container>
    </>
  );
}

export default AssessmentContent;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px 0;
  @media (min-width: 748px) {
    transform: translateY(-130px);
  }
  @media (min-width: 1200px) {
    transform: translateY(-180px);
  }
  @media (min-width: 1300px) {
    transform: translateY(-270px);
  }
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
  @media (min-width: 748px) {
    transform: translateY(-130px);
  }
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
