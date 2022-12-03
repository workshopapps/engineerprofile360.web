import React from "react";
import { EmployeeDashboard } from "../../components/Employee";
import PageInfo from "../../components/molecules/PageInfo";

const Dashboard = () => {
  return (
    <>
      <PageInfo pageTitle="Welcome Back Mark" breadcrumb={["Dashboard", ""]} />
      <EmployeeDashboard />
    </>
  );
};

export default Dashboard;
