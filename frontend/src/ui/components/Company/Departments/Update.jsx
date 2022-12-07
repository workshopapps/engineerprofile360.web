import styled from "styled-components";

function Update({ setDeleteModal, cancel, setEditModal }) {
  const handleCancel = () => {
    cancel(null);
  };

  return (
    <>
      {
        <Container>
          <Edit
            onClick={() => {
              setEditModal(true);
            }}
          >
            Edit
          </Edit>

          <Delete
            onClick={() => {
              setDeleteModal(true);
            }}
          >
            Delete
          </Delete>
          <Cancel onClick={handleCancel}>Cancel</Cancel>
        </Container>
      }
    </>
  );
}

export default Update;

export const Container = styled.div`
  width: 112px;
  height: 100px;
  position: absolute;
  right: 55px;
  top: 0%;
  background-color: #fff;

  cursor: pointer;
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
`;
export const Delete = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-align: end;
  color: #b71f1f;
`;
export const Cancel = styled.p`
  font-size: 16px;
  font-weight: normal;
  text-align: end;
  color: #112fb6;
`;
