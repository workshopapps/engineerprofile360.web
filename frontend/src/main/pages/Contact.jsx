import React, { Fragment } from "react";
import { ContactHero, ContactBody, ContactFooter } from "../components";
import { Container } from "../../styles/reusableElements.styled";

const Contact = () => {
  return (
    <Fragment>
      <ContactHero />

      <Container>
        <ContactBody />
        <ContactFooter />
      </Container>
    </Fragment>
  );
};

export default Contact;
