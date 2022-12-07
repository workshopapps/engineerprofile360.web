import React, { useState } from "react";
import { Button, Title } from "../../../../styles/reusableElements.styled";
import { InputField, InputFieldWrapper, InputWrapper, Label } from "./AddDept";
import { Wrapper } from "./Hero";
import axios from "../../../../api/axios";
import { ButtonContainer } from "../Categories/CategoryForm";
import { toast } from "react-toastify";
import styled from "styled-components";
import {
  ButtonClearNext,
  ButtonShade,
} from "../Assessments/admin-view-assessment/components/AssessmentContent";
import useAuth from "../../../../hooks/useAuth";

function EditModal({ setEditModal, departmentDetails, org_id }) {
  console.log(departmentDetails);
  const [editedData, setEditedData] = useState({
    id: departmentDetails.id,
    departmentName: departmentDetails.departmentName,
  });
  const { id, departmentName } = editedData;

  const handleEdit = async (e) => {
    e.preventDefault();
    if (editedData.length !== "") {
      try {
        const response = await axios.put(
          `http://api.eval360.hng.tech/api/department/${id}/update`,
          {
            name: departmentName,
          }
        );
        console.log("response");
        toast.success("Department Edited Successfully");
      } catch (error) {
        toast.error("could not edit department");
      }
    }
  };

  const handleChange = async (e) => {
    setEditedData((prev) => ({ ...prev, departmentName: e.target.value }));
  };
  return (
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
              <ButtonClearNext
                onClick={(e) => {
                  setEditModal(false);
                }}
                type="button"
              >
                Cancel
              </ButtonClearNext>
              <ButtonShade
                type="submit"
                onClick={(e) => {
                  handleEdit(e);
                }}
              >
                Proceed
              </ButtonShade>
            </Wrapper>
          </form>
        </InputWrapper>
      </ModalContainer>
    </>
  );
}

export default EditModal;

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  background-color: #5c796f65;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
