import React from "react";
import styles from "./UserTakeAssessment.module.css";
import UserTakeAssessmentHeader from "./UserTakeAssessmentResultHeader";
import { useState,useEffect } from "react";
import axios from "../../../api/axios";
import { Link } from "react-router-dom";

export default function UserTakeAssessmentResult() {
    const [correctAnswers,setCorrectAnswers] = useState(0);
     const [totalQuestions, setTotalQuestions]=useState(0)
     const [selectedOption, setSelectedOption]=useState({});
     const [currentPost, setCurrentPost] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);
    const [questionsPerPage] = useState(5);
  
    useEffect(() => {
        const fetchQuestion = async () => {
           let res = await axios.get("question/assessment/2ea09b93-6682-11ed-9941-3863bbb7c6d/");
           setTotalQuestions(Object.keys(res.data.data).length);
           setCurrentPost(res.data.data);
           let localOption = localStorage?.getItem("evalAssessment");
           if(localOption){
            let localData =JSON.parse(localOption);
            setSelectedOption(localData);
           }
        };
        fetchQuestion();
     }, []);

     useEffect (() => {
        let correctData = 0;
        currentPost.map((assessment, i) => {
         const { question_id, options, correct_answers,id } = assessment;
          if(correct_answers.includes(selectedOption[`${id}`])){
             correctData +=1;
                 setCorrectAnswers(correctData);
          }
         })
        
     },[currentPost,selectedOption]);

  const Prev = () => {
    if(currentPage  > 1 ){
      return <input type="button" 
      className={styles.Button_next} 
      onClick={(e) => {
        setCurrentPage(currentPage-1)
      }}
      value="Previous" />}
    }

    const Next = () => {
      if(currentPage  < Math.ceil(currentPost.length / questionsPerPage)){
        return <input type="button" 
        className={styles.Button_next} 
        onClick={(e) => {setCurrentPage(currentPage+1)}} 
        value="Next" />
        }
    }
  
  return (
    <>
      <div className={styles.UserTakeAssessment_container}>
        <UserTakeAssessmentHeader correctA={correctAnswers} totalQ={totalQuestions}/>
       
        <div className={styles.Questions_Score}>
          <form>
          {currentPost.map((assessment, i) => {
            const { question_id, options, correct_answers,id } = assessment;
            return (
              <div className={styles.QuestionsWrapper} key={i}>
                <p>{question_id}</p>
                  {options.map((query, i) => {
                    return (
                      <div key={i}>
                        <input checked={(selectedOption[`${id}`] >= 0 ) ? ( (selectedOption[`${id}`]== i ) ? true : false) : false}
                          type="radio"
                          value={i}
                          name={question_id}
                          readOnly
                        />
                        <label htmlFor={question_id}>{ query }</label>
            
                      </div>
                    );
                  })}
              </div>
            );
          })}
            
            <br />

            <div className={styles.Filter_Next_Submit}>
             {<Prev />}
              {<Next />}
              <Link to="/assessment">
              <button type="button"
                className={styles.Button_submit} >
                     Done 
                     </button>
                </Link>
            </div>
          </form>
        </div>
      </div>
</>
  );
}
