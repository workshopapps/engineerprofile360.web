import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../../styles/reusableElements.styled";

const TablePaginate = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <TablePaginateContainer>
      {range.map((el, index) => (
        <Button
          key={index}
          className={`${page === el ? "active" : "inactive"}`}
          onClick={() => setPage(el)}
        >
          {el}
        </Button>
      ))}
    </TablePaginateContainer>
  );
};

export default TablePaginate;

const TablePaginateContainer = styled.div`
  display: flex;
  justify-content:center;
  gap: 20px;

  .inactive {
    background-color: #fff;
    border: 1px solid #106ebe;
    color: #106ebe;
  }

  button{
    min-width:initial;
    min-height:initial;
    width:30px;
    height:30px;
  }
`;