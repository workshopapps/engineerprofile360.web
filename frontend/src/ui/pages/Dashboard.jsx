import React from "react";
import Stats from "../components/Dashboard/Stats";
import TopEmployees from "../components/Dashboard/TopEmployees";

import PageInfo from "../components/molecules/PageInfo";

import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { auth } = useAuth();

  console.log(auth);

  console.log(auth);
  return (
    <>
      <PageInfo pageTitle={`Welcome ${auth.user_name}`} />
      <Stats />
      <TopEmployees />
    </>
  );
};

export default Dashboard;
