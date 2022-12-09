import React from "react";
import styled from "styled-components";
import { Container, Title } from "../../../styles/reusableElements.styled";
import QuoteIcon from "./assets/quote.svg";
import UserPhoto from "./assets/userphoto.svg";

const Testimonials = [
  {
    name: "Mark Ezele - HNG Solutions",
    image: UserPhoto,
    description:
      "We've been using Skript for 2 years now and I can say there's been improvements on our biomedical engineers.",
    position: 1,
  },

  {
    name: "Mark Ezele - HNG Solutions",
    image: UserPhoto,
    description:
      "Our engineering team saw a faster completion rate on tasks after we did a reshuffling responsibilities based on the evaluation results from Skript, Now we successfully ship over 90% of projects within deadline, an improvement on our 47% completion rate.",
    position: 2,
  },
];

const TestimonialSection = ({ display }) => {
  return (
    <TestimonialCard>
      {Testimonials
        ? Testimonials.map((item, key) => (
            <React.Fragment key={key}>
              <p
                style={{
                  display: display === item.position ? "block" : "none",
                }}
              >
                {item.description}
              </p>
              <TestimonialName
                style={{
                  display: display === item.position ? "block" : "none",
                }}
              >
                {item.name}
              </TestimonialName>
              <TestimonialPhoto
                style={{
                  display: display === item.position ? "block" : "none",
                }}
                src={item.image}
              />
            </React.Fragment>
          ))
        : ""}
    </TestimonialCard>
  );
};

const BioMedicalTestimonials = () => {
  const [activeDot, setActiveDot] = React.useState(1);
  return (
    <BioMedicalTestimonialsContainer>
      <TitleContainer>
        <BioMedicalTitle
          as="h2"
          $weight="600"
          $size="48px"
          $color="#323130"
          $lHeight="50px"
        >
          Join thousands of people in using Eval360
        </BioMedicalTitle>
        <Quote src={QuoteIcon} title="quote" />
      </TitleContainer>
      <TestimonialSection display={activeDot} />
      <DotContainer>
        {Testimonials
          ? Testimonials.map((dot, key) => (
              <Dot
                key={key}
                style={{
                  backgroundColor: activeDot === dot.position ? "#106EBE" : "",
                }}
                onClick={() => setActiveDot(dot.position)}
              ></Dot>
            ))
          : ""}
      </DotContainer>
    </BioMedicalTestimonialsContainer>
  );
};

export default BioMedicalTestimonials;

const BioMedicalTestimonialsContainer = styled(Container)`
  padding-bottom: 50px;
`;

const TitleContainer = styled.div`
  position: relative;
`;
export const BioMedicalTitle = styled(Title)`
  text-align: center;
  width: 780px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  ${({ theme }) => theme.breakpoints.down("xs")} {
    font-size: 32px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: auto;
  }
`;

const Quote = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -10;
  margin-top: -30px;
`;

const TestimonialCard = styled.div`
  position: relative;
  background-color: #201f1e;
  border-radius: 10px;
  padding-top: 68px;
  padding-bottom: 80px;
  padding-left: 49px;
  padding-right: 49px;
  min-height: 280px;

  p {
    width: 650px;
    margin: auto;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 200%;
    text-align: center;
    letter-spacing: 0.015em;
    text-transform: lowercase;
    color: #ffffff;
    text-align: center;

    ${({ theme }) => theme.breakpoints.down("md")} {
      width: auto;
    }
  }
`;

const TestimonialPhoto = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 48px;
  margin-top: -50px;
`;

const TestimonialName = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: -20px;
  left: 49;
  padding: 10px 16px;
  color: #323130;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  background-color: #fff;
  border: 1px solid #edebe9;
  border-radius: 10px;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 29px;
  gap: 10px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
`;
