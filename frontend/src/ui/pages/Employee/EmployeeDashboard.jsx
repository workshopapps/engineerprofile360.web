import React from "react";
import useAuth from "../../../hooks/useAuth";
import Dashboard from "../../components/Employee/Dashboard";
import PageInfo from "../../components/molecules/PageInfo";

const EmployeeDashboard = () => {
  const { auth } = useAuth();
  return (
    <>
      <PageInfo
        pageTitle={`Welcome Back ${auth.username ? auth.username : ""}`}
        breadcrumb={["Dashboard", ""]}
      />
      <Dashboard />
    </>
  );
};

export default EmployeeDashboard;
