import React from "react"
import Avatar from "../assets/Avatar.png"

import checkbox from "../assets/checkbox.png"
import { useNavigate } from "react-router-dom"
import {
  ErrorMessageIcon,
  FormDiv,
  ErrorMessageDiv,
  Input,
  InputForm,
  InputHeader,
  Label,
  Submit,
  ErrorMessage,
  InputHeading,
  ReviewContainer,
  ReviewImage,
  ReviewContainerText,
  ReviewText,
  ReviewName,
  DemoHero,
  InputText,
  HeroCheck,
  HeroContainer,
  HeroHeading,
  CheckDiv,
  CheckText,
  Check,
  TrustedBy,
  Body,
  Reviews,
} from "./ScheduleDemo.styled"
import SupportPartners from "./SupportPartners"
import { useState, useEffect } from "react"

function ScheduleDemo() {
  const [formData, setFormData] = useState({
    personName: "",
    organizationName: "",

    companyEmail: "",
    companyPhone: "",
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [orgError, setOrgError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const navigate = useNavigate()
  const { organizationName, personName, companyPhone, companyEmail } = formData

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
    setFormErrors(validate(formData))
    setIsSubmit(true)
    navigate("/confirm-demo")
  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormData({
        last_name: "",
        first_name: "",
        email: "",
        message: "",
      })
      setNameError(false)
      setOrgError(false)
      setEmailError(false)
      setPhoneError(false)
    }
  }, [formErrors, isSubmit])

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.personName) {
      errors.personName = "Name can not be blank"
      setNameError(true)
    }
    if (!values.organizationName) {
      errors.organizationName = "Organization name can not be blank"
      setOrgError(true)
    }
    if (!values.companyEmail) {
      errors.companyEmail = "Email can not be blank"
      setEmailError(true)
    } else if (!regex.test(values.companyEmail)) {
      errors.companyEmail = "This is not a valid email format"
    }
    if (!values.companyPhone) {
      errors.companyPhone = "Please enter a phone number"
      setPhoneError(true)
    }

    return errors
  }

  return (
    <>
      <DemoHero>
        <HeroContainer>
          <HeroHeading>
            Skript assesses engineers, and <br /> review their feedback to{" "}
            <br /> ascertain their work efficiency <br /> and performance.
          </HeroHeading>
          <HeroCheck>
            <CheckDiv>
              <Check src={checkbox} alt="check" />
              <CheckText>Customize Assessments to fit your request</CheckText>
            </CheckDiv>
            <CheckDiv>
              <Check src={checkbox} alt="check" />
              <CheckText>Automatically track engineers performance</CheckText>
            </CheckDiv>
            <CheckDiv>
              <Check src={checkbox} alt="check" />
              <CheckText>
                Uncover blindspots easily and gives recommendations
              </CheckText>
            </CheckDiv>
            <CheckDiv>
              <Check src={checkbox} alt="check" />
              <CheckText>Increases company yield</CheckText>
            </CheckDiv>
          </HeroCheck>
        </HeroContainer>
      </DemoHero>
      <InputForm
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <InputHeading>
          <InputHeader>Schedule a Demo now</InputHeader>
          <InputText>
            Fill out the form below and we will contact you shortly
          </InputText>
        </InputHeading>
        <FormDiv>
          <Label htmlFor="personName">Name</Label>
          <Input
            type="text"
            placeHolder="Text"
            id="personName"
            value={personName}
            onChange={(e) => {
              handleChange(e)
            }}
          />

          <ErrorMessageDiv>
            <ErrorMessage>{formErrors.Name}</ErrorMessage>
          </ErrorMessageDiv>
        </FormDiv>
        <FormDiv>
          <Label htmlFor="organizationName">Organization Name</Label>
          <Input
            type="text"
            placeHolder="Text"
            value={organizationName}
            id="organizationName"
            onChange={(e) => {
              handleChange(e)
            }}
          />

          <ErrorMessageDiv>
            <ErrorMessage>{formErrors.organizationName}</ErrorMessage>
          </ErrorMessageDiv>
        </FormDiv>
        <FormDiv>
          <Label htmlFor="companyEmail">Company Email</Label>
          <Input
            type="email"
            placeHolder="Text"
            id="companyEmail"
            value={companyEmail}
            onChange={(e) => {
              handleChange(e)
            }}
          />

          <ErrorMessageDiv>
            <ErrorMessage>{formErrors.companyEmail}</ErrorMessage>
          </ErrorMessageDiv>
        </FormDiv>
        <FormDiv>
          <Label htmlFor="companyPhone">Company Phone</Label>
          <Input
            type="tel"
            placeholder="Enter phone here"
            value={companyPhone}
            id="companyPhone"
            onChange={(e) => {
              handleChange(e)
            }}
          />
        </FormDiv>
        <Submit type="submit">Book your free Demo</Submit>
      </InputForm>
      <Body>
        <TrustedBy>Trusted by 200+ companies</TrustedBy>
        <SupportPartners />
        <Reviews>
          <ReviewContainer>
            <ReviewImage src={Avatar} alt="Review avatar" className="" />
            <ReviewContainerText>
              <ReviewText>
                Skript brings company using their software to an entire new
                level...
              </ReviewText>
              <ReviewName>Sophia Victory,CEO @Awest industry</ReviewName>
            </ReviewContainerText>
          </ReviewContainer>
          <ReviewContainer margin={"0 8px"}>
            <ReviewImage src={Avatar} alt="Review avatar" className="" />
            <ReviewContainerText>
              <ReviewText>
                Skript brings company using their software to an entire new
                level...
              </ReviewText>
              <ReviewName>Sophia Victory,CEO @Awest industry</ReviewName>
            </ReviewContainerText>
          </ReviewContainer>
          <ReviewContainer>
            <ReviewImage src={Avatar} alt="Review avatar" className="" />
            <ReviewContainerText>
              <ReviewText>
                Skript brings company using their software to an entire new
                level...
              </ReviewText>
              <ReviewName>Sophia Victory,CEO @Awest industry</ReviewName>
            </ReviewContainerText>
          </ReviewContainer>
        </Reviews>
      </Body>
    </>
  )
}

export default ScheduleDemo
