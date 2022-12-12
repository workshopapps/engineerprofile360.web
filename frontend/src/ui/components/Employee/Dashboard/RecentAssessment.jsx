import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button, Title } from "../../../../styles/reusableElements.styled";
import TableComponent from "../../molecules/TableComponent";
import NoData from "../../molecules/NoData";

const RecentAssessment = ({ assessments }) => {
  const [availableAssessments, setAvailableAssessments] = useState([]);

  useEffect(() => {
    setAvailableAssessments(assessments ? assessments : []);
  }, [assessments]);

  return (
    <>
      <AssessmentContainer>
        <AssessmentListTitle>
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
        </AssessmentListTitle>
      </AssessmentContainer>
      {availableAssessments.length > 0 ? (
        <TableComponent>
          <tbody>
            <tr>
              <th>#</th>
              <th>Assessment name</th>
              <th>Starting</th>
              <th>Ending</th>
              <th>Actions</th>
            </tr>

            {availableAssessments.map((assessment, index) => (
              <tr key={assessment.id}>
                <td>{index + 1}</td>
                <td>{assessment.name}</td>
                <td>
                  {assessment.start_date} {assessment.start_time}
                </td>
                <td>
                  {assessment.end_date} {assessment.end_time}
                </td>
                <td>
                  <Link to="/employee/assessments">
                    <Button $variant="outlined" $color="#2667FF">
                      View Result
                    </Button>
                  </Link>
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
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

const AssessmentListTitle = styled.div`
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
