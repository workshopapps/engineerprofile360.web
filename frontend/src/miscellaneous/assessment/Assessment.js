import styled from "styled-components";

export const PageHeader = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  h1 {
    font-weight: 700;
    font-size: 28px;
    color: #6e6e6e;
  }

  div {
    display: flex;
    gap: 25px;
  }

  @media screen and (max-width: 767px) {
    height: auto;
    padding: 1rem 0;
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    div {
      flex-direction: column;
      margin-top: 20px;
    }
  }
`;
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;
  width: 237px;
  height: 48px;
  background: #2667ff;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  ${({ secondary }) =>
    secondary &&
    `
   background: transparent;
   color: #2667ff;
   border: 2px solid #2667ff;
   
`}
`;

export const Stats = styled.div`
  margin-top: 2rem;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 767px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  gap: 16px;
  width: 357.33px;
  height: 160px;
  background: #f8fbfd;
  border: 1px solid #c7e0f4;
  border-radius: 5px;

  p {
    font-weight: 400;
    font-size: 16px;
    color: #323130;
  }

  h3 {
    font-weight: 600;
    font-size: 28px;
    color: #323130;
  }
`;

export const AssessmentContainer = styled.div`
  height: auto;
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Performance = styled.div`
  width: 50%;
  height: 100%;
  padding: 1rem 0;

  div:first-of-type {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    h4 {
      font-weight: 400;
      font-size: 24px;
      color: #323130;
    }

    a {
      font-weight: 600;
      font-size: 20px;
      color: #2667ff;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
