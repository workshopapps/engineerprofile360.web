import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

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
        const allDepartments = response[1]?.data;
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
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          <PageInfo breadcrumb={["employees"]} />
          <Outlet context={{ employees, departments }} />
        </>
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
