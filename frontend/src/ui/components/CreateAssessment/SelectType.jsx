import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "../../../api/axios";



const SelectType = () => {
  const [formData, setFormData] = useState({});
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.id);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const onBlur = (e) => {
    setTouched((prevState) => ({
      ...prevState,
      [e.target.id]: true,
    }));
  };

  const validate = (formData) => {
    const error = {};

    if (!formData.department) {
      console.log("fuckk");
      error.department = "Please select a department";
    }

    if (!formData.name) {
      error.name = "Please give your assessment a name";
    } else if (formData?.name?.length < 5) {
      error.name = "Assessment name cannot be less then 5";
    }
    if (!formData.date) {
      error.date = "Please select a valid date";
    }

    setErrors(error);
  };

  useEffect(() => {
    validate(formData);
  }, [formData, touched]);

  const onNextPage =  async (formData) => {
    
    const response = await axios.post(
      "assessment/create/",
      JSON.stringify({ name:formData.name, start_date:formData.date, start_time:formData.date, department_id:formData.department })
    );
    console.log(response)
    validate(formData);

    if (Object.keys(errors).length > 0) {
      setTouched({
        name: true,
        date: true,
        department: true,
      });
    }

    if (Object.keys(errors).length === 0) {
      setTouched({
        name: false,
        date: false,
        department: false,
      });
    }

    if (Object.keys(errors).length === 0) {
      console.log("omo");
      navigate("/assessment/admin-csv-upload", { state: { formData } });
    }
  };

  const { name, department, date } = formData;
  return (
    <SelectContainer>
      <p>Select the target staffs for the assessment</p>

      <SelectItemContainer>
        <SelectItem>
          <label>Select Department</label>
          <select
            id="department"
            value={department}
            onChange={handleChange}
            onBlur={onBlur}
          >
            <option defaultValue>Select Department</option>
            <option value="Front-End Development">Front-End Development</option>
            <option value="Back-End">Back-end Development </option>
            <option value="PM"> Project Management </option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Blockchain Development">
              Blockchain Development
            </option>
            <option value="Devops">Devops</option>
          </select>
          {errors.department && touched.department && (
            <span>{errors.department}</span>
          )}
        </SelectItem>
        <SelectItem>
          <label>Set Date & Time</label>
          <input
            id="date"
            type="date"
            onChange={handleChange}
            value={date}
            onBlur={onBlur}
          />
          {errors.date && touched.date && <span>{errors.date}</span>}
        </SelectItem>
        <SelectItem>
          <label>Assessment</label>
          <input
            id="name"
            type="text"
            placeholder="Title of Assessment"
            onChange={handleChange}
            value={name}
            onBlur={onBlur}
          />
          {errors && errors.name && touched.name && <span>{errors.name}</span>}
        </SelectItem>
      </SelectItemContainer>
      <Buttons>
        <Link to={-1}>Cancel</Link>
        <button
          color={Object.keys(errors).length > 0 ? true : false}
          onClick={() => onNextPage(formData)}
        >
          Proceed
        </button>
      </Buttons>
    </SelectContainer>
  );
};

export default SelectType;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 64px;
  gap: 32px;
  width: 60%;
  background: #f8fbfd;
  border: 1px solid ${({ theme }) => theme.palette.main.primary.light};
  margin: 40px auto;

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: ${({ theme }) => theme.palette.border.hover};
    opacity: 0.6;
    text-align: center;
  }

  @media (max-width: 1133px) {
    width: 80%;
  }

  @media (max-width: 669px) {
    width: 95%;

    padding: 22px 32px;
  }
`;

const SelectItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const SelectItem = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #605e5c;
    margin-bottom: 20px;
  }

  select,
  input {
    border: 1px solid #106ebe;
    border-radius: 2px;
    height: 40px;
    outline: none;
  }

  select {
    color: #605e5c;
  }

  input {
    padding-left: 5px;

    ::placeholder {
      color: #605e5c;
    }
  }

  input[type="date"] {
    color: #605e5c;
  }

  span {
    padding-top: 5px;
    color: ${({ theme }) => theme.palette.status.error.color};
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  width: 50%;
  align-items: center;
  justify-content: center;
  margin: auto;

  a,
  button {
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 12px 32px;
    cursor: pointer;
  }

  a {
    border: 1px solid #2667ff;
    color: #2667ff;
  }

  button {
    background: #2667ff;
    color: #ebf4f9;
  }

  @media (max-width: 802px) {
    width: 100%;
    margin: auto;
  }

  @media (max-width: 669px) {
    a {
      font-size: 14px;
      padding: 10px 18px;
    }
  }
`;
