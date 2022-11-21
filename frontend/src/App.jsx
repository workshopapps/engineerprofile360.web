import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles/globalStyles";
import MainLayout from "./main/Layouts/MainLayout";

import Contact from "./main/pages/Contact";
import { About } from "./main/pages";
import Home from "./main/pages/Home";
import Confirmed from "./main/components/demo-pages-components/components/Confirmed";
import ScheduleDemo from "./main/components/demo-pages-components/components/ScheduleDemo";
import Support from "./ui/pages/UserSupport";
import Terms from "./ui/pages/TermsAndService/TermsAndService";

import UserProfile from "./ui/pages/user-profile/UserProfile";
import Register from "./main/components/sections/adminSignup/AdminSignup";
import Login from "./main/components/sections/adminLogin/AdminLogin";
import Blog from "./main/pages/Blog";
import AssessmentList from "./main/components/sections/userAssessmentList/AssessmentList";
import UserTakeAssessment from "./main/components/sections/userTakeAssessment/UserTakeAssessment";
import AdminSettings from "./ui/pages/admin-settings/AdminSettings";
import Privacy from "./main/pages/Privacy/privacy";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/demo" element={<ScheduleDemo />} />
          <Route path="/confirm-demo" element={<Confirmed />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/assessment-list" element={<AssessmentList />} />
          <Route
            path="/take-assessment-list"
            element={<UserTakeAssessment />}
          />
          <Route path="/setting" element={<AdminSettings />} />1
          <Route path="/privacy-policy" element={<Privacy />} />1
        </Routes>
      </MainLayout>

      {/* <UserProfile /> */}
      {/* <UiLayout> */}
      {/* ALL APP PAGES SHOULD BE ROUTED WITH THIS LAYOUT COMPONENET */}
      {/* </UiLayout> */}
    </ThemeProvider>
  );
};
export default App;
