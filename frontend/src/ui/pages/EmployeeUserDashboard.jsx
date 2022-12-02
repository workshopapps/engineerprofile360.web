import React from "react";
import EmployeeUserDashboardLayout from "../components/Employees/EmployeeUserDashboardLayout";
import PageInfo from "../components/molecules/PageInfo";

const EmployeeUserDashboard = () => {
  return (
    <>
      <PageInfo pageTitle="Welcome Back Mark" breadcrumb={["Dashboard", ""]} />
      <EmployeeUserDashboardLayout />
    </>
  );
};

export default EmployeeUserDashboard;
