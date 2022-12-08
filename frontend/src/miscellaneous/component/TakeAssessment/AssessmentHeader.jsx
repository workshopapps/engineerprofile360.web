import React from "react";
import TimerSvg from "../../../../assets/icons/app/timer-start.svg";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import PageInfo from "../../src/ui/components/molecules/PageInfo";

function UserTakeAssessmentHeader() {
  const [time, setTime] = useState((1 / 2) * 60 * 60 * 1000);
  useEffect(() => {
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
        <div className="filter-nav">
          <PageInfo
            breadcrumb={["Assessment", "Take Assessment"]}
            pageTitle="Take Assessment"
          />
          <Outlet />
          <div>
            <p>Login ID: 12345</p>
          </div>
        </div>
        <div>
          <p>
            <span className="text-muted">Course :</span>Design thnking Process
          </p>
          <p>
            <span className="text-muted">Department :</span>UX Design
          </p>
        </div>

        <div>
          <p>
            <span className="text-muted">Duration :</span> 30 Minutes
          </p>
          <p>
            <span className="text-muted">Deadline :</span>{" "}
            {new Date().toDateString()}
          </p>
        </div>

        <div className="filter-flex">
          <img src={TimerSvg} alt="Filter" width={40} />
          <div>
            {getFormattedTime(time)}
            <br /> Timer
          </div>
          <div></div>
        </div>
      </FilterWrapper>

      <Description>
        <b>Description:</b> This assessment was created to ensure that the
        participant of this test understands the core basics of software
        engineering. This test consists of four stages with 5 questions each.
        The stages include basic general knowledge, backend knowledge, frontend
        knowledge and DevOps Knowledge.
      </Description>
    </>
  );
}

export default UserTakeAssessmentHeader;
const FilterWrapper = styled.div`
  display: flex;
  width: 100% !important;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .text-muted {
    opacity: 0.3;
    margin-right: 20px;
  }

  .filter-nav {
    display: flex;
    width: 100% !important;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  p {
    margin-bottom: 20px;
    font-size: 16px;
    color: #323130;
  }

  span {
    font-size: 16px;
  }

  .filter-flex {
    display: flex;
    width: 30%;
    padding: 20px;
    border: 1px solid;
    justify-content: space-between;
  }

  @media screen and (max-width: 767px) {
    text-align: left;

    .filter-flex {
      width: 100%;
    }
  }
`;
const Description = styled.div`
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
