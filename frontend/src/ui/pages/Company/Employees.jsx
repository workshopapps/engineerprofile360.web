import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import PageInfo from "../../components/molecules/PageInfo";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { showErrorToast } from "../../../helpers/helper";
import { OverlayLoader } from "../../../styles/reusableElements.styled";

const Employees = () => {
  const { auth } = useAuth();
  const [employees, setEmployees] = useState([]);
  const [topEmployees, setTopEmployees] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const getDetails = async () => {
      const ENDPOINTS = [
        axios.get(`employee/company/${auth.id}`),
        axios.get(`userscore/company/${auth.id}`),
      ];

      try {
        const response = await Promise.all(ENDPOINTS).then((data) => {
          return data;
        });

        setIsLoading(false);

        const allEmployees = response[0]?.data?.data.data;
        const filteredEmployees = response[1]?.data?.data.data;

        setEmployees(allEmployees);
        setTopEmployees(filteredEmployees);

        console.log(response);
      } catch (err) {
        if (!err?.response) {
          showErrorToast(err.message);
        } else if (err?.response.data.errorState === true) {
          showErrorToast(err.response.data.message);
          setFetchError(err.response.data.message);
        }
      }
    };

    getDetails();
  }, []);

  return (
    <>
      <PageInfo breadcrumb={["dashboard", "employees", "admin"]} />
      <Outlet context={{ employees, topEmployees }} />

      {isLoading ? (
        <OverlayLoader>
          <div></div>
          <span>
            {fetchError !== ""
              ? `${fetchError} - Please try again`
              : "Just a moment..."}
          </span>
        </OverlayLoader>
      ) : (
        ""
      )}
    </>
  );
};

export default Employees;
