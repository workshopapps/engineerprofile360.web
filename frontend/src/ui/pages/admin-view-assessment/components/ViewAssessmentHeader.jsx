import React from "react";
import styled from "styled-components";
import pointer from "../assets/pointer.png";
import timer from "../assets/timer-start.png";
import { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar";

function ViewAssessmentHeader() {
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
      <WrapperDiv>
        <Active>
          <h5>Assessment</h5>
          <img src={pointer} alt="arrow-right-pointer" />
          <h4>View Assessment</h4>
        </Active>
        <HeaderContainer>
          <TextDiv>
            <h2>Preview Assessment</h2>
            <TextWrapper>
              <div>
                <p>
                  Course : <span>Design thinking Process</span>
                </p>
                <p>
                  Department : <span>UX Design</span>
                </p>
              </div>
              <div>
                <p>
                  Duration : <span>30 Minutes</span>
                </p>
                <p>
                  Deadline : <span>Tue 3th, Nov 22</span>
                </p>
              </div>
            </TextWrapper>
          </TextDiv>
          <TimerDiv>
            <img src={timer} alt="count-down timer" />
            <div>
              <p> {getFormattedTime(time)}</p>
              <span>Timer</span>
            </div>
          </TimerDiv>
        </HeaderContainer>
        <Description>
          <h5>
            Description :
            <span>
              This assessment was created to ensure that the participant of this
              test understands the core basics of software engineering. This
              test consists of four stages with 5 questions each. The stages
              include basic general knowledge, backend knowledge, frontend
              knowledge and DevOps Knowledge.
            </span>
          </h5>
        </Description>
      </WrapperDiv>
    </>
  );
}

export default ViewAssessmentHeader;

export const Container = styled.section`
  display: flex;
  justify-content: flex-end;
  max-width: 1440px;
`;
export const WrapperDiv = styled.section`
  width: 100%;
`;

export const Active = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 13px;
  h5 {
    color: #605e5c;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }
  img {
    width: 5.79px;
    height: 11.52px;
    margin: 0 12px;
  }
  h4 {
    color: #20151e;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextDiv = styled.div`
  width: 695px;

  height: 97px;

  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    color: #323130;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 16px;
    line-height: 19px;
    color: inherit;
    opacity: 0.3;
    padding: 3px 0;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 19.36px;
    color: inherit;
    opacity: 0.6;
  }
`;

export const TimerDiv = styled.div`
  width: 239px;
  height: 97px;
  border: 1px solid #8a8886;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 748px) {
    flex-direction: row;
  }

  img {
    width: 29.17px;
    height: 29.17px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Description = styled.div`
  border-top: 1px solid #8a8886;
  border-bottom: 1px solid #8a8886;

  width: 100%;
  padding: 10px;
  margin: 60px 0 15px;
  @media (min-width: 748px) {
    margin: 15px 0;
  }

  h5 {
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    color: #323130;
  }

  span {
    font-size: 14px;
    line-height: 20x;
    font-weight: 400;
    color: grey;
  }
`;
