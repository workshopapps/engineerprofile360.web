import React, { useState, useEffect } from "react";
import Stats from "../../../components/Admin/Dashboard/Stats";
import Table from "../../../components/Admin/Dashboard/Table";

import axios from "../../../../api/axios";
import { OverlayLoader } from "../../../../styles/reusableElements.styled";
import { showErrorToast } from "../../../../helpers/helper";
import PageInfo from "../../../components/molecules/PageInfo";

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      const ENDPOINTS = [axios.get("admin/users"), axios.get("admin/overview")];

      try {
        const response = await Promise.all(ENDPOINTS).then((data) => {
          return data;
        });

        setIsLoading(false);
        setUsers(response[0]?.data?.data.data);
        setStats(response[1]?.data?.data);

        console.log(response[1]?.data?.data);
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
    <div>
      <PageInfo
        breadcrumb={["Admin", "Dashboard"]}
        pageTitle="Eval360's Main Admin Dashboard"
      />
      {!isLoading ? (
        <>
          <Stats stats={stats} />
          <Table users={users} />
        </>
      ) : (
        <OverlayLoader contained>
          <div></div>
          Preparing Dashboard...
        </OverlayLoader>
      )}
    </div>
  );
};

export default Dashboard;
