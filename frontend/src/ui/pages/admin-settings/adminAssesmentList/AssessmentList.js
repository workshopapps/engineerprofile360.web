import React from "react";
import styled from "styled-components";
import { MainContainer } from "../../../../styles/reusableElements.styled";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import addCircle from "../../../../assets/icons/app/add-circle.svg";
import dashboard from "../../../../assets/icons/app/dashboard.svg";
import hamburger from "../../../../assets/icons/app/hamburger.svg";

export default function AssessmentList() {
  return (
    <>
      <Header />
      <MainContainer>
        <Sidebar />
        <AssessmentDiv>
          <AssesmentNav>
            <div className="assesment-toggler">
              <div>
                <p>
                  Assessments {" >  "} <span>Assessments list</span>
                </p>
              </div>
              <div className="assesment-toggler-div">
                <span>Available (60)</span>
                <span>Completed (47)</span>
              </div>
            </div>
            <div className="assessment-button-div">
              <button id="create__assessment">
                <img src={addCircle} alt="" />
                Create New Assesment
              </button>
              <button id="employee__send">Send To Employee</button>
            </div>
          </AssesmentNav>
          <AssessmentListDiv>
            <div className="assessment_filter">
              <div>
                <button id="assessment-type">
                  {" "}
                  <p>Assessment Type</p> <span>⌵</span>{" "}
                </button>
              </div>
              <div className="assessment-sort">
                <button>
                  <p>Sort by Date</p> <span>⌵</span>
                </button>
                <img src={dashboard} alt="dashboard" />
                <img src={hamburger} alt="dashboard" />
              </div>
            </div>
            <div className="assessments">
              <div className="assessments-header">
                <p>#</p>
                <p>Department</p>
                <p>Course</p>
                <p>Duration</p>
                <p>Deadline</p>
              </div>
              <div className="assessments-list-div">
                <div>
                  <p>1</p>
                  <p>Introduction to Software Engineering</p>
                  <p>Python 101</p>
                  <p>30 mins</p>
                  <p>25th Apr 2022</p>
                  <button>View Assessment</button>
                </div>
                <div>
                  <p>1</p>
                  <p>Introduction to Software Engineering</p>
                  <p>Python 101</p>
                  <p>30 mins</p>
                  <p>25th Apr 2022</p>
                  <button>View Assessment</button>
                </div>
                <div>
                  <p>1</p>
                  <p>Introduction to Software Engineering</p>
                  <p>Python 101</p>
                  <p>30 mins</p>
                  <p>25th Apr 2022</p>
                  <button>View Assessment</button>
                </div>
                <div>
                  <p>1</p>
                  <p>Introduction to Software Engineering</p>
                  <p>Python 101</p>
                  <p>30 mins</p>
                  <p>25th Apr 2022</p>
                  <button>View Assessment</button>
                </div>
              </div>
            </div>
          </AssessmentListDiv>
        </AssessmentDiv>
      </MainContainer>
    </>
  );
}

export const AssessmentDiv = styled.div`
  width: 95%;
  display: grid;
  grid-template-rows: 105px auto;
`;

export const AssessmentListDiv = styled.div`
  display: grid;
  grid-template-rows: 55px auto;

  button {
    padding: 0 3%;
    border: none;
    background: transparent;
    border: 1px solid #8a8886;
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .assessments {
    margin-top: 1%;
    grid-template-rows: 1fr auto;
  }

  .assessments-header {
    display: grid;
    grid-template-columns: 9% 30% 12% 12% 12% 25%;
    background: #f8fbfd;
    padding: 0.5%;

    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #605e5c;
    }
  }

  .assessments-list-div div:last-child {
    position: relative;
  }

  .assessments-list-div > div {
    display: grid;
    grid-template-columns: 9% 30% 12% 12% 12% 25%;
    margin: 2% 0;

    button {
      border: 1px solid #2667ff;
      color: #2667ff;
      width: 20%;
      margin-top: -1%;
      height: 2rem;
      font-size: 14px;
      position: absolute;
      right: 2%;
    }

    p {
      font-size: 14px;
      line-height: 20px;
      color: #323130;
    }
  }

  .assessment-sort {
    display: flex;
    gap: 7%;

    button {
      width: 139px;
      height: 35px;
    }
  }

  .assessment_filter {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 178px;
      height: 35px;
      p {
        font-size: 14px;
      }
    }
  }
`;

export const AssesmentNav = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  padding-bottom: 0.5%;
  border-bottom: 1px solid #8a8886;

  .assessment-button-div {
    display: flex;
    padding-top: 4%;
    /* align-items: center; */

    button {
      display: flex;
      font-size: 14px;
      justify-content: space-around;
      align-items: center;
      border: none;
      outline: none;
      margin: 0 3.5%;
      border-radius: 4px;
      gap: 10px;
    }

    #create__assessment {
      padding: 12px 20px;
      gap: 10px;
      width: 237px;
      height: 48px;
      background: #2667ff;
      color: #fff;
    }

    #employee__send {
      padding: 10px 16px;
      width: 171px;
      height: 42px;
      margin-top: 1%;
      border: 1px solid #2667ff;
      background: #fff;
      color: #2667ff;
    }
  }

  .assesment-toggler {
    display: grid;
    grid-template-rows: 50% 50%;
    padding: 15px;
    padding-bottom: 3px;
    width: 100%;

    div {
      padding-top: 5px;

      p {
        font-size: 16px;
        color: #605e5c;
      }

      span {
        margin-right: 2%;
        font-weight: 600;
        font-size: 14px;
        color: #323130;
      }
    }

    .assesment-toggler-div {
      padding-bottom: 5px;
      display: flex;
      align-items: flex-end;

      span {
        font-weight: 600;
        font-size: 14px;
      }

      span:first-of-type {
        color: #2667ff;
      }
    }
  }
`;
