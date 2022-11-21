import styled from "styled-components";
export const CardWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 0 40px;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const Cards = styled.img`
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(0.2%);
  }
`;
