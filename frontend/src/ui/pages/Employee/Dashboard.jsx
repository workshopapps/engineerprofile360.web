import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { showErrorToast } from "../../../helpers/helper";

import { OverlayLoader } from "../../../styles/reusableElements.styled";
import { RecentAssessment, Stats } from "../../components/Employee";
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
      ];

      try {
        await Promise.all(ENDPOINTS).then((data) => {
          setStats(data[0]?.data?.data[0]);
          setAssessments(data[1]?.data.data);
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
          <Stats stats={stats} />
          <RecentAssessment assessments={assessments} />
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
