import React from "react";
import axios from "../../../../api/axios";
import { Title } from "../../../../styles/reusableElements.styled";
import { InputWrapper } from "./AddDept";
import { ModalContainer } from "./EditModal";
import { Button, Wrapper } from "./Hero";

function DeleteModal({ setDeleteModal, departmentDetails }) {
  const { id, departmentName } = departmentDetails;

  const departmentId = id.id;
  const name = departmentName.departmentName;

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://api.eval360.hng.tech/api/department/${departmentId}/update`
      );
      console.log("response");
    } catch (error) {
      // toast.error("could not delete department");
    }
  };
  return (
    <>
      <ModalContainer>
        <InputWrapper>
          <form>
            <Title as="h2" $size="28px" $color="#ce2d2d" $weight="400">
              Are you sure you want to Delete {name}
            </Title>
            <Wrapper>
              <Button
                type="button"
                onClick={(e) => {
                  setDeleteModal(false);
                }}
                w={"117px"}
                border={"2px solid#2667FF"}
                h={"48px"}
                text={"#2667FF"}
                bg={"#fff"}
                rounded={"4px"}
                m={" 6px"}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={(e) => {
                  handleDelete();
                }}
                border={"1px solid #2667FF"}
                w={"117px"}
                h={"48px"}
                text={"#fff"}
                bg={"#2667FF"}
                rounded={"4px"}
                m={" 6px"}
              >
                Proceed
              </Button>
            </Wrapper>
          </form>
        </InputWrapper>
      </ModalContainer>
    </>
  );
}

export default DeleteModal;
