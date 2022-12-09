import React from "react";
import styled from "styled-components";
import { Button } from "../../../../styles/reusableElements.styled";

function UserView({ toggleUserMod }) {
  return (
    <Wrapper>
      <UserTable>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Assesment Name</th>
              <th>Attemps</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Introduction to Software Engineering</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
        <ButtonWrapper>
          <Button onClick={toggleUserMod}>Close</Button>
        </ButtonWrapper>
      </UserTable>
    </Wrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 7rem;
  background: #f8fbfd;
  border: 1px solid #c7e0f4;
  border-radius: 12px;
`;
const UserTable = styled.div`

  table {
    width: 740px;
    text-align: left;
    white-space: initial;
    border-spacing: 0 15px;
    tr:first-of-type {
      height: 37px;
      th {
        font-size: 16px;
        font-weight: 600;
        color: #605e5c;
        padding-right: 5rem;
      }
       th:nth-of-type(even) {
         padding-right: 6rem;
    }
       th:last-of-type {
           padding-left: 5rem;
      }
    }
    
    tr {
    height: 37px;
    td:first-of-type{
        background: #FFFFFF;
    }
      td:nth-of-type(even) {
     background: #FFFFFF; 
     padding-right: 6rem;
    }

      td:last-of-type {
       text-align: center;
       
      }
    }  
    
`;

export default UserView;
