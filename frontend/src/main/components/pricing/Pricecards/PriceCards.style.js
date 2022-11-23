import styled from "styled-components";
export const CardWrapper = styled.section`
  max-width: 1300px;
  margin: 0 auto;

  background-color: #fff;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (min-width: 748px) {
    height: 100vh;
  }
`;
export const Cards = styled.img`
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(0.2%);
  }
`;
