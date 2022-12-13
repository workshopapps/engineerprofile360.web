import React, { useState } from "react";

import styled from "styled-components";
import TableComponent from "../../molecules/TableComponent";

import { More } from "iconsax-react";

const UsersList = ({ users }) => {
  const [openMod, setOpenMod] = useState(false);

  return (
    <TableComponent>
      <tbody>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>Created</th>
          <th>Actions</th>
        </tr>
        {users?.data.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company}</td>
            <td>{Date(user.created)}</td>
            <td>
              <More onClick={() => setOpenMod(!openMod)} />
              {openMod && (
                <Modal>
                  <ModalEdit>Edit</ModalEdit>
                  <ModalDelete>Delete</ModalDelete>
                </Modal>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </TableComponent>
  );
};

export default UsersList;

const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px;
  gap: 16px;
  width: 112px;
  height: 70px;
  border: 0.5px solid #8a8886;
  border-radius: 4px;
  background: white;
  z-index: 5;
  bottom: -2.5rem;
  right: 2rem;
`;

const ModalEdit = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #323130;
`;
const ModalDelete = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #b71f1f;
`;

const EmployeesList = styled.div`
  display: flex;
  position: relative;
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
    border-spacing: 0 15px;
    tr:first-of-type {
      width: 100%;
      height: 37px;

      background: #f8fbfd;
      th:last-of-type {
        padding-right: 0px;
      }

      th {
        font-size: 16px;
        font-weight: 600;
        color: #605e5c;
        padding-right: 5rem;
      }
    }
    td:last-of-type {
      display: flex;
      justify-content: space-evenly;
    }
    td {
      color: #605e5c;
      font-size: 16px;
      font-weight: 600;
    }
    tr {
      position: relative;
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
