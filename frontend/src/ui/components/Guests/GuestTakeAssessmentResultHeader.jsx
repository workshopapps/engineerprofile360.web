import React from "react";
import styled from "styled-components";
import PageInfo from "../molecules/PageInfo";
import { FilterNav } from "./GuestTakeAssessmentHeader";

function GuestTakeAssessmentResultHeader({ correctA = "", totalQ = "" }) {
  return (
    <>
      <FilterWrapper>
        <FilterNav>
          <PageInfo
            breadcrumb={["Assessment", "Take Assessment"]}
            pageTitle=""
          />
        </FilterNav>
        <div>
          <p>
            <b>
              Here are your responses to your assessment and your overall score
            </b>
          </p>
        </div>

        <div className="filter-flex-score">
          <div>
            <h1>{`${correctA} / ${totalQ}`}</h1>
            Total Score
          </div>
        </div>
      </FilterWrapper>
    </>
  );
}

export default GuestTakeAssessmentResultHeader;

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

  .filter-flex-score {
    display: flex;
    padding: 20px;
    border: 1px solid;
    justify-content: center;
    text-align: center;
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

    .filter-flex-score {
      width: 100%;
    }
  }
`;
