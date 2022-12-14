import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PageInfo from "../../../../molecules/PageInfo";
import timer from "../assets/timer-start.png";

//Duration
export const AssessmentTimer = (timer) => {
  const duration =
    ((timer?.end_time ? Number(timer?.end_time?.split(":").join("")) : 0) -
      (timer?.start_time
        ? Number(timer?.start_time?.split(":").join(""))
        : 0)) /
    60;
  return duration;
};

function ViewAssessmentHeader({
  title,
  loginId,
  course,
  department,
  duration,
  deadline,
}) {
  return (
    <>
      <FilterWrapper>
        <FilterNav>
          <PageInfo breadcrumb={["Assessment", `${title}`]} pageTitle={title} />
          <Outlet />
          {loginId ? (
            <div>
              <p>Login ID: 12345</p>
            </div>
          ) : (
            ""
          )}
        </FilterNav>
        <DetailContainer>
          <p>
            <TextMuted>Course :</TextMuted> {course}
          </p>
          <p>
            <TextMuted>Department :</TextMuted>
            {department}
          </p>
        </DetailContainer>

        <DetailContainer>
          <p>
            <TextMuted>Duration :</TextMuted> {duration}
          </p>
          <p>
            <TextMuted>Deadline :</TextMuted> {deadline}
          </p>
        </DetailContainer>

        <FilterFlex>
          <img src={timer} alt="Filter" width={40} />
          <DurationTimer>
            {duration}
            <br /> Timer
          </DurationTimer>
          <div></div>
        </FilterFlex>
      </FilterWrapper>

      <DescriptionMain>
        <b>Description:</b> {course}
      </DescriptionMain>
    </>
  );
}

export default ViewAssessmentHeader;

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
