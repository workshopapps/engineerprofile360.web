import React from "react";

import Breadcrumb from "../../../components/Breadcrumb";
import EmployeeList from "../../../components/EmployeeList";
import UserAssessment from "./UserAssessment";
import UserCard from "./UserCard";

const UserInfo = () => {
  return (
    <>
      <Breadcrumb />
      <UserCard />
      <UserAssessment />
      <EmployeeList />
    </>
  );
};

export default UserInfo;
