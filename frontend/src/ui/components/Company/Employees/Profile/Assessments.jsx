import React from "react";
import { useOutletContext } from "react-router-dom";
import { Button } from "../../../../../styles/reusableElements.styled";
import TableComponent from "../../../molecules/TableComponent";

const Assessments = () => {
  const {
    employee: { completed_assessment },
  } = useOutletContext();

  return (
    <TableComponent>
      <tbody>
        <tr>
          <th>#</th>
          <th>Assessment</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Points</th>
          <th>Percentage</th>
          <th>Result</th>
        </tr>
        {completed_assessment.map((assessment, index) => (
          <tr key={assessment.assessment_id}>
            <td>{index + 1}</td>
            <td>{assessment.assessment.name}</td>
            <td>{assessment.assessment.start_date}</td>
            <td>{assessment.assessment.end_date}</td>
            <td>{assessment.result}</td>
            <td>{`${(
              (assessment.correct_questions / assessment.total_questions) *
              100
            ).toFixed(2)}%`}</td>
            <td>
              <Button $variant="outlined" $color="#2667ff">
                View Result
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </TableComponent>
  );
};
export default Assessments;
