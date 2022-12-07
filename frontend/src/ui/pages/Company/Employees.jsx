import React from "react";
import { Outlet } from "react-router-dom";

import PageInfo from "../../components/molecules/PageInfo";

const Employees = () => {
  return (
    <>
      {/* <PageInfo breadcrumb={["dashboard", "employees", "admin"]} /> */}
      <PageInfo breadcrumb={["dashboard", "employees", "admin"]} />
      <Outlet />
    </>
  );
};

export default Employees;
