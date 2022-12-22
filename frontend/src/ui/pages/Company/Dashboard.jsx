import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { showErrorToast } from "../../../helpers/helper";
import { OverlayLoader } from "../../../styles/reusableElements.styled";

import PageInfo from "../../components/molecules/PageInfo";
import Stats from "../../components/Company/Dashboard/Stats";
import TopEmployees from "../../components/Company/Dashboard/TopEmployees";

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
        axios.get(`employee/company/${auth.org_id}`),
        axios.get(`assessment/${auth.org_id}`),
        axios.get(`user-assessment/org/${auth.org_id}/org-available`),
        axios.get(`user-assessment/org/${auth.org_id}/org-completed`),
        axios.get(`userscore/company/${auth.org_id}/max`),
        axios.get(`userscore/company/${auth.org_id}`),
        axios.get(`department/company/${auth.org_id}`),
      ];

      try {
        await Promise.all(ENDPOINTS).then((response) => {
          const employees = response[0]?.data.data.total;
          const assessments = response[1]?.data.data.length;
          const availableAssessments = response[2]?.data.data.length;
          const completedAssessments = response[3]?.data.data.length;
          const topEmployee =
            employees > 0 ? response[4]?.data.data.userscore : {};
          const topEmployees = response[5]?.data;
          const allDepartments = response[6]?.data;

          setStats({
            employees,
            assessments,
            availableAssessments,
            completedAssessments,
          });
          setTopPerformance(topEmployee);
          setTopPerformances(topEmployees);
          setDepartments(allDepartments);

          console.log(topEmployee);
        });

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        if (!err?.response) showErrorToast(err.message);
        else if (err?.response.data.errorState === true)
          showErrorToast(err.response.data.message);
      }
    };

    getDetails();
  }, [auth.org_id]);

  return (
    <>
      <PageInfo pageTitle="Company's Dashboard" />
      {!isLoading ? (
        <>
          <Stats stats={stats} topPerformance={topPerformance} />
          <TopEmployees
            topPerformances={topPerformances}
            departments={departments}
          />
        </>
      ) : (
        <OverlayLoader contained>
          <div></div>
          <span>Preparing Dashboard...</span>
        </OverlayLoader>
      )}
    </>
  );
};

export default Dashboard;
