import React from "react";

import PageInfo from "../components/molecules/PageInfo";
import EmployeesListing from "../components/Employees/EmployeesListing";

const Employees = () => {
  return (
    <>
      <PageInfo breadcrumb={["dashboard", "employees", "admin"]} />
      <EmployeesListing />
    </>
  );
};

export default Employees;
