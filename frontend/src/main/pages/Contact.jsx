import React from "react"
import styled from "styled-components"
import BasicLayout from "../layouts/BasicLayout"

import contactImage from "../../assets/images/contact-image.png"
import sms from "../../assets/icons/contact-page/sms-edit.svg"
import call from "../../assets/icons/contact-page/call.svg"
import map from "../../assets/icons/contact-page/map.svg"
import facebook from "../../assets/icons/contact-page/Facebook.svg"
import instagram from "../../assets/icons/contact-page/instagram.svg"
import twitter from "../../assets/icons/contact-page/twitter.svg"
import linkedin from "../../assets/icons/contact-page/linkedin.svg"

const Contact = () => {
  return (
    <BasicLayout>
      <ContactContainer>
        <Top>
          <GetInTouch>
            <h1>Get In Touch</h1>
            <div></div>
            <p>
              Let us help you highlight your best engineers and bring you one
              step closer to your goal!
            </p>
          </GetInTouch>
        </Top>
        <CardInfo>
          <form>
            <Title>
              <h1>Send Us A Message</h1>
              <p>
                {" "}
                You Can Reach Us At Anytime Via <span>Hi@skripthq.com</span>
              </p>
            </Title>

            <Container>
              <FormData>
                <label htmlFor="full_name">Full Name</label>
                <input id="full_name" type="text" />
              </FormData>
              <FormData>
                <label htmlFor="phone_number">Phone Number</label>
                <input id="phone_number" type="text" />
              </FormData>
              <FormData>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" />
              </FormData>
              <FormData>
                <label htmlFor="message">How Can We Help?</label>
                <textarea id="message" />
              </FormData>
            </Container>
            <Button>
              <button type="submit">Submit</button>
            </Button>
          </form>
          <MainInfo>
            <p>
              We also have customer care representatives who are ready to help
              you in any capacity. Click on the button below to get in touch
              with a representative.
            </p>
            <Heading>
              <h1>Contact Us Here</h1>
              <div></div>
            </Heading>
            <Body>
              <Info>
                <img src={sms} alt="sms svg" />
                <div>
                  <h2>Chat With Us</h2>
                  {/* <p>Our Friendly Team Is Here To Help</p> */}
                  <a href="malito:skriptassessmenthq@gmail.com">
                    skriptassessmenthq@gmail.com
                  </a>
                </div>
              </Info>
              <Info>
                <img src={call} alt="call svg" />
                <div>
                  <h2>Phone</h2>
                  {/* <p>Our Friendly Team Is Here To Help</p> */}
                  <a href="tel:4065550120">(406) 555-0120</a>
                </div>
              </Info>
              <Info>
                <img src={map} alt="map svg" />
                <div>
                  <h2>Our Address</h2>
                  {/* <p>Our Friendly Team Is Here To Help</p> */}
                  <a href="">3517 W. Gray St. Utica, Pennsylvania 57867</a>
                </div>
              </Info>
            </Body>
            <SocialContainer>
              <img src={facebook} alt="facebook icon" />
              <img src={instagram} alt="instagram icon" />
              <img src={twitter} alt="twitter icon" />
              <img src={linkedin} alt="linkedin icon" />
            </SocialContainer>
          </MainInfo>
        </CardInfo>
      </ContactContainer>
    </BasicLayout>
  )
}

export default Contact

const ContactContainer = styled.div`
  /* max-width: 1440px; */
  display: grid;
  grid-template-rows: 1fr 1fr;
  flex-direction: column;
  @media (max-width: 911px) {
    /* height: 100vh; */
    margin-bottom: 450px;
  }

  @media (max-width: 901px) {
    margin-bottom: 100px;
  }
`
const Top = styled.div`
  width: 100%;
  height: 120vh;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${contactImage});
  background-position: center;
  background-repeat: no-repeat;
`
const GetInTouch = styled.div`
  width: 50%;
  margin-left: 26px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.palette.grey.white};

  h1 {
    font-family: inherit;
    font-size: 68px;
    font-weight: 600;
    padding-left: 0.5rem;
  }

  div {
    width: 47%;
    border: 5.71429px solid ${({ theme }) => theme.palette.grey.white};
  }

  p {
    font-family: inherit;
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
    width: 30vw;
  }

  @media (max-width: 911px) {
    h1 {
      font-size: 48px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 596px) {
    h1 {
      font-size: 36px;
    }

    p {
      width: 35vw;
    }
  }
  @media (max-width: 456px) {
    h1 {
      font-size: 35px;
      width: 90vw;
    }

    div {
      border: 3.71429px solid ${({ theme }) => theme.palette.grey.white};
    }

    p {
      width: 70vw;
      font-size: 20px;
    }
  }
`

const CardInfo = styled.div`
  background-color: ${({ theme }) => theme.palette.main.primary};
  height: 1000px;
  margin: -110px auto;
  background-color: #2667ff;
  padding: 0 120px;
  display: flex;
  max-width: 1440px;

  form {
    /* width: calc(1440px - 60%); */
    width: 70%;
    background-color: ${({ theme }) => theme.palette.grey.white};
    height: 1297px;
    margin-top: -130px;
    padding: 0 30px;
    filter: drop-shadow(0px 19px 40px rgba(229, 229, 229, 0.25));

    @media (max-width: 911px) {
      width: 100%;
      margin-top: 0;
    }
  }

  @media (max-width: 911px) {
    /* width: 50%; */
    /* display: none; */
    width: 100%;
    flex-direction: column;
    background-color: transparent;
    height: 0;
    /* height: 100vh; */
    padding: 0;
    gap: 3rem;
    margin: 0 auto;
  }
`
const Title = styled.div`
  text-align: center;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: inherit;

  h1 {
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;

    span {
      color: #2667ff;
    }
  }

  @media (max-width: 911px) {
    h1 {
      font-size: 24px;
    }
  }
`

const Container = styled.div`
  padding: 35px 0;

  @media (max-width: 550px) {
    padding: 25px 25px 5px;
  }
`

const FormData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 36px;

  label {
    font-family: inherit;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;

    @media (max-width: 911px) {
      font-size: 16px;
      line-height: 18px;
    }
  }

  input {
    width: 100%;
    height: 88px;
    font-size: 28px;
    outline: none;
    background: #fafbfc;
    border: 2px solid #dddddd;
    border-radius: 3px;
    padding-left: 10px;

    @media (max-width: 911px) {
      height: 0px;
      padding: 20px 20px;
      font-size: 18px;
    }

    @media (max-width: 550px) {
      padding: 15px;
    }
  }

  textarea {
    outline: none;
    height: 50vh;
    font-family: inherit;
    font-size: 28px;
    background: #fafbfc;
    border: 2px solid #dddddd;
    border-radius: 3px;
    padding-left: 10px;
    padding-top: 5px;

    @media (max-width: 911px) {
      height: 15vh;
      padding: 20px 20px;
      font-size: 18px;
      padding: 0;
    }
  }

  @media (max-width: 911px) {
    margin-bottom: 18px;
  }
`
const Button = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  button {
    width: 80%;
    height: 10vh;
    background: #106ebe;
    border-radius: 4px;
    border: none;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.grey.white};

    @media (max-width: 911px) {
      height: 6vh;
      padding: 20px 20px;
      font-size: 18px;
      text-align: center;
    }
  }
`
const MainInfo = styled.div`
  /* padding: 110px 0 5px 40px; */
  padding: 60px 0 5px 40px;

  p {
    width: 35vw;
    min-width: 30vw;
    font-size: 18px;
    line-height: 30px;
    color: ${({ theme }) => theme.palette.grey.white};
    margin-bottom: 40px;
  }

  @media (max-width: 911px) {
    /* display: none; */
    width: 100%;
    flex-direction: column;
    background-color: #2667ff;
    padding: 40px 0 5px 20px;
    display: flex;
    align-items: center;

    p {
      width: 80vw;
      text-align: center;
    }
  }

  @media (max-width: 596px) {
    p {
      font-size: 14px;
    }
  }
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  color: ${({ theme }) => theme.palette.grey.white};

  h1 {
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
  }

  div {
    color: #fff;
    border: 3.7px solid ${({ theme }) => theme.palette.grey.white};
    width: 75%;
  }

  @media (max-width: 911px) {
    h1 {
      font-size: 28px;
    }

    div {
      margin-top: -20px;
    }
  }
`

const Body = styled.div`
  margin-top: 100px;

  @media (max-width: 911px) {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* flex-wrap: wrap; */
    gap: 10px;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 30px;
  color: ${({ theme }) => theme.palette.grey.white};
  font-family: inherit;
  margin-bottom: 80px;

  img {
    width: 36px;
    height: 36px;
  }

  h2 {
    font-size: 28px;
    line-height: 36px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }

  a:link,
  a:visited,
  p:last-child {
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: ${({ theme }) => theme.palette.grey.white};
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 911px) {
    gap: 5px;
    margin-bottom: 0;

    img {
      height: 24px;
      width: 24px;
    }

    h2 {
      font-size: 16px;
      line-height: 28px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
    }

    a:link,
    a:visited,
    p:last-child {
      font-size: 14px;
    }

    div {
      /* width: 40%; */
      gap: 5px;
      margin-bottom: 0px;
    }
  }
`

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;

  img {
    cursor: pointer;
  }

  @media (max-width: 911px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }
`
