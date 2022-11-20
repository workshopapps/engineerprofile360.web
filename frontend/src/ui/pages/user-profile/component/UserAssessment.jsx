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
      <AssessmentCard>
        <h2>Recent Assessments</h2>
      </AssessmentCard>
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

  button {
    background-color: transparent;
    border: 1px solid #2667ff;
    border-radius: 2px;
    padding: 6px 20px;
    color: #2667ff;
  }
`

const Graph = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fbfd;
  border-radius: 8px;
  padding: 48px 28px;

  img {
    width: 65%;
  }
`

const AssessmentCard = styled.div`
  h2 {
  }
`
