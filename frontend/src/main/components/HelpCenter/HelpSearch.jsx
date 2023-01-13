import React from "react";
import styled from "styled-components";

import search from "../../../assets/icons/search.svg";
import { Title } from "../../../styles/reusableElements.styled";

const HelpSearch = () => {
  return (
    <Hero>
      <TextContainer>
        <Title $color="#323130" $size="35px" $weight="400" $lHeight="52px">
          Eval360 Help Center
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
  height: 220px;
  background: #87bfff;
  padding: 0 48px;

  @media (max-width: 680px) {
    height: 300px;
  }

  @media (max-width: 483px) {
    height: 250px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media (max-width: 680px) {
    h1 {
      font-size: 28px;
    }
  }
  @media (max-width: 483px) {
    gap: 16px;

    h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 428px) {
    gap: 5px;

    input {
      ::placeholder {
        font-size: 8px;
      }
    }
  }
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
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

  button {
    border: none;
    background: #2667ff;
    border-radius: 4px;
    width: 30%;
    height: 100%;
    color: #f0f0f0;
  }

  @media (max-width: 647px) {
    width: 500px;
    height: 50px;

    img {
      width: 22px;
    }
  }
  @media (max-width: 550px) {
    width: 450px;
    height: 45px;

    img {
      width: 20px;
    }

    input {
      ::placeholder {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 483px) {
    width: 400px;
    height: 40px;

    img {
      width: 18px;
    }

    input {
      ::placeholder {
        font-size: 10px;
      }
    }
  }

  @media (max-width: 428px) {
    width: 300px;

    img {
      width: 16px;
    }

    input {
      ::placeholder {
        font-size: 8px;
      }
    }
  }
`;
