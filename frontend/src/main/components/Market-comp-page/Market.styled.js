import styled from "styled-components";

export const Main = styled.div`
  height: 1000rem;
  overflow: hidden;
`;
export const Container = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
  align-items: center;
  justify-content: space-between;
  min-height: 750px;
`;

export const FirstPage = styled.div`
  width: 100%;
  /* height: 100vh; */
`;
export const Upper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 10rem;
`;
export const Left = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const Down = styled.div`
  width: 100%;
  display: flex;
`;
export const Text1 = styled.h1`
  width: 100%;
  height: 100%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  line-height: 90px;
  letter-spacing: 0.01em;
  color: #323130;
`;
export const Textvs = styled.h2`
  width: 82px;
  height: 90px;
  font-family: "Farro";
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 90px;
  letter-spacing: 0.01em;
  color: #323130;
  margin-left: 17rem;
`;
export const Right = styled.div`
  width: 70%;
  height: 100%;
  padding: 25px;
  margin-top: -4rem;
`;
export const SideImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const TranSIde = styled.img`
  width: 20%;
  height: 100%;
  margin-top: -12%;
`;
export const DescBelow = styled.div`
  width: 100%;
  height: 100%
  display: flex;
  margin-top: 1rem;
`;

export const Line = styled.div`
  width: 80px;
  height: 5px;
  border: 2px solid #171ee0;
  transform: rotate(90deg);
  background: #171ee0;
  margin-top: 5rem;
  margin-left: -19rem;
`;
export const Text = styled.h2`
  width: 100%;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 46px;
  letter-spacing: 0.01em;
  color: #323130;
  margin-top: -4rem;
  margin-left: -14rem;
`;
export const SecondPage = styled.div`
  width: 100%;
  height: 720px;
  background: #201f1e;
  text-align: center;
`;
export const SPtext = styled.h4`
  margin-top: 10rem;
  width: 100%;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 72px;
  z-index: 999;
  letter-spacing: 0.015em;
  color: #edebe9;
`;

export const UpperSvg = styled.img`
  position: absolute;
  width: 300rem;
  height: 543.38px;
  top: 0%;
  left: -45%;
`;
export const LowerSvg = styled.img`
  position: absolute;
  width: 300rem;
  height: 543.38px;
  bottom: 0%;
  right: -40%;
`;

export const ThirdPage = styled.div`
  margin: 10rem 0;
`;
export const ScriptText = styled.h1`
  width: 381px;
  height: 100px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 50px;
  color: #323130;
`;

export const How = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

// Links

export const Box = styled.div`
  box-sizing: border-box;
  width: 894px;
  height: 209px;
  border: 2px solid #c7e0f4;
  border-radius: 20px;
  padding: 23px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 3rem;
`;
export const Logo = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 2rem;
`;
export const SubContent = styled.div``;
export const Title = styled.h1`
  width: 100%;
  height: 50px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 50px;
  letter-spacing: 0.015em;
  text-transform: capitalize;
  color: #605e5c;
`;
export const WriteUp = styled.p`
  width: 680px;
  height: 96px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;

  letter-spacing: 0.015em;
  text-transform: capitalize;
  color: #605e5c;
`;

export const HowContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-left: 15%;
`;
export const Wrapper = styled.div`
  margin-left: 10%;
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const T1 = styled.h1`
  width: 80%;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 50px;
  letter-spacing: 0.015em;
  text-transform: capitalize;
  color: #605e5c;
`;
export const T2 = styled.h1`
  width: 100%;
  height: 100%;
  font-family: "Inter";
  text-align: center;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: 0.025em;
`;
export const T3 = styled.h1`
  width: 70%;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  text-align: right;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.02em;
`;

export const Which = styled.div`
  margin: 20rem 0;
`;
export const WhichText = styled.h1`
  width: 40%;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 50px;
  color: #323130;
`;
export const BoxWhich = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 2px solid #edebe9;
  border-radius: 20px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const ContentWhich = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Item = styled.h1`
  width: 30%;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 50px;
  letter-spacing: 0.015em;
  text-transform: capitalize;
  color: #605e5c;
`;
export const Script = styled.h4`
  width: 10%;
  height: 100%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  letter-spacing: 0.015em;
  text-transform: capitalize;
  color: #605e5c;
`;
export const Improvement = styled.h4`
  width: 20%;
  height: 100%;
  font-family: "Inter";
  text-align: right;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  letter-spacing: 0.015em;
  text-transform: capitalize;
  color: #605e5c;
`;
export const WhichContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 5%;
`;
export const What = styled.div``;
export const Fag = styled.div``;
