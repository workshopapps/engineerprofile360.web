// import React from "react";

// This is for DevOps App Monitoring - START
//import * as atatus from "atatus-spa";
// This is for DevOps App Monitoring - END

//import * as Sentry from "@sentry/react";
import { Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "./components/requireAuth";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles, theme } from "./styles/globalStyles";

//  NAMED EXPORTS FOR ALL LAYOUT OF THE APP

import { MainLayout, UiLayout, AuthLayout } from "./Layouts";

// Admin dashboard
import Dashboard from "./ui/pages/Admin/Dashboard/Dashboard";
import Stacks from "./ui/pages/Admin/Stacks/Stacks";

//  NAMED EXPORTS FROM MAIN

import {
  Home,
  About,
  BioMedical,
  Blog,
  BlogStory,
  Contact,
  DemoSchedule,
  HelpCenter,
  Market,
  Payment,
  PricingPage,
  Privacy,
  Support,
  Terms,
} from "./main/pages";

//  NAMED EXPORTS FROM COMPANY

import {
  CompanyLogin,
  CompanySignup,
  CompanyEmailVerified,
  CompanyPasswordSuccess,
  CompanySetPassword,
  CompanyResetPassword,
  CompanyVerifyEmail,
} from "./ui/pages/Company/";

import {
  CompanyEmployeeAssessments,
  CompanyEmployeeDetails,
  CompanyEmployeeProfile,
  CompanyEmployeesListing,
} from "./ui/components/Company/Employees";

import {
  CompanyDashboard,
  CompanyEmployees,
  CompanyCategory,
} from "./ui/pages/Company";

//  NAMED EXPORTS FROM EMPLOYEE

import { EmployeeLogin } from "./ui/pages/Employee";

import { EmployeeDashboard, EmployeeAssessment } from "./ui/pages/Employee";

import {
  EmployeeCompletedAssessment,
  EmployeeAvailableAssessment,
  EmployeePreviewAssessment,
  EmployeeTakeAssessment,
  EmployeeCancelOrStartAssessment,
  EmployeeAssessmentResult,
} from "./ui/components/Employee";

//  NAMED EXPORTS FROM GUEST

import { GuestLogin } from "./ui/components/Guests";

import {
  GuestAssessmentList,
  GuestTakeAssessment,
  GuestTakeAssessmentResult,
  GuestEmail,
} from "./ui/pages/Guest";

import { AdminLogin } from "./ui/pages/Admin";

import useAuth from "./hooks/useAuth";

import UserSupport from "./main/pages/UserSupport";
// import UserProfile from "./ui/pages/user-profile/UserProfile";
// import AdminAssessmentList from "./ui/pages/admin-settings/adminAssesmentList/AssessmentList";
// import EmployeeProfile from "./ui/pages/EmployeeProfile/EmployeeProfile";
import AdminSetting from "./ui/pages/AdminSetting";
import AdminCSVUpload from "./ui/components/Company/Assessments/AdminCSVUpload";
// import UserAssessmentListCompleted from "./ui/pages/UserAssestList/UserAssestListCompleted";
// import EmployeeTakeAssessment from "../miscellaneous/pages/EmployeeTakeAssessment";
// import UserTakeAssessment from "./ui/pages/userTakeAssessment/UserTakeAssessment";
// import UserTakeAssessmentResult from "../miscellaneous/pages/UserTakeAssessmentResult";
// import GuestTakeAssessment from "./ui/pages/guest/GuestTakeAssessment";
// import GuestTakeAssessmentResult from "./ui/pages/guest/GuestTakeAssessmentResult";
import Testimonial from "./main/components/Testimonials/Testimonial";
import EmployeeCSVUpload from "./ui/components/Company/Employees/EmployeeCSVUpload";
// import GuestAssessmentList from "./main/pages/GuestAssessmentList";

import AdminViewAssessment from "./ui/components/Company/Assessments/admin-view-assessment/AdminViewAssessment";
// import Assessment from "./miscellaneous/assessment/Assessment.js";
import { ComparisonPage } from "./main/pages/ComparisonPage/ComparisonPage";
import AssessmentFirstPage from "./ui/components/Company/Assessments/AssessmentFirstPage";
import CreateAssessment from "./ui/components/Company/Assessments/CreateAssessment";

import MainAssessment from "./ui/pages/Company/Assessment";

import Error from "./ui/pages/404";

// import GuestLogin from "./main/pages/Auth/GuestLogin";
import DepartmentSection from "./ui/pages/Company/DepartmentSection";
import { ServerError } from "./ui/pages/ServerError";

import PersistLogin from "./components/PersistLogin";
//import PreviewCsvUpload from "./ui/components/Company/Employees/PreviewCsvUpload/PreviewCsvUpload";

import AdminAssessmmentListOutlet from "./ui/components/Company/Assessments/adminAssesmentList/AdminAssessmmentListOutlet";
import AdminAssessmentListAvailable from "./ui/components/Company/Assessments/adminAssesmentList/AdminAssessmentListAvailable";
import AssessmentList from "./ui/components/Company/Assessments/adminAssesmentList/AssessmentList";
import Assessments from "./ui/pages/Admin/Dashboard/Assessmentss";
import CreateAssessments from "./ui/pages/Admin/Dashboard/CreateAssessments";
import Index from "./main/components/NewHome/Atom/Index";

// This is for DevOps App Monitoring - START
//atatus.config("4010279ebbd747e7a752082eea130df6").install();

//atatus.notify(new Error("Test Atatus Setup"));
//atatus.notify();
// This is for DevOps App Monitoring - END

const ROLES = {
  Employees: 1,
  Organization: 2,
  Admin: 3,
};

const App = () => {
  const { auth } = useAuth();
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          {/* <Route path="/2FA" element={<User2FA />} />
          <Route path="/serverError" element={<ServerError />} />
          <Route path="/guest-email" element={<GuestEmail />} />
          <Route
            path="/guest-assessment-list"
            element={<GuestAssessmentList />}
          /> */}

          {/* <Route path="/user" element={<UserAuthLayout />}> */}
          {/* <Route path="reset-password" element={<UserResetPassword />} />
            <Route path="login" element={<UserLogin />} />
            <Route path="forgot-password" element={<UserForgotPassword />} /> */}
          {/* </Route> */}

          {/* PUBLIC ROUTES */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/biomedical-landing" element={<BioMedical />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<DemoSchedule />} />
            <Route path="/support" element={<Support />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-story" element={<BlogStory />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            {/* <Route path="/admin-assessment" element={<AdminAssessmentList />} /> */}
            <Route path="/market-comparison" element={<Market />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/guest-email" element={<GuestEmail />} />
          </Route>

          {/* Authentication Layout */}
          <Route element={<AuthLayout />}>
            {/* Company Auth Routes */}

            <Route
              path="/register"
              element={
                auth.id && auth.roles === 2 ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <CompanySignup />
                )
              }
            />
            <Route
              path="/login"
              element={
                auth.id && auth.roles === 2 ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <CompanyLogin />
                )
              }
            />
            <Route
              path="/verify-email"
              element={
                auth.id && auth.roles === 2 ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <CompanyVerifyEmail />
                )
              }
            />
            <Route
              path={"/auth/verify/:user_id/:token"}
              element={
                auth.id && auth.roles === 2 ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <CompanyEmailVerified />
                )
              }
            />
            <Route
              path="/reset-password"
              element={
                auth.id && auth.roles === 2 ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <CompanyResetPassword />
                )
              }
            />
            <Route
              path="/password/reset"
              element={
                auth.id && auth.roles === 2 ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <CompanySetPassword />
                )
              }
            />
            <Route
              path="/reset-password-success"
              element={
                auth.id && auth.roles === 2 ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <CompanyPasswordSuccess />
                )
              }
            />
            {/* Employee Auth Routes */}
            <Route path="/employee/login" element={<EmployeeLogin />} />
            {/* Admin Auth Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/guest-login" element={<GuestLogin />} />
          </Route>

          {/* Private Route */}
          <Route element={<UiLayout />}>
            <Route element={<PersistLogin />}>
              {/* Organization Route */}
              <Route element={<RequireAuth allowedRole={ROLES.Organization} />}>
                <Route
                  path="/assessment/view-assessment/:id"
                  element={<AdminViewAssessment />}
                />

                <Route path="/departments" element={<DepartmentSection />} />
                <Route path="/dashboard" element={<CompanyDashboard />} />

                <Route path="/employees" element={<CompanyEmployees />}>
                  <Route path="" element={<CompanyEmployeesListing />} />
                  <Route
                    path="profile/:ID"
                    element={<CompanyEmployeeProfile />}
                  >
                    <Route path="" element={<CompanyEmployeeDetails />} />
                    <Route
                      path="assessments"
                      element={<CompanyEmployeeAssessments />}
                    />
                  </Route>
                  <Route path="add-employee" element={<EmployeeCSVUpload />} />
                  <Route
                  // path="/employees/csv-upload-preview"
                  // element={<PreviewCsvUpload />}
                  />
                </Route>

                <Route path="/assessment" element={<MainAssessment />}>
                  <Route path="" element={<AssessmentFirstPage />} />

                  <Route
                    path="assessment-list"
                    element={<AdminAssessmmentListOutlet />}
                  >
                    <Route path="" element={<AdminAssessmentListAvailable />} />
                    <Route path="completed" element={<AssessmentList />} />
                  </Route>

                  <Route
                    path="user-assessment-result"
                    element={<EmployeeAssessmentResult />}
                  />
                  <Route
                    path="create-assessment"
                    element={<CreateAssessment />}
                  />
                  <Route path="add-assessment" element={<AdminCSVUpload />} />
                </Route>

                <Route path="/categories" element={<CompanyCategory />} />
              </Route>

              {/* Overall Admin Route */}
              <Route element={<RequireAuth allowedRole={ROLES.Admin} />}>
                <Route path="/admin/Assessments" element={<Assessments />} />
                <Route
                  path="/admin/create-assessments"
                  element={<CreateAssessments />}
                />
                {/* Put in Protected pages in here */}
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/stacks" element={<Stacks />} />
              </Route>

              <Route element={<RequireAuth allowedRole={ROLES.Employees} />}>
                {/* Put in Protected pages in here */}
                <Route
                  path="/employee/dashboard"
                  element={<EmployeeDashboard />}
                />

                <Route
                  path="/employee/assessment"
                  element={<EmployeeAssessment />}
                >
                  <Route path="" element={<EmployeeAvailableAssessment />} />
                  <Route
                    path="completed"
                    element={<EmployeeCompletedAssessment />}
                  />
                </Route>

                <Route
                  path="/employee/assessment/:assessment_id"
                  element={<EmployeePreviewAssessment />}
                >
                  <Route
                    path=""
                    element={<EmployeeCancelOrStartAssessment />}
                  />
                  <Route
                    path="take-assessment"
                    element={<EmployeeTakeAssessment />}
                  />
                </Route>

              </Route>

              <Route path="/setting" element={<AdminSetting />} />

            </Route>
          </Route>
          <Route path="*" element={<Error />} />
          {/* <Route element={<GuestLayout />}>
            <Route
              path="guest-assessment-list"
              element={<GuestAssessmentList />}
            />
            <Route path="guest-assessment" element={<GuestTakeAssessment />} />

            <Route
              path="/guest-take-assessment-result"
              element={<GuestTakeAssessmentResult />}
            />
          </Route> */}
        </Routes>
      </ThemeProvider>
      <StyledToastContainer />
    </>
  );
};
export default App;

const StyledToastContainer = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  button[aria-label="close"] {
    display: none;
  }

  /* .body is passed to bodyClassName */
  .body {
    font-family: inherit;
    font-size: 14px;
  }

  /* .progress is passed to progressClassName */
  .progress {
  }
`;
