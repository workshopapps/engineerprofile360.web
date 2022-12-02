import React from "react";
import axios from "../../api/axios";
import { showErrorToast } from "../../helpers/helper";
import useAuth from "../../hooks/useAuth";
import EmployeeUserDashboardLayout from "../components/Employees/EmployeeUserDashboardLayout";
import PageInfo from "../components/molecules/PageInfo";

const EmployeeUserDashboard = () => {
  const { auth, setAuth } = useAuth();
  const [isLoading, setIsLoading] = React.useState(true);
  const [fetchError, setFetchError] = React.useState("");

  React.useEffect(() => {
    const getDetails = async () => {
      const ENDPOINTS = [axios.get(`user/${auth.id}`)];

      try {
        const response = await Promise.all(ENDPOINTS).then(function (data) {
          return data;
        });

        setIsLoading(false);

        const username = response[0]?.data?.data.username;
        const fullName = response[0]?.data?.data.full_name;

        setAuth({
          ...auth,
          username,
          fullName,
        });
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
  }, []);
  return (
    <>
      <PageInfo
        pageTitle={`Welcome Back ${
          auth.fullName ? auth.fullName.split(" ")[0] : ""
        }`}
        breadcrumb={["Dashboard", ""]}
      />
      <EmployeeUserDashboardLayout />
    </>
  );
};

export default EmployeeUserDashboard;
