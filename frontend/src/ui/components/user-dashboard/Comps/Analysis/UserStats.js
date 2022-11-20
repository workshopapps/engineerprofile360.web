import React from "react"
import styled from "styled-components"
import WelcomeHead from "./WelcomeHead"

import ChartDiagram from "../Images/Frame 3467026.png"

const Container = styled.div`
  height: 384px;
  margin-bottom: -3rem;

  @media (max-width: 768px) {
    height: 100%;
  }
`

const Stats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8fcfe;
  margin-top: -0.8rem;
  height: 70%;
  border: 0.12em solid #c7e0f4;
  border-radius: 0.8rem;
  gap: 5rem;
  padding: 1em 4em;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    margin-top: 1.7rem;
  }
`

const SkillsGrade = styled.div`
  box-sizing: border-box;
  border-radius: 0.8rem;
  background-color: #ffffff;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 2em;
  flex-grow: 2;

  @media (max-width: 768px) {
    width: 100%;
  }

  #{&} > p {
    margin-block: 0.8em;
    font-size: 1.25rem;
    color: #d9d9d9;
    text-align: left;
    font-weight: lighter;
  }
`

const Skill = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;

  #{&} div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    padding: 0 #{&} p {
      font-size: 0.8rem;
      color: #142245;
      margin-top: -0.2em;
    }
  }
`

const Chart = styled.div`
  width: 30%;
  background: #ebf4f9;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  #{&} img {
    display: inline-block;
    width: 15rem;
    // height: 70%;
  }
`

const UserStats = () => {
  return (
    <Container>
      <WelcomeHead />
      <Stats>
        <SkillsGrade>
          <p>Your Skill Rating</p>
          <Skill>
            <div>
              <p>Communication</p>
              <p>80</p>
            </div>

            <div>
              <p>Problem Solving</p>
              <p>70</p>
            </div>

            <div>
              <p>Adaptability</p>
              <p>60</p>
            </div>

            <div>
              <p>Leadership skill</p>
              <p>60</p>
            </div>

            <div>
              <p>General Knowledge</p>
              <p>70</p>
            </div>

            <div>
              <p>Overall Knowledge</p>
              <p>70</p>
            </div>
          </Skill>
        </SkillsGrade>

        <Chart>
          <img src={ChartDiagram} alt="Chart" />
        </Chart>
      </Stats>
    </Container>
  )
}

export default UserStats
