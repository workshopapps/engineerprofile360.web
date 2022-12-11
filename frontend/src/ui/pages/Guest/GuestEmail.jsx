import styled, { css } from "styled-components";
import Footer from "../../../Layouts/Main/Partials/Footer";

import celebration from "../../../assets/images/celebration.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GuestEmail = () => {
  // const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("guest");
  });

  return (
    <>
      <Main>
        <div className="hero">
          <h1>Thanks for Your Feedback and Participation</h1>
          <img src={celebration} alt="celebration" />
        </div>
        <div className="cta__section">
          <h3>To get full product hit the button below</h3>
          <div className="cta__btn">
            <Button>Get Started</Button>
            <Button $variant="outlined">Subscribe to our Updates</Button>
          </div>
        </div>
      </Main>
    </>
  );
};

export default GuestEmail;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 500px 450px;
  width: 100%;

  .hero {
    background: #2667ff;
    height: 100%;
    align-self: center;
    display: flex;
    align-items: center;
  }

  .cta__section {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 86px 102px;
  }

  .cta__btn {
    display: flex;
    margin-top: 33px;
  }

  h1 {
    font-weight: 900;
    font-size: 72px;
    line-height: 76px;
    color: #ffffff;
    max-width: 50%;
    padding: 0 70px;
  }

  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 39px;
    width: 268px;
    color: #201f1e;
  }

  img {
    position: absolute;
    top: -60px;
    right: 0;
    z-index: 2;
    height: 1200px;
    width: 1100px;
  }

  @media (max-width: 1240px) {
    .hero {
      flex-direction: column;
      justify-content: center;
    }
    .cta__section {
      justify-content: center;
      align-items: center;
    }
    img {
      display: none;
    }
    h1 {
      font-size: 60px;
      max-width: 90%;
      line-height: 100px;
      text-align: center;
    }
    h3 {
      width: 100%;
      text-align: center;
    }
  }

  @media screen and (max-width: 480px) {
    grid-template-rows: 400px 400px;
    h1 {
      font-size: 30px;
      max-width: 100%;
      line-height: 65px;
    }
    h3 {
      width: 100%;
      text-align: center;
    }
    .cta__section {
      padding: 20px 15px;
    }
    .cta__btn {
      flex-direction: column;
      width: 100%;
      justify-self: center;
    }
  }
`;

const Button = styled.button`
  padding: 19px 49px;
  margin-right: 30px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  border-radius: 4px;

  ${(props) => {
    switch (props.$variant) {
      case "outlined":
        return css`
          border: 1px solid #2667ff;
          color: #2667ff;
          background: transparent;
        `;
      default:
        return css`
          border: none;
          background: #2667ff;
          color: #ffffff;
        `;
    }
  }}

  @media screen and (max-width: 480px) {
    font-size: 12px;
    display: inline-block;
    margin: 10px auto;
    width: 85%;
  }
`;
