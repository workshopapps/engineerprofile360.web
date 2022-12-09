import React, { useState, useEffect } from "react";
import axios from "../../../../api/axios";
import styled from "styled-components";
import { Button } from "../../../../styles/reusableElements.styled";
import UserView from "./UserView";

import { More } from "iconsax-react";

const UsersList = () => {
  const [openMod, setOpenMod] = useState(false);
  const [userMod, setUserMod] = useState(false);
  useEffect(() => {
    const getDetails = async () => {
      const ENDPOINTS = [axios.get(`admin/users`)];
      try {
        const response = await ENDPOINTS.then((data) => {
          return data;
        });
        console.log(response);
      } catch (error) {
        // handle error
        console.log(error);
      }
    };
    getDetails();
  }, []);

  const toggleMod = () => {
    setOpenMod(!openMod);
  };
  const toggleUserMod = () => {
    setUserMod(!userMod);
  };
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
                <Button
                  $variant="outlined"
                  $color="#2667FF"
                  onClick={toggleUserMod}
                >
                  View Profile
                </Button>

                <More onClick={toggleMod} />
                {openMod ? (
                  <Modal>
                    <ModalEdit>Edit</ModalEdit>
                    <ModalDelete>Delete</ModalDelete>
                  </Modal>
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </EmployeesTable>
      {userMod ? <UserView toggleUserMod={toggleUserMod} /> : null}
    </EmployeesList>
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
