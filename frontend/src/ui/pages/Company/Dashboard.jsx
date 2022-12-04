import React, { useEffect, useState } from "react";
import Stats from "../../components/Company/Dashboard/Stats";
import TopEmployees from "../../components/Company/Dashboard/TopEmployees";
import PageInfo from "../../components/molecules/PageInfo";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { showErrorToast } from "../../../helpers/helper";
import { OverlayLoader } from "../../../styles/reusableElements.styled";

const Dashboard = () => {
  const { auth } = useAuth();
  const [stats, setStats] = useState({});
  const [topPerformance, setTopPerformance] = useState();
  const [topPerformances, setTopPerformances] = useState();
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const getDetails = async () => {

      // Sets all endpoints
      const ENDPOINTS = [
        axios.get(`user/${auth.id}`),
        axios.get(`employee/company/${auth.id}`),
        axios.get(`assessment/${auth.id}`),
        axios.get(`user-assessment/org/${auth.id}/org-available`),
        axios.get(`user-assessment/org/${auth.id}/org-completed`),
        axios.get(`userscore/company/${auth.id}/max`),
        axios.get(`userscore/company/${auth.id}`),
        axios.get(`department/company/${auth.id}`),
      ];

      // Call endpoints concurrently

      try {
        const response = await Promise.all(ENDPOINTS).then((data) => {
          return data;
        });

        // disable loader

        setIsLoading(false);

        // Sets variables for the various responses gotten

        const employees = response[1]?.data.data.data.length;
        const assessments = response[2]?.data.data.length;
        const availableAssessments = response[3]?.data.data.length;
        const completedAssessments = response[4]?.data.data.length;
        const topEmployee = response[5]?.data.data;
        const topEmployees = response[6]?.data.data;
        const allDepartments = response[7]?.data.data;

        console.log(response)

        // Sets states for the various data

        setStats({
          employees,
          assessments,
          availableAssessments,
          completedAssessments,
        });
        setTopPerformance(topEmployee);
        setTopPerformances(topEmployees);
        setDepartments(allDepartments);

        // console.log(response);
      } catch (err) {
        if (!err?.response) {
          // Error displayed from inability to connect to the server
          showErrorToast(err.message);
        } else if (err?.response.data.errorState === true) {
          // Error gotten from the server
          showErrorToast(err.response.data.message);
          setFetchError(err.response.data.message);
        }
        // disable loader
        setIsLoading(false);
      }
    };

    getDetails();
  }, []);

  return (
    <>
      <PageInfo pageTitle="Company's Dashboard" />
      <Stats stats={stats} topPerformance={topPerformance} />
      <TopEmployees
        topPerformances={topPerformances}
        departments={departments}
      />

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
