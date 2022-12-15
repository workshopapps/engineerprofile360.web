import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
import { Link, Outlet, useLocation } from "react-router-dom";
import PageInfo from "../../components/molecules/PageInfo";
import { OverlayLoader } from "../../../styles/reusableElements.styled";
import { showErrorToast } from "../../../helpers/helper";

const Assessment = () => {
  const [available, setAvailable] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();
  const { auth } = useAuth();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const ENDPOINTS = [
          axios.get(`user-assessment/${auth.id}`),
          axios.get(`assessment/department/${auth.dept_id}`),
        ];
        await Promise.all(ENDPOINTS).then((data) => {
          setCompleted(
            data[0]?.data?.data.filter(
              (assessment) => assessment.completed === 1
            )
          );

          setAvailable(
            data[1]?.data?.data.filter(
              (assessment) =>
                !data[0]?.data?.data.some(
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

  console.log(available);
  console.log(completed);

  return (
    <>
      <PageInfo breadcrumb={["assessment"]} />

      {!isLoading ? (
        <>
          <Navigation>
            <Link to="/employee/assessment">
              <Available
                active={pathname === "/employee/assessment" ? "active" : null}
              >
                Available ({available ? available.length : 0})
              </Available>
            </Link>
            <Link to="/employee/assessment/completed">
              <Completed
                active={
                  pathname === "/employee/assessment/completed"
                    ? "active"
                    : null
                }
              >
                Completed ({completed ? completed.length : 0})
              </Completed>
            </Link>
          </Navigation>

          <Outlet context={{ available, completed }} />
        </>
      ) : (
        <OverlayLoader contained>
          <div></div>
          <span>Preparing assessments</span>
        </OverlayLoader>
      )}
    </>
  );
};

export default Assessment;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(1)} 0;
  border-bottom: 1px solid #323130;
  flex-wrap: wrap;
`;

const Available = styled.span`
  color: ${(props) => (props.active === "active" ? "#2667ff" : "#323130")};
  font-size: 14px;
  padding: ${({ theme }) => theme.spacing(1)} 0;
`;

const Completed = styled.span`
  color: ${(props) => (props.active === "active" ? "#2667ff" : "#323130")};
  font-size: 14px;
  padding: ${({ theme }) => theme.spacing(1)} 0;
`;
