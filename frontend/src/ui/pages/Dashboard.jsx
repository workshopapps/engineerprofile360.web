import React from "react";
import Stats from "../components/Dashboard/Stats";
import TopEmployees from "../components/Dashboard/TopEmployees";

import PageInfo from "../components/molecules/PageInfo";

const Dashboard = () => {
  return (
    <>
      <PageInfo breadcrumb={["Dashboard", "Index"]} pageTitle="Welcome Mr Mark" />
      <Stats />
      <TopEmployees />
    </>
  );
};

export default Dashboard;
