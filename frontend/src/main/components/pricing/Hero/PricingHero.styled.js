import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1300px;
  width: 100%;

  background-color: #fff;

  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  padding: 20px 5px 50px;
  flex-direction: column;

  @media (min-width: 748px) {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const HeroHeader = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  line-height: 52px;
`;
export const HeroText = styled.p`
  font-size: 18px;
  margin-top: 20px;
  font-weight: 400;
  line-height: 24px;
`;
export const HeroButtonDiv = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding-bottom: 150px;
`;
export const HeroButtonShade = styled.button`
  font-size: 18px;
  width: 177px;
  height: 48px;
  background: #2667ff;
  border-radius: 4px;
  border: 0px;
  margin-right: 6px;
  color: #fff;

  font-weight: 600;
  line-height: 24px;
  transition: all 0.3s ease;

  &:hover {
    color: #2667ff;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #2667ff;
    cursor: pointer;
  }
`;
export const HeroButtonClear = styled.button`
  font-size: 18px;
  width: 177px;
  height: 48px;
  color: #2667ff;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #2667ff;
  margin-left: 6px;

  font-weight: 600;
  line-height: 24px;

  transition: all 0.3s ease;

  &:hover {
    background: #2667ff;
    border-radius: 4px;
    border: 0px;

    color: #fff;
    cursor: pointer;
  }
`;
