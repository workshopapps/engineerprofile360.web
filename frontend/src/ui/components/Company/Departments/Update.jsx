import { useEffect, useRef } from "react";
import styled from "styled-components";

function Update({ setDeleteModal, cancel, setEditModal }) {
  // HOLDS THE EDIT , DELETE AND CANCEL BUTTONS
  const updateRef = useRef();
  useEffect(() => {
    const handleCancel = (e) => {
      if (!updateRef.current.contains(e.target)) {
        cancel(null);
      }
    };
    document.addEventListener("mousedown", handleCancel);
  });

  return (
    <>
      {
        <Container ref={updateRef}>
          <Edit
            onClick={() => {
              setEditModal(true);
              cancel(null);
            }}
          >
            Edit
          </Edit>

          <Delete
            onClick={() => {
              setDeleteModal(true);
              cancel(null);
            }}
          >
            Delete
          </Delete>
        </Container>
      }
    </>
  );
}

export default Update;

export const Container = styled.section`
  width: 112px;
  height: 70px;
  position: absolute;
  right: 150px;
  top: 11px;
  background-color: #fff;

  padding: 4px;
  border-radius: 4px;

  border: 1px solid black;
  z-index: 1;
  border: 1px solid #8a8886;

  div {
  }
`;
export const Edit = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-align: end;
  color: #323130;
  margin: 1px;
  cursor: pointer;
`;
export const Delete = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-align: end;
  color: #b71f1f;
  cursor: pointer;
`;
export const Cancel = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-align: end;
  color: #112fb6;
  cursor: pointer;
`;
