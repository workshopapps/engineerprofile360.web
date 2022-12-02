import React from "react";

import Header from "../../components/Header";

import ViewAssessmentHeader from "./components/ViewAssessmentHeader";
import AssessmentContent from "./components/AssessmentContent";
function AdminViewAssessment() {
  return (
    <>
      <ViewAssessmentHeader />
      <AssessmentContent />
    </>
  );
}

export default AdminViewAssessment;
