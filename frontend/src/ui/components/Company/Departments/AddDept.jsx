import React, { useState } from "react";

import styled from "styled-components";
import {
  Loader,
  MainContainer,
  Title,
} from "../../../../styles/reusableElements.styled";
import { toast } from "react-toastify";
import { Button, Wrapper } from "./Hero";
import axios from "../../../../api/axios";
import useAuth from "../../../../hooks/useAuth";
import { Container } from "../Assessments/admin-view-assessment/components/ViewAssessmentHeader";

function AddDept({
  formData,
  setFormData,
  setAddDept,
  setRunEffect,
  runEffect,
}) {
  const [loading, setLoading] = useState(false);
  const { departmentName } = formData;
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { auth } = useAuth();

  const org_id = auth.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData !== "") {
      setLoading(true);
      setFormData("");
      axios
        .post("https://api.eval360.hng.tech/api/department/add", {
          name: departmentName,
          org_id: org_id,
        })
        .then((res) => {
          toast.success("department added successfully");
          setRunEffect(!runEffect);
          setAddDept(false);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error("could not add Department ");
          setAddDept(false);
        });
    }
  };

  return loading ? (
    <Load>
      <Loader />
    </Load>
  ) : (
    <>
      <InputWrapper>
        <form>
          <Title as="h2" $size="28px" $color="#323130" $weight="400">
            Create a new Department
          </Title>
          <InputFieldWrapper>
            <Label htmlFor="departmentName"> Title</Label>
            <InputField
              type="text"
              required
              placeholder="Javascript"
              name="departmentName"
              value={departmentName}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </InputFieldWrapper>

          <Wrapper>
            <Button
              type="button"
              onClick={(e) => {
                setAddDept(false);
              }}
              border={"2px solid#2667FF"}
              w={"117px"}
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
                handleSubmit(e);
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
    </>
  );
}

export default AddDept;

export const InputWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  background-color: rgba(248, 251, 253, 0);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    width: 686px;
    border: #c7e0f4;
    height: 338px;
    border-radius: 4px;
    background-color: #f8fbfd;
  }
`;

export const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
`;
export const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #605e5c;
`;

export const InputField = styled.input`
  width: 555px;
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
export const Load = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
