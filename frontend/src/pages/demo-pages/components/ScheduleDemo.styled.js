import styled from "styled-components"

export const DemoHero = styled.div`
  max-width: 100%;
  height: 400px;
  padding: 0 10px;
  margin: 0;
  background-color: #2667ff;

  @media (min-width: 748px) {
    max-width: 100%;
    height: 547px;
    padding: 40px;
    margin: 0;
    background-color: #2667ff;
    position: relative;
  }
`

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`

export const HeroHeading = styled.h3`
  color: white;
  font-size: 27px;
  line-height: 35px;
  white-space: wrap;
  font-weight: 600;
  font-family: "Roboto", sans-serif;

  @media (min-width: 748px) {
    color: white;
    font-size: 32px;
    line-height: 44px;
    font-weight: 600;
    font-family: "Roboto", sans-serif;
  }
`
export const HeroCheck = styled.section``
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
  width: 500px;
  height: 720px;

  margin: 0 auto;
  border: 1px solid #edebe9;
  border-radius: 8px;

  background-color: white;

  @media (min-width: 748px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 752px;
    height: 720px;
    border: 1px solid #edebe9;
    border-radius: 8px;
    position: absolute;
    top: 40px;
    right: 40px;
    background-color: white;
  }
`
export const InputHeading = styled.header`
  width: 100%;
  height: 107px;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;
  @media (max-width: 748px) {
    width: 100%;
    height: 107px;
    margin-bottom: 10px;
    font-family: "Poppins", sans-serif;
  }
`

export const InputHeader = styled.h1`
  font-weight: 600px;
  font-size: 32px;
  line-height: 37.5px;
  text-align: center;
  color: #201f1e;
  @media (max-width: 748px) {
    font-weight: 600px;
    font-size: 27px;
    line-height: 30.5px;
    text-align: center;
    color: #201f1e;
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
  width: 380px;
  height: 38px;
  border: 1px solid #a19f9d;
  border-radius: 2px;
  padding: 0 4px;
  font-size: 18px;
  font-weight: 500px;
  font-family: "Roboto", sans-serif;
  color: #201f1e;

  outline: none;

  &:focus {
    border: 1px solid #2667ff;
  }
  @media (min-width: 784px) {
    width: 560px;
    height: 46px;
    border: 1px solid #a19f9d;
    border-radius: 2px;
    padding: 0 8px;
    font-size: 18px;
    font-weight: 500px;
    font-family: "Roboto", sans-serif;
    color: #201f1e;

    outline: none;
  }
`

export const ErrorMessageDiv = styled.div`
  display: flex;
  align-items: center;
`

export const ErrorMessage = styled.div`
  font-size: 12px;

  line-height: 16px;
  color: #de350b;
`

export const Submit = styled.button`
  display: flex;
  width: 400px;
  height: 60px;
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

  @media (min-width: 748px) {
    display: flex;
    width: 560px;
    height: 80px;
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
  }
`
export const Body = styled.div`
  padding: 100px 40px;
  @media (min-width: 748px) {
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
  align-items: center;

  justify-content: space-between;
  @media (min-width: 748px) {
    display: flex;
    align-items: center;

    justify-content: space-between;
  }

  margin: 55px 0 80px;
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
