import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { toast } from "react-toastify";
import {
  Button,
  Loader,
} from "../../../../../../styles/reusableElements.styled";

import ViewAssessmentHeader, { TimeStamp } from "./ViewAssessmentHeader";
import axios from "../../../../../../api/axios";
import useAuth from "../../../../../../hooks/useAuth";
import { showErrorToast } from "../../../../../../helpers/helper";
import moment from "moment";

const AssessmentContent = () => {
  const [loading, setLoading] = useState(true);
  const [assessmentDetails, setAssessmentDetails] = useState({});
  const [currentAssessments, setCurrentAssessments] = useState([]);

  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(5);

  const [nextIndex, setNextIndex] = useState(1);

  const { id } = useParams();
  const assessment_id = id;
  const { auth } = useAuth();

  let timeDuration = moment
    .utc(
      moment(assessmentDetails?.end_time, "HH:mm").diff(
        moment(assessmentDetails?.start_time, "HH:mm")
      )
    )
    .format("HH:mm:ss");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `question/assessment/${assessment_id}`
        );
        setQuestions(response.data.data);
        setLoading(false);
        const assessment = await axios.get(`/assessment/${auth.org_id}`);

        for (let index = 0; index <= assessment?.data?.data.length; index++) {
          const assessmentData = assessment?.data?.data[index];
          const { id } = assessmentData;
          if (id === assessment_id) setAssessmentDetails(assessmentData);
        }
      } catch (error) {
        // toast.error("could not preview questions ");
        if (!error?.response) {
          // showErrorToast("could not preview questions");
        } else if (error?.response.data.errorState === true) {
          showErrorToast(error.response.data.message);
        }
      }
    };
    fetchQuestions();
  }, []);

  //Current Assessment Page
  useEffect(() => {
    const indexOfLastAssessment = currentPage * questionsPerPage;
    const indexOfFirstAssessment = indexOfLastAssessment - questionsPerPage;
    setCurrentAssessments(
      questions.slice(indexOfFirstAssessment, indexOfLastAssessment)
    );
  }, [questions, currentPage]);

  let useAnswers = {};

  const handleChange = (id, option) => {
    useAnswers[`${id}`] = option;
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    setNextIndex(currentPage - 1);
  };
  const Prev = () => {
    if (currentPage > 1) {
      return (
        <Button
          $variant="outlined"
          $size="md"
          $color="#106ebe"
          type="button"
          onClick={handlePrev}
        >
          Previous
        </Button>
      );
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    setNextIndex(currentPage + 5);
  };
  const Next = () => {
    if (currentPage < Math.ceil(questions.length / questionsPerPage)) {
      return (
        <Button
          $variant="outlined"
          $size="md"
          $color="#106ebe"
          type="button"
          onClick={handleNext}
        >
          Next
        </Button>
      );
    }
  };

  const navigate = useNavigate();
  return loading ? (
    <ButtonWrapper>
      <Loader />
    </ButtonWrapper>
  ) : (
    <>
      <AssessmentContainer>
        <ViewAssessmentHeader
          title="Preview Assessment"
          course={assessmentDetails?.name ? assessmentDetails?.name : "loading"}
          department={
            assessmentDetails?.department?.name
              ? assessmentDetails?.department?.name
              : "loading"
          }
          duration={timeDuration}
          deadline={
            assessmentDetails?.end_date
              ? moment(assessmentDetails?.end_date).format("yy-MM-DD")
              : "loading"
          }
        />
        <QuestionsContainer>
          <form>
            {currentAssessments.map((assessment, i) => {
              const { question, options, correct_answers, id } = assessment;

              const isJson = (obj) => {
                try {
                  JSON.parse(obj);
                } catch (e) {
                  //Error
                  //JSON is not okay
                  return false;
                }

                return true;
              };
 console.log("isJason", isJson(options))
              const optionsData = isJson(options)
                ? JSON.parse(options)
                : options;
              console.log("optionData", optionsData);
              console.log("optionData", options);
              const correctAnswerParse = Number(JSON.parse(correct_answers));
              return (
                <QuestionsWrapper key={i}>
                  <QuestionTitle>
                    {nextIndex + i}: {question}
                  </QuestionTitle>
                  {optionsData?.map((option, i) => {
                    return (
                      <InputWrapper key={i}>
                        <input
                          type="radio"
                          value={i}
                          name={id}
                          onChange={() => {
                            handleChange(id, i);
                          }}
                          id={id}
                          checked={correctAnswerParse === i ? true : false}
                        />
                        <label htmlFor={id}>
                          {option?.optionText || option}
                        </label>
                      </InputWrapper>
                    );
                  })}
                </QuestionsWrapper>
              );
            })}

            <br />

            <FilterNextSubmit>
              {<Prev />}
              {<Next />}
              <ButtonEditWrapper>
                <Button
                  $size="md"
                  type="button"
                  onClick={() => {
                    localStorage.setItem(
                      "evalAssessment",
                      JSON.stringify(useAnswers)
                    );
                    navigate(`/assessment/view-assessment/${assessment_id}`);
                  }}
                >
                  Edit
                </Button>
              </ButtonEditWrapper>
            </FilterNextSubmit>
          </form>
        </QuestionsContainer>
      </AssessmentContainer>
    </>
  );
};

export default AssessmentContent;

const AssessmentContainer = styled.div`
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #323130;
  padding-top: 40px;
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
    accent-color: #4ecb71;
    border-radius: 50%;
    appearance: none;
    border: 5px solid #fff;
    outline: 1px solid #323130;
  }

  input[type="radio"]:checked {
    accent-color: #4ecb71;
    background-color: #4ecb71;
    border-radius: 50%;
    border: 5px solid #4ecb71;
    outline: 1px solid #4ecb71;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonEditWrapper = styled.div`
  display: none;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;
