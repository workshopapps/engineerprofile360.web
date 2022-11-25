import React from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  Title,
} from "../../../styles/reusableElements.styled";

const BioMedicalBooking = () => {
  return (
    <BioMedicalBookingContainer>
      <Title as="h3" $weight="700" $size="32px" $color="#FAF9F8">
        Ready to get started?
      </Title>
      <p>
        Want to know if your engineers are good enough? Book a demo to see how
        good your engineers are.
      </p>
      <Button $size="lg"> Request A Demo</Button>
    </BioMedicalBookingContainer>
  );
};

export default BioMedicalBooking;

const BioMedicalBookingContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 120px 320px;
  background-color: #201f1e;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    padding: 80px 48px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 120px 48px;
  }

  p {
    margin-top: 44px;
    margin-bottom: 44px;
    line-height: 40px;
    letter-spacing: 0.03em;
    color: #fff;
  }
`;
