import React, { useState } from "react";
import { Loader, Title } from "../../../../styles/reusableElements.styled";
import {
  InputField,
  InputFieldWrapper,
  InputWrapper,
  Label,
  Load,
} from "./AddDept";
import { Button, Wrapper } from "./Hero";
import axios from "../../../../api/axios";

import { toast } from "react-toastify";
import styled from "styled-components";

function EditModal({ setEditModal, departmentDetails, setRunEffect, cancel }) {
  //? useState HOOKS
  const [loading, setLoading] = useState(false);
  const [editedData, setEditedData] = useState({
    id: departmentDetails.id,
    departmentName: departmentDetails.departmentName,
  });

  const { id, departmentName } = editedData;

  //? ASYNC FUNCTION TO EDIT DEPARTMENTS
  const handleEdit = async (e) => {
    e.preventDefault();
    if (editedData.length !== "") {
      try {
        setLoading(true);
        await axios.put(
          `https://api.eval360.hng.tech/api/department/${id}/update`,
          {
            name: departmentName,
          }
        );
        setRunEffect((prev) => !prev);
        setEditModal(false);
        cancel(null);
        setLoading(true);
        toast.success("Department Edited Successfully");
      } catch (error) {
        toast.error("could not edit department");
      }
    }
  };

  //? FUNCTION TO HANDLE FORM CHANGE
  const handleChange = async (e) => {
    setEditedData((prev) => ({ ...prev, departmentName: e.target.value }));
  };
  // lOADER COMPONENT
  return loading ? (
    <Load>
      <Loader />
    </Load>
  ) : (
    // MAIN COMPONENTS
    <>
      <ModalContainer>
        <InputWrapper>
          <form
            onSubmit={(e) => {
              handleEdit(e);
            }}
          >
            <Title as="h2" $size="28px" $color="#323130" $weight="400">
              Edit Departments
            </Title>
            <InputFieldWrapper>
              <Label>Title</Label>
              <InputField
                type="text"
                required
                name="departmentName"
                value={departmentName}
                contentEditable
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </InputFieldWrapper>
            <Wrapper>
              <Button
                onClick={() => {
                  setEditModal(false);
                  cancel(null);
                }}
                type="button"
                w={"117px"}
                border={"1px solid#2667FF"}
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
                  handleEdit(e);
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

export default EditModal;
// STYLED COMPONENTS

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  background-color: rgba(248, 251, 253, 0);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
