import React, { useState } from "react"
import styled from "styled-components"
import AssessmentList from "../Others/AssessmentList"

const Container = styled.div`
  box-sizing: border-box;
  margin-top: 1rem;

  #{&} > div {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }

  #{&} button {
    display: flex;
    align-items: center;
  }

  #{&} h5 {
    font-size: 1.75rem;
    color: #3d3d3d;
  }
`

const AssessmentType = styled.div`
  margin-top: .7rem;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  #{&} > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 768px) {
      width: 100%;
      justify-content: space-between;
    }
  }
`

const ViewAll = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  color: #4e4e4e;
  font-size: 1rem;
`

const AssessButton = styled.button`
  width: 10rem;
  justify-content: space-between;
  padding: 0.5em;
  background: none;
  border: 0.15rem solid rgba(187, 187, 187, 0.5);
`

const StaffUser = () => {
  const [showDetails, setShowDetails] = useState(false)

  function ToggleDetails() {
    setShowDetails(!showDetails)
  }

  return (
    <Container>
      <div>
        <h5>Available Assessment </h5>
        <ViewAll>View all</ViewAll>
      </div>

      <AssessmentType>
        <AssessButton onClick={ToggleDetails}>
          Assessment type{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5984 7.45801L11.1651 12.8913C10.5234 13.533 9.47344 13.533 8.83177 12.8913L3.39844 7.45801"
              stroke="#605E5C"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </AssessButton>

        <div>
          <AssessButton>
            Sort By Date{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5984 7.45801L11.1651 12.8913C10.5234 13.533 9.47344 13.533 8.83177 12.8913L3.39844 7.45801"
                stroke="#605E5C"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </AssessButton>

          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                stroke="#323130"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                stroke="#323130"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                stroke="#323130"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                stroke="#323130"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7.6875H21"
              stroke="#292D32"
              strokeWidth="0.8125"
              strokeLinecap="round"
            />
            <path
              d="M3 13H21"
              stroke="#292D32"
              strokeWidth="0.8125"
              strokeLinecap="round"
            />
            <path
              d="M3 18.3125H21"
              stroke="#292D32"
              strokeWidth="0.8125"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </AssessmentType>

      {showDetails && <AssessmentList />}
    </Container>
  )
}

export default StaffUser
