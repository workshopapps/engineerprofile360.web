import React, { useState } from "react";

import styled from "styled-components";
import { Loader, Title } from "../../../../../styles/reusableElements.styled";
import { toast } from "react-toastify";
import { Button, Wrapper } from "./Hero";
import axios from "../../../../../api/axios";
import useAuth from "../../../../../hooks/useAuth";

function AddDept({
  formData,
  setFormData,
  setAddDept,
  setRunEffect,
  runEffect,
}) {
  //? useState HOOKS
  const [loading, setLoading] = useState(false);
  const { departmentName } = formData;

  //? FUNCTION TO HANDLE FORM CHANGE
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { auth } = useAuth();
  const org_id = auth.org_id;

  //? ASYNC FUNCTION TO ADD DEPARTMENTS
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
          toast.error("could not add Department ");
          setAddDept(false);
        });
    }
  };

  return loading ? (
    // LOADER COMPONENTS
    <Load>
      <Loader />
    </Load>
  ) : (
    // MAIN COMPONENTS
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
              placeholder="Enter department name."
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
              border={"1px solid#2667FF"}
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
// STYLED COMPONENTS

export const InputWrapper = styled.div`
  /* width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  background-color: rgba(248, 251, 253, 0);
  overflow: hidden; */

  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  /* height: 100vh; */
  min-height: 1000px;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, -20%);
  z-index: 2;
  overflow: hidden;

  background-color: rgba(0, 0, 0, 0.7);
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    width: 485px;

    height: 338px;
    border: 1px solid #c7e0f4;

    border-radius: 4px;
    background-color: #f8fbfd;

    ${({ theme }) => theme.breakpoints.up("xs")} {
      width: 556px;
    }
    ${({ theme }) => theme.breakpoints.up("sm")} {
      width: 686px;
    }
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
  width: 300px;
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

  ${({ theme }) => theme.breakpoints.up("xs")} {
    width: 450px;
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
    width: 555px;
  }

  &:focus {
    border: 1px solid #2667ff;
  }
`;
export const Load = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
