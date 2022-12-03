import React from "react";
import styled from "styled-components";
import { Button } from "../../../../styles/reusableElements.styled";

import { More } from "iconsax-react";
import { Link } from "react-router-dom";

const EmployeesListing = () => {
  return (
    <EmployeesList>
      <EmployeesTab>
        <TabButton $variant="disabled">Admins</TabButton>
        <TabButton $variant="disabled">Staffs</TabButton>
        <TabButton $variant="disabled">Top Perfomance</TabButton>
      </EmployeesTab>
      <Filter>
        <select>
          <option>Department</option>
        </select>
        <select>
          <option>Sort By Date</option>
        </select>
        <DeleteButton $variant="outlined">Delete</DeleteButton>
      </Filter>
      <EmployeesTable>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Employee name</th>
              <th>Department name</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Browyn Louis</td>
              <td>AEB</td>
              <td>400LEVEL</td>
              <td>
                <Button $variant="outlined" $color="#2667ff">
                  View Profile
                </Button>
                <More />
              </td>
            </tr>
          </tbody>
        </table>
      </EmployeesTable>
      <Link to="/employees/add-employee">
        <AddButton>Add New</AddButton>
      </Link>
    </EmployeesList>
  );
};

export default EmployeesListing;

const EmployeesList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  flex-direction: column;
`;

const EmployeesTab = styled.div`
  display: flex;
  // gap: ${({ theme }) => theme.spacing(0)};
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  flex-wrap: wrap;
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

    td {
      color: #605e5c;
      font-size: 16px;
      font-weight: 600;
    }

    tr {
      td:last-of-type {
        display: flex;
        gap: ${({ theme }) => theme.spacing(4)};
        justify-content: space-between;
        align-items: center;

        svg {
          transform: rotate(90deg);
        }
      }
    }
  }
`;

const AddButton = styled(Button)`
  min-width: 250px;
  justify-self: end;
  font-weight: 400;
  margin-left: auto;
`;

const TabButton = styled(Button)`
  color: #323130;
  font-weight: 400;
  background: none;
  justify-content: initial;
  padding-left: 0px;
  display: initial;
  border-radius: 0px;
  font-size: 13px;
  text-align: left;
  // border-bottom: 5px solid #2667ff;
`;

const DeleteButton = styled(Button)`
  border-color: red;
  color: red;

  margin-left: auto;
  height: 28px;
  width: 150px;
`;
