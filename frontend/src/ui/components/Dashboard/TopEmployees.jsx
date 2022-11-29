import React from "react";
import styled from "styled-components";
import { Title } from "../../../styles/reusableElements.styled";

const TopEmployees = () => {
  return (
    <TopEmployeesContainer>
      <Header>
        <div>
        <Title as="h2" $size="24px" $color="#6E6E6E" $weight="400">Top Employees</Title>
          <p>View all</p>
        </div>
        <Filter></Filter>
      </Header>
      <TopEmployeesList></TopEmployeesList>
    </TopEmployeesContainer>
  );
};

export default TopEmployees;

const TopEmployeesContainer = styled.div``;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing(2)};
  width: 100%;

  div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TopEmployeesList = styled.div``;