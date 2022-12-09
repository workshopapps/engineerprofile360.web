import React, { useState } from "react";
import {
  AccordionButton,
  AccordionDiv,
  AccordionHeader,
  AccordionWrapper,
  Answer,
  Question,
  QuestionDiv,
  QuestionToggler,
  ButtonDiv,
} from "./Accordion.style";
import { AccordionData } from "./AccordionData";
import Toggler from "../assets/Toggler.png";
function Accordion() {
  const [openAccordion, setOpenAccordion] = useState(null);
  return (
    <>
      <AccordionWrapper>
        <AccordionHeader margin={"25px 0 50px 0"}>
          Frequently asked questions
        </AccordionHeader>

        <AccordionDiv>
          {AccordionData.map((accordion, index) => {
            const { question, answer } = accordion;
            const handleAccordion = (i) => {
              if (openAccordion === i) {
                setOpenAccordion(null);
              } else {
                setOpenAccordion(index);
              }
            };
            return (
              <div key={index}>
                <QuestionDiv
                  onClick={() => {
                    handleAccordion(index);
                  }}
                >
                  <Question>{question}</Question>
                  {openAccordion === index ? (
                    <QuestionToggler
                      src={Toggler}
                      alt="Toggler"
                      rotate={"rotateX(180deg)"}
                    />
                  ) : (
                    <QuestionToggler
                      src={Toggler}
                      alt="Toggler"
                      rotate={"rotateX(0deg)"}
                    />
                  )}
                </QuestionDiv>
                {openAccordion === index && <Answer>{answer}</Answer>}
              </div>
            );
          })}
        </AccordionDiv>
      </AccordionWrapper>

      <AccordionHeader margin={" 90px 0 0 0 "}>
        Eval360 is super easy to use and your company gets two
      </AccordionHeader>
      <AccordionHeader margin={" 5px 0 0 0"}>
        weeks free trial for any of the plans
      </AccordionHeader>
      <ButtonDiv>
        <AccordionButton>Get Started</AccordionButton>
      </ButtonDiv>
    </>
  );
}

export default Accordion;
