import React, { useState, useEffect } from "react";
import { Outlet, useParams, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import axios from "../../../../../api/axios";
import { Timer } from "iconsax-react";
import { OverlayLoader } from "../../../../../styles/reusableElements.styled";

import PageInfo from "../../../molecules/PageInfo";
import { showErrorToast } from "../../../../../helpers/helper";
import moment from "moment";

const PreviewAssessment = () => {
  const { assessment_id } = useParams();
  const location = useLocation();

  const [info, setInfo] = useState({});
  const [questions, setQuestions] = useState([]);
  const [response, setResponse] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState();

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (info?.completed) {
  //     showErrorToast("Invalid Request");
  //     navigate(-1);
  //   }
  // }, []);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const ENDPOINTS = [
          axios.get(`question/assessment/${assessment_id}`),
          axios.get(`assessment/single/${assessment_id}`),
        ];
        await Promise.all(ENDPOINTS).then((data) => {
          const question = data[0]?.data?.data;
          const arr = [];
          for (let i = 0; i < question.length; i++) {
            arr.push({ question_id: question[i].id, answer: [] });
          }
          console.log(data);

          setQuestions(question);
          setInfo(data[1]?.data?.data);
          setResponse(arr);
        });

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        if (!err.response) showErrorToast("No Server Response");
        else showErrorToast(err.response.data.message);
      }
    };

    getDetails();
  }, [assessment_id]);

  const datesDiff = Math.abs(
    new Date(`${info?.start_date} ${info?.start_time}`) -
      new Date(`${info?.end_date} ${info?.end_time}`)
  );

  let timeDuration = moment
    .utc(
      moment(info?.end_time, "HH:mm").diff(moment(info?.start_time, "HH:mm"))
    )
    .format("HH:mm:ss");

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
              <p>
                <TextMuted>Questions :</TextMuted>
                {questions ? questions.length : ""}
              </p>
            </DetailContainer>

            <DetailContainer>
              <p>
                <TextMuted>Begins :</TextMuted>
                {info?.start_date ? info.start_date : ""} -{" "}
                {info?.start_time
                  ? moment(info.start_time, "hh:mm").format("hh:mm a")
                  : ""}
              </p>
              <p>
                <TextMuted>Deadline :</TextMuted>
                {info?.end_date ? info.end_date : ""} -{" "}
                {info?.end_time
                  ? moment(info.end_time, "hh:mm").format("hh:mm a")
                  : ""}
              </p>
              <p>
                <TextMuted>Duration :</TextMuted>
                {/* {Math.floor(datesDiff / 1000 / (60 * 60))} mins */}
                {timeDuration}
              </p>
            </DetailContainer>

            <FilterFlex>
              <Timer size="32" color="#323130" />
              <DurationTimer>
                {/* {Math.floor(datesDiff / 1000 / (60 * 60))} mins */}
                {/* {timeDuration} */}
                {/* {durationTime} */}
                {timeDuration}
                <br />
                Timer
              </DurationTimer>
              <div></div>
            </FilterFlex>
          </FilterWrapper>
          <DescriptionMain>
            <b>Description:</b> {info?.name ? info.name : ""}
          </DescriptionMain>

          <Outlet
            context={{
              questions,
              response,
              info,
              setIsSubmitted,
              setIsLoading,
            }}
          />
        </>
      ) : (
        <OverlayLoader contained>
          <div></div>
          {isSubmitted ? "Submiting Assessment..." : "Preparing Assessment..."}
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
