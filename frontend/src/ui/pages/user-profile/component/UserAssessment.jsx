import React from "react"
import styled from "styled-components"

import spiderweb from "../../../../assets/icons/app/spiderweb.svg"

const UserAssessment = () => {
  return (
    <AssessmentContainer>
      <GraphContainer>
        <Graph>
          <img src={spiderweb} alt="" />
        </Graph>
        <button>Recommend Staff for Promotion</button>
      </GraphContainer>
      <AssessmentCardContainer>
        <AssessmentCard>
          <h2>Recent Assessments</h2>
          <Assessment>
            <div>
              <p>Design Research 203</p>
              <p>Completed</p>
            </div>
            <div>
              <p>Prototyping And Flow 205</p>
              <p>Completed</p>
            </div>
            <div>
              <p>User experience on WebApp</p>
              <p>Completed</p>
            </div>
            <div>
              <p>User experience on Mobile</p>
              <p>Completed</p>
            </div>
          </Assessment>
        </AssessmentCard>
        <button>View Full Profile</button>
      </AssessmentCardContainer>
    </AssessmentContainer>
  )
}

export default UserAssessment

const AssessmentContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  margin-top: 25px;
`
const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  height: 100%;

  button {
    background-color: transparent;
    border: 1px solid #2667ff;
    border-radius: 2px;
    height: 6vh;
    color: #2667ff;
    font-size: 18px;
    cursor: pointer;
  }
`

const Graph = styled.div`
  /* width: 100%; */

  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fbfd;
  border-radius: 8px;
  padding: 84px 18px;

  img {
    width: 50%;
  }
`

const AssessmentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  width: 45%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6vh;
    border: none;
    background: #2667ff;
    border-radius: 2px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    width: 108%;
  }
`

const AssessmentCard = styled.div`
  font-family: "inter";
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 8px;
  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    color: ${({ theme }) => theme.palette.grey.oneThrity};
    color: #605e5c;
    padding: 10px;
  }
`

const Assessment = styled.div`
  width: 108%;
  margin-top: 10px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px 19px;
    gap: 10px;
    margin-bottom: 12px;
    margin-left: 10px;
    background-color: #faf9f8;
    border-radius: 4px;
    font-family: "Inter";

    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      color: #323130;
    }

    p:last-child {
      color: #107c10;
      font-size: 16px;
    }
  }

  div:first-child {
    background-color: #f8fbfd;
  }
`
