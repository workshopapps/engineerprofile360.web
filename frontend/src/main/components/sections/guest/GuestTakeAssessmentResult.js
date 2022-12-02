import React from "react";
import styles from "./GuestTakeAssessment.module.css";
import GuestTakeAssessmentHeader from "./GuestTakeAssessmentResultHeader";
import { QuestionData } from "./QuestionData";
import { useState,useEffect } from "react";
import axios from "../../../../api/axios";

export default function GuestTakeAssessmentResult() {
    const [correctAnswers,setCorrectAnswers] = useState(0);
     const [totalQuestions, setTotalQuestions]=useState(0)
     const [selectedOption, setSelectedOption]=useState({});
     const [currentPost, setCurrentPost] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);
    const [questionsPerPage] = useState(5);
    const [inputValue, setInputValue] = useState([
    {
      //answer: "",
    },
  ]);
  
    useEffect(() => {
        const fetchQuestion = async () => {
           let res = await axios.get("question/assessment/2ea09b93-6682-11ed-9941-3863bbb7c6d/");
           setTotalQuestions(Object.keys(res.data.data).length);
           //console.log(res);
           setCurrentPost(res.data.data);
           let localOption = localStorage?.getItem("evalAssessment");
           if(localOption){
            let localData =JSON.parse(localOption);
           // console.log(localData)
            setSelectedOption(localData);
           }
            //console.log(correctAnswers);
        };
        fetchQuestion();
     }, []);

     useEffect (() => {
        let correctData = 0;
        currentPost.map((assessment, i) => {
         const { question_id, options, correct_answers,id } = assessment;
          if(correct_answers.includes(selectedOption[`${id}`])){
             correctData +=1;
             //console.log(i,Object.keys(res.data.data).length);
             //if (i == Object.keys(res.data.data).length -1) {
                 setCorrectAnswers(correctData);
                 console.log(correctAnswers);
             //}
          }
         })
        
     },[currentPost,selectedOption]);

     
  const answer = inputValue;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const indexOfLastPost = currentPage * questionsPerPage;
  const indexOfFirstPost = indexOfLastPost - questionsPerPage;
  //const currentPost = QuestionData.slice(indexOfFirstPost, indexOfLastPost);

  //const paginate = (pageNums) => setCurrentPage(pageNums);
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
      if(currentPage  < Math.ceil(QuestionData.length / questionsPerPage)){
        return <input type="button" 
        className={styles.Button_next} 
        onClick={(e) => {setCurrentPage(currentPage+1)}} 
        Value="Next" />
    }
  }
  
  return (
    <>
      <div className={styles.GuestTakeAssessment_container}>
        <GuestTakeAssessmentHeader correctA={correctAnswers} totalQ={totalQuestions}/>
       
        <div className={styles.Questions_Score}>
          <form>
          {currentPost.map((assessment, i) => {
            const { question_id, options, correct_answers,id } = assessment;
            // if(correct_answers.includes(selectedOption[`${id}`])){
            //     setCorrectAnswers((prev)=>prev+1);
            // }
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
            </div>
          </form>
        </div>
      </div>
</>
  );
}
