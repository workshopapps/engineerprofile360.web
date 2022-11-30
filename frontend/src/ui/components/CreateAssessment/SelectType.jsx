import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Dropdown from "../../../main/components/Payment/Dropdown";
import Options from "../../../main/components/Payment/Options";

const SelectType = () => {
  return (
    <SelectContainer>
      <p>Select the target staffs for the assessment</p>

      <SelectItemContainer>
        <SelectItem>
          <label>Select Department</label>
          <Dropdown>
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
          <Dropdown>
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
        <Link to="/csv-upload">Proceed</Link>
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
  margin: auto;

  a {
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
  }

  a:first-child {
    padding: 12px 32px;
    border: 1px solid #2667ff;
    color: #2667ff;
  }

  a:last-child {
    padding: 12px 32px;
    background: #2667ff;
    color: #ebf4f9;
  }
`;
