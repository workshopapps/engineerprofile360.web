import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useOutletContext } from "react-router-dom";

import { Button } from "../../../../../styles/reusableElements.styled";
import TableComponent from "../../../molecules/TableComponent";
import NoData from "../../../molecules/NoData";

const Completed = () => {
  const [completedAssessments, setCompletedAssessments] = useState([]);
  const { completed } = useOutletContext();

  useEffect(() => {
    setCompletedAssessments(completed ? completed : []);
  }, [completed]);

  return (
    <>
      <CompletedContainer>
        {completedAssessments.length > 0 ? (
          <TableComponent>
            <tbody>
              <tr>
                <th>#</th>
                <th>Assessment</th>
                <th>Department</th>
                <th>Starts</th>
                <th>Deadline</th>
                <th></th>
              </tr>
              {completedAssessments.map((item, index) => (
                <tr key={item.assessment.id}>
                  <td>{index + 1}</td>
                  <td>{item.assessment.name}</td>
                  <td>{item.assessment.department.name}</td>
                  <td>
                    {item.assessment.start_date} - {item.assessment.start_time}
                  </td>
                  <td>
                    {item.assessment.end_date} - {item.assessment.end_time}
                  </td>
                  <td>
                    <Link to="/">
                      <Button $variant="outlined" $color="#2667ff">
                        View Result
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableComponent>
        ) : (
          <NoData text="Oops! No Completed Assessments"></NoData>
        )}
      </CompletedContainer>
    </>
  );
};

export default Completed;

const CompletedContainer = styled.div`
  width: 100%;
`;
