import styled from "styled-components";

export const Main = styled.div`
  height: 720rem;
  width: 100vw;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: 420rem;
  }
`;
export const Container = styled.div`
  height: 100vh;
  width: 1500px;
  margin: 0 auto;
  padding: 2rem 0;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 0;
    text-align: center;
  }
`;

export const FirstPage = styled.div`
  width: 100%;
`;
export const Upper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 20rem;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    flex-direction: column;
  }
  /* @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: -100px;
  } */
`;
export const Left = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    width: 95%;
    height: 100%;
    padding: 0;
    gap: 2rem;
  }
`;
export const Down = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 100vw;
    margin: 0 12rem;
  }
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

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0;
    font-weight: 600;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0.01em;
    text-align: center;
  }
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

  @media screen and (max-width: 768px) {
    width: -50%;
    height: 100%;
    padding: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 0.01em;
    text-align: center;
    margin-left: 40%;
  }
`;
export const Right = styled.div`
  width: 70%;
  height: 100%;
  padding: 25px;
  margin-top: -4rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: -2rem;
    margin-left: 5%;
  }
`;
export const SideImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const TranSIde = styled.img`
  width: 20%;
  height: 100%;
  margin-top: -12%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const DescBelow = styled.div`
  width: 100%;
  height: 100%
  display: flex;
  margin-top: 1rem;

   @media screen and (max-width: 768px) {
    margin-top: 0rem;
  }
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

  @media screen and (max-width: 768px) {
    font-style: normal;
    width: 70%;
    font-weight: 200;
    font-size: 12px;
    line-height: 23px;
    margin-top: -7rem;
    margin-left: -7rem;
  }
`;
export const SecondPage = styled.div`
  width: 100%;
  height: 720px;
  background: #201f1e;
  text-align: center;

  @media screen and (max-width: 768px) {
    height: 320px;
    margin-top: -20rem;
  }
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
  letter-spacing: 0.015em;
  color: #edebe9;

  @media screen and (max-width: 768px) {
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    width: 100%;
    padding: 70px 25px;
  }
`;

export const UpperSvg = styled.img`
  position: absolute;
  width: 300rem;
  height: 543.38px;
  top: 0%;
  left: -45%;

  @media screen and (max-width: 768px) {
    width: 50rem;
    height: 143.38px;
  }
`;
export const LowerSvg = styled.img`
  position: absolute;
  width: 300rem;
  height: 543.38px;
  bottom: 0%;
  right: -40%;

  @media screen and (max-width: 768px) {
    width: 50rem;
    height: 143.38px;
  }
`;

export const ThirdPage = styled.div`
  margin: 10rem 0;

  @media screen and (max-width: 768px) {
    margin: 3rem 0;
  }
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

  @media screen and (max-width: 768px) {
    font-style: Bolder;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
  }
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

  @media screen and (max-width: 768px) {
    width: 294px;
    height: 140px;
  }
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

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-top: 0.5rem;
  }
`;
export const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
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

  @media screen and (max-width: 768px) {
    font-weight: 300;
    font-weight: Bolder;
    font-size: 10px;
    line-height: 50px;
    letter-spacing: 0.015em;
    margin-top: -3rem;
  }
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

  @media screen and (max-width: 768px) {
    width: 220px;
    height: 56px;

    font-weight: 200;
    font-size: 6px;
    line-height: 200%;
    margin-top: -2rem;
    margin-left: -3rem;
  }
`;

export const HowContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-left: 15%;

  @media screen and (max-width: 768px) {
    margin-top: -8rem;
    gap: 3rem;
  }
`;
export const Wrapper = styled.div`
  margin-left: 10%;

  @media screen and (max-width: 768px) {
    margin-left: 0%;
  }
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    font-weight: Bolder;
  }
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

  @media screen and (max-width: 768px) {
    font-weight: 100;
    font-size: 4px;
  }
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

  @media screen and (max-width: 768px) {
    font-weight: 100;
    font-size: 4px;
  }
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

  @media screen and (max-width: 768px) {
    font-weight: 100;
    font-size: 4px;
  }
`;

export const Which = styled.div`
  margin: 20rem 0;

  @media screen and (max-width: 768px) {
    margin: 5rem 0;
  }
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

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0 50px;
    text-align: center;
    font-weight: 200;
    font-size: 20px;
    line-height: 30px;
    font-style: Bolder;
  }
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

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    gap: -0rem;
  }
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

  @media screen and (max-width: 768px) {
    font-weight: 100;
    font-size: 10px;
  }
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

  @media screen and (max-width: 768px) {
    width: 20%;
    height: 100%;
    font-weight: 200;
    font-size: 8px;
    line-height: 150%;
    margin-top: 1.5rem;
  }
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

  @media screen and (max-width: 768px) {
    width: 30%;
    height: 100%;
    font-weight: 200;
    font-size: 8px;
    line-height: 150%;
    margin-top: 1.5rem;
  }
`;
export const WhichContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 5%;

  @media screen and (max-width: 768px) {
    padding: 10px;
    gap: 0;
    margin-top: 0;
  }
`;
export const What = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;
export const TestimonyHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    gap: 10rem;
  }
`;
export const TestText = styled.h1`
  width: 906px;
  height: 116px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 50px;
  color: #323130;

  @media screen and (max-width: 768px) {
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 30px;
  }
`;
export const QuoteImg = styled.img`
  width: 177.16px;
  height: 134.75px;
  color: black;

  @media screen and (max-width: 768px) {
    width: 77.16px;
    height: 34.75px;
  }
`;
export const TestimonyContent = styled.div`
  width: 90%;
  height: 300px;
  background: #201f1e;
  border-radius: 10px;
  margin: 0 6rem;
  padding: 25px;

  @media screen and (max-width: 768px) {
    width: 95%;
    height: 233px;
    background: #201f1e;
    border-radius: 10px;
    margin: 0 6px;
    padding: 25px;
  }
`;
export const TC = styled.p`
  width: 90%;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;
  text-align: center;
  letter-spacing: 0.015em;
  text-transform: lowercase;
  color: #ffffff;
  margin: 3rem 4rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 10px;
    line-height: 200%;
    background: #201f1e;
    border-radius: 10px;
    margin: 0 2px;
    padding: 10px;
  }
`;
export const PicTest = styled.img`
  position: absolute;
  width: 138px;
  height: 138px;
  left: 1162px;
  top: -70px;

  @media screen and (max-width: 768px) {
    position: absolute;
    width: 38px;
    height: 38px;
    left: 300px;
    top: -20px;
  }
`;

export const TestimonyName = styled.div`
  width: 218px;
  height: 39px;
  background: #ffffff;
  border: 1px solid #edebe9;
  border-radius: 10px;
  padding: 5px;
`;
export const NameTest = styled.div`
  width: 195px;
  height: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #323130;
`;
export const Fag = styled.div`
  width: 100%;
  margin: 23rem 0;
  display: flex;
  flex-direction: column;
  gap: 10rem;

  @media screen and (max-width: 768px) {
    align-items: center;
    gap: 5rem;
    margin-top: 10rem;
  }
`;
export const FagText = styled.h1`
  width: 121px;
  height: 50px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 50px;
  color: #323130;
`;
export const FagComP1 = styled.div`
  width: 100%;
  margin-left: 20rem;

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`;
export const FCompText = styled.h2`
  width: 100%;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 50px;
  letter-spacing: 0.015em;
  text-transform: capitalize;
  color: #605e5c;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const FC1 = styled.div`
  width: 540px;
  height: 100%;
  background: #201f1e;
  border-radius: 10px;
  padding: 3rem 0;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 100%;
  }
`;
export const FCText = styled.h1`
  width: 100%;
  height: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  text-align: center;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
export const FcTriangle = styled.img`
  position: absolute;
  width: 64.87px;
  height: 83px;
  left: 476px;
  top: 0px;
`;
export const FagComp2 = styled.div`
  margin-left: 70rem;

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`;
