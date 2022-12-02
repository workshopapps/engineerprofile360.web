import React from "react";
import useAuth from "../../hooks/useAuth";
import EmployeeUserDashboardLayout from "../components/Employees/EmployeeUserDashboardLayout";
import PageInfo from "../components/molecules/PageInfo";

const EmployeeUserDashboard = () => {
  const { auth } = useAuth();
  console.log("auth", auth);
  return (
    <>
      <PageInfo
        pageTitle={`Welcome Back ${
          auth.fullName ? auth.fullName.split(" ")[0] : ""
        }`}
        breadcrumb={["Dashboard", ""]}
      />
      <EmployeeUserDashboardLayout />
    </>
  );
};

export default EmployeeUserDashboard;
