import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { showErrorToast } from "../../../helpers/helper";
import { OverlayLoader } from "../../../styles/reusableElements.styled";

import PageInfo from "../../components/molecules/PageInfo";

const Employees = () => {
  const { auth } = useAuth();
  const [employees, setEmployees] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [employeesTotalRows, setEmployeesTotalRows] = useState(0);
  const [employeesPerPage, setEmployeesPerPage] = useState(10);

  const [departments, setDepartments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  const getdetails = async (page) => {
    const ENDPOINTS = [
      axios.get(
        `employee/company/${auth.org_id}/?page=${page}&per_page=${employeesPerPage}&delay=1`
      ),
      axios.get(`department/company/${auth.org_id}`),
    ];

     

    try { 
      await Promise.all(ENDPOINTS).then((data) => {
        
        setEmployees(data[0]?.data?.data.data);
        setEmployeesTotalRows(data[0]?.data?.data.total);
        setDepartments(data[1]?.data.data);
        setIsLoading(false);
      });
    } catch (err) {
      setIsLoading(false);
      if (!err?.response) showErrorToast(err.message);
      else if (err?.response.data.errorState === true)
        showErrorToast(err.response.data.message);
    }
  };

  const handlePageChange = (page) => {
    getdetails(page);
  };

   const handlePerRowsChange = async (newPerPage, page) => {
     const ENDPOINTS = [
       axios.get(
         `employee/company/${auth.org_id}/?page=${page}&per_page=${newPerPage}&delay=1`
       ),
       axios.get(`department/company/${auth.org_id}`),
     ];

     try {
       await Promise.all(ENDPOINTS).then((data) => {
         setEmployees(data[0]?.data?.data.data);
         setEmployeesTotalRows(data[0]?.data?.data.total);
         setEmployeesPerPage(newPerPage);
         setDepartments(data[1]?.data.data);
         setIsLoading(false);
       });
     } catch (err) {
       setIsLoading(false);
       if (!err?.response) showErrorToast(err.message);
       else if (err?.response.data.errorState === true)
         showErrorToast(err.response.data.message);
     }
   };


  useEffect(() => {
    getdetails(1); // fetch page 1 of users
  }, []);

  // const breadcrumbs =
  //   pathname === "/employees"
  //     ? ["employees"]
  //     : pathname === "/employees/add-employee"
  //     ? ["employees", "add employee"]
  //     : pathname.startsWith("/employees/profile")
  //     ? ["employees", "employee", "profile"]
  //     : "";

  return (
    <>
      <PageInfo
        // breadcrumb={breadcrumbs}
        pageTitle="Employees"
      />
      {!isLoading ? (
        <Outlet
          context={{
            employees,
            departments,
            employeesPerPage,
            employeesTotalRows,
            setEmployeesTotalRows,
            isLoading,
            handlePageChange,
            handlePerRowsChange,
          }}
        />
      ) : (
        <OverlayLoader contained>
          <div></div>
          <span>Just a moment...</span>
        </OverlayLoader>
      )}
    </>
  );
};

export default Employees;
