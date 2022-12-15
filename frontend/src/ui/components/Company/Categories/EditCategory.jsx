import React, { useState } from "react";
import styled from "styled-components";
import axios from "../../../../api/axios";
import { showErrorToast, showSuccessToast } from "../../../../helpers/helper";

import useAuth from "../../../../hooks/useAuth";
import { Loader } from "../../../../styles/reusableElements.styled";

import { Title } from "../../../../styles/reusableElements.styled";
import { Button } from "../../../../styles/reusableElements.styled";

const EditCategory = ({
  setToggleEdit,
  setUpdateCategories,
  updateCategories,
  currentSelectedName,
  currentSelectedId,
}) => {
  const [formData, setFormData] = useState({
    category_name: currentSelectedName,
  });
  const { auth } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { category_name: name } = formData;
  console.log(name);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      if (name.length !== "") {
        const response = await axios.put(
          `category/${auth.org_id}/${currentSelectedId}/update`,
          JSON.stringify({ name })
        );

        console.log(response.data);

        response.data.errorState === false &&
          showSuccessToast(response.data.message);
        setIsSubmitted(false);
        setToggleEdit(false);
        setUpdateCategories(!updateCategories);
      }
    } catch (err) {
      setIsSubmitted(false);
      if (!err?.response) {
        showErrorToast("No Server Response");
      } else if (err?.response.data.errorState === true) {
        showErrorToast(err.response.data.message);
        setIsSubmitted(false);
      }
    }
  };

  return (
    <FormContainer
      onClick={(e) => e.stopPropagation()}
      onSubmit={(e) => handleSubmit(e)}
    >
      <Title as="h3" $size="20px" $color="#323130" $weight="400">
        Edit Category
      </Title>
      <InputFieldWrapper>
        <Label htmlFor="category_name"> Title</Label>
        <InputField
          type="text"
          required
          name="category_name"
          value={name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </InputFieldWrapper>

      <ButtonContainer>
        {!isSubmitted && (
          <Button
            type="button"
            onClick={(e) => {
              setToggleEdit(false);
            }}
            $variant="outlined"
          >
            Cancel
          </Button>
        )}

        {isSubmitted && <Loader />}

        {!isSubmitted && (
          <Button
            type="submit"
            border={"1px solid #106ebe"}
            w={"117px"}
            h={"48px"}
            text={"#fff"}
            bg={"#106ebe"}
            rounded={"4px"}
            m={" 6px"}
          >
            Proceed
          </Button>
        )}
      </ButtonContainer>
    </FormContainer>
  );
};

export default EditCategory;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  width: 60%;
  height: 338px;
  border-radius: 4px;
  background-color: #f8fbfd;
  border: 1px solid #c7e0f4;
`;

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
  width: 70%;
`;
const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #605e5c;
`;

const InputField = styled.input`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  color: #605e5c;
  border: 1px solid #106ebe;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 400;
  background-color: #fff;
  padding: 0 10px;
  margin: 10px 0;

  &:focus {
    border: 2px solid #2667ff;
  }
`;
const Load = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;

  /* button {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 4px;
  }

  button:first-child {
    border: 1px solid #2667ff;
    background-color: transparent;
    color: #2667ff;
  }

  button:last-child {
    background: #2667ff;
    border-radius: 4px;
  } */
`;
