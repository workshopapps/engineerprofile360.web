import styled from "styled-components";

export const MainWrapper = styled.section`
  max-width: 1300px;

  background-color: #fff;

  font-family: "Inter", sans-serif;

  @media (min-width: 748px) {
    height: 100%;
    margin-top: 100px;
  }
`;
export const WrapperDiv = styled.section`
  width: 100%;

  background-color: #fff;

  font-family: "Inter", sans-serif;
  justify-content: center;
  display: flex;

  flex-direction: column;
  align-items: center;

  @media (min-width: 748px) {
    margin-left: 30px;
    height: 100%;
  }
`;
export const Header = styled.h2`
  font-size: 32px;
  text-align: center;
  font-weight: 600;
  line-height: 40px;
  color: #323130;
`;

export const ListHeader = styled.p`
  font-size: 18px;
  text-align: start;
  opacity: ${(props) => props.opacity};
  font-weight: 400;
  line-height: 24px;
  color: #323130;
  margin: 20px 0;
`;

export const ContentContainer = styled.div`
  height: 20px;
  width: 100%;
  margin-top: 20px;
  display: grid;

  grid-template-columns: repeat(4, 2fr);
  grid-template-rows: repeat(4, 2fr);
  gap: 10px;
  @media (min-width: 748px) {
    column-gap: 60px;
  }
`;
export const Content = styled.p`
  font-size: 16px;
  text-align: start;
  font-weight: 400;
  line-height: 23px;
  color: #323130;
  margin: 30px 0;

  @media (min-width: 748px) {
    margin: 30px 0;
  }
`;
export const ContentImg = styled.img`
  width: 17px;
  height: 12.31px;
`;
export const ContentNum = styled.p`
  font-size: 18px;

  font-weight: 400;
  line-height: 24px;
  color: #328cc1;
`;
export const ContentWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  @media (min-width: 748px) {
    width: 150px;
    margin: 30px 0;
  }
`;

export const Divider = styled.div`
  margin: 10px 0;
`;
