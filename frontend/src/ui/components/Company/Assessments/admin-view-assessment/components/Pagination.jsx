import React from "react";
import { ButtonClear, ButtonWrapper } from "./AssessmentContent";

function Pagination({ questionsPerPage, totalPage, paginate }) {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalPage / questionsPerPage); i++) {
    pageNums.push(i);
  }
  return (
    <ButtonWrapper>
      {pageNums.map((number) => {
        return (
          <ButtonClear
            onClick={() => {
              paginate(number);
            }}
          >
            {number}
          </ButtonClear>
        );
      })}
    </ButtonWrapper>
  );
}

export default Pagination;
