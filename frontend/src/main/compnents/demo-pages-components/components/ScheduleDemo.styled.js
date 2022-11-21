import styled from "styled-components"

export const DemoHero = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #2667ff;

  align-items: center;

  @media (min-width: 940px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 50px;

    max-height: 547px;
    justify-content: space-between;
  }
`

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const HeroHeading = styled.h3`
  color: white;
  font-size: 27px;
  line-height: 35px;
  white-space: wrap;
  margin-bottom: 10px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;

  @media (min-width: 748px) {
    color: white;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 60px;
  }
`

export const CheckDiv = styled.div`
  display: flex;
  align-items: center;
`
export const Check = styled.img``
export const CheckText = styled.p`
  color: white;
  font-size: 16px;

  white-space: wrap;
  line-height: 20px;
  font-weight: 600;
  font-family: "Inter", sans-serif;
`

export const InputForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  margin: 0 auto;
  border: 1px solid #edebe9;
  border-radius: 8px;

  background-color: white;

  @media (min-width: 940px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 553px;
    height: 620px;
    transform: translate(80px, 14%);
  }
`
export const InputHeading = styled.header`
  width: 100%;
  height: 80px;
  margin-bottom: 0px;
  font-family: "Poppins", sans-serif;
  @media (min-width: 748px) {
    width: 100%;
    height: 107px;
    margin-bottom: 5px;
    font-family: "Poppins", sans-serif;
  }
`

export const InputHeader = styled.h1`
  font-weight: 600px;
  font-size: 27px;
  line-height: 30.5px;
  text-align: center;
  color: #201f1e;
  padding-top: 20px;

  @media (min-width: 940px) {
    font-weight: 600px;
    font-size: 32px;
    line-height: 37.5px;
  }
`
export const InputText = styled.p`
  font-size: 16px;
  font-weight: 400px;
  line-height: 18.75px;
  color: #605e5c;
  text-align: center;
`
export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  width: 450px;
`
export const FormDivWrapper = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  width: 450px;
  margin: 12px 0;
`
export const Label = styled.label`
  font-weight: 600px;
  font-size: 18px;
  color: #2f2f2f;
  line-height: 21.78px;
  margin: 0;
  padding: 0;
`
export const Input = styled.input`
  height: 38px;
  border: 1px solid #a19f9d;
  border-radius: 2px;
  padding: 0 4px;
  font-size: 14px;
  font-weight: 500px;
  font-family: "Roboto", sans-serif;
  color: #201f1e;
  width: 100%;
  outline: none;

  &:focus {
    border: 1px solid #2667ff;
  }
  @media (min-width: 748px) {
    height: 46px;

    padding: 0 8px;
  }
`

export const ErrorMessage = styled.div`
  font-size: 12px;

  line-height: 16px;
  color: #de350b;
`

export const Submit = styled.button`
  display: flex;
  width: 450px;
  height: 50px;
  border-radius: 4px;
  outline: none;
  background: #106ebe;
  color: white;
  display: flex;
  border: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600px;
  transition: all 0.3s ease;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #201f1e;
    cursor: pointer;
  }

  @media (min-width: 940px) {
    width: 450px;
    height: 70px;
  }
`
export const Body = styled.div`
  padding: 50px 0px;
  @media (min-width: 940px) {
    padding: 170px 40px 65px;
  }
`
export const TrustedBy = styled.h2`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600px;
  margin: 0;
  font-family: "Inter" sans-serif;
`
export const Reviews = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  justify-content: center;

  margin: 55px 0 80px;
  @media (min-width: 940px) {
    align-items: center;
    flex-direction: row;

    justify-content: space-between;
  }
`
export const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 140;
  width: 544px;
  border: 1px solid #cacaca;
  border-radius: 8px;
  margin: ${(props) => props.margin};
`
export const ReviewImage = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 64px;
  margin-right: 8px;
`
export const ReviewContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  justify-items: center;
`
export const ReviewText = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin: 0px;
`
export const ReviewName = styled.h5`
  font-size: 16px;
  line-height: 22px;
  font-weight: 600px;
  margin: 0px;
`
