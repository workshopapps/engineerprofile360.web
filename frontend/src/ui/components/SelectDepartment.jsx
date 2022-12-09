import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Title } from "../../styles/reusableElements.styled";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

export default function SelectDepartment() {
  const [departments, setDepartments] = useState([]);
  const [value, setValue] = useState("");

  const { auth } = useAuth();
  const navigate  = useNavigate();


  const handleChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem("departments", JSON.stringify(e.target.value));
    localStorage.setItem("departmentname", JSON.stringify(e.target.selectedOptions[0].text));

  };
  

  const proceed = (departments) => { 
    const localData = JSON.parse(localStorage.getItem("departments"));
    const localDataName = JSON.parse(localStorage.getItem("departmentname"));
    console.log(localData);
    console.log(localDataName);

    if(!localData==="" || !localDataName===""){
      navigate("/employees/add-employee/");
    } else {
      toast.error("Please choose a department");
    }
  };

  const org_id = auth.org_id;

  useEffect(() => {
    axios
      .get(`department/company/${org_id}`)
      .then((response) => {
        setDepartments(response.data.data);
      });
  }, [departments,org_id]);

  return (
    <Container>
      <div>
        <h1>Select the target department to add employee:</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "0 3rem",
          }}
        >
          <Title $color="#605E5C" $size="16px" $weight="400">
            Select Department
          </Title>
          <select value={value} onChange={handleChange} required>
          <option></option>
            {departments.map((department) => (
              <option value={department.id} key={department.id}>
                {department.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
      <Link to="/employees">
        <Button $variant="outlined">Cancel</Button>
      </Link>
        
          <Button onClick={proceed}>Proceed</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 475px;
  width: 686px;
  max-width: 100%;
  background: #f8fbfd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5px;

  div:first-of-type {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: #323130;
      font-size: 22px;
      font-weight: 400;

      @media screen and (max-width: 450px) {
        font-size: 14px;
        text-align: left;
      }
    }
  }

  div:nth-child(2) {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  select {
    height: 32px;
    width: 100%;
    border-radius: 4px;
    padding 0 10px;
    outline: none;
  }
`;