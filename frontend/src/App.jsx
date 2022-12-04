import React from "react";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/requireAuth";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles, theme } from "./styles/globalStyles";
import { MainLayout, UiLayout } from "./Layouts";
import Contact from "./main/pages/Contact";
import DemoSchedule from "./main/pages/Demo";
import { AdminAuthLayout, UserAuthLayout } from "./main/components";
import {
  Home,
  About,
  BioMedical,
  AdminSignup,
  AdminLogin,
  AdminResetPassword,
  AdminSetPassword,
  AdminPasswordSuccess,
  AdminVerifyEmail,
  AdminEmailVerified,
} from "./main/pages";

import { CompanyDashboard, Employees, Category } from "./ui/pages/Company";

import Support from "../src/ui/pages/UserSupport";
import Terms from "../src/ui/pages/termsAndService/TermsAndService";
// import UserProfile from "./ui/pages/user-profile/UserProfile";
import Blog from "../src/main/pages/Blog";
import AssessmentList from "./main/components/sections/userAssessmentList/AssessmentList";
import AdminAssessmentList from "./ui/pages/admin-settings/adminAssesmentList/AssessmentList";
// import UserTakeAssessment from "./main/components/sections/userTakeAssessment/UserTakeAssessment";
import UserTakeAssessment from "./ui/pages/userTakeAssessment/UserTakeAssessment";
import UserTakeAssessmentResult from "./ui/pages/userTakeAssessment/UserTakeAssessmentResult";
import GuestTakeAssessment from "./ui/pages/guest/GuestTakeAssessment";
import GuestTakeAssessmentResult from "./ui/pages/guest/GuestTakeAssessmentResult";
import Privacy from "./main/pages/Privacy/privacy";
// import EmployeeProfile from "./ui/pages/EmployeeProfile/EmployeeProfile";
import AdminSetting from "./ui/pages/AdminSetting/AdminSetting";
// import Testimonial from "./main/components/Testimonials/Testimonial";
import PricingPage from "./main/pages/PricingPage";
import Payment from "./main/pages/Payment";
import HelpCenter from "../src/main/pages/HelpCenter";
import Market from "./main/components/Market-comp-page-2/Market";
import AdminCSVUpload from "./ui/pages/AdminUpload/AdminCSVUpload";
import UserAssessmentListCompleted from "./ui/pages/UserAssestList/UserAssestListCompleted";

import GuestEmail from "./main/pages/GuestEmail";
import GuestAssessmentList from "./main/pages/GuestAssessmentList";

import { User2FA } from "./ui/pages/userSignUp/User2FA";
import AdminViewAssessment from "./ui/pages/admin-view-assessment/AdminViewAssessment";
import Assessment from "./ui/pages/assessment/Assessment.jsx";
import UserAssessmentResult from "./ui/pages/user-assessment-result/UserAssessmentResult";
// import CsvUpload from "./ui/pages/csv/CsvUpload";
import CsvUploading from "./ui/pages/csv/CsvUploading";
import CsvUploadComplete from "./ui/pages/csv/CsvUploadingComplete";
import { ComparisonPage } from "./ui/pages/ComparisonPage/ComparisonPage";

import UserResetPassword from "./ui/pages/user-password/UserResetPassword";
import UserLogin from "./ui/pages/user-password/UserLogin";
import UserForgotPassword from "./ui/pages/user-password/UserForgotPassword";
import AssessmentFirstPage from "./ui/pages/AssessmentFirstPage";
import CreateAssessment from "./ui/pages/CreateAssessment";

import {
  EmployeeProfile,
  EmployeeFullProfile,
  EmployeesListing,
} from "./ui/components/Company/Employees";

import AcceptReject from "./ui/pages/Accept Reject Profile/AcceptReject";
import MainAssessment from "./ui/pages/Assessment";
// import { Category } from "./ui/pages/category/Category";
import UserAssessmentListAvailable from "./ui/pages/user-assessment-list/UserAssessmentListAvailable";
import CompletedUserAssessments from "./ui/pages/user-assessment-list/UserAssessmentListCompleted";
import UserAssessmentListOutlet from "./ui/pages/user-assessment-list/UserAssessmentListOutlet";
import EmployeeUserDashboard from "./ui/pages/Employee/EmployeeDashboard";
import Error from "./ui/pages/404";
import EmployeeDeparment from "./ui/pages/EmployeeDeparment";


import GuestLogin from "./main/pages/Auth/GuestLogin";
import DepartmentSection from "./ui/pages/DepartmentSection/DepartmentSection";
import { ServerError } from "./ui/pages/ServerError";

import PersistLogin from "./components/PersistLogin";
import PreviewCsvUpload from "./ui/pages/PreviewCsvUpload/PreviewCsvUpload";
import Fillemployee from "./ui/pages/FillEmployee/FillEmployee";

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
          <Route path="/2FA" element={<User2FA />} />
          <Route path="/serverError" element={<ServerError />} />
          <Route path="/guest-email" element={<GuestEmail />} />
          <Route
            path="/guest-assessment-list"
            element={<GuestAssessmentList />}
          />

          <Route path="/user" element={<UserAuthLayout />}>
            <Route path="reset-password" element={<UserResetPassword />} />
            <Route path="login" element={<UserLogin />} />
            <Route path="forgot-password" element={<UserForgotPassword />} />
          </Route>

          {/* Public routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/biomedical-landing" element={<BioMedical />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<DemoSchedule />} />
            <Route path="/support" element={<Support />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/termsandservice" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            <Route path="/assessment-list" element={<AssessmentList />} />
            <Route path="/admin-assessment" element={<AdminAssessmentList />} />
            <Route path="/market-comparison" element={<Market />} />

            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route
              path="/take-assessment-list"
              element={<UserTakeAssessment />}
            />

            <Route path="/fill-employee" element={<Fillemployee />} />

            <Route
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

            <Route path="/setting" element={<AdminSetting />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/employee-profile" element={<EmployeeProfile />} />
            <Route path="/admin-csv-upload" element={<AdminCSVUpload />} />
            {/* <Route
              path="/user-assessment-completed"
              element={<UserAssessmentListCompleted />}
            /> */}
          </Route>

          <Route element={<AdminAuthLayout />}>
            <Route path="/register" element={<AdminSignup />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/reset-password" element={<AdminResetPassword />} />
            <Route
              path="/reset-password-success"
              element={<AdminPasswordSuccess />}
            />
            <Route path="/password/reset" element={<AdminSetPassword />} />
            <Route path="/verify-email" element={<AdminVerifyEmail />} />
            <Route
              path={"/auth/verify/:user_id/:token"}
              element={<AdminEmailVerified />}
            />
            <Route path="/accept-reject-profile" element={<AcceptReject />} />
            <Route path="/guest-login" element={<GuestLogin />} />
          </Route>

          {/* Private Route */}
          <Route element={<UiLayout />}>
            <Route element={<PersistLogin />}>
              {/* Employee Route */}
              <Route element={<RequireAuth allowedRole={ROLES.Employees} />}>
                {/* Put in Protected pages in here */}
                {/* <Route
                path="/user-assessment-result"
                element={<UserAssessmentResult />}
              /> */}
                <Route
                  path="/employee-user-dashboard"
                  element={<EmployeeUserDashboard />}
                />
                <Route path="/employee-profile" element={<EmployeeProfile />} />
                <Route path="/404" element={<Error />} />
              </Route>

              {/* Organization Route */}
              <Route element={<RequireAuth allowedRole={ROLES.Organization} />}>
                <Route path="/ui" element={"my guy"} />
                <Route path="/404" element={<Error />} />
                <Route
                  path="/assessment/view-assessment"
                  element={<AdminViewAssessment />}
                />
                <Route
                  path="/employees/csv-upload-preview"
                  element={<PreviewCsvUpload />}
                />
                <Route path="/departments" element={<DepartmentSection />} />
                <Route path="/dashboard" element={<CompanyDashboard />} />
                <Route path="/employees" element={<Employees />}>
                  <Route path="" element={<EmployeesListing />} />
                  <Route path="profile" element={<EmployeeProfile />} />
                  <Route
                    path="full-profile"
                    element={<EmployeeFullProfile />}
                  />
                  <Route
                    path="employee-profile"
                    element={<EmployeeProfile />}
                  />
                  <Route path="add-employee" element={<AdminCSVUpload />} />
                  <Route
                    path="employee-department"
                    element={<EmployeeDeparment />}
                  />
                </Route>
                <Route
                  path="/take-assessment"
                  element={<UserTakeAssessment />}
                />
                <Route
                  path="/take-assessment-result"
                  element={<UserTakeAssessmentResult />}
                />
                <Route path="/assessment" element={<MainAssessment />}>
                  <Route path="" element={<AssessmentFirstPage />} />
                  <Route
                    path="user-assessment-result"
                    element={<UserAssessmentResult />}
                  />
                  <Route
                    path="create-assessment"
                    element={<CreateAssessment />}
                  />
                  <Route path="admin-csv-upload" element={<AdminCSVUpload />} />
                  <Route
                    path="user-assessment-result"
                    element={<UserAssessmentResult />}
                  />
                </Route>

                <Route path="/categories" element={<Category />} />
                <Route
                  path="user-assessment-list"
                  element={<UserAssessmentListOutlet />}
                >
                  <Route path="" element={<UserAssessmentListAvailable />} />
                  <Route
                    path="completed"
                    element={<CompletedUserAssessments />}
                  />
                </Route>
              </Route>

              {/* Overall Admin Route */}
              <Route element={<RequireAuth allowedRole={ROLES.Admin} />}>
                {/* Put in Protected pages in here */}
              </Route>
              <Route path="/assessment" element={<Assessment />} />
            </Route>
          </Route>
          <Route path="add" element={<AdminCSVUpload />} />
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
