import React from "react";
import { Container } from "../../../styles/reusableElements.styled";
import { Messages3, Call, Map1 } from "iconsax-react";
import styled from "styled-components";
import FooterProps from "./FooterProps";

const ContactFooter = (props) => {
  return (
    <>
      <Main>
        <Section>
          <Messages3 size={30} />
          <FooterProps
            head={"Chat With Us"}
            lastText={"Support@Eval360hq.com"}
          />
        </Section>
        <Section>
          <Call size={30} />
          <FooterProps head={"Phone"} lastText={"(406) 555-0120"} />
        </Section>
        <Section>
          <Map1 size={30} />
          <FooterProps
            head={"Locate Us"}
            lastText={"3517 W. Gray St. Utica, Pennsylvania 57867"}
          />
        </Section>
      </Main>
    </>
  );
};

export default ContactFooter;

const Section = styled.div`
  display: flex;
  gap: 1rem;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    gap: 2rem;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -8rem;
  margin-bottom: 5rem;
  padding: 0 12rem;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
    position: relative;
    bottom: -10rem;
    /* flex-direction: column; */
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-top: -20rem;
  }
`;
