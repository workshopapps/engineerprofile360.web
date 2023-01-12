import React from "react";
import styled from "styled-components";
import arrow from "./assets/arrow-right.png";
import good from "./assets/goodblack.png";
import { Navigate } from "react-router-dom";

function PriceCards() {
  const [gotoPayment, setGotoPayment] = React.useState(false);

  if (gotoPayment) {
    return <Navigate to="/payment" />;
  }

  return (
    <>
      <CardWrapper>
        <Cards border={"1px solid #d1d1d1"}>
          <CardsHero>
            <h2>Basic plan</h2>
            <p>
              <span>$19</span>/mo
            </p>
            <h5>or $199 yearly</h5>
            <Button onClick={() => setGotoPayment(true)}>Buy Now</Button>
            <LearnMoreDiv>
              <p>Learn More</p>
              <img src={arrow} alt="arrow-right" />
            </LearnMoreDiv>
          </CardsHero>
          <CardTextDiv>
            <p>Includes:</p>
            <div>
              <img src={good} alt="check-mark" />
              <p>Access to 100+ editable courses</p>
            </div>
            <div>
              <img src={good} alt="check-mark" />
              <p>Limited to 100 users in the company</p>
            </div>
            <div>
              <img src={good} alt="check-mark" />
              <p>Allows up to 50 participants per assessment</p>
            </div>
            <div>
              <img src={good} alt="check-mark" />
              <p>Company welcome video</p>
            </div>
            <div>
              <img src={good} alt="check-mark" />
              <p>24/7 Online support</p>
            </div>
          </CardTextDiv>
        </Cards>

        <MostPopularWrapper>
          <h4>MOST POPULAR</h4>

          <Cards border={"1px solid  #2667FF"}>
            <CardsHero>
              <h2>Business plan</h2>
              <p>
                <span>$29</span>/mo
              </p>
              <h5>or $299 yearly</h5>
              <Button onClick={() => setGotoPayment(true)}>Buy Now</Button>
              <LearnMoreDiv>
                <p>Learn More</p>
                <img src={arrow} alt="arrow-right" />
              </LearnMoreDiv>
            </CardsHero>
            <CardTextDiv>
              <p>Includes:</p>
              <div>
                <img src={good} alt="check-mark" />
                <p>Access to 100+ editable courses</p>
              </div>
              <div>
                <img src={good} alt="check-mark" />
                <p>Limited to 100 users in the company</p>
              </div>
              <div>
                <img src={good} alt="check-mark" />
                <p>Allows up to 50 participants per assessment</p>
              </div>
              <div>
                <img src={good} alt="check-mark" />
                <p>Company welcome video</p>
              </div>
              <div>
                <img src={good} alt="check-mark" />
                <p>24/7 Online support</p>
              </div>
            </CardTextDiv>
          </Cards>
        </MostPopularWrapper>

        <Cards border={"1px solid #d1d1d1"}>
          <CardsHero>
            <h2>Basic plan</h2>
            <p>
              <span>$49</span>/mo
            </p>
            <h5>or $499 yearly</h5>
            <Button onClick={() => setGotoPayment(true)}>Buy Now</Button>
            <LearnMoreDiv>
              <p>Learn More</p>
              <img src={arrow} alt="arrow-right" />
            </LearnMoreDiv>
          </CardsHero>
          <CardTextDiv>
            <p>Includes:</p>
            <div>
              <img src={good} alt="check-mark" />
              <p>Access to 100+ editable courses</p>
            </div>
            <div>
              <img src={good} alt="check-mark" />
              <p>Limited to 100 users in the company</p>
            </div>
            <div>
              <img src={good} alt="check-mark" />
              <p>Allows up to 50 participants per assessment</p>
            </div>
            <div>
              <img src={good} alt="check-mark" />
              <p>Company welcome video</p>
            </div>
            <div>
              <img src={good} alt="check-mark" />
              <p>24/7 Online support</p>
            </div>
          </CardTextDiv>
        </Cards>
      </CardWrapper>
    </>
  );
}

export default PriceCards;

export const CardWrapper = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  overflow: hidden;
  font-family: "Inter", sans-serif;
  padding-bottom: 50px;
  padding-top: -30px;

  background-color: #fff;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (min-width: 748px) {
    /* height: 100vh; */
  }
`;
export const Cards = styled.div`
  width: 400px;
  height: 526px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: ${(props) => {
    return props.border;
  }};

  &:hover {
    transform: translateY(0.2%);
  }
`;
export const CardsHero = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  h2 {
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    color: #323130;
    margin: 0 0 10px;
    /* padding-top: 20px 0; */
  }
  p {
    font-weight: 400;
    font-size: 35px;
    line-height: 52px;
    color: #605e5c;
    margin-bottom: 15px;

    span {
      font-weight: 400;
      font-size: 35px;
      line-height: 52px;
      color: #87bfff;
    }
  }

  h5 {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #323130;
  }
`;

export const Button = styled.button`
  background: #2667ff;
  border-radius: 4px;
  margin: 20px 0;
  width: 352px;
  color: white;
  height: 44px;
  display: flex;
  font-size: 14px;
  line-height: 20px;
  justify-content: center;
  align-items: center;
  border: 0;
  transition: all 0.3s ease-in;

  &:hover {
    border: 1px solid #2667ff;
    background-color: white;
    color: #2667ff;
  }
`;
export const LearnMoreDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 100%;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #2667ff;
    margin-right: 15px;
  }

  img {
    width: 7.1px;
    height: 15.84px;
    margin-right: 15px;
  }
`;
export const CardTextDiv = styled.div`
  display: flex;
  margin-top: 0;

  justify-content: center;

  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    margin: 10px 0;
    margin-left: 10px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #323130;
  }

  img {
    height: 12.31px;
    width: 17px;
    margin-right: 10px;
  }
`;

export const MostPopularWrapper = styled.div`
  height: 567px
  width: 416px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: "1px solid  #2667FF";

  h4 {
    width: 400px;
    height: 40px;

    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #2667ff;
    background: #ebf4f9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
