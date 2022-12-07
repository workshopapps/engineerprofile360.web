import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Button, Title } from "../../../../styles/reusableElements.styled";

const TopEmployees = ({ topPerformances }) => {
  const [top, setTop] = useState([]);

  useEffect(() => {
    const employees = topPerformances?.data
      ? topPerformances?.data.filter((data) => data.points !== null)
      : [];

    setTop(employees);
  }, [topPerformances?.data]);

  console.log(top);
  return (
    <div>
      <Header>
        <div>
          <Title as="h2" $size="24px" $color="#6E6E6E" $weight="400">
            Top Employees
          </Title>
          <Link to="/employees">
            <span>View all</span>
          </Link>
        </div>
        <Filter>
          <select>
            <option value="all">Department</option>
          </select>
          <select>
            <option>Sort By Date</option>
          </select>
        </Filter>
      </Header>
      {top.length > 0 ? (
        <TopEmployeesList>
          <table>
            <tbody>
              <tr>
                <th>#</th>
                <th>Staff name</th>
                <th>Department</th>
                <th>Percentage</th>
                <th>Action</th>
              </tr>
              {top.map((employee, index) => (
                <tr key={`employee-${index}`}>
                  <td>{index + 1}.</td>
                  <td>{employee.employee_name}</td>
                  <td>{employee.department}</td>
                  <td>{employee.points}%</td>
                  <td>
                    <Link to="/employees">
                      <Button $variant="outlined" $color="#2667ff">
                        View Results
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TopEmployeesList>
      ) : (
        <NoData>
          <p>Oops! No data to show here</p>

          <div>
            <Button $variant="outlined" $color="#2667ff">
              Create Assessment
            </Button>
            <Button>Add Employee</Button>
          </div>
        </NoData>
      )}
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
    padding: ${({ theme }) => theme.spacing(1)};
    border-radius: ${({ theme }) => theme.spacing(0.5)};
    font-size: 14px;
    color: #323130;
    background: #ffffff;
    outline: none;
  }

  select:first-of-type {
    width: 150px;
  }

  select:last-of-type {
    width: 130px;
  }
`;

const TopEmployeesList = styled.div`
  padding-top: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  overflow: auto;
  table {
    width: 100%;
    min-width: 960px;
    overflow: auto;

    tr:first-of-type {
      width: 100%;
      background: #f8fbfd;
      text-align: left;

      th:first-of-type {
        padding-right: 24px;
      }

      th {
        font-size: 16px;
        font-weight: 600;
        color: #605e5c;
      }
    }

    td {
      color: #605e5c;
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

const NoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  min-height: 300px;
  font-size: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(2)};
    flex-wrap: wrap;
  }
`;
