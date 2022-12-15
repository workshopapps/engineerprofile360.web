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

//String Shortner/Replacer
export const LengthShortner = (string) => {
  return string.slice(0, 10) + "...";
};

const TableWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  min-width: 960px;
  overflow: auto;
  border: none;
  border-spacing: 0;
  overflow: auto;
  white-space: initial;
  position: relative;

  tr {
    position: relative;
  }

  th {
    padding: ${({ theme }) => theme.spacing(2)}
      ${({ theme }) => theme.spacing(1.5)};
  }
  td {
    padding: ${({ theme }) => theme.spacing(3)}
      ${({ theme }) => theme.spacing(1.5)};
    position: relative;
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
      font-weight: 400;
      color: #605e5c;
    }
  }

  td {
    color: #605e5c;
    font-size: 16px;
    font-weight: 400;
  }

  td:last-of-type {
    display: flex;
    align-items: center;
    position: relative;
    gap: ${({ theme }) => theme.spacing(2)};
    svg {
      transform: rotate(90deg);
      position: relative;
      cursor: pointer;
    }
  }
`;
