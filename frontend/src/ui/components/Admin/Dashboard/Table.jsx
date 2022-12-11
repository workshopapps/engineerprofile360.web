import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Title } from "../../../../styles/reusableElements.styled";
import TableComponent from "../../molecules/TableComponent";

const Table = ({ users }) => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    setTable(users);
  }, [users]);

  return (
    <div>
      <Containerdiv>
        <Heading>
          <Title as="h5" $size="20px" $color="#1E1E1E" $weight="700">
            User's Data
          </Title>
          <Link to="/admin/users"><span>View All</span></Link>
        </Heading>

        <TableComponent>
          <tbody>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Created</th>
            </tr>

            {table.map((table, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{table.name}</td>
                <td>{table.email}</td>
                <td>{table.company}</td>
                <td>{Date(table.created)}</td>
              </tr>
            ))}
          </tbody>
        </TableComponent>
      </Containerdiv>
    </div>
  );
};

export default Table;

const Containerdiv = styled.div`
  margin-top: 48px;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #2667ff;
    border-bottom: 2px solid #2667ff;
    font-weight: 600;
    font-size: 20px;
  }
`;
