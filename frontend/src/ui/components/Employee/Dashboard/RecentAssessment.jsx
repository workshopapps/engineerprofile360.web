import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button, Title } from "../../../../styles/reusableElements.styled";
import TableComponent from "../../molecules/TableComponent";
import NoData from "../../molecules/NoData";
import { EmployeeAssessmentResult } from "..";

const RecentAssessment = ({ assessments }) => {
  const [availableAssessments, setAvailableAssessments] = useState([]);
  const [assessmentId, setAssessmentId] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setAvailableAssessments(assessments ? assessments : []);
  }, [assessments]);

  const handleClick = (assessment_id) => {
    setAssessmentId(assessment_id);
    setModal(true);
    window.scrollTo(0, 0);
  };

  console.log(assessments);

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
          <Link to="/employee/assessment">
            <span>View all</span>
          </Link>
        </AssessmentListTitle>
      </AssessmentContainer>
      {availableAssessments.length > 0 ? (
        <>
          <TableComponent>
            <tbody>
              <tr>
                <th>#</th>
                <th>Assessment</th>
                <th>Department</th>
                <th>Start Date</th>
                <th>Deadline</th>
                <th></th>
              </tr>

              {availableAssessments.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.department?.name}</td>
                  <td>
                    {item.start_date} - {item.start_time}
                  </td>
                  <td>
                    {item.end_date} - {item.end_time}
                  </td>
                  <td>
                    <Link to={`/employee/assessment/${item.id}`}>
                      <Button $variant="outlined" $color="#2667ff">
                        Take Test
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableComponent>
          {modal && (
            <EmployeeAssessmentResult
              assessment_id={assessmentId}
              setModal={setModal}
            />
          )}
        </>
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

  a {
    margin-left: auto;
  }

  span {
    color: #2667ff;
    border-bottom: 2px solid #2667ff;
    font-weight: 600;
    font-size: 20px;
    margin-left: auto;
  }
`;
