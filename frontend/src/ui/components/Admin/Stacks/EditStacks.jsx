import React, { useState } from "react";
import { ModalContainer } from "../../Company/Departments/EditModal";
import { Title, Loader } from "../../../../styles/reusableElements.styled";
import { InputField, InputFieldWrapper, InputWrapper, Label, Load } from "../../Company/Departments/AddDept";
import { Button, Wrapper } from "../../Company/Departments/Hero";
import axios from "../../../../api/axios";
import { toast } from "react-toastify";


function EditStacks({ setEditModal, stacksDetails, setRunEffect, cancel }) {
  //? useState HOOKS
  const [loading, setLoading] = useState(false);
  const [editedData, setEditedData] = useState({
    id: stacksDetails.id,
    stacksName: stacksDetails.stacksName,
  });

  const { id, stacksName } = editedData;
  const stacks_id = id

  //? ASYNC FUNCTION TO EDIT DEPARTMENTS
  const handleEdit = async (e) => {
    e.preventDefault();
    if (editedData.length !== "") {
      try {
        setLoading(true);
   await axios.put(
          `https://api.eval360.hng.tech/api/admin/stack/${stacks_id}/update`,
          {
            name: stacksName,
          }
        );
     
        setRunEffect((prev) => !prev);
        setEditModal(false);
        cancel(null);
        setLoading(true);
        toast.success("Stack Edited Successfully");
      } catch (error) {
        toast.error("could not edit stack");
        setLoading(false);
        console.log(error);
      } 
    }
  };

  //? FUNCTION TO HANDLE FORM CHANGE
  const handleChange = async (e) => {
    setEditedData((prev) => ({ ...prev, stacksName: e.target.value }));
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
              Edit Stacks
            </Title>
            <InputFieldWrapper>
              <Label>Title</Label>
              <InputField
                type="text"
                required
                name="stacksName"
                value={stacksName}
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

export default EditStacks;
