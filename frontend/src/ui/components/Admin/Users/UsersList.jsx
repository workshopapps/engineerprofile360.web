import React from "react";
import styled from "styled-components";
import { Button } from "../../../../styles/reusableElements.styled";

import { More } from "iconsax-react";
import { Link } from "react-router-dom";

const UsersList = () => {
  return (
    <EmployeesList>
      <EmployeesTable>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Seyi Ojo</td>
              <td>Johndoes@domain</td>
              <td>ABCD Company</td>
              <td>24-12-2022</td>
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
    </EmployeesList>
  );
};

export default UsersList;

const EmployeesList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  flex-direction: column;
`;

const EmployeesTable = styled.div`
  width: 100%;
  overflow: auto;
  table {
    width: 100%;
    min-width: 960px;
    text-align: left;
    overflow: auto;
    white-space: initial;
    tr:first-of-type {
      width: 100%;
      height: 37px;

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
        gap: ${({ theme }) => theme.spacing()};
        align-items: center;
        svg {
          transform: rotate(90deg);
        }
      }
    }
  }
`;
