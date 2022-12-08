import React from "react";
import styled from "styled-components";

const TableComponent = ({ children }) => {
  return (
    <TableWrapper>
      <Table>{children}</Table>
    </TableWrapper>
  );
};

export default TableComponent;

const TableWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  overflow: auto;
`;

const Table = styled.table`
  width: 100%;
  min-width: 960px;
  overflow: auto;
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
    text-align: left;

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
`;
