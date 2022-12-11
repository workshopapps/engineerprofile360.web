import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button, Title } from "../../../../styles/reusableElements.styled";
import TableComponent from "../../molecules/TableComponent";
import NoData from "../../molecules/NoData";

import { More } from "iconsax-react";

const RecentAssessment = ({ assessments }) => {
  const [availableAssessments, setAvailableAssessments] = useState([]);

  useEffect(() => {
    setAvailableAssessments(assessments ? assessments : []);
  }, [assessments]);

  return (
    <>
      <AssessmentContainer>
        <AssessmentTitle>
          <Title
            as="h5"
            $size="24px"
            $weight="600"
            $lHeight="37.04px"
            $color="#323130"
          >
            Available Assessments
          </Title>
          <span>View all</span>
        </AssessmentTitle>
        <SortContainer></SortContainer>
      </AssessmentContainer>
      {availableAssessments.length > 0 ? (
        <TableComponent>
          <tbody>
            <tr>
              <th>#</th>
              <th>Department</th>
              <th>Course</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>

            {availableAssessments.map((assessment, index) => (
              <tr key={assessment.id}>
                <td>{index + 1}</td>
                <td>{assessment.department}</td>
                <td>{assessment.course}</td>
                <td>{assessment.grade}</td>
                <td>
                  <Link to="/employee/assessments">
                    <Button $variant="outlined" $color="#2667FF">
                      View Result
                    </Button>
                  </Link>
                  <More />
                </td>
              </tr>
            ))}
          </tbody>
        </TableComponent>
      ) : (
        <NoData text="Oops! You have no available assessment"></NoData>
      )}
    </>
  );
};

export default RecentAssessment;

const AssessmentContainer = styled.div`
  margin-top: ${({theme}) => theme.spacing(6)};
`;
const AssessmentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-wrap: wrap;

  span {
    color: #2667ff;
    border-bottom: 2px solid #2667ff;
    font-weight: 600;
    font-size: 20px;
    margin-left: auto;
  }
`;

const AssessmentSorting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid #939393;
    border-radius: 4px;

    span {
      font-size: 16px;
    }
  }
`;

const SortContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
