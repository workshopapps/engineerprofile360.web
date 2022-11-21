import React from "react";
import styled from "styled-components";

import search from "../../../assets/icons/search.svg";
import { Title } from "../../../styles/reusableElements.styled";

const HelpSearch = () => {
  return (
    <Hero>
      <TextContainer>
        <Title $color="#323130" $size="42px" $weight="400" $lHeight="52px">
          Skript Help Center
        </Title>
        <Input>
          <img src={search} alt="search icon" />
          <input
            type="text"
            placeholder="Search for: Assessments, Employees, Teams"
          />
          <button type="submit">Search</button>
        </Input>
      </TextContainer>
    </Hero>
  );
};

export default HelpSearch;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 348px;
  background: #87bfff;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;

  h1 {
    font-weight: 400;
    font-size: 42px;
    line-height: 52px;
    color: #323130;
  }
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  width: 584px;
  padding-left: 15px;
  background: #f0f0f0;
  border-radius: 4px;

  input {
    height: 100%;
    width: 70%;
    background-color: transparent;
    border: none;
    padding-left: 8px;

    ::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #686868;
    }
  }

  img {
  }

  button {
    border: none;
    background: #2667ff;
    border-radius: 4px;
    width: 30%;
    height: 100%;
    color: #f0f0f0;
  }
`;
