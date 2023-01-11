import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useOutletContext } from "react-router-dom";

import { Button } from "../../../../../styles/reusableElements.styled";
import TableComponent from "../../../molecules/TableComponent";
import NoData from "../../../molecules/NoData";

import { EmployeeAssessmentResult } from "../..";
import moment from "moment";

const Completed = () => {
  const [completedAssessments, setCompletedAssessments] = useState([]);
  const [assessmentId, setAssessmentId] = useState();
  const [modal, setModal] = useState(false);
  const { completed } = useOutletContext();

  useEffect(() => {
    setCompletedAssessments(completed ? completed : []);
  }, [completed]);

  const handleClick = (assessment_id) => {
    setAssessmentId(assessment_id);
    setModal(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <CompletedContainer>
        {completedAssessments.length > 0 ? (
          <>
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
                    <td>{item.assessment.department?.name}</td>
                    <td>
                      {moment(item.assessment.start_date).format("yy-MM-DD")} -{" "}
                      {moment(item.assessment.start_time, "hh:mm").format(
                        "hh:mm a"
                      )}
                    </td>
                    <td>
                      {moment(item.assessment.end_date).format("yy-MM-DD")} -{" "}
                      {moment(item.assessment.end_time, "hh:mm").format(
                        "hh:mm a"
                      )}
                    </td>
                    <td>
                      <Button
                        $variant="outlined"
                        $color="#2667ff"
                        onClick={() => handleClick(item.assessment.id)}
                      >
                        View Result
                      </Button>
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
          <NoData text="Oops! No Completed Assessments"></NoData>
        )}
      </CompletedContainer>
    </>
  );
};

export default Completed;

const CompletedContainer = styled.div`
  width: 100%;
  min-height: 130vh;
  height: auto;
  overflow: auto;
`;
