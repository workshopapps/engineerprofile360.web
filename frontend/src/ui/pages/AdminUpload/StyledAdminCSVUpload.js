import styled from "styled-components";

const Main = styled.main`
  display: grid;
  background: #f8fbfd;
  border: 1px dashed #c7e0f4;
  margin: 12px 132px;
  border-radius: 25px 25px 0 0;

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
    grid-template-columns: repeat(2, auto);
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
  .spinner {
    diplay: block;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    justify-self: center;
    margin: auto auto;
  }
  .spinner p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    text-align: center;
    margin-top: 10px;
  }
  .loader {
    border: 14px solid #87bfff;
    border-radius: 50%;
    border-top: 14px solid #141ae9;
    width: 140px;
    height: 140px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    margin: auto auto;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default Main;
