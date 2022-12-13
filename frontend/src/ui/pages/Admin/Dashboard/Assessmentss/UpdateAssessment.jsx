// import { useEffect, useRef } from "react";
// // import styled from "styled-components";
// import { Container } from "../../../../../styles/reusableElements.styled";
// import { Delete, Edit } from "../../../../components/Company/Departments/Update";

// function UpdateAssessment({ setDeleteModal, cancel, setEditModal }) {
//   // HOLDS THE EDIT , DELETE AND CANCEL BUTTONS
//     const updateRef = useRef();
//     useEffect(() => {
//         const handleCancel = (e) => {
//             if (!updateRef.current.contains(e.target)) {
//                 cancel(null);
//             }
//         };
//         document.addEventListener("mousedown", handleCancel);
//     });

//     return (
//         <>
//         {
//             <Container ref={updateRef}>
//             <Edit
//                 onClick={() => {
//                 setEditModal(true);
//                 cancel(null);
//                 }}
//             >
//                 Edit
//             </Edit>

//             <Delete
//                 onClick={() => {
//                 setDeleteModal(true);
//                 cancel(null);
//                 }}
//             >
//                 Delete
//             </Delete>
//             </Container>
//         }
//         </>
//     );
// }

// export default UpdateAssessment;

