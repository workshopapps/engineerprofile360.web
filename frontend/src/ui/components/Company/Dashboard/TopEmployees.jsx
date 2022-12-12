import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Text } from "../../../../main/components/Market/Market.styled";
import { Button, Title } from "../../../../styles/reusableElements.styled";
import NoData from "../../molecules/NoData";
import TableComponent from "../../molecules/TableComponent";

const TopEmployees = ({ topPerformances, departments }) => {
  const [top, setTop] = useState([]);
  const [depts, setDepts] = useState();

  useEffect(() => {
    const employees = topPerformances?.data
      ? topPerformances?.data.filter((data) => data.points !== null)
      : [];
    const allDepartments = departments ? departments : [];
    setTop(employees);
    setDepts(allDepartments);
  }, [topPerformances?.data, depts]);

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
      </Header>
      {top.length > 0 ? (
        <TableComponent>
          <tbody>
            <tr>
              <th>#</th>
              <th>Staff name</th>
              <th>Department</th>
              <th>Assessments Taken</th>
              <th>Percentage</th>
              <th>Action</th>
            </tr>
            {top.map((employee, index) => (
              <tr key={employee.id}>
                <td>{index + 1}.</td>
                <td>{employee.fullname}</td>
                <td>{employee.department.name}</td>
                <td>{employee.completed_assessment_count}</td>
                <td>
                  {((employee.points / employee.total_points) * 100).toFixed(2)}
                  %
                </td>
                <td>
                  <Link to={`/employees/profile/${employee.id}`}>
                    <Button $variant="outlined" $color="#2667ff">
                      View Results
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </TableComponent>
      ) : (
        <NoData text="Oops! No data here">
          <Link to="/assessmnet/create-assessment">
            <Button $variant="outlined" $color="#2667ff">
              Create Assessment
            </Button>
          </Link>
          <Link to="/employees/add-employee">
            <Button>Add Employee</Button>
          </Link>
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
