import React from "react"
import styled from "styled-components"
import AssessmentDetails from "./AssessmentDetails"

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

const TopChild = styled.div`
  background: #f8fbfd;
  display: grid;
  grid-template-columns: 5rem repeat(4, 1fr);
  width: 100%;
  place-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1rem repeat(4, 1fr);

    #{&} > p {
      font-size: 0.7rem;
    }
  }
`

const ListContainer = styled.div`
  max-height: 20rem;
  overflow-y: auto;
`

const AssessmentList = () => {
  return (
    <Container>
      <TopChild>
        <p>#</p>
        <p>Department</p>
        <p>Course</p>
        <p>Grade</p>
        <p>Actions</p>
      </TopChild>

      <ListContainer>
        <AssessmentDetails />
        <AssessmentDetails />
        <AssessmentDetails />
      </ListContainer>
    </Container>
  )
}

export default AssessmentList
