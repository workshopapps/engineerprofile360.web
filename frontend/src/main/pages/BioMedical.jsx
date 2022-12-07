import React, { Fragment } from "react";
import {
  BioMedicalBooking,
  BioMedicalFeatures,
  BioMedicalHero,
  BioMedicalSteps,
  BioMedicalTestimonials,
} from "../components";

const BioMedical = () => {
  return (
    <Fragment>
      <BioMedicalHero />
      <BioMedicalFeatures />
      <BioMedicalTestimonials />
      <BioMedicalSteps />
      <BioMedicalBooking />
    </Fragment>
  );
};

export default BioMedical;
