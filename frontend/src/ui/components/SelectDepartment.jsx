import React from "react";
import styled from "styled-components";
import { Button, Title } from "../../styles/reusableElements.styled";

export default function SelectDepartment() {
  return (
    <Container>
      <div>
        <Title $color="#323130" $size="20px" $weight="400">
          Select the target department to add employee:
        </Title>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            padding: "0 3rem",
          }}
        >
          <Title $color="#605E5C" $size="18px" $weight="400">
            Select Department
          </Title>
          <select name="" id="">
            <option value="Electrical Eng.">Electrical Eng.</option>
            <option value="Chemical Eng.">Chemical Eng.</option>
            <option value="Software Eng.">Software Eng.</option>
            <option value="Mechanical Eng.">Mechanical Eng.</option>
            <option value="Marine Eng.">Marine Eng.</option>
            <option value="Computer Eng.">Computer Eng.</option>
          </select>
        </div>
      </div>
      <div>
        <Button $variant="outlined">Cancel</Button>
        <Button>Proceed</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 475px;
  width: 686px;
  max-width: 95%;
  background: #f8fbfd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div:first-of-type {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  }
`;
