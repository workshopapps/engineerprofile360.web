import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useOutletContext } from "react-router-dom";

import { Button } from "../../../../../styles/reusableElements.styled";
import TableComponent from "../../../molecules/TableComponent";
import NoData from "../../../molecules/NoData";

const Available = () => {
  const [availableAssessments, setAvailableAssessments] = useState([]);
  const { available } = useOutletContext();

  useEffect(() => {
    setAvailableAssessments(available ? available : []);
  }, [available]);

  return (
    <>
      <AvailableContainer>
        {availableAssessments.length > 0 ? (
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
          <NoData text="Oops! No Available Assessments"></NoData>
        )}
      </AvailableContainer>
    </>
  );
};

export default Available;

const AvailableContainer = styled.div`
  width: 100%;
`;
