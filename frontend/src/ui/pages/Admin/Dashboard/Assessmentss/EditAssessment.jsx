// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { ModalContainer } from "../../../../components/Company/Departments/EditModal";
// import axios from "../../../../../api/axios";
// import { Button, Loader, Title } from "../../../../../styles/reusableElements.styled";
// import { Wrapper } from "../../../../components/Company/Departments/Hero";
// import { InputField, InputFieldWrapper, InputWrapper, Label, Load } from "../../../../components/Company/Departments/AddDept";

// function EditAssessment({ setEditModal, assessmentDetails, setRunEffect, cancel }) {
//   //? useState HOOKS
//   const [loading, setLoading] = useState(false);
//   const [editedData, setEditedData] = useState({
//     id: assessmentDetails.id,
//     assessmentName: assessmentDetails.assessmentName,
//   });

//   const { id, assessmentName } = editedData;
//   const assessment_id = id;

//   //? ASYNC FUNCTION TO EDIT DEPARTMENTS
//   const handleEdit = async (e) => {
//     e.preventDefault();
//     if (editedData.length !== "") {
//       try {
//         setLoading(true);
//         await axios.put(
//           `https://api.eval360.hng.tech/api/admin/stack/${assessment_id}/update`,
//           {
//             name: assessmentName,
//           }
//         );

//         setRunEffect((prev) => !prev);
//         setEditModal(false);
//         cancel(null);
//         setLoading(true);
//         toast.success("Assessment Edited Successfully");
//       } catch (error) {
//         toast.error("could not edit stack");
//         setLoading(false);
//         console.log(error);
//       }
//     }
//   };

//   //? FUNCTION TO HANDLE FORM CHANGE
//   const handleChange = async (e) => {
//     setEditedData((prev) => ({ ...prev, assessmentName: e.target.value }));
//   };
//   // lOADER COMPONENT
//   return loading ? (
//     <Load>
//       <Loader />
//     </Load>
//   ) : (
//     // MAIN COMPONENTS
//     <>
//       <ModalContainer >
//         <InputWrapper>
//           <form
//             onSubmit={(e) => {
//               handleEdit(e);
//             }}
//           >
//             <Title as="h2" $size="28px" $color="#323130" $weight="400">
//               Edit assessment
//             </Title>
//             <InputFieldWrapper>
//               <Label>Title</Label>
//               <InputField
//                 type="text"
//                 required
//                 name="assessmentName"
//                 value={assessmentName}
//                 contentEditable
//                 onChange={(e) => {
//                   handleChange(e);
//                 }}
//               />
//             </InputFieldWrapper>
//             <Wrapper>
//               <Button
//                 onClick={() => {
//                   setEditModal(false);
//                   cancel(null);
//                 }}
//                 type="button"
//                 w={"117px"}
//                 border={"1px solid#2667FF"}
//                 h={"48px"}
//                 text={"#2667FF"}
//                 bg={"#fff"}
//                 rounded={"4px"}
//                 m={" 6px"}
//               >
//                 Cancel
//               </Button>

//               <Button
//                 type="submit"
//                 onClick={(e) => {
//                   handleEdit(e);
//                 }}
//                 border={"1px solid #2667FF"}
//                 w={"117px"}
//                 h={"48px"}
//                 text={"#fff"}
//                 bg={"#2667FF"}
//                 rounded={"4px"}
//                 m={" 6px"}
//               >
//                 Proceed
//               </Button>
//             </Wrapper>
//           </form>
//         </InputWrapper>
//       </ModalContainer>
//     </>
//   );
// }

// export default EditAssessment;
