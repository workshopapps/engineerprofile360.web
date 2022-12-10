import React from "react";
import useAuth from "../../../hooks/useAuth";
import { RecentAssessment, Stats } from "../../components/Employee";
import PageInfo from "../../components/molecules/PageInfo";

const Dashboard = () => {
  const { auth } = useAuth();
  return (
    <>
      <PageInfo
        pageTitle={`Welcome Back ${auth.username ? auth.username : ""}`}
        breadcrumb={["Dashboard", "Employee"]}
      />
      <Stats />
      <RecentAssessment />
    </>
  );
};

export default Dashboard;
