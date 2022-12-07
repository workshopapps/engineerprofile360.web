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
  const [topPerformance, setTopPerformance] = useState({});
  const [topPerformances, setTopPerformances] = useState();
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      const ENDPOINTS = [
        axios.get(`employee/company/${auth.id}`),
        axios.get(`assessment/${auth.id}`),
        axios.get(`user-assessment/org/${auth.id}/org-available`),
        axios.get(`user-assessment/org/${auth.id}/org-completed`),
        axios.get(`userscore/company/${auth.id}/max`),
        axios.get(`userscore/company/${auth.id}`),
        axios.get(`department/company/${auth.id}`),
      ];

      try {
        const response = await Promise.all(ENDPOINTS).then((data) => {
          return data;
        });

        setIsLoading(false);

        const employees = response[0]?.data.data.data.length;
        const assessments = response[1]?.data.data.length;
        const availableAssessments = response[2]?.data.data.length;
        const completedAssessments = response[3]?.data.data.length;
        const topEmployee = response[4]?.data.data.userscore[0];
        const topEmployees = response[5]?.data;
        const allDepartments = response[6].data;

        console.log(topEmployees);

        console.log(allDepartments);

        setStats({
          employees,
          assessments,
          availableAssessments,
          completedAssessments,
        });
        setTopPerformance(topEmployee);
        setTopPerformances(topEmployees);
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

    getDetails();
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          <PageInfo pageTitle="Company's Dashboard" />
          <Stats stats={stats} topPerformance={topPerformance} />
          <TopEmployees
            topPerformances={topPerformances}
            departments={departments}
          />
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

export default Dashboard;
