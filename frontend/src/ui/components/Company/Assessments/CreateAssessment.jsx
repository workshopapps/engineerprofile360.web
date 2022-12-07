import React from "react";

import PageInfo from "../../molecules/PageInfo";
<<<<<<< HEAD
import SelectType from "../../CreateAssessment/SelectType";
=======
import SelectType from "./CreateAssessment/SelectType";
>>>>>>> dev

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
