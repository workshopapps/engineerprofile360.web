import React from "react";
import styled from "styled-components";
import { Title } from "../../styles/reusableElements.styled";
import SelectDepartment from "../components/SelectDepartment";

export default function EmployeeDeparment() {
  return (
    <MainContainer>
      <Title
        $color="#6E6E6E"
        $size="30px"
        $weight="700"
        style={{ margin: "10px" }}
      >
        Add Employee
      </Title>
      <Container>
        <SelectDepartment />
      </Container>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
