import React from "react";
import styles from "./UserTakeAssessment.module.css";
//import { ButtonClear, ButtonWrapper } from "./AssessmentContent";

function Pagination({ questionsPerPage, totalPage, paginate }) {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalPage / questionsPerPage); i++) {
    pageNums.push(i);
  }
  return (
    <>
      {pageNums.map((number) => {
        return (
        
          <button className={styles.Button_Next} type="button"
            onClick={() => {
              paginate(number);
            }}
          >
           
          </button>
        );
      })}
    </>
  );
}

export default Pagination;
