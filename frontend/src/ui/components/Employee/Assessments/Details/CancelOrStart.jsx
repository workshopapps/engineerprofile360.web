import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, Link, useOutletContext } from "react-router-dom";
import { Button } from "../../../../../styles/reusableElements.styled";

const CancelOrStart = () => {
  const { assessment_id } = useParams();
  const { info } = useOutletContext();
  console.log(info);
  const startTime = info?.start_time;
  const startDate = info?.start_date;
  const endTime = info?.end_time;
  const endDate = info?.end_date;
  const [beginState, setBeginState] = useState(false);
  const [endState, setEndState] = useState(false);

  const begin = new Date(`${startDate} ${startTime}`);
  const end = new Date(`${endDate} ${endTime}`);

  useEffect(() => {
    if (begin <= new Date()) {
      //set begin state to true
      setBeginState(true);
    }

    if (end < new Date()) {
      //set end date to true
      setEndState(true);
    }
  }, [begin, end]);

  return (
    <Buttons>
      <Link to="/employee/assessment">
        <Button $variant="outlined" $color="#2667ff">
          Cancel
        </Button>
      </Link>
      {beginState ? (
        <Link to={`/employee/assessment/${assessment_id}/take-assessment`}>
          <Button $weight="400">Take Assessment</Button>
        </Link>
      ) : endState ? (
        <Button $weight="400" $variant="disabled">
          Assessment Ended
        </Button>
      ) : (
        ""
      )}
    </Buttons>
  );
};

export default CancelOrStart;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(6)} 0;
  gap: ${({ theme }) => theme.spacing(2)};
`;
