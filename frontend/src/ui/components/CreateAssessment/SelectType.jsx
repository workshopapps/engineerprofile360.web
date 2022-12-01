import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Dropdown from "../../../main/components/Payment/Dropdown";
import Options from "../../../main/components/Payment/Options";

const SelectType = () => {
  const [isSelected, setIsSelected] = useState({});

  const handleChange = (e) => {
    console.log(e.target.id);
    setIsSelected({ ...isSelected, [e.target.id]: e.target.value });
  };

  return (
    <SelectContainer>
      <p>Select the target staffs for the assessment</p>

      <SelectItemContainer>
        <SelectItem>
          <label>Select Department</label>
          <Dropdown
            id={"department"}
            value={isSelected["department"]}
            onChange={(e) => handleChange(e)}
          >
            <Options selected value="Front-End Development" />
            <Options value="Back-End Development" />
            <Options value="Project Management" />
            <Options value="Software Engineer" />
            <Options value="Blockchain Development" />
            <Options value="Devops" />
          </Dropdown>
        </SelectItem>
        <SelectItem>
          <label>Select Skill Level</label>
          <Dropdown
            id={"level"}
            value={isSelected["level"]}
            onChange={(e) => handleChange(e)}
          >
            <Options selected value="Senior Level" />
            <Options value="Middle Level" />
            <Options value="Junior Level" />
            <Options value="Trainee Level" />
          </Dropdown>
        </SelectItem>
        <SelectItem>
          <label>Set Date & Time</label>
        </SelectItem>
      </SelectItemContainer>
      <Buttons>
        <Link to={-1}>Cancel</Link>
        <Link to="/assessment/admin-csv-upload">Proceed</Link>
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
  gap: 32px;

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
    margin-bottom: -15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #605e5c;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  width: 50%;
  align-items: center;
  justify-content: center;
  margin: auto;

  a {
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 12px 32px;
    cursor: pointer;
  }

  a:first-child {
    border: 1px solid #2667ff;
    color: #2667ff;
  }

  a:last-child {
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
