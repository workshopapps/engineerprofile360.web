import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/reusableElements.styled";
import { CallCalling } from "iconsax-react";

const Contact = () => {
  return (
    <>
      <ContactHero>
        <Container>
          <HeroText>
            Let us help you highlight your best engineers! Reach out today.
          </HeroText>
        </Container>
      </ContactHero>

      <Container>
        <Section>
          <SectionText>Contact Us</SectionText>
          <ReachOut>
            <Phone>
              <CallCalling />
            </Phone>
            <Email></Email>
          </ReachOut>
        </Section>
      </Container>
    </>
  );
};

export default Contact;

const ContactHero = styled.div`
  width: 100%;
  padding: 20rem 0;
  background: rgba(38, 103, 255, 0.55);
`;
const HeroText = styled.h1`
  padding: 0 10rem;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 52px;
  text-align: center;
  color: #f8fbfd;
`;
const Section = styled.div``;
const SectionText = styled.h1`
  width: 100%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #2667ff;
`;
const ReachOut = styled.div``;
const Phone = styled.div``;
const Email = styled.div``;
