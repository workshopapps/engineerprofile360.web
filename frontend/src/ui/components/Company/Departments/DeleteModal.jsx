import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "../../../../api/axios";
import { Loader, Title } from "../../../../styles/reusableElements.styled";
import { InputWrapper, Load } from "./AddDept";
import { ModalContainer } from "./EditModal";
import { Button, Wrapper } from "./Hero";

function DeleteModal({
  setDeleteModal,
  departmentDetails,
  setRunEffect,
  cancel,
}) {
  //? useState HOOKS
  const [loading, setLoading] = useState(false);
  const { id: departmentId, departmentName: name } = departmentDetails;

  //? ASYNC FUNCTION TO EDIT DEPARTMENTS
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      axios.delete(
        `https://api.eval360.hng.tech/api/department/${departmentId}/delete/`
      );
      setRunEffect((prev) => !prev);
      setDeleteModal(false);

      cancel(null);
      setLoading(false);
      toast.success("Department deleted successfully");
    } catch (error) {
      cancel(null);
      setLoading(false);
      setDeleteModal(false);
      toast.error("Could not add delete Department");
    }
  };
  // LOADER COMPONENTS
  return loading ? (
    <Load>
      <Loader />
    </Load>
  ) : (
    //   MAIN  COMPONENTS
    <>
      <ModalContainer>
        <InputWrapper>
          <form>
            <Title as="h2" $size="28px" $color="#ce2d2d" $weight="400">
              Are you sure you want to Delete {name}?
            </Title>
            <Wrapper>
              <Button
                type="button"
                onClick={(e) => {
                  setDeleteModal(false);
                  cancel(null);
                }}
                w={"117px"}
                border={"1px solid#2667FF"}
                h={"48px"}
                text={"#2667FF"}
                bg={"#fff"}
                rounded={"4px"}
                m={" 6px"}
              >
                No
              </Button>
              <Button
                type="submit"
                onClick={(e) => {
                  handleDelete(e);
                }}
                border={"1px solid #2667FF"}
                w={"117px"}
                h={"48px"}
                text={"#fff"}
                bg={"#2667FF"}
                rounded={"4px"}
                m={" 6px"}
              >
                Yes
              </Button>
            </Wrapper>
          </form>
        </InputWrapper>
      </ModalContainer>
    </>
  );
}

export default DeleteModal;
