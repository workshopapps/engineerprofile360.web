import styled from "styled-components";

export const MainWrapper = styled.section`
  width: 100%;
  height: 100%;

  background-color: #fff;
  padding-right: 40px;

  font-family: "Inter", sans-serif;

  margin-top: 40px;
`;
export const WrapperDiv = styled.section`
  width: 100%;
  height: 100%;

  background-color: #fff;

  font-family: "Inter", sans-serif;

  flex-direction: column;
  align-items: center;

  padding-right: 200px;
`;
export const Header = styled.h2`
  font-size: 32px;
  text-align: center;
  font-weight: 600;
  line-height: 40px;
  color: #323130;
`;

export const ListHeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ListHeader = styled.p`
  font-size: 18px;

  font-weight: 400;
  line-height: 24px;
  color: #323130;
`;

export const ContentContainer = styled.div`
  height: 350px;
  width: 100%;
  margin-top: s20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Content = styled.p`
  font-size: 16px;

  font-weight: 400;
  line-height: 23px;
  color: #323130;
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
export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
`;
