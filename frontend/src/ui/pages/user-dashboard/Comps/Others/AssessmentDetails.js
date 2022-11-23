import React from "react"
import styled from "styled-components"

const Details = styled.div`
  display: grid;
  grid-template-columns: 5rem repeat(4, 1fr);
  width: 100%;
  padding: 0.5em 0;
  place-items: center;

  #{&} div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;

    #{&} svg {
      cursor: pointer;
    }

    #{&} button {
      padding: 0.7rem 1em;
      background: #ffffff;
      font-size: 1rem;
      color: #141ae9;
      width: 60%;
      border-radius: 0.3rem;
      border: 0.15rem solid #141ae9;
      display: flex;
      justify-content: center;
      cursor: pointer;

      @media (max-width: 768px) {
        font-size: 0.7rem;
        width: 100%;
        padding: 0.3rem 0.3em;
        margin-right: 1em;
        border: 0.05rem solid #141ae9;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1rem repeat(4, 1fr);

    #{&} > p {
      font-size: 0.7rem;
    }
  }
`

const AssessmentDetails = () => {
  return (
    <Details>
      <p>1</p>
      <p>Ux Engineer</p>
      <p>Design Thinking 901</p>
      <p>83.9%</p>
      <div>
        <button>View result </button>
        <svg
          width="5"
          height="24"
          viewBox="0 0 5 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="3" r="2.5" fill="#1A1A1A" />
          <circle cx="2.5" cy="12" r="2.5" fill="#1A1A1A" />
          <circle cx="2.5" cy="21" r="2.5" fill="#1A1A1A" />
        </svg>
      </div>
    </Details>
  )
}

export default AssessmentDetails
