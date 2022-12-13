import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PageInfo from "../../../../molecules/PageInfo";
import timer from "../assets/timer-start.png";

function ViewAssessmentHeader({
  title,
  loginId,
  course,
  department,
  duration,
  deadline,
}) {
  const [time, setTime] = React.useState((1 / 2) * 60 * 60 * 1000);
  React.useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));

    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalMinutes % 60);
    let Hours = parseInt(totalHours % 24);

    return `${Hours}: ${minutes}: ${seconds}`;
  };
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
          <div>
            {getFormattedTime(time)}
            <br /> Timer
          </div>
          <div></div>
        </FilterFlex>
      </FilterWrapper>

      <DescriptionMain>
        <b>Description:</b> This assessment was created to ensure that the
        participant of this test understands the core basics of software
        engineering. This test consists of four stages with 5 questions each.
        The stages include basic general knowledge, backend knowledge, frontend
        knowledge and DevOps Knowledge.
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
