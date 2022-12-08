import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../../../styles/reusableElements.styled";

import { More, AddCircle } from "iconsax-react";
import { Link, useOutletContext } from "react-router-dom";
import NoData from "../../molecules/NoData";
import TableComponent from "../../molecules/TableComponent";

const Listing = () => {
  const [allEmployees, setAllEmployees] = useState([]);
  const [depts, setDepts] = useState([]);
  const { employees, departments } = useOutletContext();

  useEffect(() => {
    setAllEmployees(employees ? employees : []);
    setDepts(departments?.data ? departments?.data : []);
  }, [employees, departments]);

  const handleFilter = (e) => {
    if (e.target.value === "all") {
      setAllEmployees(employees ? employees : []);
    } else {
      const filtered = employees
        ? employees.filter((data) => e.target.value === data.department)
        : [];
      setAllEmployees(filtered);
    }
  };

  // console.log(depts);
  return (
    <EmployeesList>
      <Filter>
        <select onChange={handleFilter}>
          <option value="all">Department</option>
          {depts
            ? depts.map((dept) => (
                <option key={dept.id} value={dept.name}>
                  {dept.name}
                </option>
              ))
            : ""}
        </select>
        <Link to="/employees/add-employee">
          <Button $weight="400">
            <AddCircle color="#FFFFFF" /> Add New Employee
          </Button>
        </Link>
      </Filter>

      {allEmployees.length > 0 ? (
        <TableComponent>
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
        </TableComponent>
      ) : (
        <NoData text="Oops! No data here">
          <Link to="/employees/add-employee">
            <Button $weight="400">
              <AddCircle color="#FFFFFF" /> Add New Employee
            </Button>
          </Link>
        </NoData>
      )}
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