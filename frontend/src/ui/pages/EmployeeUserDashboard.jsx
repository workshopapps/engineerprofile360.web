import React from "react";
import useAuth from "../../hooks/useAuth";
import EmployeeUserDashboardLayout from "../components/Employees/EmployeeUserDashboardLayout";
import PageInfo from "../components/molecules/PageInfo";

const EmployeeUserDashboard = () => {
  const { auth } = useAuth();
  return (
    <>
      <PageInfo
        pageTitle={`Welcome Back ${auth.fullName}`}
        breadcrumb={["Dashboard", ""]}
      />
      <EmployeeUserDashboardLayout />
    </>
  );
};

export default EmployeeUserDashboard;
