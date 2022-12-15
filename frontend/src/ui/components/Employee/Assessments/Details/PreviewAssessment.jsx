import React, { useState, useEffect } from "react";
import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import axios from "../../../../../api/axios";
import { Timer } from "iconsax-react";
import {
  Button,
  OverlayLoader,
  Title,
} from "../../../../../styles/reusableElements.styled";
import useAuth from "../../../../../hooks/useAuth";
import PageInfo from "../../../molecules/PageInfo";
import { showErrorToast } from "../../../../../helpers/helper";

const PreviewAssessment = () => {
  const [info, setInfo] = useState({});
  const [questions, setQuestions] = useState([]);
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAccepted, setIsAccepted] = useState(false);
  const { auth } = useAuth();
  const { assessment_id } = useParams();
  const location = useLocation();

  useEffect(() => {
    setInfo(location.state?.assessment);
    const getDetails = async () => {
      try {
        await axios.get(`question/assessment/${assessment_id}`).then((data) => {
          setQuestions(data?.data?.data);
          console.log(data?.data?.data[0].options);
        });

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        if (!err.response) {
          showErrorToast("No Server Response");
        } else {
          showErrorToast(err.response.data.message);
        }
      }
    };

    console.log(questions.options);

    getDetails();
  }, [location.state?.assessment]);

  const handleStart = () => {
    setIsAccepted(true);
  };

  const handleChange = (e, question_id) => {
    if (!response.some((id) => id.question_id === question_id)) {
      setResponse([
        ...response,
        {
          question_id: question_id,
          answer: [+e.target.value],
        },
      ]);
    } else {
      setResponse((response) =>
        response.map((question, i) =>
          question.question_id === question_id
            ? {
                ...question,
                answer: [+e.target.value],
              }
            : question
        )
      );
    }
  };

  console.log(response);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(
          "userscore/create",
          JSON.stringify({
            assessment_id: assessment_id,
            employee_id: auth.id,
            answers: response,
          })
        )
        .then((data) => {
          console.log(data.data.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <PageInfo
        breadcrumb={["assessment", "available assessments", "assessment"]}
        pageTitle="Preview Assessment"
      />
      {!isLoading ? (
        <>
          <FilterWrapper>
            <DetailContainer>
              <p>
                <TextMuted>Course :</TextMuted> {info?.name ? info.name : ""}
              </p>
              <p>
                <TextMuted>Department :</TextMuted>
                {info?.department?.name ? info.department?.name : ""}
              </p>
            </DetailContainer>

            <DetailContainer>
              <p>
                <TextMuted>Begins :</TextMuted>
                {info?.start_date ? info.start_date : ""}
                {info?.start_time ? info.start_time : ""}
              </p>
              <p>
                <TextMuted>Deadline :</TextMuted>
                {info?.end_date ? info.end_date : ""}
                {info?.end_time ? info.end_time : ""}
              </p>
            </DetailContainer>

            <FilterFlex>
              <Timer size="32" color="#323130" />
              <DurationTimer>
                <br />
                Timer
              </DurationTimer>
              <div></div>
            </FilterFlex>
          </FilterWrapper>
          <DescriptionMain>
            <b>Description:</b> {info?.name ? info.name : ""}
          </DescriptionMain>

          {!isAccepted ? (
            <Buttons>
              <Link to="/employee/assessment">
                <Button $variant="outlined" $color="#2667ff">
                  Cancel
                </Button>
              </Link>
              <Button $weight="400" onClick={handleStart}>
                Take Assessment
              </Button>
            </Buttons>
          ) : (
            ""
          )}

          {/* <Outlet context={{ questions }} /> */}

          {isAccepted ? (
            <QuestionsContainer>
              <form onSubmit={handleSubmit}>
                <Questions>
                  {questions.map((question, index) => (
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
                        onChange={(e) => handleChange(e, question.id)}
                      >
                        {Array.from(JSON.parse(question.options)).map(
                          (option, index) => (
                            <InputWrapper key={index}>
                              <input
                                type="radio"
                                id={`${index}-${question.id}`}
                                value={index + 1}
                                name={question.id}
                              />
                              <label htmlFor={`${index}-${question.id}`}>
                                {option}
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
          ) : (
            ""
          )}
        </>
      ) : (
        <OverlayLoader contained>
          <div></div>
          Preparing Assessment...
        </OverlayLoader>
      )}
    </>
  );
};

export default PreviewAssessment;

const FilterWrapper = styled.div`
  display: flex;
  width: 100% !important;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  p {
    margin-bottom: 20px;
    font-size: 16px;
    color: #323130;
  }

  span {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    text-align: left;
  }
`;

export const FilterNav = styled.div`
  display: flex;
  width: 100% !important;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: -28px;
`;
const DescriptionMain = styled.div`
  width: 100%;
  margin-top: 10px;
  border-top: 1px solid #323130;
  font-size: 16px;
  line-height: 22px;
  padding: 20px 0;
  border-bottom: 1px solid #323130;

  @media screen and (max-width: 767px) {
    text-align: left;
  }
`;

const DetailContainer = styled.div``;

const TextMuted = styled.span`
  opacity: 0.3;
  margin-right: 20px;
`;

const FilterFlex = styled.div`
  display: flex;
  width: 30%;
  padding: 20px;
  border: 1px solid;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const DurationTimer = styled.div`
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(6)} 0;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const QuestionsContainer = styled.div`
  width: 100%;
  margin-top: 40px;

  form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(6)};

    button {
      align-self: center;
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
  gap: ${({ theme }) => theme.spacing(2)};
`;

const Options = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  border: none;

  span {
    font-size: 14px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;
