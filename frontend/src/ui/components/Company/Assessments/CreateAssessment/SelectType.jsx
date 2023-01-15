import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "../../../../../api/axios";

import {
  checkDate,
  checkTime,
  compareDate,
  compareTime,
  showErrorToast,
} from "../../../../../helpers/helper";
import useAuth from "../../../../../hooks/useAuth";
import { Loader } from "../../../../../styles/reusableElements.styled";

const SelectType = () => {
  const { auth } = useAuth();
  const [formData, setFormData] = useState({
    department: "",
    start_time: "",
    end_time: "",
    start_date: "",
    end_date: "",
    name: "",
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [comDepartment, setComDepartment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
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
      error.department = "Please select a department";
    }

    if (!formData.name) {
      error.name = "Please give your assessment a name";
    } else if (formData?.name?.length < 5) {
      error.name = "Assessment name cannot be less then 5";
    }

    if (!formData.start_date) {
      error.start_date = "Please select a valid start date";
    } else if (checkDate(formData.start_date) === false) {
      error.start_date = "Start date cannot be less than current date";
    }

    if (!formData.end_date) {
      error.end_date = "Please select a valid end date";
    } else if (compareDate(formData.start_date, formData.end_date) === false) {
      error.end_date = "End date cannot be less than start date";
    }

    if (!formData.start_time) {
      error.start_time = "Please select a valid start time";
    }

    if (!formData.end_time) {
      error.end_time = "Please select a valid end time";
    } else if (compareTime(formData.start_time, formData.end_time) === false) {
      error.end_time = "End time cannot be less than the start time";
    }

    setErrors(error);
  };

  useEffect(() => {
    validate(formData);
  }, [formData, touched]);

  useEffect(() => {
    const getDepartment = async () => {
      const response = await axios.get(
        `https://api.eval360.hng.tech/api/department/company/${auth.org_id}`
      );

      setComDepartment(response.data.data);
    };
    getDepartment();
  }, []);

  const { name, department, start_date, end_date, start_time, end_time } =
    formData;

  const onSubmit = async (formData) => {
    validate(formData);
    const org_id = auth.org_id;
    const department_id = department;

    if (Object.keys(errors).length > 0) {
      setTouched({
        department: true,
        start_time: true,
        end_time: true,
        start_date: true,
        end_date: true,
        name: true,
      });
    }

    if (Object.keys(errors).length === 0) {
      setTouched({
        department: false,
        start_time: false,
        end_time: false,
        start_date: false,
        end_date: false,
        name: false,
      });
    }

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          "assessment/create",
          JSON.stringify({
            org_id,
            name,
            start_date,
            start_time,
            end_date,
            end_time,
            department_id,
          })
        );
        console.log("data", response.data);

        if (response.data.errorState === false) {
          const data = response.data.data.id;
          console.log("data", data);
          navigate("/assessment/add-assessment", { state: { data } });
        }
      } catch (err) {
        setIsLoading(false);
        if (!err.response) {
          showErrorToast("No Server Response");
        } else {
          showErrorToast(err.response?.data.message);
        }
      }
    }
  };

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
            {comDepartment.map((dept, id) => (
              <option key={id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
          {errors.department && touched.department && (
            <span>{errors.department}</span>
          )}
        </SelectItem>
        <SelectItem>
          <StartEndContainer>
            <Start>
              <label>Set Start Time</label>
              <input
                id="start_time"
                type="time"
                onChange={handleChange}
                value={start_time}
                onBlur={onBlur}
                title="Set start time to at least 5mins ahead of time depending on number of questions for assessment"
              />
              {errors.start_time && touched.start_time && (
                <span>{errors.start_time}</span>
              )}
            </Start>
            <End>
              <label>Set End Time</label>
              <input
                id="end_time"
                type="time"
                placeholder="12:00"
                onChange={handleChange}
                value={end_time}
                onBlur={onBlur}
                title="Set end time ahead of start time"
              />
              {errors.end_time && touched.end_time && (
                <span>{errors.end_time}</span>
              )}
            </End>
          </StartEndContainer>
        </SelectItem>
        <SelectItem>
          <StartEndContainer>
            <Start>
              <label>Set Start Date</label>
              <input
                id="start_date"
                type="date"
                onChange={handleChange}
                value={start_date}
                onBlur={onBlur}
              />
              {errors.start_date && touched.start_date && (
                <span>{errors.start_date}</span>
              )}
            </Start>
            <End>
              <label>Set End Date</label>
              <input
                id="end_date"
                type="date"
                onChange={handleChange}
                value={end_date}
                onBlur={onBlur}
              />
              {errors.end_date && touched.end_date && (
                <span>{errors.end_date}</span>
              )}
            </End>
          </StartEndContainer>
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
          // color={Object.keys(errors).length > 0 ? true : false}
          onClick={() => onSubmit(formData)}
        >
          {isLoading ? <Loader sm /> : "Proceed"}
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

  @media (max-width: 549px) {
    width: 100%;
    gap: 28px;

    p {
      font-size: 16px;
    }
  }

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
    width: 100%;

    padding: 22px 32px;
  }
`;

const SelectItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 549px) {
    gap: 18px;
  }
`;

const SelectItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 549px) {
    label {
      font-size: 14px;
    }
  }

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
    border-radius: 4px;
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
    font-size: 11px;
    padding-top: 5px;
    color: ${({ theme }) => theme.palette.status.error.color};
  }
`;

const StartEndContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 549px) {
    flex-direction: column;
  }
`;

const Start = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  @media (max-width: 549px) {
    width: 100%;
    margin-bottom: 18px;
  }
`;

const End = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  @media (max-width: 549px) {
    width: 100%;
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
    border: none;
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
