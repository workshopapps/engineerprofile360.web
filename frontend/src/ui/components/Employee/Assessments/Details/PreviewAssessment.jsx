import { Timer } from "iconsax-react";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../../../styles/reusableElements.styled";
import PageInfo from "../../../molecules/PageInfo";

const PreviewAssessment = () => {
  return (
    <>
      <PageInfo
        breadcrumb={[
          "assessment",
          "available assessments",
          "preview assessment",
        ]}
        pageTitle="Preview Assessment"
      />
      <FilterWrapper>
        <DetailContainer>
          <p>
            <TextMuted>Course :</TextMuted>
          </p>
          <p>
            <TextMuted>Department :</TextMuted>
          </p>
        </DetailContainer>

        <DetailContainer>
          <p>
            <TextMuted>Begins :</TextMuted>
          </p>
          <p>
            <TextMuted>Deadline :</TextMuted>
          </p>
        </DetailContainer>

        <FilterFlex>
          <Timer size="32" color="#323130" />
          <DurationTimer>
            <br />
            Timer
          </DurationTimer>
          <div></div>
        </FilterFlex>
      </FilterWrapper>
      <DescriptionMain>
        <b>Description:</b>
      </DescriptionMain>

      <Outlet />

      <Buttons>
        <Link to="/employee/assessment">
          <Button $variant="outlined" $color="#2667ff">
            Cancel
          </Button>
        </Link>
        <Button $weight="400">Take Assessment</Button>
      </Buttons>
    </>
  );
};

export default PreviewAssessment;

const FilterWrapper = styled.div`
  display: flex;
  width: 100% !important;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  p {
    margin-bottom: 20px;
    font-size: 16px;
    color: #323130;
  }

  span {
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    text-align: left;
  }
`;

export const FilterNav = styled.div`
  display: flex;
  width: 100% !important;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: -28px;
`;
const DescriptionMain = styled.div`
  width: 100%;
  margin-top: 10px;
  border-top: 1px solid #323130;
  font-size: 16px;
  line-height: 22px;
  padding: 20px 0;
  border-bottom: 1px solid #323130;

  @media screen and (max-width: 767px) {
    text-align: left;
  }
`;

const DetailContainer = styled.div``;

const TextMuted = styled.span`
  opacity: 0.3;
  margin-right: 20px;
`;

const FilterFlex = styled.div`
  display: flex;
  width: 30%;
  padding: 20px;
  border: 1px solid;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const DurationTimer = styled.div`
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(6)} 0;
  gap: ${({ theme }) => theme.spacing(2)};
`;
