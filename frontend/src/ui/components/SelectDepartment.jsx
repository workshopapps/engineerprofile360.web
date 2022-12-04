import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Title } from "../../styles/reusableElements.styled";

export default function SelectDepartment() {
  const [departments, setDepartments] = useState([]);
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const proceed = () => {
    localStorage.setItem("departments", JSON.stringify(value));
  };

  const org_id = "c57d34e5-dcfe-4fba-821b-53c22ac27756";

  useEffect(() => {
    axios
      .get(`https://api.eval360.hng.tech/api/department/company/${org_id}`)
      .then((response) => {
        setDepartments(response.data.data);
      });

    const items = JSON.parse(localStorage.getItem("departments"));
    if (items) {
      setItems(items);
      setValue(items);
    }
  }, [departments]);

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
          <select value={value} onChange={handleChange}>
            {departments.map((department) => (
              <option value={department.id} key={department.id}>
                {department.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <Button $variant="outlined">Cancel</Button>
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
