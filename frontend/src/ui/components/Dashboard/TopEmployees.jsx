import React from "react";
import styled from "styled-components";
import { Button, Title } from "../../../styles/reusableElements.styled";

const TopEmployees = () => {
  return (
    <div>
      <Header>
        <div>
          <Title as="h2" $size="24px" $color="#6E6E6E" $weight="400">
            Top Employees
          </Title>
          <span>View all</span>
        </div>
        <Filter>
          <select>
            <option>Assessment</option>
          </select>
          <select>
            <option>Sort By Date</option>
          </select>
        </Filter>
      </Header>
      <TopEmployeesList>
        <table>
          <tbody>
          <tr>
            <th>#</th>
            <th>Staff name</th>
            <th>Department</th>
            <th>Assessment</th>
            <th>Percentage</th>
            <th>Action</th>
          </tr>
            <tr>
              <td>1.</td>
              <td>Browyn Louis</td>
              <td>Front End</td>
              <td>React.js</td>
              <td>100.00%</td>
              <td>
                <Button $variant="outlined" $color="#2667ff">
                  View Results
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </TopEmployeesList>
    </div>
  );
};

export default TopEmployees;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;

  div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  span {
    color: #2667ff;
    border-bottom: 2px solid #2667ff;
    font-weight: 600;
    font-size: 20px;
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  select {
    border: 1px solid ${({ theme }) => theme.palette.border.default};
    padding: ${({ theme }) => theme.spacing(0.5)};
    border-radius: ${({ theme }) => theme.spacing(0.5)};
    font-size: 14px;
    color: #323130;
  }

  select:first-of-type {
    width: 170px;
  }

  select:last-of-type {
    width: 150px;
  }
`;

const TopEmployeesList = styled.div`
  padding-top: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  overflow: auto;
  table {
    table-layout: fixed;
    width: 100%;
    min-width: 960px;
    overflow: auto;

    tr:first-of-type {
      width: 100%;
      background: #f8fbfd;

      th:first-of-type {
        padding-right: 24px;
      }

      th {
        font-size: 16px;
        font-weight: 600;
        color: #605e5c;
      }
    }
  }
`;
