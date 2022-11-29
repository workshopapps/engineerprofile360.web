import React from "react";
import Stats from "../components/Dashboard/Stats";
import TopEmployees from "../components/Dashboard/TopEmployees";

import PageInfo from "../components/molecules/PageInfo";

const Dashboard = () => {
  return (
    <>
      <PageInfo pageTitle="Welcome Mr Mark" />
      <Stats />
      <TopEmployees />
    </>
  );
};

export default Dashboard;
