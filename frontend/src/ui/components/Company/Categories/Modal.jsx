import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../../../api/axios";
import { showErrorToast, showSuccessToast } from "../../../../helpers/helper";

import useAuth from "../../../../hooks/useAuth";
import { Loader } from "../../../../styles/reusableElements.styled";

import { Title } from "../../../../styles/reusableElements.styled";
import { Button } from "../../../../styles/reusableElements.styled";

const Modal = ({ setToggleCreateCat }) => {
  const [formData, setFormData] = useState({
    category_name: "",
  });
  const { auth } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const orgId = auth.id;
  const { category_name: name } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      if (name.length !== "") {
        const response = await axios.post(
          "category/add",
          JSON.stringify({ name, orgId })
        );

        console.log(response.data);

        response.data.errorState === false &&
          showSuccessToast(response.data.message);
        setIsSubmitted(false);
        setToggleCreateCat(false);
      }
    } catch (err) {
      if (!err?.response) {
        showErrorToast("No Server Response");
      } else if (err.response?.data.errorState === true) {
        showErrorToast(err.response.data.message);
        setIsSubmitted(false);
      }
    }
  };

  console.log(formData);

  return (
    <>
      <InputWrapper onClick={(e) => setToggleCreateCat(false)}>
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Title as="h2" $size="18px" $color="#323130" $weight="400">
            Create a new Category
          </Title>
          <InputFieldWrapper>
            <Label htmlFor="category_name"> Title</Label>
            <InputField
              type="text"
              required
              placeholder="Javascript"
              name="category_name"
              value={name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </InputFieldWrapper>

          <ButtonContainer>
            <Button
              type="button"
              onClick={(e) => {
                setToggleCreateCat(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              border={"1px solid #2667FF"}
              w={"117px"}
              h={"48px"}
              text={"#fff"}
              bg={"#2667FF"}
              rounded={"4px"}
              m={" 6px"}
            >
              {isSubmitted ? <Loader /> : "Proceed"}
            </Button>
          </ButtonContainer>
        </form>
      </InputWrapper>
    </>
  );
};

export default Modal;

const InputWrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 75vh;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  background-color: rgba(255, 255, 255, 0.8);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    width: 60%;
    height: 338px;
    border-radius: 4px;
    background-color: #f8fbfd;
    border: 1px solid #c7e0f4;
  }
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

  button {
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
  }
`;
