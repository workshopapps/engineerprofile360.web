import React from "react";
import styles from "./UserTakeAssessment.module.css";
import UserTakeAssessmentHeader from "./UserTakeAssessmentResultHeader";
import { QuestionData } from "./QuestionData";
import { useState } from "react";

export default function UserTakeAssessmentResult() {
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(5);
  const [inputValue, setInputValue] = useState([
    {
      //answer: "",
    },
  ]);
  const answer = inputValue;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const indexOfLastPost = currentPage * questionsPerPage;
  const indexOfFirstPost = indexOfLastPost - questionsPerPage;
  const currentPost = QuestionData.slice(indexOfFirstPost, indexOfLastPost);

  //const paginate = (pageNums) => setCurrentPage(pageNums);
  const next = () => {
    if(currentPage  < Math.ceil(QuestionData.length / questionsPerPage)){
      setCurrentPage(currentPage+1)
    }};

    const Prev = () => {
      if(currentPage  > 1 ){
        return <input type="button" 
        className={styles.Button_next} 
        onClick={(e) => {
          setCurrentPage(currentPage-1)
        }}
        value="Previous" />}
      }
  
  return (
    <>
      <div className={styles.UserTakeAssessment_container}>
        <UserTakeAssessmentHeader />
       
        <div className={styles.Questions_Score}>
          <form>
          {currentPost.map((assessment, i) => {
            const { question, options } = assessment;
            return (
              <div className={styles.QuestionsWrapper} key={i}>
                <p>{question}</p>
                  {options.map((query, i) => {
                    const { option } = query;
                    return (
                      <div key={i}>
                        <input
                          type="radio"
                          value={answer}
                          name={question}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                        <label htmlFor={question}>{ option }</label>
            
                      </div>
                    );
                  })}
              </div>
            );
          })}
            
            <br />

            <div className={styles.Filter_Next_Submit}>
             {<Prev />}
              <input type="button" 
              className={styles.Button_next} 
              onClick={(e) => {
                next()}} 
                value="Next" />
              <input
                type="button"
                className={styles.Button_submit}
                value="Done" />
            </div>
          </form>
        </div>
      </div>
</>
  );
}
