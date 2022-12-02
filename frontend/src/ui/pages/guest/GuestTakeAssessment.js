import React from "react";
import styles from "./GuestTakeAssessment.module.css";
import GuestTakeAssessmentHeader from "./GuestTakeAssessmentHeader";
import { useState,useEffect } from "react";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";

export default  function GuestTakeAssessment() {
    useEffect(() => {
        const fetchQuestion = async () => {
           let res = await axios.get("question/assessment/2ea09b93-6682-11ed-9941-3863bbb7c6d/");
           console.log(Object.keys(res.data.data).length);
           console.log(res);
           setCurrentPost(res.data.data);
        };
        fetchQuestion();
     }, []);
   
     const [currentPost, setCurrentPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(5);
  
  const navigate = useNavigate();

  let useAnswers = {};

  const handleChange = (id,option) => {
    useAnswers[`${id}`]=option;
  };
  
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
      <div className={styles.GuestTakeAssessment_container}>
        <GuestTakeAssessmentHeader />
       
        <div className={styles.Questions}>
          <form>
          {currentPost.map((assessment, i) => {
            const { question_id, options, correct_answers,id } = assessment;
            return (
              <div className={styles.QuestionsWrapper} key={i}>
                <p>{question_id}</p>
                  {options.map((query, i) => {
                    return (
                      <div key={i}>
                        <input
                          type="radio"
                          value={i}
                          name={question_id}
                          onChange={() => {
                            handleChange(id,i);
                          }}
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
             
                <button type="button"
                className={styles.Button_submit} 
                onClick={()=>{
                    localStorage.setItem("evalAssessment",JSON.stringify(useAnswers)) ;
                    navigate("/guest-take-assessment-result");
                }}>
                     Submit 
                     </button>
                
            </div>
          </form>
        </div>
      </div>
</>
  );
}
