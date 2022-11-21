import React from "react"
import styled from "styled-components"

const EmployeeList = () => {
  return (
    <OtherEmployeeListContainer>
      <h1>Other Employee in this Department</h1>
      <p>See all</p>
    </OtherEmployeeListContainer>
  )
}

export default EmployeeList

const OtherEmployeeListContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    color: #605e5c;
  }
`
