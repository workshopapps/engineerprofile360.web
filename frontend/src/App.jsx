import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles/globalStyles";
import MainLayout from "./main/Layouts/Main/MainLayout";

import Contact from "./main/pages/Contact";
import { AdminAuthLayout } from "./main/components";
import {
  Home,
  About,
  BioMedical,
  AdminSignup,
  AdminLogin,
  ResetPassword,
  ResetPasswordSuccess,
  VerifyEmail,
} from "./main/pages";
import Confirmed from "./main/components/demo-pages-components/components/Confirmed";
import ScheduleDemo from "./main/components/demo-pages-components/components/ScheduleDemo";
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
import HelpCenter from "../src/main/pages/HelpCenter";
import { User2FA } from "./ui/pages/userSignUp/User2FA";
import { DashboardLayout } from "./main/Layouts/Dashboard/DashboardLayout";
import AdminViewAssessment from "./ui/pages/admin-view-assessment/AdminViewAssessment";
import AdminOverallPerformance from "./ui/pages/admin-overall-performance/AdminOverallPerformance";
const App = () => {
  return (
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
          <Route path="/demo" element={<ScheduleDemo />} />
          <Route path="/confirm-demo" element={<Confirmed />} />
          <Route path="/support" element={<Support />} />
          <Route path="/termsAndService" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/assessment-list" element={<AssessmentList />} />
          <Route path="/admin-assessment" element={<AdminAssessmentList />} />

          <Route
            path="/admin-assessment-list"
            element={<AdminAssessmentList />}
          />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route
            path="/take-assessment-list"
            element={<UserTakeAssessment />}
          />
          <Route
            path="/admin-view-assessment"
            element={<AdminViewAssessment />}
          />

          <Route path="/setting" element={<AdminSetting />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/employee-profile" element={<EmployeeProfile />} />
        </Route>

        <Route element={<AdminAuthLayout />}>
          <Route path="/register" element={<AdminSignup />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/reset-password-success"
            element={<ResetPasswordSuccess />}
          />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Route>
        <Route
          path="/overallperformance"
          element={<AdminOverallPerformance />}
        />
        <Route element={<DashboardLayout />}></Route>
      </Routes>
      {/* Protected Routes */}

      {/* <UserProfile /> */}
      {/* <UiLayout> */}
      {/* ALL APP PAGES SHOULD BE ROUTED WITH THIS LAYOUT COMPONENET */}
      {/* </UiLayout> */}
    </ThemeProvider>
  );
};
export default App;
