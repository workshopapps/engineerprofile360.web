import React from "react";
import styled from "styled-components";
import {
  useParams,
  Link,
  useOutletContext,
} from "react-router-dom";
import { Button } from "../../../../../styles/reusableElements.styled";

const CancelOrStart = () => {
  const { assessment_id } = useParams();
  const { info } = useOutletContext();

  return (
    <Buttons>
      <Link to="/employee/assessment">
        <Button $variant="outlined" $color="#2667ff">
          Cancel
        </Button>
      </Link>
      <Link
        to={`/employee/assessment/${assessment_id}/take-assessment`}
        state={{ assessment: info }}
      >
        <Button $weight="400">Take Assessment</Button>
      </Link>
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
