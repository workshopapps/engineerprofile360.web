import styled from "styled-components"

export const ConfirmedContainer = styled.main`
  width: 100%;

  font-family: "Inter", sans-serif;
`
export const ConfirmedHero = styled.div`
  width: 100%;
  height: 254px;
  background: #2667ff;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const ConfirmedHeading = styled.h3`
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  margin: 0;
  @media (min-width: 748px) {
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    margin: 0;
  }
`

export const ConfirmedText = styled.h5`
  font-weight: 600;
  font-size: 19px;
  line-height: 26px;
  text-align: center;

  padding: 10px 0;
  margin: 0;

  @media (min-width: 748px) {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-align: center;

    padding: 10px 0;
    margin: 0;
  }
`
export const ConfirmedPara = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  margin: 0;

  @media (min-width: 748px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    margin: 0;
  }
`
export const Resources = styled.div`
  display: flex;
  justify-content: space-center;
  align-items: center;
  margin-top: 100px;
  flex-direction: column;

  margin: 60px 40px;
  @media (min-width: 748px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 60px 40px;
  }
`
export const ResourcesImg = styled.img`
  cursor: pointer;
  transition: all 0.2s ease-in;
  height: 370px;
  width: 350px;
  padding-top: 15px;
  &:hover {
    transform: translateY(0.2%);
  }
  @media (min-width: 748px) {
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(0.2%);
    }
  }
`

export const Body = styled.section`
  padding: 0 40px;
`
