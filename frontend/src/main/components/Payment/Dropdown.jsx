import React from "react";
import styled from "styled-components";

const Dropdown = ({ onChange, value, id, name, children }) => {
  return (
    <DropDownContainer>
      <Select value={value} id={id} name={name} onChange={onChange}>
        {children}
      </Select>
    </DropDownContainer>
  );
};

export default Dropdown;

const DropDownContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  gap: 20px;
`;

const Select = styled.select`
  height: 40px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  margin-top: 32px;
  border: 1px solid grey;
  outline: none;
`;
