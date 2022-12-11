import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../styles/reusableElements.styled";
import { GuestTakeAssessmentHeader } from "../../components/Guests";

const Questions = [
  {
    question_id: 1,
    question_title:
      "What is the first step in the software development lifecycle?",
    options: [
      "System Design",
      "Coding",
      "System Testing",
      "Preliminary investigation and Analysis ",
    ],
  },

  {
    question_id: 2,
    question_title:
      "Which of the following refers to internal software equality?",
    options: ["Reusability", "Scalability", "Reliability", "Usability"],
  },

  {
    question_id: 3,
    question_title: "What does RAD stands for?",
    options: [
      "Rapid Application Development",
      "Rapid Application Document",
      "Relative Application Development",
      "None of the above",
    ],
  },
  {
    question_id: 4,
    question_title:
      "Which of the following prototype is not associated with prototyping Model?",
    options: [
      "Vertical Prototype",
      "Horizontal Prototype",
      "Domain Prototype",
      "Diagonal Prototype",
    ],
  },
  {
    question_id: 5,
    question_title:
      "Which of the following prototype is not associated with prototyping Model?",
    options: [
      "Vertical Prototype",
      "Domain Prototype",
      "Horizontal Prototype",
      "Diagonal Prototype",
    ],
  },
];

export default function GuestTakeAssessment() {
  const navigate = useNavigate();
  useEffect(() => {
    let guest = localStorage.getItem("guest");
    if (!guest) navigate("/guest-login");
    const fetchQuestion = async () => {
      let res = await axios.get(
        "question/assessment/2ea09b93-6682-11ed-9941-3863bbb7c6d/"
      );
      console.log(Object.keys(res.data.data).length);
      console.log(res);
      setCurrentPost(Questions);
    };
    fetchQuestion();
  }, []);

  const [currentPost, setCurrentPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(3);

  let useAnswers = {};

  const handleChange = (id, option) => {
    useAnswers[`${id}`] = option;
  };

  const Prev = () => {
    if (currentPage > 1) {
      return (
        <Button
          $variant="outlined"
          $size="md"
          $color="#106ebe"
          type="button"
          onClick={(e) => {
            setCurrentPage(currentPage - 1);
          }}
        >
          Previous
        </Button>
      );
    }
  };

  const Next = () => {
    if (currentPage < Math.ceil(currentPost.length / questionsPerPage)) {
      return (
        <Button
          $variant="outlined"
          $size="md"
          $color="#106ebe"
          type="button"
          onClick={(e) => {
            setCurrentPage(currentPage + 1);
          }}
        >
          Next
        </Button>
      );
    }
  };

  return (
    <>
      <GuestAssessmentContainer>
        <GuestTakeAssessmentHeader />
        <QuestionsContainer>
          <form>
            {currentPost.map((assessment, i) => {
              const {
                question_id,
                question_title,
                options,
                correct_answers,
                id,
              } = assessment;
              return (
                <QuestionsWrapper key={i}>
                  <QuestionTitle>
                    {question_id}: {question_title}
                  </QuestionTitle>
                  {options.map((query, i) => {
                    return (
                      <div key={i}>
                        <input
                          type="radio"
                          value={i}
                          name={question_id}
                          onChange={() => {
                            handleChange(id, i);
                          }}
                        />
                        <label htmlFor={question_id}>{query}</label>
                      </div>
                    );
                  })}
                </QuestionsWrapper>
              );
            })}

            <br />

            <FilterNextSubmit>
              {<Prev />}
              {<Next />}

              <Button
                $size="md"
                type="button"
                onClick={() => {
                  localStorage.setItem(
                    "evalAssessment",
                    JSON.stringify(useAnswers)
                  );
                  navigate("/guest-take-assessment-result");
                }}
              >
                Submit
              </Button>
            </FilterNextSubmit>
          </form>
        </QuestionsContainer>
      </GuestAssessmentContainer>
    </>
  );
}

const GuestAssessmentContainer = styled.div`
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: #323130;
  padding: 40px;
`;

const QuestionsContainer = styled.div`
  display: flex;
  width: 100% !important;
  flex-direction: column;
  margin: 0px 0px;

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    margin-top: 50px;
  }

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #201f1e;
    padding-left: 10px;
  }

  input[type="radio"] {
    margin-left: 10px;
  }

  @media screen and (max-width: 767px) {
    text-align: left;

    .filter-flex {
      width: 100%;
    }
  }
`;

const QuestionsWrapper = styled.div`
  margin: 0;
`;

const QuestionTitle = styled.p`
  margin-bottom: 16px;
`;

const FilterNextSubmit = styled.div`
  display: flex;
  gap: 40px;
  width: 100% !important;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
