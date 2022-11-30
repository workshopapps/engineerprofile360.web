import React from "react";
import styled from "styled-components";
import { Button } from "../../../styles/reusableElements.styled";

import { More } from "iconsax-react";

const EmployeesListing = () => {
  return (
    <EmployeesList>
      <EmployeesTab>
        <Button $variant="text">Admin</Button>
        <Button $variant="text">Staffs</Button>
      </EmployeesTab>
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
      <AddButton>Add New</AddButton>
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
`;

const EmployeesTable = styled.div`
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
        align-items: center;

        svg {
          transform: rotate(90deg);
        }
      }
    }
  }
`;

const AddButton = styled(Button)`
  min-width: 280px;
  justify-self: flex-end;
  font-weight: 400;
  align-self: flex-end;
`;
