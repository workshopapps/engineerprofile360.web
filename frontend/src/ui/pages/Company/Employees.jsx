import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { showErrorToast } from "../../../helpers/helper";
import { OverlayLoader } from "../../../styles/reusableElements.styled";

import PageInfo from "../../components/molecules/PageInfo";

const Employees = () => {
  const { auth } = useAuth();
  const [employees, setEmployees] = useState();
  const [departments, setDepartments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    const getdetails = async () => {
      const ENDPOINTS = [
        axios.get(`employee/company/${auth.org_id}`),
        axios.get(`department/company/${auth.org_id}`),
      ];

      try {
        const response = await Promise.all(ENDPOINTS).then((data) => {
          return data;
        });
        const allEmployees = response[0]?.data?.data.data;
        const allDepartments = response[1]?.data.data;
        console.log(allEmployees, allDepartments);
        setIsLoading(false);

        setEmployees(allEmployees);
        setDepartments(allDepartments);
      } catch (err) {
        setIsLoading(false);
        if (!err?.response) {
          showErrorToast(err.message);
        } else if (err?.response.data.errorState === true) {
          showErrorToast(err.response.data.message);
        }
      }
    };

    getdetails();
  }, [auth.org_id]);

  const breadcrumbs =
    pathname === "/employees"
      ? ["employees"]
      : pathname === "/employees/add-employee"
      ? ["employees", "add employee"]
      : pathname.startsWith("/employees/profile")
      ? ["employees", "employee", "profile"]
      : "";

  return (
    <>
      <PageInfo breadcrumb={breadcrumbs} />
      {!isLoading ? (
        <Outlet context={{ employees, departments }} />
      ) : (
        <OverlayLoader contained>
          <div></div>
          <span>Just a moment...</span>
        </OverlayLoader>
      )}
    </>
  );
};

export default Employees;
