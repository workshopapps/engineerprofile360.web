import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles, theme } from "./styles/globalStyles";
import { MainLayout, UiLayout } from "./Layouts";

import Contact from "./main/pages/Contact";
import DemoSchedule from "./main/pages/Demo";
import { AdminAuthLayout } from "./main/components";
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
import Support from "../src/ui/pages/UserSupport";
import Terms from "../src/ui/pages/termsAndService/TermsAndService";
import UserProfile from "./ui/pages/user-profile/UserProfile";
import Blog from "../src/main/pages/Blog";
import AssessmentList from "./main/components/sections/userAssessmentList/AssessmentList";
import AdminAssessmentList from "./ui/pages/admin-settings/adminAssesmentList/AssessmentList";
import UserTakeAssessment from "./main/components/sections/userTakeAssessment/UserTakeAssessment";
import Privacy from "./main/pages/Privacy/privacy";
import EmployeeProfile from "./ui/pages/EmployeeProfile/EmployeeProfile";
import AdminSetting from "./ui/pages/AdminSetting/AdminSetting";
import Testimonial from "./main/components/Testimonials/Testimonial";
import PricingPage from "./main/pages/PricingPage";
import Payment from "./main/pages/Payment";
import HelpCenter from "../src/main/pages/HelpCenter";
import AdminCSVUpload from "./ui/pages/AdminUpload/AdminCSVUpload";
import UserAssessmentListCompleted from "./ui/pages/UserAssestList/UserAssestListCompleted";

import { User2FA } from "./ui/pages/userSignUp/User2FA";
import { DashboardLayout } from "../src/Layouts/Dashboard/DashboardLayout";
import AdminViewAssessment from "./ui/pages/admin-view-assessment/AdminViewAssessment";
import Assessment from "./ui/pages/assessment/Assessment.jsx";
import UserAssessmentResult from "./ui/pages/user-assessment-result/UserAssessmentResult";
import CsvUpload from "./ui/pages/csv/CsvUpload";
import CsvUploading from "./ui/pages/csv/CsvUploading";
import CsvUploadComplete from "./ui/pages/csv/CsvUploadingComplete";
import { ComparisonPage } from "./ui/pages/ComparisonPage/ComparisonPage";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/2FA" element={<User2FA />} />

          <Route element={<MainLayout />}>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/biomedical-landing" element={<BioMedical />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<DemoSchedule />} />
            <Route path="/support" element={<Support />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/termsAndService" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            <Route path="/assessment-list" element={<AssessmentList />} />
            <Route path="/admin-assessment" element={<AdminAssessmentList />} />

            <Route
              path="/admin-assessment-list"
              element={<AdminAssessmentList />}
            />

            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route
              path="/take-assessment-list"
              element={<UserTakeAssessment />}
            />

            <Route
              path="/user-assessment-result"
              element={<UserAssessmentResult />}
            />
            <Route
              path="/admin-view-assessment"
              element={<AdminViewAssessment />}
            />
            <Route path="/csv-upload" element={<CsvUpload />} />

            <Route path="/csv-uploading" element={<CsvUploading />} />

            <Route
              path="/csv-uploading-complete"
              element={<CsvUploadComplete />}
            />

            <Route path="/setting" element={<AdminSetting />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/employee-profile" element={<EmployeeProfile />} />
            <Route path="/admin-csv-upload" element={<AdminCSVUpload />} />
            <Route
              path="/user-assessment-completed"
              element={<UserAssessmentListCompleted />}
            />
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
          </Route>

          <Route element={<UiLayout />}>
            {/* <Route path="/assessment" element={<Assessment />} />  */}
            <Route path="/ui" element={200} />
          </Route>

          <Route element={<DashboardLayout />}>
            <Route path="/assessment" element={<Assessment />} />
          </Route>
        </Routes>

        {/* <UserProfile /> */}
        {/* <UiLayout> */}
        {/* ALL APP PAGES SHOULD BE ROUTED WITH THIS LAYOUT COMPONENET */}
        {/* </UiLayout> */}
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
