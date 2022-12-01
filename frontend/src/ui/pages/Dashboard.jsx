import React, { useEffect, useState } from "react";
import Stats from "../components/Dashboard/Stats";
import TopEmployees from "../components/Dashboard/TopEmployees";

import PageInfo from "../components/molecules/PageInfo";

import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import { showErrorToast } from "../../helpers/helper";
import { OverlayLoader } from "../../styles/reusableElements.styled";

const Dashboard = () => {

  const [stats, setStats] = useState({});
  const { auth, setAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");


  useEffect(() => {
    const getDetails = async () => {

      const ENDPOINTS = [
        axios.get(`user/${auth.id}`),
        axios.get(`employee/company/${auth.id}`),
        axios.get(`assessment/${auth.id}`),
      ];

      try {
        const response = await Promise.all(ENDPOINTS).then(function (data) {
          return data;
        });

        setIsLoading(false);

        const username = response[0]?.data?.data.username;
        const fullName = response[0]?.data?.data.full_name;
        const employees = response[1]?.data.data.data.length;
        const assessments = response[2]?.data.data.length;

        setAuth({
          ...auth, username, fullName
        })
        setStats({
          employees,
          assessments,
        });

        console.log(response);

      } catch (err) {
        if (!err?.response) {
          showErrorToast("No Server Response");
        } else if (err?.response.data.errorState === true) {
          showErrorToast(err.response.data.message);
          setFetchError(err.response.data.message);
        }
      }
    };

    getDetails();
  }, [auth.id]);

  return (
    <>
      <PageInfo
        pageTitle="Company's Dashboard"
      />
      <Stats stats={stats} />
      <TopEmployees />

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

export default Dashboard;
