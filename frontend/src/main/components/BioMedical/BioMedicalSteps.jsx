import React from "react";
import styled from "styled-components";
import { Container, Title } from "../../../styles/reusableElements.styled";
import { BioMedicalTitle } from "./BioMedicalTestimonials";
import StepCheck from "./assets/step-check.svg";

const Steps = [
  {
    name: "Select a test for your Engineers",
    description:
      "Choose from the list of test, the one that suits your engineers level.",
  },

  {
    name: "Send to their mails",
    description: "Add their mails and invite them to take the test.",
  },

  {
    name: "Your engineer takes the test",
    description:
      "Your engineer joins by creating a profile and then proceeding to take the test.",
  },
  {
    name: "Check Performance",
    description:
      "Once they’re done with the test, you see the result of the test and see improvement suggestions and skills needed to be added for every engineer.",
  },
];
const BioMedicalSteps = () => {
  return (
    <BioMedicalStepsContainer>
      <BioMedicalTitle
        style={{ maxWidth: "600px" }}
        as="h2"
        $weight="600"
        $size="48px"
        $color="#323130"
        $lHeight="50px"
      >
        How Eval360 works in 4 Steps
      </BioMedicalTitle>
      <BioMedicalStepsCardContainer>
        {Steps
          ? Steps.map((item, key) => (
              <StepsCard key={key}>
                <StepsCardIcon src={StepCheck} alt={item.name} />
                <StepsCardInner>
                  <Title
                    as="h4"
                    $weight="700"
                    $size="24px"
                    $color="#605e5c"
                    $lHeight="24px"
                  >
                    {item.name}
                  </Title>
                  <p>{item.description}</p>
                </StepsCardInner>
              </StepsCard>
            ))
          : ""}
      </BioMedicalStepsCardContainer>
    </BioMedicalStepsContainer>
  );
};

export default BioMedicalSteps;

const BioMedicalStepsContainer = styled(Container)``;

const BioMedicalStepsCardContainer = styled.div`
  max-width: 894px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: -20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 39px;
`;

const StepsCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  border: 2px solid #c7e0f4;
  border-radius: 20px;
  padding: 30px 50px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    justify-content: center;
  }
`;

const StepsCardInner = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 10px;
    letter-spacing: 0.015em;
    text-transform: capitalize;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 200%;
    letter-spacing: 0.015em;
    text-transform: capitalize;
    color: #605e5c;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }
`;

const StepsCardIcon = styled.img`
  margin-right: 50px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: auto;
    margin-bottom: 20px;
  }
`;
