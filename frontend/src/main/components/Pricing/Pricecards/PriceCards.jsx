import React from "react";
import {
  CardWrapper,
  Cards,
  CardsHero,
  CardTextDiv,
  Button,
  LearnMoreDiv,
  MostPopularWrapper,
} from "./PriceCards.style";
import arrow from "../assets/arrow-right.png";
import good from "../assets/goodblack.png";

function PriceCards() {
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
            <Button>Buy Now</Button>
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
              <Button>Buy Now</Button>
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
            <Button>Buy Now</Button>
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
