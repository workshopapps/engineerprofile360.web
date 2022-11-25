import styled from "styled-components";

const Main = styled.main`
  display: grid;
  background: #f8fbfd;
  border: 1px dashed #c7e0f4;
  margin: 12px 132px;
  border-radius: 25px 25px 0 0;
  height: 100%;

  ul {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: 1fr;
    justify-content: center;
    ont-weight: 600;
    font-size: 18px;
    line-height: 24px;
    cursor: pointer;
  }

  ul li:first-child {
    background: #2667ff;
    padding: 24px 153px;
    border: 1px solid #2667ff;
    border-radius: 25px 0 0 0;
    color: #fff;
  }

  ul li:last-child {
    background: #f8fbfd;
    border: 1px solid #c7e0f4;
    padding: 24px 95px;
    border-radius: 0 25px 0 0;
    color: #323130;
  }

  section {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }

  section div p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
  }

  .icon {
    font-size: 120px;
  }

  button {
    display: inline-block;
    background: #2667ff;
    padding: 12px 32px;
    border: 1px solid #2667ff;
    border-radius: 4px;

    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ebf4f9;
  }

  button:hover {
    background: #3f8efc;
    border: none;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto auto;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
    justify-self: center;
  }

  .plus-icon {
    display: inline;
    justify-content: center;
  }

  @media (max-width: 769px) {
    .section {
        grid-template-rows: 1fr 1fr;
    }
    ul li {
        font-size: 14px;
        padding: 10px 5px !important;
        width: 200px;
        height: 80px;
        text-align: center;
        justify-items: center;
        margin: auto auto;
    }
  }
`;
export default Main;
