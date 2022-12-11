// import React from "react";
// import styled from "styled-components";
// import GuestTakeAssessmentHeader from "../../components/Guests/GuestTakeAssessmentHeader";
// import { useState, useEffect } from "react";
// import axios from "../../../api/axios";
// import { useNavigate } from "react-router-dom";

// export default function GuestTakeAssessment() {
//   useEffect(() => {
//     const fetchQuestion = async () => {
//       let res = await axios.get(
//         "question/assessment/2ea09b93-6682-11ed-9941-3863bbb7c6d/"
//       );
//       console.log(Object.keys(res.data.data).length);
//       console.log(res);
//       setCurrentPost(res.data.data);
//     };
//     fetchQuestion();
//   }, []);

//   const [currentPost, setCurrentPost] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [questionsPerPage] = useState(5);

//   const navigate = useNavigate();

//   let useAnswers = {};

//   const handleChange = (id, option) => {
//     useAnswers[`${id}`] = option;
//   };

//   const Prev = () => {
//     if (currentPage > 1) {
//       return (
//         <input
//           type="button"
//           className="button_next"
//           onClick={(e) => {
//             setCurrentPage(currentPage - 1);
//           }}
//           value="Previous"
//         />
//       );
//     }
//   };

//   const Next = () => {
//     if (currentPage < Math.ceil(currentPost.length / questionsPerPage)) {
//       return (
//         <input
//           type="button"
//           className="button_next"
//           onClick={(e) => {
//             setCurrentPage(currentPage + 1);
//           }}
//           value="Next"
//         />
//       );
//     }
//   };

//   return (
//     <>
//       <GuestAssessmentContainer>
//         <GuestTakeAssessmentHeader />
//         <div className="questions">
//           <form>
//             {currentPost.map((assessment, i) => {
//               const { question_id, options, correct_answers, id } = assessment;
//               return (
//                 <div className="questionswrapper" key={i}>
//                   <p>{question_id}</p>
//                   {options.map((query, i) => {
//                     return (
//                       <div key={i}>
//                         <input
//                           type="radio"
//                           value={i}
//                           name={question_id}
//                           onChange={() => {
//                             handleChange(id, i);
//                           }}
//                         />
//                         <label htmlFor={question_id}>{query}</label>
//                       </div>
//                     );
//                   })}
//                 </div>
//               );
//             })}

//             <br />

//             <div className="filter_next_submit">
//               {<Prev />}
//               {<Next />}

//               <button
//                 type="button"
//                 className="button_submit"
//                 onClick={() => {
//                   localStorage.setItem(
//                     "evalAssessment",
//                     JSON.stringify(useAnswers)
//                   );
//                   navigate("/guest-take-assessment-result");
//                 }}
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </GuestAssessmentContainer>
//     </>
//   );
// }

// const GuestAssessmentContainer = styled.div`
//   height: auto;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 10px;
//   color: #323130;
//   padding: 40px;

//   .button_next {
//     margin: 0 20px;
//     padding: 10px 16px;
//     width: 139px;
//     height: 60px;
//     background-color: #ffffff;
//     border: 1px solid #2667ff;
//     border-radius: 4px;
//     font-weight: 600;
//     font-size: 14px;
//     line-height: 20px;
//     color: #2667ff;
//     cursor: pointer;
//   }

//   .button_submit {
//     margin: 0 20px;
//     padding: 10px 16px;
//     width: 139px;
//     height: 60px;
//     background-color: #2667ff;
//     border: 1px solid #ffffff;
//     border-radius: 4px;
//     font-weight: 600;
//     font-size: 14px;
//     line-height: 20px;
//     color: #ffffff;
//     cursor: pointer;
//   }

//   .filter_next_submit {
//     display: flex;
//     width: 100% !important;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//   }

//   .questions {
//     display: flex;
//     width: 100% !important;
//     flex-direction: column;
//     margin: 0px 0px;
//   }

//   .questions p {
//     font-weight: 600;
//     font-size: 18px;
//     line-height: 24px;
//     margin-top: 50px;
//   }

//   .questions label {
//     font-weight: 400;
//     font-size: 14px;
//     line-height: 20px;
//     color: #201f1e;
//     padding-left: 10px;
//   }

//   .questions input[type="radio"] {
//     margin-left: 10px;
//   }

//   .questionswrapper {
//     margin: 0;
//   }

//   @media screen and (max-width: 767px) {
//     text-align: left;

//     .filter-flex {
//       width: 100%;
//     }
//   }
// `;
