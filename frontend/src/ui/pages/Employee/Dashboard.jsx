import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { showErrorToast } from "../../../helpers/helper";

import { OverlayLoader } from "../../../styles/reusableElements.styled";
import { EmployeeRecentAssessment, EmployeeStats } from "../../components/Employee";
import PageInfo from "../../components/molecules/PageInfo";

const Dashboard = () => {
  const { auth } = useAuth();
  const [stats, setStats] = useState();
  const [assessments, setAssessments] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      const ENDPOINTS = [
        axios.get(`userscore/employee/${auth.id}`),
        axios.get(`user-assessment/${auth.id}`),
        axios.get(`assessment/department/${auth.dept_id}`),
      ];

      try {
        await Promise.all(ENDPOINTS).then((data) => {
          setStats(data[0]?.data?.data[0]);
          setAssessments(
            data[2]?.data?.data.filter(
              (assessment) =>
                !data[1]?.data?.data.some(
                  (completed) => assessment.id === completed.assessment_id
                )
            )
          );
        });

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        if (!err.response) {
          showErrorToast("No Server Response");
        } else {
          showErrorToast(err.response.data.message);
        }
      }
    };

    getDetails();
  }, []);

  return (
    <>
      <PageInfo
        pageTitle={`Welcome Back ${auth.username ? auth.username : ""}`}
        breadcrumb={["Dashboard", "Employee"]}
      />
      {!isLoading ? (
        <>
          <EmployeeStats stats={stats} />
          <EmployeeRecentAssessment assessments={assessments} />
        </>
      ) : (
        <OverlayLoader contained>
          <div></div>
          Preparing Dashboard...
        </OverlayLoader>
      )}
    </>
  );
};

export default Dashboard;
