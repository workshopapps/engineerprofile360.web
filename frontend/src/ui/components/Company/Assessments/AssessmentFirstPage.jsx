import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AddCircle } from "iconsax-react";
import Flex from "../../layout/Flex";
import PageInfo from "../../molecules/PageInfo";
import { Button } from "../../../../styles/reusableElements.styled";
import Assessments from "./assessment-first-page/components/AssessmentStats";

const Buttons = () => {
  return (
    <Flex spacing={20} jc="flex-end">
      <Link to="/assessment/create-assessment">
        <Hide>
          <Button>
            <Flex ai="center" spacing={10}>
              <AddCircle size="24" />
              <>Create New Assessment</>
            </Flex>
          </Button>
        </Hide>
        <Show>
          <Button>
            <Flex ai="center">
              <AddCircle size="24" />
            </Flex>
          </Button>
        </Show>
      </Link>
      <Link to="/assessment/assessment-list">
        <Hide>
          <Button $variant="outlined" $color="#2667FF">
            View Assessments
          </Button>
        </Hide>
        <Show>
          <Button $variant="outlined" $color="#2667FF">
            View
          </Button>
        </Show>
      </Link>
    </Flex>
  );
};

const AssessmentFirstPage = () => {
  return (
    <div>
      <PageInfo breadcrumb={["Dashboard", "Performance"]} />
      <Buttons />
      <Assessments />
    </div>
  );
};

export default AssessmentFirstPage;

const Hide = styled.div`
  display: block;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: none;
  }
`;
const Show = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: block;
  }
`;
