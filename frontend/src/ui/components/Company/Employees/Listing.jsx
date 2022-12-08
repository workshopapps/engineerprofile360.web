import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../../../styles/reusableElements.styled";

import { More, AddCircle } from "iconsax-react";
import { Link, useOutletContext } from "react-router-dom";

const Listing = () => {
  const [allEmployees, setAllEmployees] = useState([]);
  const [depts, setDepts] = useState([]);
  const { employees, departments } = useOutletContext();

  useEffect(() => {
    setAllEmployees(employees ? employees : []);
    setDepts(departments?.data ? departments?.data : []);
  }, [employees, departments]);

  // console.log(depts);
  return (
    <EmployeesList>
      <Filter>
        <select>
          <option value="all">Department</option>
          {depts
            ? depts.map((dept) => (
                <option key={dept.id} value={dept.name}>
                  {dept.name}
                </option>
              ))
            : ""}
        </select>
        <Link to="/add-employee">
          <Button $weight="400">
            <AddCircle color="#FFFFFF" /> Add New Employee
          </Button>
        </Link>
      </Filter>
      <EmployeesTable>
        {allEmployees.length > 0 ? (
          <table>
            <tbody>
              <tr>
                <th>#</th>
                <th>Employee name</th>
                <th>Department</th>
                <th>Employee Email</th>
                <th>Username</th>
                <th>Actions</th>
              </tr>
              {allEmployees.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{index + 1}.</td>
                  <td>{employee.fullname}</td>
                  <td>{employee.department.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.username}</td>
                  <td>
                    <Link to={`/employees/profile/${employee.id}`}>
                      <Button $variant="outlined" $color="#2667ff">
                        View Profile
                      </Button>
                    </Link>
                    <More />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <NoData>
            <p>Oops! No data to show here</p>
            <div>
              <Button $weight="400">
                <AddCircle color="#FFFFFF" /> Add New Employee
              </Button>
            </div>
          </NoData>
        )}
      </EmployeesTable>
    </EmployeesList>
  );
};

export default Listing;

const EmployeesList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  flex-direction: column;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

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
    width: 179Spx;
  }

  select:last-of-type {
    width: 130px;
  }
`;

const EmployeesTable = styled.div`
  width: 100%;
  overflow: auto;
  table {
    width: 100%;
    min-width: 960px;
    text-align: left;
    border: none;
    border-spacing: 0; 
    overflow: auto;
    white-space: initial;

    th,
    td {
      padding: ${({ theme }) => theme.spacing(1.5)};
    }

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

    td {
      color: #605e5c;
      font-size: 16px;
      font-weight: 600;
    }

    tr {
      td:last-of-type {
        display: flex;
        gap: ${({ theme }) => theme.spacing(2)};
        align-items: center;

        svg {
          transform: rotate(90deg);
        }
      }
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
