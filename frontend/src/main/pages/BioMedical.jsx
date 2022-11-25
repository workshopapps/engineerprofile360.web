import React from "react";
import {
  BioMedicalBooking,
  BioMedicalFeatures,
  BioMedicalHero,
  BioMedicalSteps,
  BioMedicalTestimonials,
} from "../components";

const BioMedical = () => {
  return (
    <>
      <BioMedicalHero />
      <BioMedicalFeatures />
      <BioMedicalTestimonials />
      <BioMedicalSteps />
      <BioMedicalBooking />
    </>
  );
};

export default BioMedical;
