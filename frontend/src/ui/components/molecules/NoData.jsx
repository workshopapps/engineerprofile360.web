import React from "react";
import styled from "styled-components";

const NoData = ({ text, children }) => {
  return (
    <NoDataContainer>
        {/*  pass a text for what will display here */}
      <p>{text}</p>

      <div>
        {/* Custome components such as buttons can go in here */}
        {children}
      </div>
    </NoDataContainer>
  );
};

export default NoData;

const NoDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  min-height: 300px;
  font-size: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(2)};
    flex-wrap: wrap;
  }
`;
