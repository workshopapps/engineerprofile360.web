import React, { useEffect, useState } from "react";
import Stats from "../components/Dashboard/Stats";
import TopEmployees from "../components/Dashboard/TopEmployees";

import PageInfo from "../components/molecules/PageInfo";

import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { auth } = useAuth();

  return (
    <>
      <PageInfo pageTitle={`Welcome ${auth.fullName ? auth.fullName.split(" ")[0] : ""} `} />
      <Stats />
      <TopEmployees />
    </>
  );
};

export default Dashboard;
