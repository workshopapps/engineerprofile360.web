import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useOutletContext } from "react-router-dom";

import { Button } from "../../../../../styles/reusableElements.styled";
import TableComponent from "../../../molecules/TableComponent";
import NoData from "../../../molecules/NoData";
import moment from "moment";

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
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.department?.name}</td>
                  <td>
                    {moment(item.start_date).format("yy-MM-DD")} -{" "}
                    {moment(item.start_time, "hh:mm").format("hh:mm a")}
                  </td>
                  <td>
                    {moment(item.end_date).format("yy-MM-DD")} -{" "}
                    {moment(item.end_time, "hh:mm").format("hh:mm a")}
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
