// import React from "react";

// This is for DevOps App Monitoring - START
import * as atatus from "atatus-spa";
// This is for DevOps App Monitoring - END

//import * as Sentry from "@sentry/react";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/requireAuth";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles, theme } from "./styles/globalStyles";
import { MainLayout, UiLayout, AuthLayout } from "./Layouts";

// Admin dashboard
import Dashboard from "./ui/pages/Admin/Dashboard/Dashboard";
import Stacks from "./ui/pages/Admin/Stacks/Stacks";
//DEFAULT EXPORTS FROM MAIN
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

import {
  CompanyLogin,
  CompanySignup,
  CompanyEmailVerified,
  CompanyPasswordSuccess,
  CompanySetPassword,
  CompanyResetPassword,
  CompanyVerifyEmail,
} from "./ui/pages/Company/";

import { GuestEmail, GuestLogin } from "./ui/components/Guests";
import {
  GuestAssessmentList,
  GuestTakeAssessment,
  GuestTakeAssessmentResult,
} from "./ui/pages/Guest";

import { CompanyDashboard, Employees, Category } from "./ui/pages/Company";

import {
  EmployeeLogin,
  EmployeeDashboard,
  EmployeeUserAssessmentListOutlet,
} from "./ui/pages/Employee";

import { AdminLogin } from "./ui/pages/Admin";

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
// import GuestEmail from "./main/pages/GuestEmail";
// import GuestAssessmentList from "./main/pages/GuestAssessmentList";

import AdminViewAssessment from "./ui/components/Company/Assessments/admin-view-assessment/AdminViewAssessment";
// import Assessment from "./miscellaneous/assessment/Assessment.js";
import { ComparisonPage } from "./main/pages/ComparisonPage/ComparisonPage";
import AssessmentFirstPage from "./ui/components/Company/Assessments/AssessmentFirstPage";
import CreateAssessment from "./ui/components/Company/Assessments/CreateAssessment";

import {
  EmployeeAssessments,
  EmployeeDetails,
  EmployeeProfile,
  EmployeesListing,
} from "./ui/components/Company/Employees";

import MainAssessment from "./ui/pages/Company/Assessment";
import UserAssessmentListOutlet from "./ui/pages/Employee/EmployeeAssessmentListOutlet";
import Error from "./ui/pages/404";

// import GuestLogin from "./main/pages/Auth/GuestLogin";
import DepartmentSection from "./ui/pages/Company/DepartmentSection";
import { ServerError } from "./ui/pages/ServerError";

import PersistLogin from "./components/PersistLogin";
//import PreviewCsvUpload from "./ui/components/Company/Employees/PreviewCsvUpload/PreviewCsvUpload";
import {
  AssessmentCompleted,
  AssessmentAvailable,
} from "./ui/components/Employee";
import EmployeeAssessmentResult from "./ui/pages/Employee/EmployeeAssessmentResult";
import EmployeeAssessmentList from "./ui/pages/Employee/EmployeeAssessmentListOutlet";
import AdminAssessmmentListOutlet from "./ui/components/Company/Assessments/adminAssesmentList/AdminAssessmmentListOutlet";
import AdminAssessmentListAvailable from "./ui/components/Company/Assessments/adminAssesmentList/AdminAssessmentListAvailable";
import AssessmentList from "./ui/components/Company/Assessments/adminAssesmentList/AssessmentList";
import Assessmentss from "./ui/pages/Admin/Dashboard/Assessmentss";
import CreateAssessmentss from "./ui/pages/Admin/Dashboard/CreateAssessments";

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
            <Route path="/" element={<Home />} />
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
            {/* <Route path="/admin/stacks" element={<Stacks/>} /> */}
               

            {/* UNKNOWN ROUTES */}
            {/* <Route path="/fill-employee" element={<Fillemployee />} /> */}
            {/* <Route
              path="/guest-take-assessment"
              element={<GuestTakeAssessment />}
            />
            <Route
              path="/guest-take-assessment-result"
              element={<GuestTakeAssessmentResult />}
            />

            <Route path="/csv-uploading" element={<CsvUploading />} />

            <Route
              path="/csv-uploading-complete"
              element={<CsvUploadComplete />}
            />
            <Route path="/privacy-policy" element={<Privacy />} />
            /> */}

            <Route path="/employee-profile" element={<EmployeeProfile />} />

            {/* <Route
                path="/user-assessment-completed"
                element={<UserAssessmentListCompleted />}
              /> */}
            <Route path="/guest-email" element={<GuestEmail />} />
          </Route>

          {/* Authentication Layout */}
          <Route element={<AuthLayout />}>
            {/* Company Auth Routes */}

            <Route path="/register" element={<CompanySignup />} />
            <Route path="/login" element={<CompanyLogin />} />
            <Route path="/verify-email" element={<CompanyVerifyEmail />} />
            <Route
              path={"/auth/verify/:user_id/:token"}
              element={<CompanyEmailVerified />}
            />
            <Route path="/reset-password" element={<CompanyResetPassword />} />
            <Route path="/password/reset" element={<CompanySetPassword />} />
            <Route
              path="/reset-password-success"
              element={<CompanyPasswordSuccess />}
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
              {/* Employee Route */}
              {/* <Route element={<RequireAuth allowedRole={ROLES.Employees} />}> */}
              {/* Put in Protected pages in here */}
              <Route
                path="/employee-assessment-result"
                element={<EmployeeAssessmentResult />}
              />
              {/* <Route
                path="/employee-user-dashboard"
                element={<EmployeeUserDashboard />}
              /> */}
              <Route
                path="/employee-assessment-list"
                element={<EmployeeAssessmentList />}
              >
                <Route
                  path="employee-assessment-completed"
                  element={<AssessmentCompleted />}
                />
                <Route
                  path="employee-assessment-available"
                  element={<AssessmentAvailable />}
                />
              </Route>
              <Route path="/employee-profile" element={<EmployeeProfile />} />
              {/* </Route> */}

              {/* Organization Route */}
              <Route element={<RequireAuth allowedRole={ROLES.Organization} />}>
                <Route
                  path="/assessment/view-assessment"
                  element={<AdminViewAssessment />}
                />

                <Route path="/departments" element={<DepartmentSection />} />
                <Route path="/dashboard" element={<CompanyDashboard />} />

                <Route path="/employees" element={<Employees />}>
                  <Route path="" element={<EmployeesListing />} />
                  <Route path="profile/:ID" element={<EmployeeProfile />}>
                    <Route path="" element={<EmployeeDetails />} />
                    <Route
                      path="assessments"
                      element={<EmployeeAssessments />}
                    />
                  </Route>
                  <Route path="add-employee" element={<EmployeeCSVUpload />} />
                  <Route
                  // path="/employees/csv-upload-preview"
                  // element={<PreviewCsvUpload />}
                  />
                </Route>
                {/* <Route
                  path="/take-assessment"
                  element={<UserTakeAssessment />}
                /> */}
                {/* <Route
                  path="/take-assessment-result"
                  element={<UserTakeAssessmentResult />}
                /> */}
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
                  <Route path="admin-csv-upload" element={<AdminCSVUpload />} />
                </Route>

                <Route path="/categories" element={<Category />} />
              </Route>

              {/* Overall Admin Route */}
              <Route element={<RequireAuth allowedRole={ROLES.Admin} />}>
                <Route path="/admin/Assessmentss" element={<Assessmentss />} />
                <Route
                  path="/admin/create-assessmentss"
                  element={<CreateAssessmentss />}
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
                  element={<EmployeeUserAssessmentListOutlet />}
                >
                  <Route path="" element={<AssessmentAvailable />} />
                  <Route path="completed" element={<AssessmentCompleted />} />
                </Route>

                {/* <Route path="/employee/dashboard" element={"boss"} /> */}
              </Route>

              <Route path="/setting" element={<AdminSetting />} />
              <Route path="/404" element={<Error />} />

              {/* <Route path="/assessment" element={<Assessment />} /> */}
            </Route>
          </Route>
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
