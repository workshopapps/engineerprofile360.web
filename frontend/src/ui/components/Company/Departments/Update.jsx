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
  /* padding: 4px 15px; */
  border-radius: 4px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
  z-index: 1;
  border: none;

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
  padding: 4px 15px;
  :hover {
    background-color: #f8fbfd;
  }
`;
export const Delete = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-align: end;
  color: #b71f1f;
  cursor: pointer;
  padding: 4px 15px;
  :hover {
    background-color: #f8fbfd;
  }
`;
export const Cancel = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-align: end;
  color: #112fb6;
  cursor: pointer;
`;
