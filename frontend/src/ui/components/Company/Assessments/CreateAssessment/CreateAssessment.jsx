import React from "react";

import PageInfo from "../../../molecules/PageInfo";
import SelectType from "./SelectType";

const CreateAssessment = () => {
  return (
    <>
      <PageInfo
        breadcrumb={["Assessment", "Create Assessment"]}
        pageTitle="Create Assessment"
      />
      <SelectType />
    </>
  );
};

export default CreateAssessment;
